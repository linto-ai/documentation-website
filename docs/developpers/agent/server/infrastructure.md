---
sidebar_label: Prepare infrastructure
sidebar_position: 1
---
# Plan and setup the infrastructure for tests or production

Learn how to prepare your **server infrastructure** to deploy **LinTO**
## Prerequistes

* Docker CE with Docker Engine > 1.12 for swarm mode availability. See : https://docs.docker.com/engine/installation/,  https://docs.docker.com/compose/install/.
* Debian (or Ubuntu hosts or VM hosts)
* Private network (VLAN) established and fuly routed between hosts.
* Public network interface on at least one of the cluster's nodes for ingress traffic

:::info Note
Our service stack relies on [Docker Swarm Mode](https://docs.docker.com/glossary/?term=swarm%20mode) for orchestrating containers and services. This tutorial treats your infrastructure as **a multi-host cluster**. If you deploy the stack in a mono-host Docker Swarm Cluster (wich is obviously not recommanded for production) make sure to read the 
:::


## Docker swarm mode

* 1 - The first machine of your cluster will become a __docker swarm manager node__. 

```bash
docker swarm init --advertise-addr <My private IP for cluster communication>
```

* 2 - Get a join token for subsequent worker nodes

```bash
docker swarm join-token worker
```

* 3 - This command outputs something like :

```bash
docker swarm join --token SWMTKN-1-xxx<Manager IP for cluster communication>:<Some TCP port used by docker swarm>
```
--> Use this command on every other machine that needs to join your docker swarm cluster

* 4 - List nodes in the cluster hostname Private Ip for nodes communication

```bash
for NODE in $(docker node ls --format '{{.Hostname}}');
do echo -e "$(docker node inspect --format '{{.Status.Addr}}' "${NODE}") "${NODE}""; done
```

* 5 - Put the corresponding pairs in /etc/hosts of every cluster node to enable domain name resolution between cluster's nodes.

## Shared storage

A good design pattern for highly available applications is to deploy the application as a container on a Docker Swarm cluster with persistent storage provided by GlusterFS. GlusterFS is a fast shared filesystem that can keep the container volume in sync between multiple nodes of the Docker Swarm cluster.  In the event a node dies, Docker Swarm will spin up the container on another node. GlusterFS will ensure the container has access to the same data when it comes up.

In our case, [Platform-Service-Manager](post_install/service-manager/stt_manager_how2use) will need read / write access on a shared folder made available on every node of your cluster for AI models used by transcription services. In this tutorial we will use a GlusterFS share folder.


### Create directories for GlusterFS storage

Setup the glusterFS directories where the gluster “bricks” (replicated volume) will reside. 

```
mkdir -p ~/linto_shared/data
mkdir -p ~/linto_shared/data
... and so on on every node of your swarm cluster
```

__Note for single Machine Deployement:__ If you do not intent to add other machines to the cluster later, you can stop right here and jump to [Server Installation](stack_deploy).

### Install Gluster FS

Here, we use [GLusterFS v7.0](https://docs.gluster.org/en/latest/Install-Guide/Install/)

Run this on every cluster's nodes

```
wget -O - https://download.gluster.org/pub/gluster/glusterfs/7/rsa.pub | sudo apt-key add -
DEBID=$(grep 'VERSION_ID=' /etc/os-release | cut -d '=' -f 2 | tr -d '"')
DEBVER=$(grep 'VERSION=' /etc/os-release | grep -Eo '[a-z]+')
DEBARCH=$(dpkg --print-architecture)
echo deb https://download.gluster.org/pub/gluster/glusterfs/LATEST/Debian/${DEBID}/${DEBARCH}/apt ${DEBVER} main | sudo tee --append /etc/apt/sources.list.d/gluster.list
sudo apt-get install && sudo apt-get install glusterfs-server -y
sudo systemctl enable --now glusterd
```

### Peer Gluster FS nodes

On the swarm cluster manager node, supposedly the first "brick" of the distributed and replicated file storage, run :

```
sudo gluster peer probe <HostName-X for node X of the cluster>
```
--> Use this command for every other cluster's nodes hostnames.

### Setup the replicated volume

```bash
sudo gluster volume create linto_shared \
replica <Number of cluster nodes> \
<First Node HostName>:<corresponding folder> \
<Second NodeHostName>:<corresponding folder> \
... (etc)
force
```
--> Use "force" directive if you want to use some folder inside the node root folder.

### Start the replicated volume

```bash
sudo gluster volume start linto_shared
```

### Prepare mount points for the volume on each node

```bash
mkdir ~/linto_shared_mount
```
This is where the services will access the filesystem provided by the Gluster FS volume 

### Prepare automount shared volume on each node (effective after reboot)

:::warning Use this wisely and don't break your /etc/fstab
command will look like :
```bash
echo 'localhost:/linto_shared <Local mount point> glusterfs defaults,_netdev,backupvolfile-server=localhost 0 0' | sudo tee --append /etc/fstab
mount -a
```
:::
### Mount your volume on each node

```bash
sudo mount.glusterfs localhost:/shared_linto <Local mount point>
```

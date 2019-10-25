# Plan and setup the infrastructure for production
## Prerequistes

* Docker > 17 for swarm mode availability https://docs.docker.com/engine/installation/, and to https://docs.docker.com/compose/install/.
* Debian like (9/10 or Ubuntu hosts or VM hosts)
* Private network (VLAN) established and fuly routed between hosts.

__Note__ : Our service stack relies on [Docker Swarm Mode](https://docs.docker.com/glossary/?term=swarm%20mode) for orchestrating containers and services. This tutorial treats your infrastructure as a multi-host cluster. If you deploy the stack in a mono-host Docker Swarm Cluster (wich is obviously not recommanded for production) just adapt the following guide for your needs... That's maybe how you want to deploy it for your home usage with our Maker's Raspberry Pi Client LinTO implementation.

## Docker swarm mode

* 1 - The first machine of your cluster will become a __docker swarm manager node__. 

```
docker swarm init --advertise-addr <My private IP for cluster communication>
```

* 2 - Get a join token for subsequent worker nodes

```
docker swarm join-token worker
```

* 3 - This command outputs something like :

```
docker swarm join --token SWMTKN-1-xxx<Manager IP for cluster communication>:<Some TCP port used by docker swarm>
```
--> Use this command on every other machine that needs to join your docker swarm cluster

* 4 - List nodes in the cluster <hostname> <Private Ip for nodes communication>

```
for NODE in $(docker node ls --format '{{.Hostname}}');
do echo -e "$(docker node inspect --format '{{.Status.Addr}}' "${NODE}") "${NODE}""; done
```

* 5 - Put the corresponding pairs in /etc/hosts of every cluster node to enable domain name resolution between cluster's nodes.

## Shared storage

A good design pattern for highly available applications is to deploy the application as a container on a Docker Swarm cluster with persistent storage provided by GlusterFS. GlusterFS is a fast shared filesystem that can keep the container volume in sync between multiple nodes of the Docker Swarm cluster.  In the event a node dies, Docker Swarm will spin up the container on another node. GlusterFS will ensure the container has access to the same data when it comes up.

In our case, [LinTO-Platform-STT-Service-Manager service]() will need read / write access on a shared folder made available on every node of your cluster for AI models used by the [LinTO-STT-Services]. In this tutorial we will use a GlusterFS share folder

### Create directories for GlusterFS storage

Setup the glusterFS directories where the gluster “bricks” (replicated volume) will reside. 

```
mkdir -p ~/linto_shared/data
mkdir -p ~/linto_shared/data
... and so on on every node of your swarm cluster
```
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
```

### Peer Gluster FS nodes

On the swarm cluster manager node, supposedly the first "brick" of the distributed and replicated file storage, run :

```
sudo gluster peer probe <HostName-X for node X of the cluster>
```
--> USe this command for every other cluster's nodes hostnames.

### Setup the replicated volume

```
sudo volume create linto_shared \
replica <Number of cluster nodes> \
<First Node HostName>:<corresponding folder> \
<Second NodeHostName>:<corresponding folder> \
... (etc)
force
```
--> Use "force" directive if you want to use some folder inside the node root folded.

### Start the replicated volume

```
sudo gluster volume start linto_shared
```

### Prepare mount points for the volume on each node

```
mkdir ~/linto_shared_mount
```
--> This is where the services will access the filesystem provided by the Gluster FS volume 

### Prepare utomount shared volume on each node (effective after reboot or mount -a)

__USE THIS WISELY WITH THE CORRECT MOUNT POINTS__, command will look like :
```
echo 'localhost:/linto_shared <Local mount point> glusterfs defaults,_netdev,backupvolfile-server=localhost 0 0' | sudo tee --append /etc/fstab
```

### Mount your volume on each node

```
sudo mount.glusterfs localhost:/shared_linto <Local mount point>
```

### Final steps

You're done. Treat yourself with a LinTO tutti fruity blue gum and jump to [Service Installation]()

# Using Ansible

Soon !
const axios = require("axios")
const fs = require('fs')

async function start() {
  let md
  let allRepos
  let page1 = await axios.get('https://api.github.com/orgs/linto-ai/repos?page=1')
  let page2 = await axios.get('https://api.github.com/orgs/linto-ai/repos?page=2')
  allRepos = [...page1.data, ...page2.data]
  //Order
  allRepos.sort(function (a, b) {
    return (a.stargazers_count > b.stargazers_count) ? -1 : (a.stargazers_count < b.stargazers_count) ? 1 : 0;
  })
  md = `# Github source repositories\n `
  md += `[LinTO's Github](https://github.com/lintoai) - Repositories overview\n`
  md += `This Listing was generated using [GitHub API](https://api.github.com/users/linto-ai/repos) on ${new Date().toDateString()}\n`
  md += `\n| Name | Description | Topics | Language | Stars |\n`
  md += `|:-|:-|:-|:-|:-|\n`
  let stars = 0
  let followers = 0
  let forks = 0
  for (repo of allRepos) {
    md += `|[${repo.name}](${repo.html_url})|${repo.description}|${repo.topics}|${repo.language}|${repo.stargazers_count}|\n`
    stars += repo.stargazers_count
    forks += repo.forks_count
    followers += repo.watchers_count
  }
  md += `\n__Popularity__ : We currently totalize __${stars}__ GitHub stars and __${forks}__ forks \n`
  try {
    const data = fs.writeFileSync('./docs/external/repos.md', md)
  } catch (err) {
    console.error(err)
  }
}

async function docker() {
  let md
  //get repos
  let repos = await axios.get('https://hub.docker.com/v2/repositories/lintoai/?page_size=100')
  //get tags for repo
  md = `# Docker images\n `
  md += `[LinTO's Docker Hub](https://hub.docker.com/u/lintoai) - Available Docker images overview\n`
  md += `This Listing was generated using [DockerHub API](https://hub.docker.com/u/lintoai) on ${new Date().toDateString()}\n`
  md += `\n| Name | Tags | Pull count | last Updated |\n`
  md += `|:-|:-|:-|:-|\n`
  repos.data.results.sort(function (a, b) {
    return (a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0;
  })

  for (const elem of repos.data.results) {
    elem.url = `https://hub.docker.com/r/lintoai/${elem.name}`
    elem.last_updated = new Date(elem.last_updated).toDateString()
    let tags = await axios.get(`https://hub.docker.com/v2/repositories/lintoai/${elem.name}/tags/?page_size=100`)
    tags = tags.data.results
    for (tag of tags) {
      elem.tags ? (elem.tags += ', ' + tag.name) : (elem.tags = '' + tag.name)
    }
    md += `|[${elem.name}](${elem.url})|${elem.tags}|${elem.pull_count}|${elem.last_updated}|\n`
  }
  try {
    const data = fs.writeFileSync('./docs/external/docker.md', md)
  } catch (err) {
    console.error(err)
  }
}

start()
docker()

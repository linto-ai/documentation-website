const axios = require("axios")
const fs = require('fs')
let allRepos
let md


async function start() {
    let page1 = await axios.get('https://api.github.com/orgs/linto-ai/repos?page=1')
    let page2 = await axios.get('https://api.github.com/orgs/linto-ai/repos?page=2')
    allRepos = [...page1.data,...page2.data]
    //Order
    allRepos.sort(function(a, b) {
        var textA = a.name.toUpperCase();
        var textB = b.name.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    })
    md = `# LinTO project Github repositories\n `
    md += `This Listing is generated using [GitHub API](https://api.github.com/users/linto-ai/repos)\n`
    md +=  `\n| Name | Description | Language | Stars |\n`
    md += `|:-|:-|:-|:-|\n`
    let stars = 0
    let followers = 0
    let forks = 0
    for (repo of allRepos){
        md += `|[${repo.name}](${repo.html_url})|${repo.description}|${repo.language}|${repo.stargazers_count}|\n`
    
        stars += repo.stargazers_count
        forks += repo.forks_count
        followers += repo.watchers_count
    }
    md += `\n__Popularity__ : We currently totalize __${stars}__ GitHub stars and __${forks}__ forks \n`
    try {
        const data = fs.writeFileSync('./repos.md', md)
      } catch (err) {
        console.error(err)
      }
}

start()

const token =  '878f1fceed9309dce2e00ec2e8651989ca316f9f';


function getIssues() {
}

function showIssues(json) {
}

function createIssue() {
}

function showResults(json) {
}

function showForkedRepo(repo) {
  $('#results').innerHTML = repo
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch('api.github.com/repos/' + repo,{
    method: 'post',
    headers: {
      Authorization: `token ${token}`
    }
  }).then(response => response.json())
    .then(repo => showForkedRepo(repo))
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}

// fetch('https://api.github.com/user/repos', {
//   headers: {
//     Authorization: `token ${token}`
//   }
// }).then(res => res.json()).then(json => console.log(json));

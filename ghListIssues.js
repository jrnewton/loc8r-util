/* Print list of open issues using GitHub API/octokit library */

'use strict';
const { Octokit } = require("@octokit/core");

//Create a personal access token at https://github.com/settings/tokens/new?scopes=repo
//Then put it into gsauth.js: module.exports.key = 'my secret key`
const auth = require('./ghauth');

const octokit = new Octokit( { auth: auth.key } );

const requestUrl = "GET /repos/:org/meanwifi/issues";
console.log(`Making request ${requestUrl}`);
octokit.request(requestUrl, {
  org: "rocketnewton",
  type: "all",
}).then( (response) => { 
  console.log(`Status: ${response.status}`);
  console.log(`${response.data.length} issues found.`);
  response.data.forEach((item) => { 
    console.log(JSON.stringify({title: item.title, number: item.number}));
  });
}).catch( (error) => { 
  console.log(`Failed: ${error}`);
});

/* Print list of open issues using GitHub API/octokit library */

'use strict';
const { Octokit } = require("@octokit/core");

//Create a personal access token at https://github.com/settings/tokens/new?scopes=repo
//Then put it into gsauth.js: module.exports.key = 'my secret key`
const auth = require('./ghauth');

const octokit = new Octokit( { auth: auth.key } );

/*
const requestUrl = "GET /repos/:user/:repo/issues";
console.log(`Making request ${requestUrl}`);
octokit.request(requestUrl, {
  user: "jrnewton",
  repo: "meanwifi",
  type: "all",
}).then( (response) => { 
  console.log(`Status: ${response.status}`);
  console.log(`${response.data.length} issues found.`);

  // (aysnc function loop(){ 
  //   console.log('iterating issues...');
  //   //let p; 
  //   for (let item of response.data) { 
  //     await getIssueDetails(item);
  //   }
  //   // p.then( x => { 
  //   //   console.log('done iterating.');
  //   // });
  //   console.log('done iterating.');
  // })();

}).catch( (error) => { 
  console.log(`Failed: ${error}`);
});
*/ 

async function getIssueDetails(item) { 
  const requestUrl = "GET /repos/:user/:repo/issues/:number";
  console.log(`fetching ${item.number}`);
  let result = octokit.request(requestUrl, {
    user: "jrnewton",
    repo: "meanwifi",
    number: item.number
  });
  let response = await result.catch(reason => { console.log(reason); });
  return new Promise( (resolve) => 
    setTimeout(new function() { 
      console.log(`done processing ${response.data.number}`); 
      resolve();
    }, 1000)
  );
}

getIssueDetails({number: 12});
getIssueDetails({number: 13});
getIssueDetails({number: 14});

// Axios as alternative to Fetch Api

////challenge 1
//let url = axios("https://pokeapi.co/api/v2/pokemon/pikachu");
//console.log(url);
//
////challenge 2,3
//url.then(response => {
//    console.log(response.data)
//});
//url.catch(error => {
//    console.log(error);
//});

//task 1
function getUser(username) {
    return axios(`https://api.github.com/users/${username}`).then(response => response.data);
}

getUser("oliverjam")
    .then(console.log)
    .catch(console.error);

//task 2

 const getRepos = user => axios(user.repos_url).then(response => response.data);
 
 getUser("oliverjam")
 .then(getRepos)
 .then(console.log)
 .catch(console.error);




// Ajax

//import XMLHttpRequest from 'xhr2';

function Get(url){
    return new Promise(function(resolve, reject){

        let callAjax = new XMLHttpRequest();

        callAjax.open("GET", url );

        callAjax.onload = function() {
            if(callAjax.status == 200) return resolve(callAjax.response)
            
            reject(Error(callAjax.status));
        };

        callAjax.onerror = function(err){
            reject(err);
        };

        callAjax.send();

    });
}

function getUserInfo(username){
    return Get("https://api.github.com/users/" + username);
}

function getRepos(){
    return Get(repos_url)
}

getUserInfo("stylevzero").then(response => {
    let responseJSON = JSON.parse(response);
    
    console.log(responseJSON.repos_url);

    getRepos(responseJSON.repos_url).then( respos => { console.log(respos)});

}).catch(console.log);
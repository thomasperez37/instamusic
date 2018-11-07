<<<<<<< Updated upstream
var database = firebase.database();
var databaseRef = database.ref("/");



function callWithSnapshot(callback) {
  databaseRef.once('value').then(function(snapshot) { 
    // Use .val() to get the data from the snapshot
    var databaseValues = snapshot.val();
    return callback(databaseValues);
  });
=======
export function userInfo(keys, data) {
  for(var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var user = data[key];
    console.log(key);
    console.log(user.name);
    console.log(user.email);
    console.log(user.pass);
    console.log('#########');
  }
}

export function renderUser(data) { // this function just appends the data from databaseValues to the view
  $("body").append(data); // append data to the view
} 




const userInfo = (keys, data) => { 
    for(let i = 0; i < keys.length; i++) { 
        let key = keys[i]; 
        let user = data[key]; 

        console.log(key);
        console.log(user.name);
        console.log(user.email);
        console.log(user.pass);
        console.log('#########');
    }
}


const renderUser = (data) => { // this function just appends the data from databaseValues to the view
    $("body").append(data); // append data to the view 
>>>>>>> Stashed changes
}
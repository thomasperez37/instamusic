var firebaseRoot = "https://je-twitter-clone.firebase.com/twitterClone/", // points to the data in the database under a root branch
    usersRef = new Firebase(firebaseRoot + 'users'); // makes a reference to the 'users' node in the twitterClone database

// this get's the value of the 'users' node
usersRef.on('value').then((snapshot) => {
    const databaseUsers = snapshot.val(); // gives you the json of the node in the database that you are referring to
    //  below this line, you do what you want with the data
    // ex: databaseUsers.user1.name = billy 
});


const database = firebase.database();
const databaseRef = database.ref("/");
// or 
const databaseRef = firebase.database().ref("/");

databaseRef.on("value").then((snapshot) => {
    const databaseValues = snapshot.val();
    
});


https://accounts.spotify.com/authorize?client_id=d9ac46f9a2c54349986bd27a13bdcdf0&response_type=code&redirect_uri=https%3A%2F%2Fexample.com%2Fcallback&scope=user-read-private%20user-read-email&state=34fFs29kd09
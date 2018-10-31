// Write your JS here
import {renderUser, userInfo} from './script2.js';


var database = firebase.database();
var databaseRef = database.ref("/");





databaseRef.once('value').then(function(snapshot) { 
    // Use .val() to get the data from the snapshot
    const databaseValues = snapshot.val();
    renderUser(databaseValues.user1.name);
    var keys = Object.keys(databaseValues.users)
    userInfo(keys,databaseValues.users);
});

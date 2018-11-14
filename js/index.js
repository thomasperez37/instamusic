// Write your JS here
import {renderUser} from './script2.js';

const database = firebase.database();
const databaseRef = database.ref("/");

databaseRef.once('value').then((snapshot) => { 
    // "snapshot" is like the json of the database
    const databaseValues = snapshot.val(); // Use .val() to get the data from the snapshot
    renderUser(databaseValues.user1.name); // billy 

    // userInfo function code
    const keys = Object.keys(databaseValues.users) // points to the 'users' node in the database
    userInfo(keys, databaseValues.users); 
});

// Write your JS here
import {renderUser} from './modules.js';

const database = firebase.database();
const databaseRef = database.ref("/");

databaseRef.once('value').then((snapshot) => { 
    // "snapshot" is like the json of the database
    const databaseValues = snapshot.val(); // Use .val() to get the data from the snapshot
    
});


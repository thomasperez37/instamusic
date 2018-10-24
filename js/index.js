// Write your JS here
import test from './script2.js';

var database = firebase.database();
var databaseRef = database.ref("/");

databaseRef.once('value').then(function(snapshot) { 
    // Use .val() to get the data from the snapshot
    const databaseValues = snapshot.val();
    console.log(databaseValues);
});

console.log('test');

test();

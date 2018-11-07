var database = firebase.database();
var databaseRef = database.ref("/");



function callWithSnapshot(callback) {
  databaseRef.once('value').then(function(snapshot) { 
    // Use .val() to get the data from the snapshot
    var databaseValues = snapshot.val();
    return callback(databaseValues);
  });
}
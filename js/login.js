$('.message a').click(function () {
    $('form').animate({
        height: "toggle",
        opacity: "toggle"
    }, "slow");
});
$('#sign-up').click(function(){

});

function signUp(){
    var database = firebase.database();
    var usersRef = database.ref("/instamusic-cd559/users");
    
    //var newUser = {}
    //usersRef.update()
}
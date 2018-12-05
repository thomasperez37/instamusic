$('.message a').click(function () {
    $('form').animate({
        height: "toggle",
        opacity: "toggle"
    }, "slow");
});
<<<<<<< HEAD

// $(".show_password").click(() => { 
//     var x = $(".passwordInput");
//     if (x.type === "password") {
//         x.type = "text";
//     } else {
//         x.type = "password";
//     }
// });
=======
$('#sign-up').click(function(){

});

function signUp(){
    var database = firebase.database();
    var usersRef = database.ref("/instamusic-cd559/users");
    
    //var newUser = {}
    //usersRef.update()
}
>>>>>>> 1c28cfe654fc1cf84f2010900e6dbad1924ed2f3

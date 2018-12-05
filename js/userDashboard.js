// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

/* global $ */

$(document).ready(function () {

    $("#srch-term").keyup(function (event) {
        if (event.keyCode === 13) {
            $("#submit").click();
        }
    });


    $("#submit").click(function () {
        $(".gallery").empty();
        var userInput = $('#srch-term').val();
        var path = "/v1/gifs/search";
        var url = "https://api.giphy.com" + path + "?q=" + userInput.toLowerCase() + "&api_key=dc6zaTOxFJmzC";
        $.ajax({
            url: url,
            method: "GET",
            success: function (response) {
                $(".giphyTitle").html("<h1 id='giphyTitle'>" + userInput.toLowerCase() + "</h1>");
                for (var i = 0; i < response.data.length; i++) {
                    $('.gallery').append(
                        '<img data-toggle="modal" data-target="#modal-' + i + '" class="col-md-3 giphy" src="' + response.data[i].images.fixed_width.url + '">\
                        <div class="modal" id="modal-' + i + '" tabindex="-1" aria-labelledby="myModalLabel">\
                            <div class="modal-dialog">\
                                <div class="modal-content">\
                                    <div class="modal-header">\
                                 <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\
                                 <h4 class="modal-title" id="myModalLabel">' + response.data[i].title + '</h4>\
                             </div>\
                             <div class="modal-body">\
                                 <img class="modalImage" src="' + response.data[i].images.fixed_width.url + '">\
                                 <div class="gif_description">\
                                     <p>Uploaded: ' + response.data[i].import_datetime + '</p>\
                                      <p>Rating: ' + response.data[i].rating.toUpperCase() + '</p>\
                                     <p id= " + i + ">GIF Link: ' + response.data[i].images.fixed_width.url + '</p>\
                                 </div>\
                                 <div id="share-buttons">\
                                    <button id="giphyBtnNum-' + i + '" class="btn btn-primary giphySharingBtn">Add Giphy to Sharing List</button>\
                                 </div>\
                             </div>\
                         </div>\
                     </div>\
                  </div>'
                    );
                    // console.log(response.data[i].title);
                }
                 const giphyArray = [];
                 $(".giphySharingBtn").click((event) => {
                     console.log("Event", event);
                     var idx = $(event.currentTarget).attr('id').split("-")[1];
                     let giphy = response.data[idx].images.fixed_width.url;
                     giphyArray.push(giphy);
                     console.log(giphyArray);

                     // push to database code
                     let allUrls;
                     const databaseRef = firebase.database().ref("/links");
                     databaseRef.once("value", (snapshot) => {
                         const databaseValues = snapshot.val();
                         allUrls = Object.values(databaseValues);
                     }).then(() => {
                         if (!allUrls.includes(giphy)) {
                             databaseRef.push(giphy);
                         } else {
                             window.alert("This Giphy is already in the list, please choose another one");
                         }

                     })
                     console.log("Database Ref: ", databaseRef, "Urls", allUrls);
                 });
                $("footer").css("margin-top", 100);
            },
        });
    });

    // get rid of this function as there is no longer a randomizer button for the giphys, but if you want you can make a randomizer btn for the songs based on how the api works
    $("#randomizer").click(function () { 
        $(".gallery").empty();
        var path = "/v1/gifs/random";
        var url = "https://api.giphy.com" + path + "?q=&api_key=dc6zaTOxFJmzC";
        $.ajax({
            url: url,
            method: "GET",
            success: function (response) {
                var gifUrl = response.data.images.fixed_width.url;
                $('.gallery').html(
                    '<img class="col-md-3 random_image" src=' + gifUrl + '>\
                     <div class="gif_description">\
                         <p>Uploaded: ' + gifUrl + '</p>\
                         <p>Dimensions: ' + response.data.images.source.width + " x " + response.data.images.source.height + '</p>\
                         <p>GIF Link: ' + gifUrl + '</p>\
                         <div id="share-buttons">\
                             <a href="mailto:?Subject=Cool Gify&amp;Body=I%20found%20this%20gif%20on%20giffinder%20  ' + gifUrl + '">\
                                 <img src="https://simplesharebuttons.com/images/somacro/email.png" alt="Email" />\
                             </a>\
                             <a href="http://www.facebook.com/sharer.php?u=' + gifUrl + '" target="_blank">\
                                 <img src="https://simplesharebuttons.com/images/somacro/facebook.png" alt="Facebook" />\
                             </a>\
                             <a href="https://plus.google.com/share?url=' + gifUrl + '" target="_blank">\
                                 <img src="https://simplesharebuttons.com/images/somacro/google.png" alt="Google" />\
                             </a>\
                             <a href="http://www.linkedin.com/shareArticle?mini=true&amp;url=' + gifUrl + '" target="_blank">\
                                 <img src="https://simplesharebuttons.com/images/somacro/linkedin.png" alt="LinkedIn" />\
                             </a>\
                             <a href="http://reddit.com/submit?url=' + gifUrl + ' &amp;title=Simple Share Buttons" target="_blank">\
                                 <img src="https://simplesharebuttons.com/images/somacro/reddit.png" alt="Reddit" />\
                             </a>\
                             <a href="https://twitter.com/share?url=' + gifUrl + '" target="_blank">\
                                 <img src="https://simplesharebuttons.com/images/somacro/twitter.png" alt="Twitter" />\
                             </a>\
                         </div>\
                     </div>'
                );
                $(".giphyTitle").html("<h1 id='giphyTitle'>" + response.data.title + "</h1>");
                $("footer").css("margin-top", 230);
            },
        });
    });
});


 //  <p>Share:</p>\
 //  <a href="mailto:?Subject=Cool Gify&amp;Body=I%20found%20this%20gif%20on%20giffinder%20  ' + response.data[i].images.fixed_width.url + '">\
 //      <img src="https://simplesharebuttons.com/images/somacro/email.png" alt="Email" />\
 //  </a>\
 //  <a href="http://www.facebook.com/sharer.php?u=' + response.data[i].images.fixed_width.url + '" target="_blank">\
 //      <img src="https://simplesharebuttons.com/images/somacro/facebook.png" alt="Facebook" />\
 //  </a>\
 //  <a href="https://plus.google.com/share?url=' + response.data[i].images.fixed_width.url + '" target="_blank">\
 //      <img src="https://simplesharebuttons.com/images/somacro/google.png" alt="Google" />\
 //  </a>\
 //  <a href="http://www.linkedin.com/shareArticle?mini=true&amp;url=' + response.data[i].images.fixed_width.url + '" target="_blank">\
 //      <img src="https://simplesharebuttons.com/images/somacro/linkedin.png" alt="LinkedIn" />\
 //  </a>\
 //  <a href="http://reddit.com/submit?url=' + response.data[i].images.fixed_width.url + ' &amp;title=Simple Share Buttons" target="_blank">\
 //      <img src="https://simplesharebuttons.com/images/somacro/reddit.png" alt="Reddit" />\
 //  </a>\
 //  <a href="https://twitter.com/share?url=' + response.data[i].images.fixed_width.url + '" target="_blank">\
 //      <img src="https://simplesharebuttons.com/images/somacro/twitter.png" alt="Twitter" />\
 //  </a>\
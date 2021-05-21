// test if .js file is connected (check with inspect on browser)
//console.log("test");

//add jQuery (google jQuery CDN)
//copy script from minified version
//paste in HTML file above js file link (line 10)

$(document).ready(function() {
    $(".trigger").hover(showImage);
});



function showImage() {
    console.log("test");
    $(".chive-image").toggleClass("show");
}


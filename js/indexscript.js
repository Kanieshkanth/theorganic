$(document).ready(function(){
    $("#main").load("main.html"); 
    $("#left").load("news.html"); 
  });
  
$(".slideshow > div:gt(0)").hide()
    setInterval(function() {
    $('.slideshow > div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('.slideshow ');
}, 3000);

function check() {
    var password = document.getElementById("rpassword").value;
    var confirmPassword = document.getElementById("rcpassword").value;
    if (password != confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }
    return true;
};


$(function(){
    $('#signup').on('click',function(e){
        $('.form1').css('display','none');
        $('.form2').css('display','inline');
        e.preventDefault();
    });
});
$(function(){
    $('#login').on('click',function(e){
        $('.form2').css('display','none');
        $('.form1').css('display','inline');
        e.preventDefault();
    });
});

function myValid(){
    var name,email;
    var regmail=/^([A-Za-z0-9._]+)@([a-z]+).[a-z]{2,4}$/;

    name = document.getElementById("name").value;
    email = document.getElementById("email").value;

    if(name=="")
        txt="Enter the name";
    else if( !(email.match(regmail)) )
        txt="Check email id";
    else{
        txt = "SUBMISSION SUCCESSFULL!\n\nName: " + name + "\nEmail: " + email;
    }
}
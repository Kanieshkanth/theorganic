function registertwovalid(){

  console.log(name,email,password);

  var email = $('#email').val();
  var pwd = $('#rpassword').val();

  console.log('CAPTURE COMPLETE', name,email,password);

  $.getJSON('users.json', function(data) {
    //ADDING USER
    var addData = {
      [name]: {
        "name": name,
        "email": email,
        "password": password
      }
    };
    $.extend(true, data, addData);

    console.log('GET COMPLETE', addData, data);

    //SAVING EDITED DATA
    var newData = JSON.stringify(data);

    jQuery.post('../php/Signup.php', {
        newData: newData
    });
    console.log('SAVE COMPLETE');
    window.location = "index.html";
  });

}
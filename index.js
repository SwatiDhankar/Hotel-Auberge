
// read more //
function read() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("link");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }


// form validation //

// subscribe form

function validation() {
  var email = document.getElementById('email').value;

  if (email == "") {
    document.getElementById('email_address').innerHTML = 'This should not be empty!';
    return false;
}
else{
  document.getElementById('email_address').innerHTML = 'Subscribed';
}
};
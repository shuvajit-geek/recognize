function validate(){
    var un=document.forms["myForm"]["username"].value;
    var pw=document.forms["myForm"]["password"].value;

    if (un=="admin" && pw=="admin123"){
        window.location.href="home.html";
    }
    else{
        alert("Invalid Credantials!!");
    }
}
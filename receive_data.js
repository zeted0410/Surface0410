try {
    var { email, password } = JSON.parse(localStorage.getItem("user-info"));
    var isLoginned = 1;
} catch (error) {
    isLoginned = 0;
}
if(isLoginned == 1) {
    console.log("loginned");
    document.getElementById("button_signup").style.display="none";
    document.getElementById("button_login").style.display="none";
    document.getElementById("profile").innerHTML = "<button id='profile_button' class='profile_button'>"+email+"</button>"+"<img id='profile_image' class='profile_image' src='profile_image.png'>";
}
document.getElementById('profile_button').addEventListener('click', (event) => {
    const userEmail = {
        email: email,
        login: true
      }
    localStorage.setItem("user-email", JSON.stringify(userEmail))
    window.open("profile.html");
})
localStorage.removeItem("user-info");
console.log(email,password);
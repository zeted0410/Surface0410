
console.log(`hwl`);
var { email,login } = JSON.parse(localStorage.getItem("user-email"));
if(login) {
    console.log("loginned");
}
var words = email.split('@');
document.getElementById('background_profile_text').innerText = words[0];

let today = new Date();   

let hours = today.getHours(); // 시
let minutes = today.getMinutes();  // 분
var pm = false;

if(hours >= 12) {
    pm=true;
}
if(pm) {
    var pmhours = hours - 12;
    document.getElementById('background_profile_time').innerText = pmhours+":"+minutes+" PM";
} else {
    document.getElementById('background_profile_time').innerText = hours+":"+minutes+" AM";
}
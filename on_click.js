document.getElementById('button_login').addEventListener('click', (event) => {
    window.open("login.html");
})
document.getElementById('button_signup').addEventListener('click', (event) => {
    window.open("signup.html");
})
let isMouseHover = false
let banner = document.getElementById("cr_banner");
let test = document.getElementById("button2");
banner.addEventListener("mouseleave", function (event) {
  isMouseHover = false
  console.log(isMouseHover)
  test.style.cssText = 'transform: rotate(80deg);position:absolute; z-index: 4; width:70px; height:70px; left:-300px; top:800px; transition: all 2000ms cubic-bezier(.23, 1, 0.32, 1);';
}, false);
banner.addEventListener("mouseover", function (event) {
  isMouseHover = true
  console.log(isMouseHover)
  test.style.cssText = 'transform: rotate(0deg); position:absolute; z-index: 4; width:70px; height:70px; left:calc(0px + calc(calc(60vw - 60px) / 2)); top:800px; transition: all 2000ms cubic-bezier(.23, 1, 0.32, 1);';
}, false);
test.addEventListener("mouseover", function (event) {
    isMouseHover = true
    console.log(isMouseHover)
    test.style.cssText = 'transform: rotate(0deg); position:absolute; z-index: 4; width:70px; height:70px; left:calc(0px + calc(calc(60vw - 60px) / 2)); top:800px; transition: all 2000ms cubic-bezier(.23, 1, 0.32, 1);';
  }, false);
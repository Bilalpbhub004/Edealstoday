let cookie_box = document.getElementsByClassName("cookie-alert")[0]


document.addEventListener("DOMContentLoaded",()=>{
    setTimeout(() => {
        cookie_box.classList.add("show_cookie")
    }, 1000);
})
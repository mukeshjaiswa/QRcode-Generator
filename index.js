let text = document.querySelector(".input");
let btn = document.querySelector("button")
let img = document.querySelector("img")

btn.addEventListener('click', () => {
    if (text.value === '') {
        alert("Please enter text or url to generater qr")
    }
    else{
        img.style.display="block"
        const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(text.value)}&size=200x200`;
img.src=qrUrl;
text.value=''
    }
})

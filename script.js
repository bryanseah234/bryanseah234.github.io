function me() {
    console.log('hello@hong-yi.me')
}

function randompfp() {
    let img = document.getElementById("image")
    img.src = "https://avatars.githubusercontent.com/u/" + Math.floor(Math.random() * 100000000);
}
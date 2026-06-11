
// let re = document.querySelector("#homebutton");

// re.addEventListener("click"), (dets) => {
//     //     video.src = "hello.mp4";
//     //     body.style.backgroundColor = "black";
//     // console.log(dets);
//     // re.style.backgroun
//     re.innerHTML = "black"
//     // dColor = "#111"

// }
let text = document.querySelector("#addremove");

let button = document.querySelector("#addbutton");
let n = 0;
let heart = document.querySelector("#heart");

let rode = document.querySelector("#rode");

let image = document.querySelector("#image");


let image1 = document.querySelector("#image1");
// let imageme = "#image1";
button.addEventListener("click", (click) => {



    if (n == 0) {


        // image.src = "heart.png";

        // image1.style.disply = "none";
        text.innerHTML = "ADD Friend";
        text.style.color = "#563";
        // text.style.backgroundColor = "rgb(95, 175, 236)";
        text.style.borderRadius = "6px";
        button.innerHTML = "Add Friend";
        button.style.backgroundColor = "green";
        button.style.borderRadius = "2px";
        image1.style.height = "10rem";
        image1.style.transition = "2s";
        text.style.transition = "2s";
        text.style.textTransform = "2s";

        text.style.backgroundColor = "none";

        rode.style.height = "20vh";
        rode.style.width = "10vw";
        rode.style.transition = "2s";
        setTimeout(() => {
            rode.style.height = "0vh";
            rode.style.width = "0vw";
            rode.style.transition = "2s";
        }, 2000)

        n = 1;

    }
    else {
        // image.src = "#image1";
        // image.src.style.width = "35vw";
        text.innerHTML = "Friend Addead";
        text.style.color = "#111";
        text.style.backgroundColor = "white";
        text.style.borderRadius = "2px";
        button.innerHTML = "Remove Friend";
        image1.style.transition = "2s";
        image.style.height = "-30rem";
        button.style.backgroundColor = "crimson";
        button.style.borderRadius = "2px";


        heart.style.height = "20vh";
        heart.style.width = "10vw";
        heart.style.transition = "2s";
        setTimeout(() => {
            heart.style.height = "0vh";
            heart.style.width = "0vw";
            heart.style.transition = "2s";
        }, 2000)
        n = 0;
    }

})
image.addEventListener("click"), () => {
    text.innerHTML = "click";
    heart.style.height = "20vh";
    heart.style.width = "10vw";
    heart.style.transition = "2s";
    // heart.style.opacity = "20%";
}


button.addEventListener("rightclick"), () => {
    if (image1 == none) {
            image.style.disply = "flex";
    }
   else if (image == none) {
        image1.style.disply = "flex";
    }
    else {
        image1.style.disply = "none";
    }
}

// setTimeout(()=>{
//     console.log("leon");
    
// },2000)
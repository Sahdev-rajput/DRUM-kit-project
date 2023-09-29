let ele = document.querySelectorAll(".drum");
var len = document.querySelectorAll(".drum ").length;
for (var i = 0; i < len; i++) {
    ele[i].addEventListener("click", function() {
        const buttoninnnerHTML = this.innerHTML;
        detectKeyboard(buttoninnnerHTML)
        addAnimation(buttoninnnerHTML)
    });
}

document.addEventListener("keypress",function(event)
{
    detectKeyboard(event.key)
    addAnimation(event.key)
})


function detectKeyboard(key)
{
    switch (key) {
        case "w":
            var tom1 = new Audio("/sounds/tom-1.mp3")
            tom1.play()
            break;
        case "a":
            var tom2 = new Audio("/sounds/tom-2.mp3")
            tom2.play()
            break;
        case "s":
            var tom3 = new Audio("/sounds/tom-3.mp3")
            tom3.play()
            break;
        case "d":
            var tom4 = new Audio("/sounds/tom-4.mp3")
            tom4.play()
            break;
        case "j":
            var snare = new Audio("/sounds/snare.mp3")
            snare.play()
            break;
        case "k":
            var kickbass = new Audio("/sounds/kick-bass.mp3")
            kickbass.play()
            break;
        case "l":
            var crash = new Audio("/sounds/crash.mp3")
            crash.play()
            break;

        default:
            console.log(key)
    }
}

function addAnimation(key)
{
   var activeElement=document.querySelector("."+key);
   activeElement.classList.add("pressed");
   setTimeout(function(){
    activeElement.classList.remove("pressed")
   },100)
}
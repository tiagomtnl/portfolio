// Transition animations

var myName = document.getElementById("myName");
var myRole = document.getElementById("myRole");

window.onload = function() {

    // Name & role
    TweenMax.from(myName, 1, {
        y: -15,
        ease: Back.easeOut        
    });
    TweenMax.to(myName, 1, {opacity: 1});

    TweenMax.from(myRole, 0.5, {
        x: -15,
        ease: Back.easeOut,
        delay: 0.1
    });
    TweenMax.to(myRole, 1, {opacity: 1});
    
}
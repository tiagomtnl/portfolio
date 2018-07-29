// Transition animations

var myName = document.getElementById("myName");
var myRole = document.getElementById("myRole");
var resumeLine = CSSRulePlugin.getRule("#work .text:first-child::before");

window.onload = function() {

    // Name & role
    TweenMax.from(myName, 1, {
        y: -25,
        ease: Back.easeOut
    });
    TweenMax.to(myName, 1, {opacity: 1});

    TweenMax.from(myRole, 0.5, {
        x: -25,
        ease: Back.easeOut
    });
    TweenMax.to(myRole, 1, {opacity: 1});

    // Resume
    TweenMax.to(resumeLine, 0.5, {
        width: '30px'
    });

    TweenMax.from('#work', 0.3, {
        y: -25
    });    
    TweenMax.to('#work', 0.3, {
        opacity: 1,
        ease: Back.easeOut
    });
}
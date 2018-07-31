// Transition animations

var myName = document.getElementById("myName");
var myRole = document.getElementById("myRole");
var resumeLine = CSSRulePlugin.getRule("#work .text:first-child::before");

// Name & role
TweenMax.from(myName, 1, {
    y: -35,
    ease: Back.easeOut,
    delay: 1
});
TweenMax.to(myName, 1, {opacity: 1, delay: 1});

TweenMax.from(myRole, 0.5, {
    x: -35,
    ease: Back.easeOut,
    delay: 1,
});
TweenMax.to(myRole, 1, {opacity: 1, delay: 1});

// Resume
TweenMax.to(resumeLine, 0.5, {
    width: '30px',
    delay: 1
});

TweenMax.from('#work', 0.3, {
    y: -25,
    delay: 1
});    
TweenMax.to('#work', 0.3, {
    opacity: 1,
    ease: Back.easeOut,
    delay: 1
});

// Social
TweenMax.staggerFrom('.social-item', 0.5, {
    opacity: 0,
    y: 100,
    scale: 3,
    delay: 1.2
}, 0.2);
TweenMax.staggerTo('.social-item', 0.5, {
    opacity: 1,
    delay: 1.2
}, 0.2);
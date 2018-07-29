// Transition animations

var myName = document.getElementById("myName");
var myRole = document.getElementById("myRole");
var resumeLine = CSSRulePlugin.getRule("#work .text:first-child::before");

window.onload = function () {

    // Name & role
    TweenMax.from(myName, 1, {
        y: -25,
        ease: Back.easeOut
    });
    TweenMax.to(myName, 1, { opacity: 1 });

    TweenMax.from(myRole, 0.5, {
        x: -25,
        ease: Back.easeOut
    });
    TweenMax.to(myRole, 1, { opacity: 1 });

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
};
// Console emoji message
var emojis = [["beer", "🍻🤝"]];
(function funConsole() {
    if (!window.console) return;

    emojis.forEach(function (emoji) {
        window.console[emoji[0]] = function () {

            var size = 1;
            if (arguments.length > 1) {
                size = [].pop.call(arguments);
            }

            var args = Array.prototype.slice.call(arguments).toString().split(',').join(',');
            console.log("%c" + args + " " + emoji[1], "font-size: " + size + "px");
        };
    });
})();
console.beer("Cheers, let's do business!", 22);
// ThreeJS waves on canvas
var SEPARATION = 5,
    AMOUNTX = 50,
    AMOUNTY = 50;
var container;
var camera, scene, renderer;
var particles,
    particle,
    count = 0;
var mouseX = 0,
    mouseY = 0;
var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

function init() {
    container = document.getElementById('intro');
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 10;
    scene = new THREE.Scene();
    particles = new Array();
    var PI2 = Math.PI * 2;
    var material = new THREE.SpriteCanvasMaterial({
        color: 0x555555,
        program: function (context) {
            context.beginPath();
            context.arc(0, 0, 0.4, 0, PI2, true);
            context.fill();
        }
    });
    var i = 0;
    for (var ix = 0; ix < AMOUNTX; ix++) {
        for (var iy = 0; iy < AMOUNTY; iy++) {
            particle = particles[i++] = new THREE.Sprite(material);
            particle.position.x = ix * SEPARATION - AMOUNTX * SEPARATION / 2;
            particle.position.z = iy * SEPARATION - AMOUNTY * SEPARATION / 2;
            scene.add(particle);
        }
    }
    renderer = new THREE.CanvasRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.append(renderer.domElement);

    document.addEventListener('mousemove', onDocumentMouseMove, true);
    // document.addEventListener( 'touchstart', onDocumentTouchStart, false );
    // document.addEventListener( 'touchmove', onDocumentTouchMove, false );

    window.addEventListener('resize', onWindowResize, false);
}
function onWindowResize() {
    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function onDocumentMouseMove(event) {
    mouseX = event.clientX - windowHalfX;
    mouseY = event.clientY - windowHalfY;
}

function onDocumentTouchStart(event) {
    if (event.touches.length === 1) {
        event.preventDefault();
        mouseX = event.touches[0].pageX - windowHalfX;
        mouseY = event.touches[0].pageY - windowHalfY;
    }
}

function onDocumentTouchMove(event) {
    if (event.touches.length === 1) {
        event.preventDefault();
        mouseX = event.touches[0].pageX - windowHalfX;
        mouseY = event.touches[0].pageY - windowHalfY;
    }
}

function animate() {
    requestAnimationFrame(animate);
    render();
}

function render() {
    camera.position.x += (mouseX - camera.position.x) * .02;
    camera.position.y += (-mouseY - camera.position.y) * .02;
    camera.lookAt(scene.position);
    var i = 0;
    for (var ix = 0; ix < AMOUNTX; ix++) {
        for (var iy = 0; iy < AMOUNTY; iy++) {
            particle = particles[i++];
            particle.position.y = Math.sin((ix + count) * 0.3) * 20 + Math.sin((iy + count) * 0.5) * 20;
            particle.scale.x = particle.scale.y = (Math.sin((ix + count) * 0.3) + 1) * 4 + (Math.sin((iy + count) * 0.5) + 1) * 4;
        }
    }
    renderer.render(scene, camera);
    count += 0.1;
}

init();
animate();
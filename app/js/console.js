// Console emoji message
var emojis = [
    [ "beer", "🍻🤝"]
];
(function funConsole() { 
    if(!window.console) return;

    emojis.forEach(function(emoji) {
        window.console[emoji[0]] = function() {

        var size = 1;
        if(arguments.length > 1) {
            size = [].pop.call(arguments);
        }

        var args = Array.prototype.slice.call(arguments).toString().split(',').join(',');
            console.log("%c" + args + " " + emoji[1], "font-size: " + size + "px");
        }
    });
})();
console.beer("Cheers, let's do business!", 22);
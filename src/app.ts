/*
    This was written in TypeScript and compiled to ESC5 beause writing in ESC5 is impossible
*/
// List of icons to randomly choose between
var iconsList = ["icon://fa-heart", 
                 "icon://fa-music", 
                 "icon://fa-smile-o", 
                 "icon://fa-globe", 
                 "icon://fa-tree", 
                 "icon://fa-bolt", 
                 "icon://fa-moon-o",
                 "icon://fa-star"];

var icon:String = iconsList[Math.floor(Math.random() * 8)];
for (let i = 0; i < 20; i++) {
    let size:Number = Math.floor(Math.random() * 40) + 10;
    setProperty("icon"+i, "image", icon);
    setProperty("icon"+i, "x", Math.floor(Math.random() * 414));
    setProperty("icon"+i, "y", Math.floor(Math.random() * 320));
    setProperty("icon"+i, "width", size);
    setProperty("icon"+i, "height", size);
    setProperty("icon"+i, "icon-color", randomColor());
}
setProperty("homeScreen", "background-color", randomColor());

onEvent("colorsButton", "click", function() {
    for (let i = 0; i < 20; i++) {
        setProperty("icon"+i, "icon-color", randomColor());
    }
    setProperty("homeScreen", "background-color", randomColor());
});

onEvent("locationsButton", "click", function() {
    for (let i = 0; i < 20; i++) {
        let size:Number = Math.floor(Math.random() * 40) + 10;
        setProperty("icon"+i, "x", Math.floor(Math.random() * 414));
        setProperty("icon"+i, "y", Math.floor(Math.random() * 320));
        setProperty("icon"+i, "width", size);
        setProperty("icon"+i, "height", size);
    }
});

onEvent("shapesButton", "click", function() {
    icon = iconsList[Math.floor(Math.random() * 8)];
    for (let i = 0; i < 20; i++) {
        setProperty("icon"+i, "image", icon);
    }
});

function randomColor():Number {
    return rgb(Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255));
}

// DO NOT IMPORT PAST HERE

function rgb(r:Number, g:Number, b:Number):Number {
    return 0;
}

function setProperty(id:String, property:String, value:any) {
    return;
}

function setText(id:String, value:String) {
    return;
}

function onEvent(id:String, event:String, callback:CallableFunction) {
    return;
}

function playSound(sound:String) {
    return;
}

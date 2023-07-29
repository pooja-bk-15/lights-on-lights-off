function turnOn(){
    document.getElementById('bulb').src="assets/lighton.png";
    document.getElementById('background_wallpaper').style.backgroundImage = "url(assets/Brightroom.jpg)";
}
function turnOff(){
    document.getElementById('bulb').src="assets/lightoff.png";
    document.getElementById('background_wallpaper').style.backgroundImage = "url(assets/Darkroom.gif)";
}
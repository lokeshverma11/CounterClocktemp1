const time = new Date();
var date = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
let clicks=1;

document.getElementById("currentTime").innerHTML = date;
document.getElementById("currentTime").style.color = "red";

function countClicks()
{
    clicks = clicks + 1;
    document.getElementById("counter").innerHTML = clicks;
    if(clicks%2===0){
        document.getElementById("currentTime").style.color = "green";
        document.getElementById('a').style.backgroundImage="url(sun1.jpg)";}
    else{
        document.getElementById("currentTime").style.color = "red";
        document.getElementById('a').style.backgroundImage="url(sun2.jpg)";}
}

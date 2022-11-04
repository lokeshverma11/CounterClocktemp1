const date = new Date();
let clicks=1;

document.getElementById("currentTime").innerHTML = date;
document.getElementById("currentTime").style.color = "red";

function countClicks()
{
    clicks = clicks + 1;
    document.getElementById("counter").innerHTML = clicks;
    if(clicks%2===0)
        document.getElementById("currentTime").style.color = "green";
    else
        document.getElementById("currentTime").style.color = "red";
}

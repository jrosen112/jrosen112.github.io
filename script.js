flag = false;
night_mode = false;

function change_func(element) {
    console.log("flag:", flag);
    if(flag) {
        element.style.color = "red";
        flag = false;
    } else {
        element.style.color = "blue";
        flag = true;
    }
}

function toggle_nightmode(element) {
    body = document.querySelector('body')
    if(!night_mode) {
        body.style.backgroundColor = "grey";
        document.getElementById('night').innerText = "Night mode: activated"
        night_mode = true;
    } else {
        body.style.backgroundColor = "white"
        document.getElementById('night').innerHTML = "Night mode: deactivated"
        night_mode = false;
    }
}
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

(function() {
    var doc_element = document.documentElement;
    var w = window;

    var prevScroll = w.scrollY || doc_element.scrollTop;
    var currScroll;
    var direction = 0;
    var prevDirection = 0;
    var header = document.getElementById('header-component');

    var checkScroll = () => {
        /*
        ** Find direction of scroll:
        ** 0 intial, 1 up, 2 down
        */
       currScroll = w.scrollY || doc_element.scrollTop;
       if(currScroll > prevScroll) {
           // scrolled up
           direction = 2;
       } else if(currScroll < prevScroll) {
           direction = 1;
       }
       if(direction !== prevDirection) {
           toggleHeader(direction, currScroll);
       }
       prevScroll = currScroll;
    };

    var toggleHeader = (direction, currScroll) => {
        if(direction === 2 && currScroll > 40) {
            header.classList.add('hide');
            prevDirection = direction;
        } else if(direction === 1) {
            header.classList.remove('hide');
            prevDirection = direction;
        }
    };
    window.addEventListener('scroll', checkScroll);
})();
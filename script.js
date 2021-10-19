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

$(function() {
    console.log("jQuery");
    // $("#header").load("/stylesheets/header_style.css");
    $("#header").load("components/header.html");
    $("<link>", {
        rel: "stylesheet",
        type: "text/css",
        href: "./stylesheets/header_style.css"
     }).appendTo("#header");
});

(function() {
    const container = document.getElementById('services');
    var cards = [];
    // cardHTML = `
    // <div class="col-md-4 mb-4">
    //      <div class="card h-100">
    //         <img class="card-img-top" src="design.jpg" alt="Design">
    //         <div class="card-body">
    //            <h4 class="card-title">Design</h4>
    //            <p class="card-text">Deliver the best user experience 
    //            with our carefully designed responsive websites and applications!</p>
    //         </div>
    //         <div class="card-footer py-4">
    //            <a href="#" class="btn btn-secondary">See portfolio &raquo;</a>
    //         </div>
    //      </div>
    //   </div>
    // `;

    // for (let i = 0; i < 3; i++) {
    //     cardHTML = `
    //     <div class="col-md-4 mb-4">
    //         <div class="card h-100">
    //     `;

    // }
    
});
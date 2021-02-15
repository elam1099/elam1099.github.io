(function() {
    'use strict';
    console.log("reading js");



    //bg changes color based on the section of the page
    let page;
    let body = document.querySelector('body');

    window.addEventListener('scroll', function (){
        page = window.pageYOffset;

        switch(true) {
            case page < 800: body.className="light"; break;
            case page < 1800: body.className="dark"; break;
            case page < 2100: body.className="green"; break;

            default: body.className="green";
        }
    });

    //script for smooth scroll
    const navBar = document.querySelectorAll('nav ul li a');

    navBar.forEach (function(eachLink){
        eachLink.addEventListener('click', smoothScroll);
    });
   
    function smoothScroll(event) {
        event.preventDefault();

        const targetID = event.target.getAttribute('href');
        const targetAnchor = document.querySelector(targetID);

        const pageTop = Math.floor(targetAnchor.getBoundingClientRect().top) - 80;
        window.scrollBy({top: pageTop, left: 0, behavior: 'smooth'});
        
    }

    //changing product image on hover to swatch images
    let image1 = document.getElementById("matcha");
    let image2 = document.getElementById("vitac");
    let image3 = document.getElementById("gbr");
    let image4 = document.getElementById("missha");

    //image on hover
    image1.addEventListener('mouseover', function(){
    image1.src = "images/matchaswatch.jpg";
    })
    //image default
    image1.addEventListener('mouseout', function(){
        image1.src =  "images/matcha.png";
    })

    //image on hover
    image2.addEventListener('mouseover', function(){
    image2.src = "images/vitacswatch.jpg";
    })
    //image default
    image2.addEventListener('mouseout', function(){
        image2.src =  "images/vitac.png";
    })
    
    //image on hover
    image3.addEventListener('mouseover', function(){
    image3.src = "images/gbrswatch.jpg";
    })
    //image default
    image3.addEventListener('mouseout', function(){
        image3.src =  "images/gbr.png";
    })

    //image on hover
    image4.addEventListener('mouseover', function(){
    image4.src = "images/misshaswatch.jpg";
    })
    //image default
    image4.addEventListener('mouseout', function(){
        image4.src =  "images/missha.png";
    })
    
}());
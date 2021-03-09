(function() {
    'use strict';
    console.log("reading js");

     //script for timed text on hero
    let text = ["beautiful.", "powerful.", "strong.","radiant."];
    let counter = 0;
    let textChange = document.getElementById("timetext");
    setInterval(change, 2000);
    
    function change() {
      textChange.innerHTML = text[counter];
      counter++;
      if (counter >= text.length) {
        counter = 0;
      }
    }


    //zoom for morning img
    const divClass = document.querySelector('.top.section');
    const mainImg = document.querySelector('.top.section img');
    const percent = divClass.offsetWidth / 100;
    let prevLoc = 0;

    //listens to when mouse is over the img
    divClass.addEventListener('mousemove', reportPos);

    function reportPos(event) {
        // % zoom as mouse moves from left to right
        const mouseOver = Math.ceil((event.clientX - (divClass.getBoundingClientRect().left)) / percent);
    
        if (prevLoc !== mouseOver) {
            // add 5px to width of img
            let zoomPic = mouseOver * 5;
            // at 0% zoom, img is at 650 px
            mainImg.style.width = (650 + zoomPic) + 'px';
            prevLoc = mouseOver;
        }
    }
    
    //zoom for night img
    const divClass2 = document.querySelector('.middle.section');
    const mainImg2 = document.querySelector('.middle.section img');
    const percent2 = divClass2.offsetWidth / 100;
    let prevLoc2 = 0;

    //listens to when mouse is over the img
    divClass2.addEventListener('mousemove', reportPos2);

    function reportPos2(event) {
        // % zoom as mouse moves from right to left
        const mouseOver2 = Math.ceil((( divClass2.getBoundingClientRect().right) - event.clientX) / percent2);
    
        if (prevLoc2 !== mouseOver2) {
            // add 5px to width of img
            let zoomPic2 = mouseOver2 * 5;
            // at 0% zoom, img is at 650 px
            mainImg2.style.width = (650 + zoomPic2) + 'px';
            prevLoc2 = mouseOver2;
        }
    }


    //bg changes color based on the section of the page
    let page;
    let body = document.querySelector('body');

    window.addEventListener('scroll', function (){
        page = window.pageYOffset;

        switch(true) {
            case page < 2700: body.className="light"; break;  //bg color is beige
            case page < 6000: body.className="dark"; break; //bg color is dark navy
            case page < 6100: body.className="green"; break; //bg color is sage green

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
    let image2 = document.getElementById("vitac");
    let image3 = document.getElementById("gbr");
    let image4 = document.getElementById("missha");
    let image5 = document.getElementById("kale");
    let image7 = document.getElementById("toner");
    let image9 = document.getElementById("snail");
    let image11 = document.getElementById("blume");
    let image13 = document.getElementById("tret");
    let image15 = document.getElementById("oil");
    let image17 = document.getElementById("innisfree");
    let image19 = document.getElementById("cetaphil");
    let image22 = document.getElementById("patch");


    //image on hover
    image2.addEventListener('mouseover', function(){
    image2.src = "images/quote1.svg";

    })
    //image default
    image2.addEventListener('mouseout', function(){
    image2.src =  "images/vitac.png";

    }) 
    
  

     //image on hover
    image3.addEventListener('mouseover', function(){
    image3.src = "images/quote2.svg";
    })
    //image default
    image3.addEventListener('mouseout', function(){
        image3.src =  "images/gbr.png";
    })


    //image on hover
    image4.addEventListener('mouseover', function(){
    image4.src = "images/quote3.svg";
    })
    //image default
    image4.addEventListener('mouseout', function(){
        image4.src =  "images/missha.png";
    })
    
     //image on hover
    image5.addEventListener('mouseover', function(){
    image5.src = "images/quote4.svg";
        })
    //image default
    image5.addEventListener('mouseout', function(){
        image5.src =  "images/kale.png";
        })

     //image on hover
     image7.addEventListener('mouseover', function(){
        image7.src = "images/quote5.svg";
       })
    //image default
    image7.addEventListener('mouseout', function(){
        image7.src =  "images/toner.png";
      })
        
    //image on hover
    image9.addEventListener('mouseover', function(){
    image9.src = "images/quote6.svg";
         })
    //image default
    image9.addEventListener('mouseout', function(){
        image9.src =  "images/snail.png";
        })

    //image on hover
    image11.addEventListener('mouseover', function(){
    image11.src = "images/quote7.svg";
         })
    //image default
    image11.addEventListener('mouseout', function(){
        image11.src =  "images/blume.png";
        })


    //image on hover
    image13.addEventListener('mouseover', function(){
    image13.src = "images/quote8.svg";
         })
    //image default
    image13.addEventListener('mouseout', function(){
        image13.src =  "images/tret.png";
        })


    //image on hover
    image15.addEventListener('mouseover', function(){
    image15.src = "images/quote9.svg";
         })
    //image default
    image15.addEventListener('mouseout', function(){
        image15.src =  "images/oil.png";
        })


    //image on hover
    image17.addEventListener('mouseover', function(){
    image17.src = "images/quote10.svg";
         })
    //image default
    image17.addEventListener('mouseout', function(){
        image17.src =  "images/innisfree.png";
        })


    //image on hover
    image19.addEventListener('mouseover', function(){
    image19.src = "images/quote11.svg";
         })
    //image default
    image19.addEventListener('mouseout', function(){
        image19.src =  "images/cetaphil.png";
        })


    //image on hover
    image22.addEventListener('mouseover', function(){
    image22.src = "images/quote12.svg";
         })
    //image default
    image22.addEventListener('mouseout', function(){
        image22.src =  "images/patch.png";
        })

    //spinning text
    window.addEventListener('scroll', () => {
        document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
      }); 

    
    var i = 0;
    var txt = 'Healthy skin does not mean perfect skin.';
    var txt2 ='The most beautiful thing you can wear is confidence.'
    var speed = 60;

    typeWriter();
      
      function typeWriter() {
        if (i < txt.length) {
          document.getElementById("typing").innerHTML += txt.charAt(i);
          i++;
          setTimeout(typeWriter, speed);
        }
      }

    var j = 0;
    var txt2 ='The most beautiful thing you can wear is confidence.'
    var speed = 60;

    typeWriter2();
      
      function typeWriter2() {
        if (j < txt2.length) {
          document.getElementById("typing2").innerHTML += txt2.charAt(j);
          j++;
          setTimeout(typeWriter2, speed);
        }
      }




}());
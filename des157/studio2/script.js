(function() {
    'use strict';
    console.log("reading js");



    //bg changes color based on the section of the page
    let page;
    let body = document.querySelector('body');

    window.addEventListener('scroll', function (){
        page = window.pageYOffset;

        switch(true) {
            case page < 1400: body.className="light"; break;
            case page < 3700: body.className="dark"; break;
            case page < 3800: body.className="green"; break;

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
    let image5 = document.getElementById("kale");
    let image6 = document.getElementById("vitc");
    let image7 = document.getElementById("toner");
    let image8 = document.getElementById("centella");
    let image9 = document.getElementById("snail");
    let image10 = document.getElementById("peach");
    let image11 = document.getElementById("blume");
    let image12 = document.getElementById("laneigemask");
    let image13 = document.getElementById("tret");
    let image14 = document.getElementById("laneigelip");
    let image15 = document.getElementById("oil");
    let image16 = document.getElementById("aha");
    let image17 = document.getElementById("innisfree");
    let image18 = document.getElementById("pore");
    let image19 = document.getElementById("cetaphil");
    let image20 = document.getElementById("honey");
    let image21 = document.getElementById("klog");
    let image22 = document.getElementById("patch");

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
    
     //image on hover
    image5.addEventListener('mouseover', function(){
    image5.src = "images/kaleswatch.jpg";
        })
    //image default
    image5.addEventListener('mouseout', function(){
        image5.src =  "images/kale.png";
        })

     //image on hover
    image6.addEventListener('mouseover', function(){
    image6.src = "images/vitcswatch.jpg";
        })
    //image default
    image6.addEventListener('mouseout', function(){
        image6.src =  "images/vitc.png";
        })
    
     //image on hover
     image7.addEventListener('mouseover', function(){
        image7.src = "images/tonerswatch.jpg";
       })
    //image default
    image7.addEventListener('mouseout', function(){
        image7.src =  "images/toner.png";
      })
    
     //image on hover
    image8.addEventListener('mouseover', function(){
    image8.src = "images/centellaswatch.jpg";
         })
    //image default
    image8.addEventListener('mouseout', function(){
        image8.src =  "images/centella.png";
        })
    
    //image on hover
    image9.addEventListener('mouseover', function(){
    image9.src = "images/snailswatch.jpg";
         })
    //image default
    image9.addEventListener('mouseout', function(){
        image9.src =  "images/snail.png";
        })

    //image on hover
    image10.addEventListener('mouseover', function(){
    image10.src = "images/peach.jpg";
         })
    //image default
    image10.addEventListener('mouseout', function(){
        image10.src =  "images/peach.png";
        })

    //image on hover
    image11.addEventListener('mouseover', function(){
    image11.src = "images/blumeswatch.jpg";
         })
    //image default
    image11.addEventListener('mouseout', function(){
        image11.src =  "images/blume.png";
        })

    //image on hover
    image12.addEventListener('mouseover', function(){
    image12.src = "images/laneigemaskswatch.jpg";
         })
    //image default
    image12.addEventListener('mouseout', function(){
        image12.src =  "images/laneigemask.png";
        })

    //image on hover
    image13.addEventListener('mouseover', function(){
    image13.src = "images/tretswatch.jpg";
         })
    //image default
    image13.addEventListener('mouseout', function(){
        image13.src =  "images/tret.png";
        })

    //image on hover
    image14.addEventListener('mouseover', function(){
    image14.src = "images/laneigelipswatch.jpg";
         })
    //image default
    image14.addEventListener('mouseout', function(){
        image14.src =  "images/laniegelip.png";
        })

    //image on hover
    image15.addEventListener('mouseover', function(){
    image15.src = "images/oilswatch.jpg";
         })
    //image default
    image15.addEventListener('mouseout', function(){
        image15.src =  "images/oil.png";
        })

    //image on hover
    image16.addEventListener('mouseover', function(){
    image16.src = "images/ahaswatch.jpg";
         })
    //image default
    image16.addEventListener('mouseout', function(){
        image16.src =  "images/aha.png";
        })

    //image on hover
    image17.addEventListener('mouseover', function(){
    image17.src = "images/innisfreeswatch.jpg";
         })
    //image default
    image17.addEventListener('mouseout', function(){
        image17.src =  "images/innisfree.png";
        })

    //image on hover
    image18.addEventListener('mouseover', function(){
    image18.src = "images/poreswatch.jpg";
         })
    //image default
    image18.addEventListener('mouseout', function(){
        image18.src =  "images/pore.png";
        })

    //image on hover
    image19.addEventListener('mouseover', function(){
    image19.src = "images/cetaphilswatch.jpg";
         })
    //image default
    image19.addEventListener('mouseout', function(){
        image19.src =  "images/cetaphil.png";
        })

    //image on hover
    image20.addEventListener('mouseover', function(){
    image20.src = "images/honeyswatch.jpg";
         })
    //image default
    image20.addEventListener('mouseout', function(){
        image20.src =  "images/honey.png";
        })

    //image on hover
    image21.addEventListener('mouseover', function(){
    image21.src = "images/klogswatch.jpg";
         })
    //image default
    image21.addEventListener('mouseout', function(){
        image21.src =  "images/klog.png";
        })

    //image on hover
    image22.addEventListener('mouseover', function(){
    image22.src = "images/patchswatch.jpg";
         })
    //image default
    image22.addEventListener('mouseout', function(){
        image22.src =  "images/patch.png";
        })


}());
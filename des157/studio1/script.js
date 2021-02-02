(function() {
    'use strict';
    console.log("reading js");


    const myForm = document.querySelector('#myform');
    const madlib = document.querySelector('#madlib');

    myForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const noun1 = document.querySelector('#noun1').value;
        const adj = document.querySelector('#adj').value;
        const color = document.querySelector('#color').value;
        const verb1 = document.querySelector('#verb1').value;
        const noun2 = document.querySelector('#noun2').value;
        const pluraln = document.querySelector('#pluraln').value;
        const name = document.querySelector('#name').value;

        let myText;

        //error if user does not complete entire form
        if (noun1 && adj && color && verb1 && noun2 && pluraln && name) {
            myText = `Dear <span style="background-color:#FFDDE6;"> ${noun1}</span>, <br>      
            <br>                          
            There’s something I must tell you, but I’m not sure how to say it. 
            I think you’re a very <span style="background-color:#FFDDE6;"> ${adj}</span> person, and I can’t stop thinking about you. 
            I love the way your <span style="background-color:#FFDDE6;"> ${color}</span> eyes shine under the sun, and the way 
            you <span style="background-color:#FFDDE6;"> ${verb1}</span> when you talk. I can honestly listen to you talk about 
            <span style="background-color:#FFDDE6;"> ${noun2}</span> for hours. Whenever I see you, I get 
            <span style="background-color:#FFDDE6;"> ${pluraln}</span> in my stomach, and my 
            hands start to shake. I’ve never felt this way for anyone before. 
            I’m dying to know how you feel about me. <br>   
            <br>   
            So will you be my Valentine? <br>
            <br>   
            P.S I love you. <br>
            <br>   
            Sincerely, <br>
            <br>   
            <br>   
            <span style="background-color:#FFDDE6; font-size: 32px; font-family: Mansalva, cursive"> ${name}</span>`;
        } else {
            alert("Please fill out the words so I can create your Mad Lib");
        }

        // put text into the article with the id of madlib, 
        // but the section overlay is still hidden
        madlib.innerHTML = myText;

        // turn on the overlay
        document.getElementById('overlay').className = "showing";

        // turn off the form
        myForm.className = "hidden";



        //clear form after submit
        var formData = document.querySelectorAll("input[type=text]");

        for (const eachField of formData) {
            eachField.value = "";
        }

    });

    document.querySelector('.close').addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('overlay').className = "hidden";
        myForm.className = "showing";
    });

}());
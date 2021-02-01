(function(){
    'use strict';
    console.log("reading js");


    const myForm = document.querySelector('#myform'); 
    const madlib = document.querySelector('#madlib');
  
    myForm.addEventListener('submit', function (event){
        event.preventDefault();
        const noun1= document.querySelector('#noun1').value;
        const adj= document.querySelector('#adj').value;
        const color= document.querySelector('#color').value;
        const verb1= document.querySelector('#verb1').value;
        const noun2 = document.querySelector('#noun2').value;
        const pluraln= document.querySelector('#pluraln').value;
        const name= document.querySelector('#name').value;

        let myText;
        

        //error if user does not complete entire form
        if (noun1 && adj && color && verb1 && noun2 && pluraln && name) {
            myText= `Dear ${noun1},\n\
            There’s something I must tell you, but I’m not sure how to say it. I think you’re a very ${adj} person, and I can’t stop thinking about you. I love the way your ${color} eyes shine under the sun, and the way you ${verb1} when you talk.  I can honestly listen to you talk about ${noun2} for hours. Whenever I see you, I get ${pluraln} in my stomach, and my hands start to shake. I’ve never felt this way for anyone before. I’m dying to know how you feel about me. \n\

            So will you be my Valentine? \n\

            P.S I love you. \n\

            Sincerely, \n\

            ${name}`;
        }
        else {
            alert("Please fill out the words so I can create your Mad Lib");
        }
      
        madlib.innerHTML = myText;
        

        //clear form after submit
        var formData = document.querySelectorAll("input[type=text]");
        for ( const eachField of formData) {
            eachField.value="";
        }

       // document.write("Dear" + noun1 + "There’s something I must tell you, but I’m not sure how to say it. I think you’re a very" );


      
    });



 

}());
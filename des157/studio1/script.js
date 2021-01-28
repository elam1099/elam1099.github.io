(function(){
    'use strict';
    console.log("reading js");


    const myForm = document.querySelector('#myform');
    const madlib = document.querySelector('#madlib');
  
    myForm.addEventListener('submit', function (event){
        event.preventDefault();
        const noun1= document.querySelector('#noun1').value;
        const noun2= document.querySelector('#noun2').value;
        const adj1= document.querySelector('#adj1').value;
        const verb1= document.querySelector('#verb1').value;

        let myText;

        if (noun1 && noun2 && adj1 && verb1) {
            myText= `Here are the words ${noun1}, ${noun2}, ${adj1}, and ${verb1}`;
        }
        else {
            myText = "Please fill out the words so I can create your Mad Lib";
        }
      
        madlib.innerHTML = myText;

        var formData = document.querySelectorAll("input[type=text]");
        for ( const eachField of formData) {
            eachField.value="";
        }

        
    });

  


}());
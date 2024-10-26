//GOOGLE SEARCH PAGINATION
let spanItems = document.querySelectorAll('span');
let colored = document.querySelectorAll('.colored');

/*
APPROACH:
1.Add an event listener to the letters and numbers
2.Using a loop, whenever the letters are clicked, it should begin by taking
the first number along with the 2nd letter of the Google word and change their colors
3.When not active the Google letters should remain blue and the numbers white, however when active, both colors
should change to peach simultaneously.
4.Continue the process until it reaches the last but three letters
(which is the last o letter) 

*/



//loop thorough the numbers
spanItems.forEach(item => {

    //add a click event to the numbers
    item.addEventListener('click', function() {

        //remove the active class from all the span elements
        spanItems.forEach(num => num.classList.remove('active'));

        //add the active class to the clicked number
        this.classList.add('active');

       
    });
});



//loop thorough the letters
colored.forEach(color => {

    //add a click event to the letters
    color.addEventListener('click', function() {

        //remove the active class from the letters
        colored.forEach(col => col.classList.remove('active'));

        //add the active class to the clicked letter
        this.classList.add('active');

       
    });
});


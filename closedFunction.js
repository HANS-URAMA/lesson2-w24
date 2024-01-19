function parent(){
    let message = "It is Friday!";

    function child(){
        console.log(message);
    }

    //call child function
    child();
}

//call parent function
parent();

function parent2(){
    let message = "It is Friday!";

    function child(){
        console.log(message);
    }

    //return child but doesn't execute it
    return child;
}

//set up child function but don't execute it
let child = parent2();

//now execute it
child();


/*JS-02 Declare and Use Functions

Before each exercise, make sure you think about the 4 steps of a function.
1. Understand the purpose of the function.
2. Define the data that comes into the function from the caller (in the form of parameters)!
3. Define what data variables are needed inside the function to accomplish its goal.
4. Decide the set of steps that the program will use to accomplish this goal (the algorithm).
Start coding up your answer once you have completed step 4.

/*
Challenge Yourself
A teacher wants to create a rubric for grading. The rubric is from 0 - 11.

Part 1
A student passes if they have a score greater than or equal to 5. Create a function that returns a boolean true or false.*/

var calificacion = Number(prompt("Introduce la calificación: "));

var x = function(calificacion){
    if (calificacion>=5){
        aprobar = true;
    }
    else {
        aprobar = false;
    }
    return aprobar;
}
console.log("Aprobó: " + x(calificacion));


/*
Part 2
A student has an excellent grade if they score higher than 8. Add on to your function to print out "Excellent" for scores greater than 8.
*/

/*
Part 3
A student has a perfect grade if their score is 11. Add on to your function to print out "Perfect" for a score of 11.*/

var y = function(calificacion){
    if (calificacion>=8 && calificacion<11){
        comentario = "Excelente";
    }
    if (calificacion==11){
        comentario = "Perfecto";
    }
    if (calificacion<=4){
        comentario = "Deshonrada tu, deshonrada tu vaca";
    }
    return comentario;
}
console.log("Comentario: " + y(calificacion));
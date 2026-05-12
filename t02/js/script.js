let animal = prompt("What animal is the superhero most similar to?");
let gender = prompt("Is the superhero male or female? Leave blank if unknown or other.");
let age = prompt("How old is the superhero?");

if (!/^[A-Za-z]{1,20}$/.test(animal)) 
    alert("Invalid input");

if (!/^(male|female)?$/i.test(gender)) 
        alert("Invalid input");

if (!/^\d{1,3}$/.test(age)) 
    alert("Invalid input");

let description = "";

if (/^male$/i.test(gender)) {
                if (age < 18) {
                    description = "boy";
                } else {
                    description = "man";
                }
            } else if (/^female$/i.test(gender)) {
                if (age < 18) {
                    description = "girl";
                } else {
                    description = "woman";
                }
            } else {
                if (age < 18) {
                    description = "kid";
                } else {
                    description = "hero";
                }
            }

            alert("The superhero name is: " + animal + "-" + description + "!");
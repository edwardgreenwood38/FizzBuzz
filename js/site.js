// get the values user entered
// controller
function getValues() {
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;

    // convert to int
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);

    // valudate is integers
    if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {
        // call genrateNumbers
        let fizzBuzz = generateFizzBuzz(fizzValue, buzzValue);

        // call displayNumbers
        displayFizzBuzz(fizzBuzz);
    } 
    else {
        alert("You must enter integers");
    }
}

// calculate fizz, buzz and fizzbuzz
// logic
function generateFizzBuzz(fv, bv) {
    let fizzBuzz = [];

    // loop to find each fizz, buzz and fizzbuzz
    for (let i = 1; i <= 100; i++)
    {
        let item = "";

        if (i % (fv * bv) == 0)
        {
            item = "FizzBuzz";
        }
        else if (i % bv == 0) 
        {
            item = "Buzz";
        }
        else if (i % fv == 0)
        {
            item = "Fizz";
        }
        else
        {
            item = i;
        }

        // add to array
        fizzBuzz.push(item);
    }

    return fizzBuzz;
}

// display fizzbuzz results
// view function
function displayFizzBuzz(fizzbuzz) {
    // to hold html
    let templateRows = "";

    // loop array to create output from array
    for (let i = 0; i < 100; i += 5)
    {
        templateRows += `<tr>`;
        templateRows += `<td>${fizzbuzz[i]}</td>`;
        templateRows += `<td>${fizzbuzz[i+1]}</td>`;
        templateRows += `<td>${fizzbuzz[i+2]}</td>`;
        templateRows += `<td>${fizzbuzz[i+3]}</td>`;
        templateRows += `<td>${fizzbuzz[i+4]}</td>`;
        templateRows += `</tr>`;
    }

    // add html to display
    document.getElementById("results").innerHTML = templateRows;
}

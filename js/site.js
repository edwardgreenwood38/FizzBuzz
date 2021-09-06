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
    //let templateRows = "";
    let tableBody = document.getElementById("results");
    let templateRow = document.getElementById("fbTemplate");


    // clear table
    tableBody.innerHTML = "";

    // loop array to create output from array
    for (let i = 0; i < fizzbuzz.length; i += 5)
    {
        let tableRow = document.importNode(templateRow.content, true);

        // grab the td put in an array
        let rowCols = tableRow.querySelectorAll("td");
        rowCols[0].textContent = fizzbuzz[i];
        rowCols[1].textContent = fizzbuzz[i+1];
        rowCols[2].textContent = fizzbuzz[i+2];
        rowCols[3].textContent = fizzbuzz[i+3];
        rowCols[4].textContent = fizzbuzz[i+4];

        tableBody.appendChild(tableRow);
        
        /* templateRows += `<tr>`;
        templateRows += `<td>${fizzbuzz[i]}</td>`;
        templateRows += `<td>${fizzbuzz[i+1]}</td>`;
        templateRows += `<td>${fizzbuzz[i+2]}</td>`;
        templateRows += `<td>${fizzbuzz[i+3]}</td>`;
        templateRows += `<td>${fizzbuzz[i+4]}</td>`;
        templateRows += `</tr>`; */
    }

    // add html to display
    //document.getElementById("results").innerHTML = templateRows;
}

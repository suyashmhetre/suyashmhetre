document.addEventListener('DOMContentLoaded', function () {
    let unitsInput = document.querySelector('input[name="email"]');  // for the number of units
    let resultOutput = document.getElementById("output")  // to display the result
    let submitButton = document.querySelector('.button-confirm');
    let unit = document.getElementById("item1");
    let electricity = document.getElementById("item2");
    let distribution = document.getElementById("item3");
    let total = document.getElementById("item4");
    let card = document.getElementById("mainbox");
  
    let instabtn = document.querySelector('.instabtn');  // Ensure instabtn is defined
  
    submitButton.addEventListener('click', function(event) {
        event.preventDefault(); 
        card.style.visibility = "visible";
  
        let value = parseFloat(unitsInput.value);
  
        // Input validation
        if (value == "" || value <= 0) {
            unit.textContent ="NaN";
            electricity.textContent ="NaN" ;
            distribution.textContent = "NaN";
            total.textContent = "NaN";
            
            resultOutput.textContent = "Please enter a valid number of units.";
            
        }
  
        // Calculation logic
        let result;
        
        if (value >= 1 && value <= 100) {
            result = value * 4.71;
        } else if (value >= 101 && value <= 300) {
            let z = value - 100;  // Subtract 100 from the value
            let w = (100 * 5.16) + (z * 11.09) + 128 + (value * 1.17);
            result = w; 
            unit.textContent = value;
        electricity.textContent = (100 * 5.16).toFixed(2);
        distribution.textContent = (value * 1.17).toFixed(2);
        total.textContent = `₹${result.toFixed(2)}`;
  
        } if(value>300) {
            unit.textContent = "out of range";
            electricity.textContent ="out of range" ;
            distribution.textContent = "out of range";
            total.textContent = "out of range"
      
        
        }
  
        
        // Display the result
        
    });
  
    // Example usage for instabtn
    instabtn.addEventListener('click', function() {
        // You can add functionality here for instabtn
    });
  });
  




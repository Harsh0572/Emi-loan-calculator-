// script.js
document.getElementById('emiForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get user inputs
    const principal = parseFloat(document.getElementById('principal').value);
    const annualRate = parseFloat(document.getElementById('annualRate').value);
    const tenure = parseInt(document.getElementById('tenure').value);
    
    // Convert annual rate to monthly and tenure to months
    const monthlyRate = annualRate / (12 * 100);
    const numberOfMonths = tenure * 12;
    
    // Calculate EMI
    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfMonths)) / (Math.pow(1 + monthlyRate, numberOfMonths) - 1);
    
    // Display the result
    document.getElementById('emiAmount').textContent = emi.toFixed(2);
});

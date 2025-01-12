function calculateAndReset() {
    // Get input values
    const goal = document.getElementById('goal').value;
    const current = document.getElementById('current').value;
    const monthly = document.getElementById('monthly').value;

    // Perform your calculation logic here
    const monthsNeeded = (goal - current) / monthly;

    // Display the result (you can customize this part)
    alert(`You need approximately ${Math.ceil(monthsNeeded)} months to reach your goal!`);

    // Reset the fields to 0
    document.getElementById('goal').value = 0;
    document.getElementById('current').value = 0;
    document.getElementById('monthly').value = 0;
}

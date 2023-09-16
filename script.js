function getFormvalue() {
    event.preventDefault(); // Prevent the form from submitting

    // Get the values of first name and last name from the form
    const firstName = document.querySelector('input[name="fname"]').value;
    const lastName = document.querySelector('input[name="lname"]').value;

    // Check if both first name and last name are provided
    if (firstName && lastName) {
        alert(`First Name: ${firstName}\nLast Name: ${lastName}`);
    } else {
        alert('Please provide both First Name and Last Name.');
    }
}

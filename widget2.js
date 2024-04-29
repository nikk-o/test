document.addEventListener('DOMContentLoaded', function() {
    // Create a new button element
    var button = document.createElement('button');
    button.textContent = 'Click Me';
    
    // Styling the button
    button.style.padding = '10px 20px';
    button.style.fontSize = '16px';
    button.style.cursor = 'pointer';
    button.style.marginTop = '10px';
    button.style.border = '1px solid #ccc';
    button.style.backgroundColor = '#f0f0f0';

    // Adding an event listener for click
    button.addEventListener('click', function() {
        alert('Button was clicked!');
    });

    // Append the button to the body of the document
    document.body.appendChild(button);
});

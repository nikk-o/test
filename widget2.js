document.addEventListener('DOMContentLoaded', function() {
    // Create a new button element
    var button = document.createElement('button');
    button.textContent = 'Simple Button';
    
    // Optionally, style the button
    button.style.padding = '10px 20px';
    button.style.fontSize = '16px';
    button.style.cursor = 'pointer';
    button.style.marginTop = '10px';
    button.style.border = '1px solid #ccc';
    button.style.backgroundColor = '#f0f0f0';
    
    // Append the button to the body of the document
    document.body.appendChild(button);
});

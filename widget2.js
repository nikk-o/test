document.addEventListener('DOMContentLoaded', function() {
    var count = 0; // Initialize counter

    var button = document.createElement('button');
    button.textContent = 'Click Me';

    button.style.padding = '10px 20px';
    button.style.fontSize = '16px';
    button.style.cursor = 'pointer';
    button.style.marginTop = '10px';
    button.style.border = '1px solid #ccc';
    button.style.backgroundColor = '#f0f0f0';

    button.addEventListener('click', function() {
        count += 1; // Increment counter
        console.log('Button was clicked ' + count + ' times');
        button.textContent = 'Click Me (' + count + ')'; // Update button text
    });

    document.body.appendChild(button);
});

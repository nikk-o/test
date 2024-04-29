document.addEventListener('DOMContentLoaded', function() {
    var button = document.createElement('button');
    button.textContent = 'Connect MetaMask';

    button.style.padding = '10px 20px';
    button.style.fontSize = '16px';
    button.style.cursor = 'pointer';
    button.style.marginTop = '10px';
    button.style.border = '1px solid #ccc';
    button.style.backgroundColor = '#f0f0f0';

    document.body.appendChild(button);

    button.addEventListener('click', function() {
        if (typeof window.ethereum !== 'undefined') {
            console.log('MetaMask is available!');
            alert('MetaMask is available!');
        } else {
            console.log('MetaMask is not available!');
            alert('MetaMask is not available. Please install it.');
        }
    });
});

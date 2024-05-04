// script.js
document.getElementById('xssForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var input = document.getElementById('inputField').value;
    if (containsScriptTags(input)) {
        document.getElementById('output').innerHTML = 'Well Done, ' + input + '!'; // Vulnerable to XSS

        // Create an image element
        var img = document.createElement('img');
        img.src = 'safe.jpg'; // URL of the malicious image
        img.alt = 'Safe Image'; // Alt text for the image (optional)

        // Append the image directly under the input box
        var inputField = document.getElementById('inputField');
        inputField.parentNode.insertBefore(img, inputField.nextSibling);
    } else {
        alert('Please enter a valid XSS payload.');
    }
});

function containsScriptTags(input) {
    // Regular expression to match script tags
    var scriptRegex = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
    return scriptRegex.test(input);
}

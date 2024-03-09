
        function copyCode(n) {
            var codeSnippet;
            if (n === 1) {
                codeSnippet = document.getElementById('html');
            } else if (n === 2) {
                codeSnippet = document.getElementById('css');
            } else if (n === 3) {
                codeSnippet = document.getElementById('javascript');
            }
            var codeText = codeSnippet.textContent || codeSnippet.innerText;
            var tempTextArea = document.createElement('textarea');
            tempTextArea.value = codeText;
            document.body.appendChild(tempTextArea);
            tempTextArea.select();
            tempTextArea.setSelectionRange(0, 99999); 
            document.execCommand('copy');
            document.body.removeChild(tempTextArea);
            var copyButton = codeSnippet.parentElement.querySelector('.copy-button');
            copyButton.innerText = 'Copied!';
            copyButton.disabled = true;
            setTimeout(function() {
                copyButton.innerText = 'Copy';
                copyButton.disabled = false;
            }, 2500);
        }

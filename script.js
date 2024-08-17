document.getElementById('script-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const inputText = document.getElementById('input_text').value;

    fetch('https://your-python-server-url/run_script', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ input_text: inputText }),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('result').innerText = data.result;
    })
    .catch(error => console.error('Error:', error));
});

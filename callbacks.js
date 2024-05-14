document.getElementById('callbackBtn').addEventListener('click', function() {
    simulateDelay(function() {
        const callbackOutput = document.getElementById('callbackOutput');
        callbackOutput.innerText = "Callback executed after 5 seconds";
    });
});

function simulateDelay(callback) {
    setTimeout(callback, 5000); // 5000 milliseconds = 5 seconds
}

document.getElementById('fetchBtn').addEventListener('click', function() {
    fetchData(function(data) {
        const fetchOutput = document.getElementById('fetchOutput');
        fetchOutput.innerHTML = ''; // Clear previous content
        data.forEach(post => {
            const postTitle = document.createElement('p');
            postTitle.textContent = post.title;
            fetchOutput.appendChild(postTitle);
        });
    });
});

function fetchData(callback) {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            callback(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

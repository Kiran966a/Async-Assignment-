async function fetchData() {
    const resultContainer = document.getElementById('result');
    resultContainer.textContent = 'Loading...';

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        displayData(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        resultContainer.innerText = 'Error fetching data. Please try again later.';
    }
}

function displayData(data) {
    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = ''; // Clear previous content

    if (data && data.length > 0) {
        const ul = document.createElement('ul');
        data.forEach(post => {
            const li = document.createElement('li');
            li.textContent = post.title;
            ul.appendChild(li);
        });
        resultContainer.appendChild(ul);
    } else {
        resultContainer.innerText = 'No data available.';
    }
}

document.getElementById('fetchDataBtn').addEventListener('click', fetchData);

document.addEventListener("DOMContentLoaded", () => {
    fetch('publications.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('publications-content').innerHTML = data;
        })
        .catch(error => console.error('Error loading content:', error));
});

document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('button');
    btn.addEventListener('click', function () {
        let title = document.getElementById("title").value;
        let content = document.getElementById("content").value;
        let name = document.getElementById("name").value;


        // Create a new div element
        const newDiv = document.createElement('div');

        // Create an h2 element
        const newH2 = document.createElement('h2');
        newH2.textContent = title;

        const date = new Date();
        const dateP = document.createElement('p');
        dateP.textContent = `Posted on ${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()} by ${name}`

        // Create a p element
        const newP = document.createElement('p');
        newP.textContent = content;

        // Append the h2 and p elements to the div
        newDiv.appendChild(newH2);
        newDiv.appendChild(dateP);
        newDiv.appendChild(newP);

        let blog = document.getElementById("blog");

        // Append the new div to the body
        blog.appendChild(newDiv);
    });
});
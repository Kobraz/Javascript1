const query = document.location.search;

const params = new URLSearchParams(query);

const id = params.get("id");

console.log(id);

const url = 'https://fakestoreapi.com/products/' + id;

async function getDetail() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

 
    winTitle.innerHTML += `${data.title}`;
    titleContainer.innerHTML += `<div>${data.title}</div>`;
    categoryContainer.innerHTML += `<div>${data.category}</div>`;
    descriptionContainer.innerHTML += `<div>${data.description}</div>`;
    imageContainer.innerHTML += `<img src="${data.image}">`;

    if(data == 'undefined') {
        titleContainer.innerHTML = "Error retrieving data";
    } else {
        // titleContainer.innerHTML += `<div>${data.title}</div>`;
    }

}

getDetail();

if(data.title == null) {
    titleContainer.innerHTML = "Error retrieving data";
} else {

}




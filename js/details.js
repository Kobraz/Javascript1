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

    try {
        console.log(data.title);
    } catch (err) {
        alert("Error");
    }

}

getDetail();

// try {
//     console.log(data.title);
// } catch (exc) {
//     alert("Error");
// }




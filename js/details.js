const query = document.location.search;

console.log(query);

const params = new URLSearchParams(query);

console.log(params)

fetch(`https://fakestoreapi.com/products/${query}`).then((data)=>{
    
    return data.json();
}).then((objectData)=>{
    console.log(objectData[0].title);
    let tableData="";
    objectData.map((values)=>{
        tableData+=` <div>
        <td>${values.title}</td>
        <td>${values.description}</td>
        <td>${values.category}</td>
        <td>${values.price}</td>
        <td><img src="${values.image}"></td>
        </tr>`;
    });
    document.getElementById("tableBody").innerHTML=tableData;
}).catch((err)=>{
    console.log(err);
})

console.log(query);
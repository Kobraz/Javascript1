const query = document.location.search;

const params = new URLSearchParams(query);

const id = params.get("id");

console.log(id);

const url = 'https://fakestoreapi.com/products/' + id;

// fetch(url).then((data)=>{
    
//     return data.json();
// }).then((objectData)=>{
//     console.log(objectData.title, objectData.price);
//     console.log(data.json());
//     let tableData="";
//     objectData((values)=>{
//         tableData+=` <div>
//         <td>${values.title}</td>
//         <td>${values.description}</td>
//         <td>${values.category}</td>
//         <td>${values.price}</td>
//         <td><img src="${values.image}"></td>
//         </tr>`;
//     });

async function getDetail() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.title);
 }

getDetail();

//     document.getElementById("tableBody").innerHTML=tableData;
// }).catch((err)=>{
//     console.log(err);
// })


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c718b2dfccmsh0cbd42aac7fb08ep110b48jsnc0168724acac',
		'X-RapidAPI-Host': 'car-api2.p.rapidapi.com'
	}
};

fetch("https://car-api2.p.rapidapi.com/api/years", options).then((data)=>{
    // console.log(data); json format
    return data.json(); //converted to object
}).then((objectData)=>{
    console.log(objectData[0].title);
    let tableData="";
    objectData.map((values)=>{
        tableData+=` <tr>
        <td>${values.make}</td>
        <td>${values.description}</td>
        <td>${values.price}</td>
        <td><img src="${values.image}"></td>
        </tr>`;
    });
    document.getElementById("tableBody").innerHTML=tableData;
}).catch((err)=>{
    console.log(err);
})


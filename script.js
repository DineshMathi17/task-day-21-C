fetch("https://bobsburgers-api.herokuapp.com/characters/?limit=200&skip=100").then((data)=>{
    console.log(data)
      return data.json();
}).then((objectData)=>{
    console.log(objectData);
    let tableData="";
    objectData.map((values)=>{
        tableData+=`<tr>
        <td>${values.id}</td>
        <td>${values.name}</td>
        <td><img src="${values.image}"/></td>
        <td>${values.gender}</td>
        <td>${values.hairColor}</td>
        <td>${values.occupation}</td>
        <td>${values.firstEpisode}</td>
      
    </tr>
`;
    });
    document.getElementById("table_body").innerHTML=tableData
}).catch((err)=>{
    console.log(err)
})



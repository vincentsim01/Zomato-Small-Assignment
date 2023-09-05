var cafez=[
    {name:"Cafe Rum",
    Location: "Carribean",
    Phone:"12345678",
    Image:"./image/cafe1.jpg"
    },
    {name:"Cafe Licia",
    Location: "French",
    Phone:"7911131517",
    Image:"./image/cafe2.jpg"
    },
    {name:"Cafe Tuccini",
    Location: "Italy",
    Phone:"369121518",
    Image:"./image/cafe3.jpg"
    },
    {name:"Cafe Ver",
    Location: "China",
    Phone:"930301003",
    Image:"./image/cafe3.jpg"
    }
];

console.log("A");


cafez.forEach(cafeFunction=>{
    let cafecyril=document.createElement("button");
    cafecyril.phone=cafez.phone;
    cafecyril.innerHTML=`<img src="${cafez.Image}"/><br/>
                        <span>Cafe Name: ${cafez.name}</span><br/>
                        <span>Cafe Location: ${cafez.Location}</span><br/>`;

    document.getElementById("showCafe").appendChild(cafecyril);
});




// var showCafe=document.getElementById("showCafe");

// function showCafeFunction(){
//     let newCafe=document.createElement("button");
//     newCafe.innerHTML=`<img src="${cafez.Image}"/><br/>
//                         Cafe Name: ${cafez.name}<br/>
//                         Cafe Location: ${cafez.Location}<br/>`;

//     showCafe.appendChild(newCafe);
// }


// cafez.forEach(showCafeFunction);


var dataSet = [   
    { name: "Brielle Williamson", esp: "Integration Specialist", city: "New York", nose: "4804", year: "2012/12/02", salary: "$372,000" },
    { name:"Herrod Chandler", esp:"Sales Assistant", city:"San Francisco", nose:"9608", year:"2012/08/06", salary:"$137,500" },
    { name:"Rhona Davidson", esp:"Integration Specialist", city:"Tokyo", nose:"6200", year:"2010/10/14", salary:"$327,900" },
    { name:"Colleen Hurst", esp:"Javascript Developer", city:"San Francisco", nose:"2360", year: "2009/09/15", salary:"$205,500" },

    { name:"Sonya Frost", esp:"Software Engineer", city:"Edinburgh", nose:"1667", year:"2008/12/13", salary:"$103,600" },
    { name:"Jena Gaines", esp:"Office Manager", city:"London", nose:"3814", year:"2008/12/19", salary:"$90,560" },
    { name:"Quinn Flynn", esp:"Support Lead", city:"Edinburgh", nose:"9497", year:"2013/03/03", salary:"$342,000" },
    
    { name:"Tiger Nixon", esp:"System Architect", city:"Edinburgh", nose:"5421", year:"2011/04/25", salary:"$320,800"},
    { name:"Garrett Winters", esp:"Accountant", city:"Tokyo", nose:"8422", year:"2011/07/25", salary:"$170,750" },
    { name:"Ashton Cox", esp:"Junior Technical Author", city:"San Francisco", nose:"1562", year:"2009/01/12", salary:"$86,000"},
    { name:"Cedric Kelly", esp:"Senior Javascript Developer", city:"Edinburgh", nose:"6224", year:"2012/03/29", salary:"$433,060" },
    { name:"Airi Satou", esp:"Accountant", city:"Tokyo", nose:"5407", year:"2008/11/28", salary:"$162,700" },
    { name:"Charde Marshall", esp:"Regional Director", city:"San Francisco", nose:"6741",year: "2008/10/16", salary:"$470,600" },
    { name:"Haley Kennedy", esp:"Senior Marketing Designer", city:"London", nose:"3597", year:"2012/12/18", salary:"$313,500"},
    { name:"Tatyana Fitzpatrick", esp:"Regional Director", city:"London", nose:"1965", year:"2010/03/17", salary:"$385,750" },
    { name:"Michael Silva", esp:"Marketing Designer", city:"London", nose:"1581", year:"2012/11/27", salary:"$198,500" },
    { name:"Paul Byrd", esp:"Chief Financial Officer (CFO)", city:"New York", nose:"3059", year:"2010/06/09", salary:"$725,000" },
    { name:"Gloria Little", esp:"Systems Administrator", city:"New York", nose:"1721", year:"2009/04/10", salary:"$237,500" },
    { name:"Bradley Greer", esp:"Software Engineer", city:"London", nose:"2558", year:"2012/10/13", salary:"$132,000" },
    { name:"Dai Rios", esp:"Personnel Lead", city:"Edinburgh", nose:"2290", year:"2012/09/26", salary:"$217,500" },
    { name:"Jenette Caldwell", esp:"Development Lead", city:"New York", nose:"1937", year:"2011/09/03", salary:"$345,000" },
    { name:"Yuri Berry", esp:"Chief Marketing Officer (CMO)", city:"New York", nose:"6154", year:"2009/06/25", salary:"$675,000" },
    { name:"Caesar Vance", esp:"Pre-Sales Support", city:"New York", nose:"8330", year:"2011/12/12", salary:"$106,450" },
    { name:"Doris Wilder", esp:"Sales Assistant", city:"Sidney", nose:"3023", year:"2010/09/20", salary:"$85,600" },
    { name:"Angelica Ramos", esp:"Chief Executive Officer (CEO)", city:"London", nose:"5797", year:"2009/10/09", salary:"$1,200,000" },
    { name:"Gavin Joyce", esp:"Developer", city:"Edinburgh", nose:"8822", year:"2010/12/22", salary:"$92,575" },
    { name:"Jennifer Chang", esp:"Regional Director", city:"Singapore", nose:"9239", year:"2010/11/14", salary:"$357,650" },
    { nname:"Brenden Wagner", esp:"Software Engineer", city:"San Francisco", nose:"1314", year:"2011/06/07", salary:"$206,850" },
    { nname:"Fiona Green", esp:"Chief Operating Officer (COO)", city:"San Francisco", nose:"2947", year:"2010/03/11", salary:"$850,000" },
    { name:"Shou Itou", esp:"Regional Marketing", city:"Tokyo", nose:"8899", year:"2011/08/14", salary:"$163,000" },
    { name:"Michelle House", esp:"Integration Specialist", city:"Sidney", nose:"2769", year:"2011/06/02", salary:"$95,400" },
    { name:"Suki Burks", esp:"Developer", city:"London", nose:"6832", year:"2009/10/22", salary:"$114,500" },
    { name:"Prescott Bartlett", esp:"Technical Author", city:"London", nose:"3606", year:"2011/05/07", salary:"$145,000" },
    { name:"Gavin Cortez", esp:"Team Leader", city:"San Francisco", nose:"2860", year:"2008/10/26", salary:"$235,500" },
    { name:"Martena Mccray", esp:"Post-Sales support", city:"Edinburgh", nose:"8240", year:"2011/03/09", salary:"$324,050" },
    { name:"Unity Butler", esp:"Marketing Designer", city:"San Francisco", nose:"5384", year:"2009/12/09", salary:"$85,675" }
];


  
"Use strict"

/*
dataSet.sort(function(a, b){
   if(a.salary > b.salary){
       return 1;
   } 
   if(a.salary < b.salary){
       return -1;
   }
    return 0;    
});*/



//Function that Display the List
function Display(dataSet){
    dataSet.forEach(element => {   
   document.getElementById("table-array").innerHTML += `<tr>
        <td>${element.name}</td>
        <td>${element.city}</td>
        <td>${element.esp}</td>
        <td>${element.salary}</td>
        </tr> `;
        
    //To display in console */  
    console.log(element.name + ", " + element.city + " ," + element.esp + ", " + element.salary);    
  });
}

//Display(dataSet);

dataSet.sort().name;

Display(dataSet);

//function to sort by name by console
/*var sortedTress = dataSet.sort((a,b) => a.name - b.name);
console.log(sortedTress);

var sortedTress2 = dataSet.sort(function(a,b){
    if(a.name < b.name){
        return -1;
    }
    if(a.name > b.name){ 
    return 1;
    }
    return 0;
});*/

//console.log("Sorted tree array is = " + sortedTress2);

//funcition to sort by salary
/*var sortedTress = dataSet.sort((a,b) => a.salary - b.salary);
console.log(sortedTress);

var sortedTress2 = dataSet.sort(function(a,b){
    if(a.salary < b.salary){
        return -1;
    }
    if(a.salary > b.salary){ 
    return 1;
    }
    return 0;
});*/
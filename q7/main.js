let array = [
    { name: 'James', age: 9, country: 'United States' },
    { name: 'Rony', age: 31, country: 'United Kingdom' },
    { name: 'Peter', age: 58, country: 'Canada' },
    { name: 'Marks', age: 20, country: 'Spain' }
    ]
  
let tb = document.createElement('table');
let tr = document.createElement('tr');
for(i=0; i<3; i++){
    let th = document.createElement('th');
        th.textContent = Object.keys(array[1])[i];
    tr.appendChild(th); 
}

tb.appendChild(tr);
document.getElementById('table').appendChild(tb);

let tbody = document.createElement('tbody');
for(i=0; i<4; i++){
    let trb = document.createElement('tr');
    for(j=0; j<3; j++){
        let td = document.createElement('td');
        td.textContent = Object.values(array[i])[j];
        if(j === 1 && Number(td.textContent) < 10){
            trb.style.backgroundColor = "yellow";
        } else if((j === 1 &&  Number(td.textContent) >= 10 && Number(td.textContent) < 40)){
            trb.style.backgroundColor = "green";
        } else if(j === 1 &&  Number(td.textContent) >= 40 && Number(td.textContent) < 80){
            trb.style.backgroundColor = "red";
        } else if(j === 1 &&  Number(td.textContent) >= 80){
            trb.style.backgroundColor = "blue";
        }
        trb.appendChild(td);

    }
    tbody.appendChild(trb);
}

tb.appendChild(tbody);
tb.setAttribute("border", "1");
tb.style.borderCollapse = "separate";



var tr = document.querySelectorAll('tr');
console.log(tr);
tr[2].style.backgroundColor = "#bfdbfe";
tr[3].style.backgroundColor = "#f5d0fe";
tr[4].style.backgroundColor = "#d1fae5";
tr[5].style.backgroundColor = "#fecdd3";
tr[6].style.backgroundColor = "#fef9c3";
tr[7].style.backgroundColor = "#e0e7ff";
tr[8].style.backgroundColor = "#f9fafb";
tr[9].style.backgroundColor = "#1f2937";
tr[9].style.color = "white";



//q2 answer
var btn = document.createElement("button");
btn.className = "bg-blue-500 rounded text-white py-2 px-4 m-4 hover:bg-green-600";
btn.textContent = "Remove row";

document.getElementById('c1').prepend(btn);
btn.onclick = function removeRow(){
    for(i=1; i<=5; i++){
        tr[i].remove();
    }
}


//q3 answer
var addbtn = document.createElement("button");
addbtn.className = "bg-blue-500 rounded text-white py-2 px-4 m-4 hover:bg-green-600";
addbtn.textContent = "Add row";
document.getElementById('c1').append(addbtn);


 addbtn.onclick = function addRow(){
   for(i=0; i<=2; i++){
    let tr = document.createElement("tr");
    for(j=0; j<3; j++){
        let td = document.createElement("td");
        td.className = "px-6 pt-3 pb-2 text-medium col-3 text-left font-semibold";
        //td.textContent = "cell";
        tr.prepend(td);
    }
    tr.style.backgroundColor = "orange";
    document.getElementById('tb1').prepend(tr);
}
} 

 




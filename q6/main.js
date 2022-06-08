


function getAdd(){
let inputOne = document.getElementById('val1').value;
let inputTwo = document.getElementById('val2').value;

let result = Number(inputOne) + Number(inputTwo);

let r = document.getElementById('result');
r.textContent = `${result}`;
if(result % 2 === 0){
   r.style.color = "Blue";
} else {
    r.style.color = "red";
}
}
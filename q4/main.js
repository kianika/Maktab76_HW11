let arr = document.querySelectorAll('.mySlides');


//first slider
arr[0].style.backgroundColor = "#14b8a6";
arr[0].style.color = "white";
let th1 = document.createElement('h2');
th1.textContent = "REACT, VUE and HTML";

th1.style.width = "24vw";
th1.style.textAlign ="center";

arr[0].appendChild(th1);
let tp1 = document.createElement('p');
tp1.textContent = "Accessible, interactive examples for React and Vue powered by Headless UI plus Vanilla HTML if you'ld rather write any necessary JS yourslf.";
tp1.style.textAlign ="center";
tp1.style.width ="24vw";
arr[0].appendChild(tp1);

//second slider

arr[1].style.backgroundColor = "#f472b6";
arr[1].style.color = "white";
let th2 = document.createElement('h2');
th2.textContent = "TAILWIND CSS works by scanning all your HTML";
th2.style.width = "24vw";
th2.style.textAlign ="center";
arr[1].style.display = "none";
arr[1].appendChild(th2);

let tp2 = document.createElement('p');
tp2.textContent = "It's fast, flexible and reliable - with zero runtime";
tp2.style.textAlign ="center";
tp2.style.width ="24vw";
arr[1].appendChild(tp2);

//third slider

arr[2].style.backgroundColor = "#2563eb";
arr[2].style.color = "white";
let th3 = document.createElement('h2');
th3.textContent = "Your Big Ideia";
th3.style.width = "24vw";
th3.style.textAlign ="center";
arr[2].style.display = "none";
arr[2].appendChild(th3);

let tp3 = document.createElement('p');
tp3.textContent = "It's fast, flexible and reliable - with zero runtime";
tp3.style.textAlign ="center";
tp3.style.width ="24vw";
arr[2].appendChild(tp3);



//show the silde every 10 seconds

var index = 0;
showSlide();

function showSlide() {

    
    for(var i = 0; i < arr.length; i++) { 
        arr[i].style.display = "none"; 
    }

   
    index++;

    if(index > arr.length) { 
        index = 1; 
    }

    arr[index - 1].style.display = "flex";
    

   
    setTimeout(showSlide, 10000);
}








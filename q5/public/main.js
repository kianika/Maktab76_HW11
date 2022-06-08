let img = document.querySelectorAll('img');
console.log(img);

let array = ["https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg",
"https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg",
"https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg",
"https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg",
"https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg",
"https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg",
"https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"];

for(i=0; i<img.length; i++){
    img[i].src = array[i];
}
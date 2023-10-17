var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


//Лічильник
 const counter = function () {
  const btns = document.querySelectorAll('.counter__btn');
  let resalt = document.getElementById('num');
  //console.log(resalt);
  let count2 = document.getElementById('count2Number');
 // console.log(count2);
  let newPrice  = document.getElementById('price').innerHTML; 
  //console.log(newPrice); 
  let price  = document.querySelector('.price-1').innerHTML;
 //console.log(price);
 let chackout = document.getElementById("btn");
 //console.log(chackout);
 let spanElevent = document.querySelector('.icon-span');
 //console.log(spanElevent)
 
  btns.forEach(btn => {
    btn.addEventListener('click', function () {
      const direction = this.dataset.direction;
      const inp = this.parentElement.querySelector('.counter__value ');
      const currentValue = +inp.value;
      let newValue;

      if (direction === 'plus') {
        newValue = currentValue + 1;
      }
       if (direction === 'minus') {
        newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;
      } 
      if(newValue > 0 ){
        resalt.addEventListener('click', function () {
          number = count2.value = inp.value;
          numberValid = number*1;
          newPrice = (numberValid) * (price*1);
          document.getElementById('price').innerHTML = newPrice ; 
          spanElevent.classList.add("active");
          document.getElementById("myinput").innerHTML = count2.value;  
        } );
      } 
      chackout.addEventListener(`click`, function () {
        spanElevent.classList.remove("active");
        spanElevent.classList.add("lock");

        function save() {  
        let oldPrice = 0;
          if (newValue === 0) {
          document.getElementById('price').innerHTML = oldPrice; 
        } 
        console.log(newPrice= oldPrice);
       }
         save() ;  
               
    }
    ) 
 
      
    
    inp.value = newValue;      
    });
      
  });
  /* 
  document.getElementById("btn").addEventListener(`click`, function(e) {
    spanElevent.classList.remove("active");
    spanElevent.classList.add("lock");
       
    newPrice === 0;
    document.getElementById("count2Number") === 1;
    document.getElementById("countNumber") === 0;
}) 
console.log(newPrice);*/
} 

counter(); 
 

//Відкриття картки
var icon = document.getElementById('icon-card');
var par = document.getElementById('card');
var btn = document.getElementById('btn');

icon.onclick = function() {
  par.classList.add("active");

};
btn.onclick = function() {
  par.classList.remove("active");
  par.classList.add("lock");
  par.classList.remove("lock");
};



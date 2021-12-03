const container= document.querySelector('.container');
const searchInput=document.querySelector('.search-input');
const cityWrapper=document.querySelector('.all-cities');
 const cities=document.querySelectorAll('.all-cities li');

 cities.forEach(city =>{
          searchInput.addEventListener('keyup', function(){
         if(city.innerHTML.startsWith(this.value.trim())){
             city.style.backgroundColor="green";
             city.style.color="#fff";
             city.style.border="none";
             city.style.display="block";
         }else{
             city.style.display="none";
         }
     })
    })
 


 cities.forEach(city => {
     city.addEventListener('click', function(){
         searchInput.value = this.innerHTML;
     })
 })
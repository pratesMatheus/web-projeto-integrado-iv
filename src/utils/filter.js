const filterElement = document.querySelector('.box_search input');
const cakes = document.querySelectorAll('.cake_box');

filterElement.addEventListener('input', filterCakes);

function filterCakes(){
  if(filterElement.value !== ''){
    for( let cake of cakes) {
      let title = cake.querySelector('.cake_title');
      let format = cake.querySelector('.cake_info');
      let filterText = filterElement.value.toLowerCase();
      
      title = title.textContent.toLowerCase();
      format = format.textContent.toLowerCase();

      if(!title.includes(filterText) && !format.includes(filterText)){
        cake.style.display = 'none';
      }else {
        cake.style.display = 'block';
      }
    }
  } else {
    for(let cake of cakes){
      cake.style.display = 'block';
    }
  }
}
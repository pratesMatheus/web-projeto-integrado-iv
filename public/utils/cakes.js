const CAKES = document.querySelector("#cakes");

const cake=[
  ['/assets/items/cake1.png', 'Baunilha Cremoso', 'Redondo','Baunilha'],
  ['/assets/items/cake2.png', 'Flora', 'Redondo','Casamento'],
  ['/assets/items/cake3.png', 'Cenoura com Cobertura', 'Quadrado','Simples'],
  ['/assets/items/cake4.png', 'Noivos', 'Redondo','Casamento'],
  ['/assets/items/cake5.png', 'Brigadeiro', 'Redondo','Per.'],
  ['/assets/items/cake6.png', 'Cenoura com Cauda', 'Redondo','Simpeles'],
  ['/assets/items/cake7.png', 'Bouquet', 'Redondo','Casamento'],
  ['/assets/items/cake8.png', 'Chocolate', 'Quadrado','Per.'],
  ['/assets/items/cake9.png', 'Prestígio', 'Quadrado','Simples'],
  ['/assets/items/cake10.png', 'Beijinho', 'Redondo','Per.']
];

for (let i = 0; i < cake.length; i++) {
  const divElement = document.createElement('div');
  divElement.classList.add('cake_box');
  
  divElement.innerHTML = `
    <img class="cake_img" src=".${cake[i][0]}" alt="">
    <p class="cake_title">${cake[i][1]}</p>
    <div class="cake_info">
      <div class="cake_format_type">
        <span>${cake[i][2]}</span>
        <span>${cake[i][3]}</span>
      </div>
      <span>1 <b>Kg</b></span>
    </div>
    <p class="cake_price">.</p>
  `;
  CAKES.appendChild(divElement);
}
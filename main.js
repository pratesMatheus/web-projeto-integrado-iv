const FAQ = document.querySelector('#faq');

const PR = [
  ['Quais os sabores e bolos disponíveis?','Todos os bolos e seus respectivos sabores se encontram acima em nossa vitrine, na seção acima. Seção de cardápio!'],
  ['E quanto a taxa de entrega?','Ao realizar seu pedido, você tem a opção de escolher retirar no nosso estabelecimento físico, ou entrega via delivery. Ao fazer seu pedido através de um de nossos contatos, você terá opção de retirar aonde você preferir. Se optar por delivery, você terá as seguintes opções de veículos que entregarão em sua residência: carro e moto. E dependendo da distância do nosso estabelecimento, o custo será maior. Podem ficar tranquilos que nossos motoristas são extremamente responsáveis e capazes de entregar de maneira segura seus respectivos bolos. O pagamento pode ser feito tanto por Pix, cartão de débito ou crédito, você decide no momento em que realiza o pedido.'],
  ['E se eu quiser algo diferente do que está no cardápio?','Você tem a opção de especificar algo que queira adicionar na receita do bolo. Ao pedir, escreva o que quer em seu bolo de diferente, e assim faremos.'],
  ['Além de bolos, o que mais vocês têm?','Fazemos além de bolos, outros doces de festa, por exemplo: brigadeiro, beijinho, cupcakes e pães de mel. Encomende conosco, garanto que não vai se arrepender!'],
  ['Olhei o menu de vocês... Tem algum desconto?','Disponibilizamos descontos através de datas especiais e feriados. Vocês serão notificados através de nossas redes sociais, quando e quais descontos estarão disponíveis. Fiquem atentos, pois é por tempo limitado!'],
  ['E para contratar vocês? Tenho um pedido dos grandes...','Tenha consciência de escolher o veículo adequado para seu tipo de bolo, por exemplo: caso queira escolher um bolo de 2 andares, opte por escolher o carro, já que é mais seguro e não irá danificar seu bolo. Você sempre será avisado do trajeto do veículo, e quanto tempo levará para chegar em seu destino.']
];

for (let i = 0; i < PR.length; i++) {
  const detailsElement = document.createElement('details');
  detailsElement.innerHTML = `
    <summary>${i + 1}° Pergunta: ${PR[i][0]}</summary>
    <p><b>R</b>: ${PR[i][1]}</p>
  `;
  FAQ.appendChild(detailsElement);
}
/*
1: Todos
2 - 

3 - Você tem a opção de especificar algo que queira adicionar na receita do bolo. Ao pedir, escreva o que quer em seu bolo de diferente, e assim faremos;

4 - Fazemos além de bolos, outros doces de festa, por exemplo: brigadeiro, beijinho, cupcakes e pães de mel. Encomende conosco, garanto que não vai se arrepender!

5 - Disponibilizamos descontos através de datas especiais e feriados. Vocês serão notificados através de nossas redes sociais, quando e quais descontos estarão disponíveis. Fiquem atentos, pois é por tempo limitado!

6 - Tenha consciência de escolher o veículo adequado para seu tipo de bolo, por exemplo: caso queira escolher um bolo de 2 andares, opte por escolher o carro, já que é mais seguro e não irá danificar seu bolo. Você sempre será avisado do trajeto do veículo, e quanto tempo levará para chegar em seu destino.

*/
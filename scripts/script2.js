function load() {
  let produtos = [];
  let init = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    mode: 'cors',
    cache: 'default' };
    
    let request = new Request("./data/data2.json", init);
    
    fetch(request)
    .then(resp => {
      return resp.json();
    })
    .then( data => {
      console.log(data.data);
      produtos = data.data;
      console.log(produtos.length)
      let div = document.getElementById('data');
      console.log(div)
      for(let i = 0;i < produtos.length; i+=1)
      {
        if(i === 0){
          div.insertAdjacentHTML('afterbegin', 
        `<div class="carousel__photo initial">
        <div>
        <a href="${produtos[i].link}"><img class="photo" src="${produtos[i].img}"></a>
        </div>
        <div class="descricao__wrapper">
          <p>${produtos[i].nome}</p>
          <p>${produtos[i].quantiade}</p>
        </div>
        <div class="price__wrapper">
          <div class="price__firstson">
            <span>${produtos[i].parcelas}X <span class="price__coin">R$</span> <span class="price__price">${produtos[i].precoParcelas}</span> <span class="price__decimal">,${produtos[i].centavosParcelas}</span> </br> <span class="price__taxes">sem juros</span></span>
            <div>
            <a><img width="30px" src="../style/img/Visa.png"></a>
            <a><img width="30px" src="../style/img/mastercard-2019.jpg"></a>
            </div>
          </div>
          <div class="price__money">
            <span>ou R$${produtos[i].vista} à vista</span>
          </div>
          <div class="price__taxes_true">
            <span>${produtos[i].parcelasJuros}X <span class="price__coin">R$</span> <span class="price__price">${produtos[i].precoParcelasJuros}</span> <span class="price__decimal">,${produtos[i].centavosParcelasJuros}</span> </br> <span class="price__taxes">com juros</span></span>
          </div>
      </div>
    </div>`)
        }
        
        div.insertAdjacentHTML('afterbegin', 
        `<div class=" carousel__photo">
        <div>
        <a href="${produtos[i].link}"><img class="photo" src="${produtos[i].img}"></a>
        </div>
        <div class="descricao__wrapper">
          <p>${produtos[i].nome}</p>
          <p>${produtos[i].quantiade}</p>
        </div>
        <div class="price__wrapper">
          <div class="price__firstson">
            <span>${produtos[i].parcelas}X <span class="price__coin">R$</span> <span class="price__price">${produtos[i].precoParcelas}</span> <span class="price__decimal">,${produtos[i].centavosParcelas}</span> </br> <span class="price__taxes">sem juros</span></span>
            <div>
            <a><img width="30px" src="../style/img/Visa.png"></a>
            <a><img width="30px" src="../style/img/mastercard-2019.jpg"></a>
            </div>
          </div>
          <div class="price__money">
            <span>ou R$${produtos[i].vista} à vista</span>
          </div>
          <div class="price__taxes_true">
            <span>${produtos[i].parcelasJuros}X <span class="price__coin">R$</span> <span class="price__price">${produtos[i].precoParcelasJuros}</span> <span class="price__decimal">,${produtos[i].centavosParcelasJuros}</span> </br> <span class="price__taxes">com juros</span></span>
          </div>
      </div>
    </div>`)}
    }).then( datas => {
      console.log('carro')
      !(function(d){
        var itemClassName = "carousel__photo";
            items = d.getElementsByClassName(itemClassName),
            totalItems = items.length,
            console.log('items',items)
            console.log('items',items)
            slide = 0,
            moving = true; 
      
        function setInitialClasses() {
      
          items[totalItems - 1].classList.add("prev");
          items[0].classList.add("active");
          items[1].classList.add("next");
        }
      
      
        function setEventListeners() {
          var next = d.getElementsByClassName('carousel__button--next')[0],
              prev = d.getElementsByClassName('carousel__button--prev')[0];
      
          next.addEventListener('click', moveNext);
          prev.addEventListener('click', movePrev);
        }
      
        function disableInteraction() {
          moving = true;
      
          setTimeout(function(){
            moving = false
          }, 500);
        }
      
        function moveCarouselTo(slide) {
      
          if(!moving) {
      
            disableInteraction();
      
            var newPrevious = slide - 1,
                newNext = slide + 1,
                oldPrevious = slide - 2,
                oldNext = slide + 2;
      
            if ((totalItems - 1) > 3) {
      
              if (newPrevious <= 0) {
                oldPrevious = (totalItems - 1);
              } else if (newNext >= (totalItems - 1)){
                oldNext = 0;
              }
      
              if (slide === 0) {
                newPrevious = (totalItems - 1);
                oldPrevious = (totalItems - 2);
                oldNext = (slide + 1);
              } else if (slide === (totalItems -1)) {
                newPrevious = (slide - 1);
                newNext = 0;
                oldNext = 1;
              }
      
      
              items[oldPrevious].className = itemClassName;
              items[oldNext].className = itemClassName;
      
              items[newPrevious].className = itemClassName + " prev";
              items[slide].className = itemClassName + " active";
              items[newNext].className = itemClassName + " next";
            }
          }
        }
      
        function moveNext() {
      
          if (!moving) {
      
            if (slide === (totalItems - 1)) {
              slide = 0;
            } else {
              slide++;
            }
      
            moveCarouselTo(slide);
          }
        }
      
        function movePrev() {
      
          if (!moving) {
      
            if (slide === 0) {
              slide = (totalItems - 1);
            } else {
              slide--;
            }
      
            moveCarouselTo(slide);
          }
        }
      
        function initCarousel() {
          setInitialClasses();
          setEventListeners();
          console.log('teste')
      
          moving = false;
        }
      
        initCarousel();
      }(document));
    })

  }
// ТОВАРЫ ИЗ МОК ОТ1ГО ДО8 1 ПАРТИЯ
const URLInstruments = "https://run.mocky.io/v3/96bf7b4e-f884-4c4e-941a-34eef7373fea"; 

// ТОВАРЫ ИЗ МОК ОТ9ГО ДО16 2 ПАРТИЯ
const URLShine = "https://run.mocky.io/v3/8654a469-0d34-4795-8a7b-857127d0a65a";

// ТОВАРЫ ИЗ МОК ОТ17ГО ДО24 3 ПАРТИЯ
const URLSound = "https://run.mocky.io/v3/2b80f8df-8168-48e2-a95d-af79dc1feb22";

// ТОВАРЫ ИЗ МОК ОТ25ГО ДО31 4 ПАРТИЯ
const URLMarkdown = "https://run.mocky.io/v3/1af3180d-44ff-4dac-9f74-428d57eb1ac2";

const Services = "services.js";
let cart = {}; // Переменная с пустым объектом

// let sums = {}; // Переменная с пустым объектом

let goods = []; // Переменная с пустым массивом ДЛЯ 1 ПАРТИЯ
let goodsLight = []; // Переменная с пустым массивом ДЛЯ 2 ПАРТИЯ
let goodsSound = []; // Переменная с пустым массивом ДЛЯ 3 ПАРТИЯ
let goodsMarkdown = []; // Переменная с пустым массивом ДЛЯ 4 ПАРТИЯ

let goodsData = []; // Переменная с пустым массивом ДЛЯ ОЕДИНЕНИЯ ЧЕТВЕРЫХ


/**
*!  ПОЛУЧАЕТ ИЗ МОК И ОТПРАВЛЯЕТ В ПУСТОЙ МАССИВ ОТКРЫВАЯ showGoods();  showGoodsLight();  showGoodsSound();  showGoodsMarkdown(); getData (); 
*/
let getGoods = () => {
    fetch(URLInstruments)
    .then(response => response.json())
    .then(data => {
        goods = data;
        showGoods();
    });
    fetch(URLShine)
    .then(response => response.json())
    .then(data => {
        goodsLight = data;
        showGoodsLight();
    });
    fetch(URLSound)
    .then(response => response.json())
    .then(data => {
        goodsSound = data;
        showGoodsSound();
    });
    fetch(URLMarkdown)
    .then(response => response.json())
    .then(data => {
        goodsMarkdown = data;

        showGoodsMarkdown();
        getDataOne();
    });
    
    
}

/**
*!  ПОЛУЧАЕТ  МАССИВ И ВЫВОДИТ ТОВАРЫ В HTML КОНЦЕ ОТКРЫВАЕТ ('click', addToCart);
*/
let showGoods = () => {
    
    let out = '';
    let data = goods;
    for(let key in data){
        out += '<div class="display-products-block">';
        out += '<div class="block-image-display-product">';
        out += '<img src="image/' + data[key].img + '" alt="">';
        out += '</div>';
        out += '<div class="info-product">';
        out += '<h4> ' + data[key].name + ' </h4>';
        out += '<span>' + data[key].desc +'</span>';
        out += '<div class="block-price">';
        out += '<span class="price">' + data[key].price + '</span>';
        out += '<span class="discount-price priseProduct">' + data[key].priceDiscount+ '</span>';
        out += '<span class="discount-price">' + data[key].valuta + '</span>';
        out += '</div>';
        out += '</div>';
        out += '<div class="block-btn-hover">';
        out += '<button data-id="'+ data[key].id +'" class="btn-style-product active-btn-product">';
        out += '<img src="img/ion-cart-btn.png" alt="">';
        out += '</button>';
        out += '<button data-id="'+ data[key].id +'" class="btn-style-product-comparison">';
        out += '<img src="img/ion-cart-comparison.png" alt="">';
        out += '</button>';
        out += '<button class="btn-style-product-chosen">';
        out += '<img src="img/ion-cart-chosen.png" alt="">';
        out += '</button>';
        out += '</div>';
        out += '</div>';
    }
    document.querySelector('#banner-product-owl').innerHTML = out;

    let btns = document.querySelectorAll('.btn-style-product');
    let btnProduct = document.querySelectorAll('.btn-style-product-comparison');

	for(let i=0; i < btns.length; i++){
		btns[i].addEventListener('click', addToCart);
	}
    for(let i=0; i < btnProduct.length; i++){
		btnProduct[i].addEventListener('click', moreAboutTheProduct);
	}
}

/**
*!  ПОЛУЧАЕТ  МАССИВ И ВЫВОДИТ ТОВАРЫ В HTML КОНЦЕ ОТКРЫВАЕТ ('click', addToCart);
*/
let showGoodsLight = () => {
    let out = '';
    let data = goodsLight;
    for(let key in data){
        out += '<div class="display-products-block">';
        out += '<div class="block-image-display-product">';
        out += '<img src="image/' + data[key].img + '" alt="">';
        out += '</div>';
        out += '<div class="info-product">';
        out += '<h4> ' + data[key].name + ' </h4>';
        out += '<span>' + data[key].desc +'</span>';
        out += '<div class="block-price">';
        out += '<span class="price">' + data[key].price + '</span>';
        out += '<span class="discount-price priseProduct">' + data[key].priceDiscount+ '</span>';
        out += '<span class="discount-price">' + data[key].valuta + '</span>';
        out += '</div>';
        out += '</div>';
        out += '<div class="block-btn-hover">';
        out += '<button data-id="'+ data[key].id +'" class="btn-style-product active-btn-product">';
        out += '<img src="img/ion-cart-btn.png" alt="">';
        out += '</button>';
        out += '<button data-id="'+ data[key].id +'" class="btn-style-product-comparison">';
        out += '<img src="img/ion-cart-comparison.png" alt="">';
        out += '</button>';
        out += '<button class="btn-style-product-chosen">';
        out += '<img src="img/ion-cart-chosen.png" alt="">';
        out += '</button>';
        out += '</div>';
        out += '</div>';
    }
    document.querySelector('#banner-product-owl-two').innerHTML = out;

    let btns = document.querySelectorAll('.btn-style-product');
    let btnProduct = document.querySelectorAll('.btn-style-product-comparison');

	for(let i=0; i < btns.length; i++){
		btns[i].addEventListener('click', addToCart);
	}
    for(let i=0; i < btnProduct.length; i++){
		btnProduct[i].addEventListener('click', moreAboutTheProduct);
	}
}

/**
*!  ПОЛУЧАЕТ  МАССИВ И ВЫВОДИТ ТОВАРЫ В HTML КОНЦЕ ОТКРЫВАЕТ ('click', addToCart);
*/
let showGoodsSound = () => {
    let out = '';
    let data = goodsSound;
    for(let key in data){
        out += '<div class="display-products-block">';
        out += '<div class="block-image-display-product">';
        out += '<img src="image/' + data[key].img + '" alt="">';
        out += '</div>';
        out += '<div class="info-product">';
        out += '<h4> ' + data[key].name + ' </h4>';
        out += '<span>' + data[key].desc +'</span>';
        out += '<div class="block-price">';
        out += '<span class="price">' + data[key].price + '</span>';
        out += '<span class="discount-price priseProduct">' + data[key].priceDiscount+ '</span>';
        out += '<span class="discount-price">' + data[key].valuta + '</span>';
        out += '</div>';
        out += '</div>';
        out += '<div class="block-btn-hover">';
        out += '<button data-id="'+ data[key].id +'" class="btn-style-product active-btn-product">';
        out += '<img src="img/ion-cart-btn.png" alt="">';
        out += '</button>';
        out += '<button data-id="'+ data[key].id +'" class="btn-style-product-comparison">';
        out += '<img src="img/ion-cart-comparison.png" alt="">';
        out += '</button>';
        out += '<button class="btn-style-product-chosen">';
        out += '<img src="img/ion-cart-chosen.png" alt="">';
        out += '</button>';
        out += '</div>';
        out += '</div>';
    }
    document.querySelector('#banner-product-owl-three').innerHTML = out;

    let btns = document.querySelectorAll('.btn-style-product');
    let btnProduct = document.querySelectorAll('.btn-style-product-comparison');

	for(let i=0; i < btns.length; i++){
		btns[i].addEventListener('click', addToCart);
	}
    for(let i=0; i < btnProduct.length; i++){
		btnProduct[i].addEventListener('click', moreAboutTheProduct);
	}
}

/**
*!  ПОЛУЧАЕТ  МАССИВ И ВЫВОДИТ ТОВАРЫ В HTML КОНЦЕ ОТКРЫВАЕТ ('click', addToCart);
*/
let showGoodsMarkdown = () => {
    let out = '';
    let data = goodsMarkdown;
    for(let key in data){
        out += '<div class="display-products-block">';
        out += '<div class="block-image-display-product">';
        out += '<img src="image/' + data[key].img + '" alt="">';
        out += '</div>';
        out += '<div class="info-product mr-b">';
        out += '<h4> ' + data[key].name + ' </h4>';
        out += '<span>' + data[key].desc +'</span>';
        out += '<div class="block-price">';
        out += '<span class="price">' + data[key].price + '</span>';
        out += '<span class="discount-price priseProduct">' + data[key].priceDiscount + '</span>';
        out += '<span class="discount-price">' + data[key].valuta + '</span>';
        out += '</div>';
        out += '</div>';
        out += '<div class="block-btn-hover">';
        out += '<button data-id="'+ data[key].id +'" class="btn-style-product active-btn-product">';
        out += '<img src="img/ion-cart-btn.png" alt="">';
        out += '</button>';
        out += '<button data-id="'+ data[key].id +'" class="btn-style-product-comparison">';
        out += '<img src="img/ion-cart-comparison.png" alt="">';
        out += '</button>';
        out += '<button class="btn-style-product-chosen">';
        out += '<img src="img/ion-cart-chosen.png" alt="">';
        out += '</button>';
        out += '</div>';
        out += '</div>';
    }
    document.querySelector('#banner-product-owl-four').innerHTML = out;

    let btns = document.querySelectorAll('.btn-style-product');
    let btnProduct = document.querySelectorAll('.btn-style-product-comparison');

	for(let i=0; i < btns.length; i++){
		btns[i].addEventListener('click', addToCart);
	}
    for(let i=0; i < btnProduct.length; i++){
		btnProduct[i].addEventListener('click', moreAboutTheProduct);
	}
}

/**
*!  УВЕЛИЧИВАЕТ КОЛИЧЕСТВА ТОВАРОВ И СОХРЯНАЕТ В LOCAL STORAGE  ОТКРЫВАЕТ showSum(); showCartBtn();
*/
function addToCart(){
	let id = this.getAttribute('data-id');
    
	if(cart[id]){
		cart[id]++;
	} else {
		cart[id] = 1;
	}
	localStorage.setItem('cart', JSON.stringify(cart));
    showSum();
    showCartBtn();
}

/**
*!  ОБЕДИНЯЕТ ДАННЫЕ ИЗ МОК  В ОДИН МАССИВ И ОТКРЫВАЕТ   showSum();
*/
let collectedData = '';
function getDataOne (){
    collectedData = goods.concat(goodsLight, goodsSound, goodsMarkdown);
    showSum();
}

/**
*!  ВЫВОДИТ СУММУ ТОВАРОВ РАДОМ КОРЗИНОЙ 
*/
function showSum(){
    let json = localStorage.getItem('cart');
	if(!json){
		cart = {};
	} else{
		cart = JSON.parse(json);
	}
	let s = 0;
	for(let key in cart){
		for(let key2 in collectedData){
			if(key == collectedData[key2].id){
				s += collectedData[key2].priceDiscount * cart[key];
			}
		}
	}
	document.querySelector('.price-sum').innerHTML = s
}

/**
*!  ПРОВЕРЯЕТ LOCAL STORAGE ЕСЛИ КЛЮЧ CART ЕСТЬ ТО ИЗМЕНЯЕТ CSS КОРЗИНЫ НА DISPLAY BLOCK
*/
function showCartBtn(){
	let json = localStorage.getItem('cart');
	if(json){
		document.querySelector('.cart').style.display = "flex";
	}
}


/**
*!  КНОПКА ПОРОБНЕЕ О ТОВАРЕ
*/
function moreAboutTheProduct(){
    let id = this.getAttribute('data-id');
    let cartbtn = {};
	cartbtn[id] = 1;
    localStorage.setItem('cartbtn', JSON.stringify(cartbtn));
    
    document.querySelector('.sale-of-tools').style.display = "none";
    document.querySelector('.readmore').style.display = "block";
    document.querySelector('.services').style.display = "none";
    document.querySelector('.promotions').style.display = "none";
    document.querySelector('.news-reviews').style.display = "none";
    document.querySelector('#banner-owl').classList.add('image-banner-height');
    showCart();
    getData();
    
}
/**
*!  ОБЕДИНЯЕТ ДАННЫЕ ИЗ МОК  В ОДИН МАССИВ И ОТКРЫВАЕТ   showGoods(goodsData);
*/
function getData (){
    goodsData = goods.concat(goodsLight, goodsSound, goodsMarkdown);

    showGoodsRead(goodsData);
}
function showCart (){
    let json = localStorage.getItem('cartbtn');
    if(!json){
		document.querySelector('.container-modal').style.display = "block";
		document.querySelector(".modal-text-h4").innerText = productLoadingFirst;
		
		setTimeout( function (){
			document.querySelector('.sale-of-tools').style.display = "block";
		}, 4000);
        
    }
    else{
        cart = JSON.parse(json);
    }
    showGoodsRead();
}




/**
*!  ПОЛУЧАЕТ ОБЕДИНЕННЫЙ МАССИВ И ВЫВОДИТ ТОВАРЫ В HTML КОНЦЕ ОТКРЫВАЕТ showSum();
*/
function showGoodsRead(){
    let out = '';
    for(let key in cart){
        for(let key2 in goodsData){
            if(key == goodsData[key2].id){
                out += '<div class="display-products-block-read">';
                out += '<img src="image/' + goodsData[key2].img + '" alt="">';
                out += '<div class="info-product-read">';
                out += '<div class="info-product-read-desc">';
                out += '<h4> ' + goodsData[key2].name + ' </h4>';
                out += '<span>' + goodsData[key2].desc +'</span>';
                out += '</div>';
                out += '<div class="">';
                out += '<span class="">' + goodsData[key2].price + '</span>';
                out += '<span class="discount-price-cart priseProduct">' + goodsData[key2].priceDiscount + '</span>';
                out += '<span class="discount-price-cart">' + goodsData[key2].valuta + '</span>';
                out += '</div>';
                out += '</div>';
                out += '</div>';
            }
        }
    }
    document.querySelector('.readmore-item').innerHTML = out;
    

    // element.addEventListener('click', backShow);
};
let backbtn = document.querySelector('.back-btn');
backbtn.onclick = function (){
    document.querySelector('.readmore').style.display = "none";
    document.querySelector('.sale-of-tools').style.display = "block";
    document.querySelector('.services').style.display = "block";
    document.querySelector('.promotions').style.display = "block";
    document.querySelector('.news-reviews').style.display = "block";
}


showCartBtn();
getGoods();




/**
*!  ПЕРЕХОД МЕЖДУ 4 ВИДАМИ ТОВАРОВ
*/

let first = document.querySelector('#first');
let second = document.querySelector('#second');
let third = document.querySelector('#third');
let fourth = document.querySelector('#fourth');


first.onclick = function(){
    document.querySelector('.one').style.display = "block";
    document.querySelector('.two').style.display = "none";
    document.querySelector('.three').style.display = "none";
    document.querySelector('.four').style.display = "none";
    document.querySelector('#first').style.background = "#ff2d2d";
    document.querySelector('#second').style.background = "rgba(255, 255, 255, 0)";
    document.querySelector('#third').style.background = "rgba(255, 255, 255, 0)";
    document.querySelector('#fourth').style.background = "rgba(255, 255, 255, 0)";
}
second.onclick = function(){
    document.querySelector('.one').style.display = "none";
    document.querySelector('.two').style.display = "block";
    document.querySelector('.three').style.display = "none";
    document.querySelector('.four').style.display = "none";
    document.querySelector('#first').style.background = "rgba(255, 255, 255, 0)";
    document.querySelector('#second').style.background = "#ff2d2d";
    document.querySelector('#third').style.background = "rgba(255, 255, 255, 0)";
    document.querySelector('#fourth').style.background = "rgba(255, 255, 255, 0)";
}
third.onclick = function(){
    document.querySelector('.one').style.display = "none";
    document.querySelector('.two').style.display = "none";
    document.querySelector('.three').style.display = "block";
    document.querySelector('.four').style.display = "none";
    document.querySelector('#first').style.background = "rgba(255, 255, 255, 0)";
    document.querySelector('#second').style.background = "rgba(255, 255, 255, 0)";
    document.querySelector('#third').style.background = "#ff2d2d";
    document.querySelector('#fourth').style.background = "rgba(255, 255, 255, 0)";
}
fourth.onclick = function(){
    document.querySelector('.one').style.display = "none";
    document.querySelector('.two').style.display = "none";
    document.querySelector('.three').style.display = "none";
    document.querySelector('.four').style.display = "block";
    document.querySelector('#first').style.background = "rgba(255, 255, 255, 0)";
    document.querySelector('#second').style.background = "rgba(255, 255, 255, 0)";
    document.querySelector('#third').style.background = "rgba(255, 255, 255, 0)";
    document.querySelector('#fourth').style.background = "#ff2d2d";
}

let btnNav = document.querySelector('.btn-nav');

btnNav.onclick = function(){
    document.querySelector('.nav-menu-mobile').classList.toggle('display-block-nav');
    document.querySelector('.header_fixed').classList.toggle('bacground-mobile');
}




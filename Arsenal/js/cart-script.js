// ТОВАРЫ ИЗ МОК ОТ1ГО ДО8 1 ПАРТИЯ
const URLInstruments = "https://run.mocky.io/v3/96bf7b4e-f884-4c4e-941a-34eef7373fea"; 

// ТОВАРЫ ИЗ МОК ОТ9ГО ДО16 2 ПАРТИЯ
const URLShine = "https://run.mocky.io/v3/8654a469-0d34-4795-8a7b-857127d0a65a";

// ТОВАРЫ ИЗ МОК ОТ17ГО ДО24 3 ПАРТИЯ
const URLSound = "https://run.mocky.io/v3/2b80f8df-8168-48e2-a95d-af79dc1feb22";

// ТОВАРЫ ИЗ МОК ОТ25ГО ДО31 4 ПАРТИЯ
const URLMarkdown = "https://run.mocky.io/v3/1af3180d-44ff-4dac-9f74-428d57eb1ac2";

let cart = {}; // Переменная с пустым объектом

let goods = []; // Переменная с пустым массивом ДЛЯ 1 ПАРТИЯ
let goodsLight = []; // Переменная с пустым массивом ДЛЯ 2 ПАРТИЯ
let goodsSound = []; // Переменная с пустым массивом ДЛЯ 3 ПАРТИЯ
let goodsMarkdown = []; // Переменная с пустым массивом ДЛЯ 4 ПАРТИЯ
let goodsData = []; // Переменная с пустым массивом ДЛЯ ОЕДИНЕНИЯ ЧЕТВЕРЫХ

let subtotal_sum = 0; // Сумма заказаных товаров без скидки и без доставки
let delivery_sum = 0; // Сумма доставки
let discount_sum = 0; // Сумма скидки
let total = 0; // Общая итоговая сумма со скиками и доставками
let productLoadingFirst = 'ВЫ не выбрали товар !!!'; // ПЕРЕМЕНАЯ ДЛЯ МОДАЛЬНОГО ОКНА
let productLoadingSecond = 'Выведите купон!!!'; // ПЕРЕМЕНАЯ ДЛЯ МОДАЛЬНОГО ОКНА
let productLoadingThethird = 'Не правильно введен номер купона!!!'; // ПЕРЕМЕНАЯ ДЛЯ МОДАЛЬНОГО ОКНА
let productLoadingFourth = 'Выберите город достаки!!!'; // ПЕРЕМЕНАЯ ДЛЯ МОДАЛЬНОГО ОКНА
let productNotSent = 'Произошла ошибка!!!'; // ПЕРЕМЕНАЯ ДЛЯ МОДАЛЬНОГО ОКНА
let productSent = 'Данные успешно отправлены!!!'; // ПЕРЕМЕНАЯ ДЛЯ МОДАЛЬНОГО ОКНА
let theOutside; // ПУСТАЯ ПЕРЕМЕННАЯ ДЛЯ АДРЕСА ДОСТАВКИ УЛИЦА
let houseApartment; // ПУСТАЯ ПЕРЕМЕННАЯ ДЛЯ АДРЕСА ДОСТАВКИ ДОМ КВАРТИРА

let coupon_btn = document.querySelector('#coupon-btn'); // КНОПКА ДЛЯ ОБРАБОТКИ КУПОНА
let delivery_btn = document.querySelector('#delivery-btn'); // КНОПКА ДЛЯ ОБРАБОТКИ ДАСТАВКИ
let chec_btn = document.querySelector('#chec_btn'); // КНОПКА ДЛЯ ПЕРЕХОДА К ОФОРМЛЕНИЮ
let close_btn = document.querySelector('#close_modal'); // КНОПКА ДЛЯ ЗАКРИТИЯ МОДАЛЬНОГО ОКНА

/**
*!  СУММА СКИДКИ
*/
let discount = {
	2020:20,
	1515:15,
	1010:10,
    1005:5
}

/**
*? СУММА ДОСТАВКИ
*/
let delivery = {
	1:500,
	2:1000,
	3:700,
	4:850
}
/**
*! КЛИК ДЛЯ ЗАКРЫТИЯ МОДАЛЬНОГО ОКНА
*/
close_btn.onclick = function(){
	document.querySelector('.container-modal').style.display = "none";
}


/**
*! КЛИК ДЛЯ ОБРОБОТКИ КУПОНА
*/
coupon_btn.onclick = function(){
	let coupon_value = document.querySelector('#coupon').value;
	let value = document.querySelector('#delivery-select').value;


	if (!coupon_value){
		document.querySelector('.container-modal').style.display = "block";
		document.querySelector(".modal-text-h4").innerText = productLoadingSecond;
		return;
	}
	if(!discount[coupon_value]){
		document.querySelector('.container-modal').style.display = "block";
		document.querySelector(".modal-text-h4").innerText = productLoadingThethird;
		return;
	}
	if(value === "0"){
		let discount_value = discount[coupon_value];
		theOutside = document.querySelector('#theOutside').value;
		houseApartment = document.querySelector('#houseApartment').value;
		subtotal_sum = document.querySelector('.price-sum').innerText;
		discount_sum = (subtotal_sum / 100) * discount_value;
		total = subtotal_sum - discount_sum;

		showSums(subtotal_sum, delivery[value], discount_sum, total, theOutside, houseApartment);
	}
	
	else{
		let discount_value = discount[coupon_value];
		let value = document.querySelector('#delivery-select').value;

		theOutside = document.querySelector('#theOutside').value;
		houseApartment = document.querySelector('#houseApartment').value;
		subtotal_sum = document.querySelector('.price-sum').innerText;
		discount_sum = (subtotal_sum / 100) * discount_value;
		delivery_sum = delivery[value];
		total = subtotal_sum - discount_sum + delivery_sum;

		showSums(subtotal_sum, delivery[value], discount_sum, total, theOutside, houseApartment);
	}

}

/**
*!  КЛИК ДЛЯ ОБРОБОТКИ ДОСТАВКИ И ОТКРЫВАЕТ activateChecBtn();
*/
delivery_btn.onclick = function(){
	let value = document.querySelector('#delivery-select').value;
	if(value === "0"){
		document.querySelector('.container-modal').style.display = "block";
		document.querySelector(".modal-text-h4").innerText = productLoadingFourth;
		return;
	}
	
	let coupon_value = document.querySelector('#coupon').value;

	if (!coupon_value){
		theOutside = document.querySelector('#theOutside').value;
		houseApartment = document.querySelector('#houseApartment').value;
		subtotal_sum = document.querySelector('.price-sum').innerText;
		delivery_sum = delivery[value];
		total = (subtotal_sum / 1) + delivery_sum;
		showSums(subtotal_sum, delivery[value], discount_sum, total, theOutside, houseApartment);
		activateChecBtn();
	}
	if (delivery_sum > 1){
		delivery_sum = 0;
		theOutside = document.querySelector('#theOutside').value;
		houseApartment = document.querySelector('#houseApartment').value;
		delivery_sum = delivery[value];
		total = (subtotal_sum / 1) + delivery_sum - discount_sum;
		showSums(subtotal_sum, delivery[value], discount_sum, total, theOutside, houseApartment);
		activateChecBtn();
}
	else{
		theOutside = document.querySelector('#theOutside').value;
		houseApartment = document.querySelector('#houseApartment').value;
		delivery_sum = delivery[value];
		total =  total+delivery[value];
		showSums(subtotal_sum, delivery[value], discount_sum, total, theOutside, houseApartment);
		activateChecBtn();
	}

	
}

/**
*!  КЛИК ДЛЯ ПЕРЕХОДА К ОФОРМЛЕНИЮ
*/
chec_btn.onclick = function(){
	let obj = {subtotal_sum, delivery_sum, discount_sum, total, theOutside, houseApartment}
	localStorage.setItem('totalChec', JSON.stringify(obj));

	
	document.querySelector('.sale-of-tools').style.display = "none";
	document.querySelector('.checkout').style.display = "block";
	
	getDataCheckout();
}

/**
*! ФУНКЦИЯ ДЛЯ АКТИВАЦИИ КНОПКИ => ОФОРМЛЕНИЮ
*/
function activateChecBtn(){
	document.querySelector('#chec_btn').style.display = "block";
}

/**
*!  ФУНКЦИЯ ДЛЯ ВЫВОДА СУММЫ ТОВАРОВ
*/
function showSums (subtotal = 0, delivery = 0, discount = 0, total = 0){
	document.querySelector(".subtotal > strong").innerText = subtotal;
	document.querySelector(".delivery > strong").innerText = delivery;
	document.querySelector(".discount > strong").innerText = discount;
	document.querySelector(".total > strong").innerText = total;
	document.querySelector('.price-sum').innerHTML = total;

	
}

/**
*!  ПОЛУЧАЕТ ИЗ МОК И ОТПРАВЛЯЕТ В ПУСТОЙ МАССИВ ОТКРЫВАЯ getData (); showCart ();
*/
let getGoods = () => {
    fetch(URLInstruments)
    .then(response => response.json())
    .then(data => {
        goods = data;
    });
    fetch(URLShine)
    .then(response => response.json())
    .then(data => {
        goodsLight = data;
    });
    fetch(URLSound)
    .then(response => response.json())
    .then(data => {
        goodsSound = data;
        
        
    });
    fetch(URLMarkdown)
    .then(response => response.json())
    .then(data => {
        goodsMarkdown = data;

        getData ();
    });
        
        showCart ();
}

/**
*!  ОБЕДИНЯЕТ ДАННЫЕ ИЗ МОК  В ОДИН МАССИВ И ОТКРЫВАЕТ   showGoods(goodsData);
*/
function getData (){
    goodsData = goods.concat(goodsLight, goodsSound, goodsMarkdown);

    showGoods(goodsData);
}

/**
*!  ПРОВЕРЯЕТ LOCAL STORAGE ЕСЛИ ПУСТОЙ ТО ВКИДЫВАЕТ В ИНДЕКС.HTML
*!  ПРОВЕРЯЕТ LOCAL STORAGE ЕСЛИ НЕ ПУСТОЙ ТО PARSE(JSON) И ОТКРЫВАЕТ  showGoods();
*/
function showCart (){
    let json = localStorage.getItem('cart');
    if(!json){
		document.querySelector('.container-modal').style.display = "block";
		document.querySelector(".modal-text-h4").innerText = productLoadingFirst;
		
		setTimeout( function (){
			window.location = 'index.html';
		}, 4000);
        
    }
    else{
        cart = JSON.parse(json);
    }
		console.log(cart)
    
    showGoods();
}

/**
*!  ПОЛУЧАЕТ ОБЕДИНЕННЫЙ МАССИВ И ВЫВОДИТ ТОВАРЫ В HTML КОНЦЕ ОТКРЫВАЕТ showSum();
*/
function showGoods(){
    let out = '';
    for(let key in cart){
        for(let key2 in goodsData){
            if(key == goodsData[key2].id){
                out += '<div class="product-item">';
                out += '<img src="image/' + goodsData[key2].img + '" alt="">';
                out += '<div class="block-content">';
                out += '<div class="flex-column">';
                out += '<h4> ' + goodsData[key2].name + ' </h4>';
                out += '<span>' + goodsData[key2].desc +'</span>';
                out += '</div>';
                out += '<div class="block-info">';
                out += '<span class="price-cart">' + goodsData[key2].price + '</span>';
                out += '<span class="discount-price-cart priseProduct">' + goodsData[key2].priceDiscount + '</span>';
                out += '<span class="discount-price-cart">' + goodsData[key2].valuta + '</span>';
                out += '<span class="discount-price-cart price-sum">[' + cart[key] + '  количество]</span>';
                out += '</div>';
                out += '</div>';
                out += '<div class="btn-style">'
                out += '<button class="plus" data-id="' + key + '"> + </button>';
                out += '<button class="reduce" data-id="' + key + '"> - </button>';
                out += '</div>';
                out += '</div>';
            }
        }
    }
    document.querySelector('.product-block').innerHTML = out;
    let plusBtns = document.querySelectorAll('.plus');
	let reduceBtns = document.querySelectorAll('.reduce');

	for(let i = 0; i < plusBtns.length; i++){
		plusBtns[i].addEventListener('click', plusGoods);
		reduceBtns[i].addEventListener('click', reduceGoods);
	}
	showSum();

};

/**
*!  УВЕЛИЧИВАЕТ КОЛИЧЕСТВА ТОВАРОВ И ОТКРЫВАЕТ showGoods();  saveCart();  showSum();
*/
function plusGoods(){
	let id = this.dataset.id;
	cart[id]++;
	showGoods();
	saveCart();
	showSum();
}

/**
*!  УМЕНШАЕТ  КОЛИЧЕСТВА ТОВАРОВ И ОТКРЫВАЕТ showGoods();  saveCart();  showSum();
*/
function reduceGoods(){
	let id = this.dataset.id;

	if(cart[id] > 1){
		cart[id]--;
	} else{
		delete cart[id];
	}
	showGoods();
	saveCart();
	showSum();
}

/**
*!  СОХРАНЯЕТ ИЗМНЕНИИ В LOCAL STORAGE И ОТКРЫВАЕТ showSum();
*/
function saveCart(){
	localStorage.setItem('cart', JSON.stringify(cart));
    
	showSum();
}

/**
*!  ВЫВОДИТ СУММУ ТОВАРОВ РАДОМ КОРЗИНОЙ 
*/
function showSum(){
	let s = 0;
	for(let key in cart){
		for(let key2 in goodsData){
			if(key == goodsData[key2].id){
				s += goodsData[key2].priceDiscount * cart[key];
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

showCartBtn();

getGoods ();






let btn = document.querySelector('.btn_payment');
// let close_btn = document.querySelector('#close_modal');
// let close_btn_wrong = document.querySelector('#close_modal_wrong');
// let close_btn_select = document.querySelector('#close_modal_select');
let totalChec;

getDataCheckout();
function getDataCheckout(){
	totalChec = localStorage.getItem('totalChec')
	if(!totalChec){
			document.querySelector('.withdraw_coupon').style.display = "none";
			return;
	}
	totalChecJs = JSON.parse(totalChec);
	console.log(totalChec)

	document.querySelector(".subtotalchec > strong").innerText = totalChecJs.subtotal_sum;
	document.querySelector(".deliverychec > strong").innerText = totalChecJs.delivery_sum;
	document.querySelector(".discountchec > strong").innerText = totalChecJs.discount_sum;
	document.querySelector(".theOutside > strong").innerText = totalChecJs.theOutside;
	document.querySelector(".houseApartment > strong").innerText = totalChecJs.houseApartment;
	document.querySelector(".totalchec > strong").innerText = totalChecJs.total;
}
btn.onclick = function(){
	let surname = document.querySelector('#surname').value;
	let name = document.querySelector('#name').value;
	let email = document.querySelector('#email').value;
	let phone = document.querySelector('#phone').value;
	let paymentMethod = document.querySelector('input[name="payment"]:checked').value;
	let objAllData = {surname, name, email, phone, paymentMethod, totalChec}

	let request = JSON.stringify(objAllData);

	sendData(request);
}

function sendData(request){
	let options = {
			method:'POST',
			headers:{
					'Content-Type':'application/json',
			},
			body:request

	}
	const URLCheckout = 'https://reqres.in/api/users';

	fetch(URLCheckout,options)
	.then(function(request){
			return request.json();
	})
	.then(function(request){
		console.log(request.id)
			if(!request.id){
					document.querySelector('.container-modal').style.display = "block";
					document.querySelector(".modal-text-h4").innerText = productNotSent;
			}else{
					document.querySelector('.container-modal').style.display = "block";
					document.querySelector(".modal-text-h4").innerText = productSent;
					
					
			}
	})
}


let btnNav = document.querySelector('.btn-nav');

btnNav.onclick = function(){
    document.querySelector('.nav-menu-mobile').classList.toggle('display-block-nav');
    document.querySelector('.header_fixed').classList.toggle('bacground-mobile');
}


const URL = "https://run.mocky.io/v3/7fd88e33-e16f-4554-9e82-266e2d0f3e2c"

let cart = {}; // Переменная с пустым объектом
let goods = []; // Переменная с пустым массивом
let subtotal_sum = 0; // Сумма заказаных товаров без скидки и без доставки
let delivery_sum = 0; // Сумма доставки
let discount_sum = 0; // Сумма скидки
let total = 0; // Общая итоговая сумма со скиками и доставками

let theOutside;
let houseApartment;

let coupon_btn = document.querySelector('#coupon-btn');
let delivery_btn = document.querySelector('#delivery-btn');
let chec_btn = document.querySelector('#chec_btn');
let close_btn = document.querySelector('#close_modal');
let close_btn_wrong = document.querySelector('#close_modal_wrong');
let close_btn_select = document.querySelector('#close_modal_select');
let discount = {
	2020:20,
	1515:15,
	1010:10,
    1005:5
}
let delivery = {
	1:500,
	2:1000,
	3:700
}
checkCart();
getGoods();

close_btn_select.onclick = function(){
	document.querySelector('.select_city').style.display = "none";
}

close_btn_wrong.onclick = function(){
	document.querySelector('.wrong_coupon').style.display = "none";
}

close_btn.onclick = function(){
	document.querySelector('.withdraw_coupon').style.display = "none";
}

coupon_btn.onclick = function(){
	let coupon_value = document.querySelector('#coupon').value;
	let value = document.querySelector('#delivery-select').value;


	if (!coupon_value){
		document.querySelector('.withdraw_coupon').style.display = "block";
		return;
	}
	if(!discount[coupon_value]){
		document.querySelector('.wrong_coupon').style.display = "block";
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

delivery_btn.onclick = function(){
	let value = document.querySelector('#delivery-select').value;
	if(value === "0"){
		document.querySelector('.select_city').style.display = "block";
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
chec_btn.onclick = function(){
	let obj = {subtotal_sum, delivery_sum, discount_sum, total, theOutside, houseApartment}
	localStorage.setItem('totalChec', JSON.stringify(obj));

	window.location = 'checkout.html';
}

function showSums (subtotal = 0, delivery = 0, discount = 0, total = 0){
	document.querySelector(".subtotal > strong").innerText = subtotal;
	document.querySelector(".delivery > strong").innerText = delivery;
	document.querySelector(".discount > strong").innerText = discount;
	document.querySelector(".total > strong").innerText = total;

	
}


//Проверяет LOCAL STORAGE если пуста то выводит алерт
// или получает из LOCAL STORAGE и парсит в переменную CART
function checkCart(){
    let json = localStorage.getItem('product');

    if(json === null){        
        alert('Корзина пуста:');
    } else{
        cart = JSON.parse(json);
    }
}

// Проверяет JSON если там пустой объект выводить алерт
// и удаляет пустой объект из LOCAL STORAGE
function cleaningCart(){
    if(JSON.stringify(cart) === '{}'){
        alert('Корзина пуста:');
        localStorage.removeItem('product')
    }
}

// Получает из CONST URL и отправляет в showGoods
//
function getGoods () {
    fetch(URL)
    .then(response => response.json())
    .then(data => {
        goods = data;
        showGoods();
        // showSum();
    })
}

// получает из getGoods и через цикл for строет HTML структуру через innerHTML
// вещает на кнопки CLICK  функции plusGoods  reduceGoods  deleteGoods
// и открывает функ, showSum
function showGoods(){
	let out = '';
	for(let key in cart){
		for(let key2 in goods){
			if(key == goods[key2].id){
				out += '<div class="block-info-kategories color">';
				out += '<div class="span-style-text s-s-t-one">';
                out += '<button class="btn-cannel color delete" data-id="' + key + '">X</button>';
                out += '</div>';
                out += '<div class="span-style-text s-s-t-two">';
                out += '<img src="image/' + goods[key2].img + ' " class="img-product-cart-info" alt="">';
                out += '</div>'; 
                out += '<div class="span-style-text s-s-t-three">';
                out += '<h3 class="tx_name_k_three">' + goods[key2].name + '</h3>';
                out += '<span class="span-style-text-info">' + goods[key2].desc + '</span>';
                out += '</div>';
                out += '<div class="span-style-text s-s-t-four">';
                out += '<div class="media-d-flex">'
                out += '<span class="tx_price_one">' + goods[key2].price + '</span><span class="tx_price_one">' + goods[key2].valuta + '</span>';
                out += '</div>'
                out += '<div class="media-d-flex">'
                out += '<span class="tx_price_two">' + goods[key2].priceDiscount + '</span><span class="tx_price_two">' + goods[key2].valutaDiscount + '</span>';
                out += '</div>'
                out += '</div>';
                out += '<div class="span-style-text s-s-t-five">';
                out += '<button class="btn-cannel color plus" data-id="' + key + '">+</button>';
                out += '<span class="quantity color">' + cart[key] + '</span>';
                out += '<button class="btn-cannel color reduce" data-id="' + key + '">-</button>';
                out += '</div>';
                out += '<div class="span-style-text s-s-t-six">';
                out += '<div class="total">';
                out += '<span class="price color">' + goods[key2].priceDiscount * cart[key] + '</span>';
                out += '<span class="valuta color">' + goods[key2].valutaDiscount + '</span>';
                out += '</div>';
                out += '</div>';
                out += '</div>';
            }
		}
	}
	document.querySelector('.receiving-from').innerHTML = out;

	let plusBtns = document.querySelectorAll('.plus');
	let reduceBtns = document.querySelectorAll('.reduce');
	let deleteBtns = document.querySelectorAll('.delete');

	for(let i = 0; i < plusBtns.length; i++){
		plusBtns[i].addEventListener('click', plusGoods);
		reduceBtns[i].addEventListener('click', reduceGoods);
		deleteBtns[i].addEventListener('click', deleteGoods)
	}
	showSum();
}


// увеличивает количества товаров и открывает функции saveCart	showGoods	
function plusGoods(){
	let id = this.dataset.id;
	cart[id]++;
	saveCart();
	showGoods();
	showSum();
	
	
}

// уменьшает количества товаров и открывает функции saveCart	showGoods	
function reduceGoods(){
	let id = this.dataset.id;

	if(cart[id] > 1){
		cart[id]--;
	} else{
		delete cart[id];
	}
	saveCart();
	showGoods();
	showSum();
}

// удаляет товары  и открывает функции saveCart	showGoods	
function deleteGoods(){
	let id = this.dataset.id;
	delete cart[id];
	saveCart();
	showGoods();
	showSum();
}

// сохрянает в LOCAL STORAGE измененные данные и открывает функцию cleaningCart
function saveCart(){
	localStorage.setItem('product', JSON.stringify(cart));
	cleaningCart();
    
}

// выводить итоговую сумму с помошью innerHTML 
function showSum(){
	let s = 0;
	for(let key in cart){
		for(let key2 in goods){
			if(key == goods[key2].id){
				s += goods[key2].priceDiscount * cart[key];
			}
		}
	}
	document.querySelector('.price-sum').innerHTML = s
}

function activateChecBtn(){
	// document.querySelector('#chec_btn').disabled = false;
	document.querySelector('#chec_btn').style.display = "block";
}
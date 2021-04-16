
const URL = "https://run.mocky.io/v3/7fd88e33-e16f-4554-9e82-266e2d0f3e2c"

let cart = {}; // Переменная с пустым объектом
let goods = []; // Переменная с пустым массивом



// Получает из CONST URL и отпкрывает в showGoods	checkCart	showSum	
let getGoods = () => {
	fetch(URL)
	.then(response => response.json())
	.then(data => {
		goods = data;
		showGoods();
		checkCart();
		showSum();
	})
}

// получает из CONST и через цикл строеть HTML сруктуру 
// 
function showGoods (){
	let out = '';
	let data = goods;

	for(let key in data){
		out += '<div data-id="'+ data[key].id +'" class="item_block_katolog_one absol">';
        out += '<span class="k_tx">' + data[key].discount + '</span>'
        out += '<div class="block_image_flex">';
		out += '<img src="image/' + data[key].img + '" class="img_list_kat" alt="">';
		out += '</div>';
        out += '<div class="block_font_info">';
        out += '<h3 class="tx_name_k_three">' + data[key].name + '</h3>';
		out += '<div class="block_list_info_katl absol">'
		out += '<span class="tx_price_one">' + data[key].price + '</span><span class="tx_price_one">' + data[key].valuta + '</span>';
        out += '<span class="tx_price_two">' +  data[key].priceDiscount + '</span><span class="tx_price_two">' + data[key].valutaDiscount + '</span>';
        out += '</div>';
        out += '<div class="btn">';
		out += '<button data-id="'+ data[key].id +'" class="butt">' + '<span class="butt_tx">В корзину</span>'+ '</button>';
        out += '<button data-id="'+ data[key].id +'" class="butt_info">' + '<span class="butt_tx">Подробнее...</span>'+ '</button>';
		out += '</div>';
        out += '</div>';
        out += '</div>';
		
		
	}
	

	document.querySelector('.block_list_katalog_one').innerHTML = out;
	
	let btns = document.querySelectorAll('.butt');

	for(let i=0; i < btns.length; i++){
		btns[i].addEventListener('click', addToCart);
	}
}

function addToCart(){
	let id = this.getAttribute('data-id');

	if(cart[id]){
		cart[id]++;
	} else {
		cart[id] = 1;
	}
	
	localStorage.setItem('product', JSON.stringify(cart));
	
	showSum();
}
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

function checkCart(){
	let json = localStorage.getItem('product');
	if(!json){
		cart = {};
	} else{
		cart = JSON.parse(json);
	}
	
}

getGoods();


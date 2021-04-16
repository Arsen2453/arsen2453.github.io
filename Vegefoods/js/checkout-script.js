let btn = document.querySelector('.btn_payment');
let close_btn = document.querySelector('#close_modal');
let close_btn_wrong = document.querySelector('#close_modal_wrong');
let close_btn_select = document.querySelector('#close_modal_select');
let totalChec;
getData();

close_btn_select.onclick = function(){
	document.querySelector('.select_city').style.display = "none";
}

close_btn_wrong.onclick = function(){
	document.querySelector('.wrong_coupon').style.display = "none";
}

close_btn.onclick = function(){
	document.querySelector('.withdraw_coupon').style.display = "none";
}



function getData(){
    totalChec = localStorage.getItem('totalChec')
    if(!totalChec){
        document.querySelector('.withdraw_coupon').style.display = "none";
        alert('ss');
        return;
    }
    totalChec = JSON.parse(totalChec);

    document.querySelector(".subtotal > strong").innerText = totalChec.subtotal_sum;
	document.querySelector(".delivery > strong").innerText = totalChec.delivery_sum;
	document.querySelector(".discount > strong").innerText = totalChec.discount_sum;
	document.querySelector(".theOutside > strong").innerText = totalChec.theOutside;
    document.querySelector(".houseApartment > strong").innerText = totalChec.houseApartment;
    document.querySelector(".total > strong").innerText = totalChec.total;
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
    console.log(objAllData);
}

function sendData(request){
    let options = {
        method:'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body:request

    }
    const URL = 'https://reqres.in/api/users';

    fetch(URL,options)
    .then(function(response){
        return response.json();
    })
    .then(function(request){
        if(!request.id){
            document.querySelector('.wrong_coupon').style.display = "block";
        }else{
            document.querySelector('.select_city').style.display = "block";
            
            
        }
    })
}


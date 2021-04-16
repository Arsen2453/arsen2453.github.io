let btn = document.querySelector('#btn');
let close_btn_wrong = document.querySelector('#close_modal_wrong');
let close_btn_select = document.querySelector('#close_modal_select');


close_btn_select.onclick = function(){
	document.querySelector('.select_city').style.display = "none";
}

close_btn_wrong.onclick = function(){
	document.querySelector('.wrong_coupon').style.display = "none";
}

btn.onclick = function(){
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let subject = document.querySelector('#subject').value;
    let textarea = document.querySelector('#textarea').value;
    
    let objAllData = {name, email, subject, textarea};

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
let tfBill = document.querySelector('#tfBill');
let tfPeople = document.querySelector('#tfNumOfPeople');
let tfCustom = document.querySelector('#tfCustom');
let options = document.querySelectorAll('.option');
let res1 = document.querySelector('#res1');
let res2 = document.querySelector('#res2');
let resBtn = document.querySelector('#reset-btn');

tfCustom.onkeyup = ()=>{
    let percentage = parseFloat(tfCustom.value);

        if(checkIsEmpty(tfPeople)){
            tfPeople.classList.add('nv');
            let validate = tfPeople.parentElement.querySelector('.validate');
            validate.classList.add('nv');
        }else{  
            let res = getTotal(parseFloat(tfBill.value),percentage, parseFloat(tfPeople.value));
            res1.innerText = res['tipper'].toFixed(2);
            res2.innerText = res['billper'].toFixed(2);            
        }

};

resBtn.onclick =()=>{
    tfBill.value ="";
    tfCustom.value = "";
    tfPeople.value = "";
    res1.innerText = "0.00";
    res2.innerText = "0.00";
}
options.forEach((e)=>{
    e.onclick = (event)=>{
        let percentage = parseFloat(event.target.innerText.slice(0,-1));
        if(checkIsEmpty(tfPeople)){
            tfPeople.classList.add('nv');
            let validate = tfPeople.parentElement.querySelector('.validate');
            validate.classList.add('nv');
        }else{  
            let res = getTotal(parseFloat(tfBill.value),percentage, parseFloat(tfPeople.value));
            res1.innerText = res['tipper'].toFixed(2);
            res2.innerText = res['billper'].toFixed(2);            
        }
    }
});
tfPeople.onkeyup = ()=>{
    if(!checkIsEmpty(tfPeople)){
        tfPeople.classList.remove('nv');
        let validate = tfPeople.parentElement.querySelector('.validate');
        validate.classList.remove('nv');
    }
}
function checkIsEmpty(element){
    return element.value == '0' || isNan(Number(element.value));
}
function getTotal(bill,percentage,numOfPeople){
    return {
        tipper : bill* percentage/100 / numOfPeople,
        billper : (bill /numOfPeople) + (bill* percentage/100 / numOfPeople)
    }
}







if(!localStorage.getItem('balance') || isNaN(localStorage.getItem('balance'))){
    localStorage.setItem("balance", 10000);
}

function update(){
    const b = document.getElementById("balance");
    if(b){
        b.innerHTML = "Balance=Rs."+ localStorage.getItem("balance");
    }
}
update();


function cont(event){
    const mail = document.getElementById("mail");
    const pass = document.getElementById("pass");
    if((mail.value !== "delish" || pass.value !== "d")){
        event.preventDefault();    
        alert("Either username or password is incorrect")
    }
}


function deduct(){
    const money = document.getElementById("money").value;
    if (money === ''){
        alert('enter a valid number');
        return;
    }
    if(parseInt(localStorage.getItem("balance"))< parseInt(money)){
        alert('Ambani anukuntunnava nuvvu\nBalance chusi kottu number');
        return;
    }
    localStorage.setItem("balance",localStorage.getItem("balance")-money);
    update();
}

function clearcomedy(){
    localStorage.setItem("l",'false');
    localStorage.setItem("t",'false');
    localStorage.setItem("d",'false');
}

function increment(){
    let money = document.getElementById("money").value;
    if (money === ''){
        alert('enter a valid number');
        return;
    }
    money = parseInt(money);
    let balance = parseInt(localStorage.getItem("balance"));
    localStorage.setItem("balance", balance+money);
    if(parseInt(localStorage.getItem("balance")) >100000000000000){
        alert("chala?");
    }else if((parseInt(localStorage.getItem("balance")) >10000000000 && localStorage.getItem('d')=='false')){
        alert("dhaanam chai antha untey");
        localStorage.setItem("d",'true');
        document.getElementById("balance").style.animation = "blastr .75s linear 0s";
    }else if((parseInt(localStorage.getItem("balance")) >10000000 && localStorage.getItem('t')=='false')){
        alert("evaru sir meeru intha tallented gha unnaru");
        localStorage.setItem("t",'true');
        document.getElementById("balance").style.animation = "blastg .75s linear 0s";
    }else if((parseInt(localStorage.getItem("balance")) >100000 && localStorage.getItem('l')=='false')){
        alert("damn u r a lakshadhipadhi");
        localStorage.setItem("l",'true');
        document.getElementById("balance").style.animation = "blastb .75s linear 0s";
    }
    update();
}
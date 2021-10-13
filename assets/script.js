const SUBMIT_BUTTON = document.getElementById("submit")
SUBMIT_BUTTON.addEventListener("click", weightVerify)

function weightVerify(){
    let weight = document.getElementById("peso")
    let height = document.getElementById("altura")
    if (!Number(weight.value) || !Number(height.value)){
        alert("Valor informado não é numérico!")
        clear(weight, height)
        return
    }
    let msgComps = compare(weight, height)
    const msgDiv = document.getElementById("resp")
    msgDiv.style.color = "rgb(0, 70, 70)"
    msgDiv.innerHTML = `<p>Seu IMC é: ${msgComps[0]}, e isso significa que vocé está ${msgComps[1]}</p>`
}


function compare(weight, height){
    let IMC = weight.value/(height.value*height.value)
    console.log(IMC);
    if (IMC < 18.5)
        return [IMC.toFixed(2),"abaixo do peso"]
    else if(IMC < 24.9)
        return [IMC.toFixed(2),"com peso normal"]
    else if(IMC < 29.9)
        return [IMC.toFixed(2),"acima do peso"]
    else if(IMC < 34.9)
        return [IMC.toFixed(2),"obeso"]
    else if(IMC < 39.9)
        return [IMC.toFixed(2),"com obesidade II"]
    else
        return [IMC.toFixed(2),"com obesidade morbida"]
}

function clear(height, weight){
    height.value = ""
    weight.value = ""
}
const buttonNo = document.getElementById("no")
let buttonYes = document.querySelector("#yes")
let message = document.querySelector('.content__message')
let closed = document.querySelector('.content__message__close')


const dateMyBirthday = new Date('jun 06, 2024, 23:00:00')
const timestampBirthday = dateMyBirthday.getTime()
const contaAshoras = setInterval(function() {
    const agora = new Date()
    const timestampAgora = agora.getTime()

    const distancia = timestampBirthday - timestampAgora

    const diasMs = 1000 * 60 * 60 * 24
    const horasMs = 1000 * 60 * 60 
    const minMs = 1000 * 60 


    const dia = Math.floor(distancia / (diasMs))
    const horas = Math.floor(distancia % (diasMs) / horasMs)
    const min = Math.floor(distancia % (horasMs) / minMs)
    const seg = Math.floor((distancia % minMs) / 1000)
    console.log(min)

    document.getElementById('contador').innerHTML = `${dia}d ${horas}h ${min}m ${seg}s`
},1000)


buttonYes.onclick = function() {
    buttonNo.style.transform="translate(0px, 0px)"
    message.classList.add('content__message--active')
}

closed.onclick = function() {
    message.classList.remove('content__message--active')
}




    buttonNo.addEventListener("mouseenter", mouseenter)
    let estado = -1

function mouseenter(){
    estado++
    if (estado == 0){
        buttonNo.style.transform="translate(130px, -150px)"
    }
    if (estado == 1){
        buttonNo.style.transform="translate(130px, +150px)"
    }
    if (estado == 2){
        buttonNo.style.transform="translate(-325px, +150px)"
    }
    if (estado == 3){
        buttonNo.style.transform="translate(-325px, -150px)"
    }
    if (estado == 4){
        buttonNo.style.transform="translate(+135px, +150px)"
    }
    if (estado == 5){
        buttonNo.style.transform="translate(+135px, -150px)"
    }
    if (estado == 6){
        buttonNo.style.transform="translate(-325px, +150px)"
    }
    if (estado == 7){
        buttonNo.style.transform="translate(-325px, -150px)"
        estado = -1
    }
}

var confettiSettings = { target: 'my-canvas' };
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();




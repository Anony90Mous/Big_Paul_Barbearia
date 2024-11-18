const menuLinks = document.querySelectorAll('.menu a[href^="#"]')

menuLinks.forEach(link =>{ link.addEventListener('click', scrollToIdOnClick)})



function getScrollTopByHref(evento){
    const id = evento.getAttribute('href')
    return document.querySelector(id).offsetTop
}

function scrollToIdOnClick(event){
    event.preventDefault()
    const to = getScrollTopByHref(event.target) - 30

    scrollToPosition(to)
}

function scrollToPosition(to){
    window.scroll({top: to, behavior: "smooth"})
}

var moldura = document.getElementById("moldura")
var fotos = ["img1.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg", "img7.jpg"]
var indice = 0
var temporizador
var botaoVoltar = document.getElementById("btnVoltar")
var botaoAvancar = document.getElementById("btnAvancar")

const tempoIntervalo = 2000

window.onload = inicio

function inicio(){
    botaoAvancar.onclick = AvancarFoto
    botaoVoltar.onclick = VoltarFoto
    
    MostrarFoto()
    AutomaticoFoto()
    }

    function VoltarFoto(){
        if(indice > 0){
            indice--
        }else{
            indice= fotos.length - 1
        }
        
        MostrarFoto()
        clearInterval(temporizador)
        AutomaticoFoto()
        }
        
        function AvancarFoto(){
        if(indice < fotos.length - 1){
           indice++ 
        }else{
            indice=0
        }
        
        MostrarFoto()
        
        clearInterval(temporizador)
        AutomaticoFoto()
        }
        
        
        function AutomaticoFoto(){
        
           temporizador = setInterval(AvancarFoto,tempoIntervalo)
        
        }
        
        function MostrarFoto(){
        
            moldura.src = "img/"+fotos[indice]
        
        } 


        
            
        





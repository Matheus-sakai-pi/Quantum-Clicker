let pontos = 0
let poder = 1
let custo_g = 50
let custo_d = 500
let custo_s = 200
let intervalo = 0
let multiplicador = 1

function ranking() {
    if (pontos > 0 && pontos < 49) {
        document.querySelector(".tag").textContent = "iniciante 🌱"
    }
    else if (pontos > 50 && pontos < 149) {
        document.querySelector(".tag").textContent = "Coletor de Poeira ✨"
    }
    else if (pontos > 150 && pontos < 399) {
        document.querySelector(".tag").textContent = "Explorador 🚀"
    }
    else if (pontos > 400 && pontos < 799) {
        document.querySelector(".tag").textContent = "Astronauta 🧑‍🚀"
    }
    else if (pontos > 800 && pontos < 1499) {
        document.querySelector(".tag").textContent = "Piloto Estelar 🌠"
    }
    else if (pontos > 1500 && pontos < 2999) {
        document.querySelector(".tag").textContent = "Comandante Orbital 🛰️"
    }
    else if (pontos > 3000 && pontos < 6999) {
        document.querySelector(".tag").textContent = "Mestre Galáctico 🌌"
    }
    else if (pontos > 7000 && pontos < 14999) {
        document.querySelector(".tag").textContent = "Senhor do Vácuo 🕳️"
    }
    else if (pontos > 15000 && pontos < 49999) {
        document.querySelector(".tag").textContent = "Imperador Cósmico 👑"
    }
    else if (pontos > 50000) {
        document.querySelector(".tag").textContent = "Entidade Quântica ⚛️"
    }
}


setInterval(function() {
    pontos = pontos + intervalo
    document.querySelector(".pontos").textContent = pontos
}, 1000)

function clicar() {
    pontos = pontos + (poder * multiplicador) 
    document.querySelector(".pontos").textContent = pontos
    ranking()
}

function ganhar() {
    if (pontos >= custo_g) {
        poder = poder + 1
        pontos = pontos - custo_g
        document.querySelector(".pontos").textContent = pontos
        custo_g = Math.floor(custo_g * 2)
        document.getElementById("preco_primeiro").textContent = custo_g
        ranking()
    }
}

function sozinho() {
    if (pontos >= custo_s) {
        intervalo = intervalo + 1
        pontos = pontos - custo_s
        document.querySelector(".pontos").textContent = pontos
        custo_s = Math.floor(custo_s * 1.2)
        document.getElementById("preco_segundo").textContent = custo_s
        ranking()
    }
}

function dobrar() {
    if (pontos >= custo_d) {
        poder = poder * 2
        pontos = pontos - custo_d
        document.querySelector(".pontos").textContent = pontos
        custo_d = Math.floor(custo_d * 1.9)
        document.getElementById("preco_terceiro").textContent = custo_d
        ranking()
    }
}

function bigbang() {
    if (pontos >= 10000) {
        pontos = 0
        document.querySelector(".pontos").textContent = pontos
        poder = 1
        custo_g = 50
        document.getElementById("preco_primeiro").textContent = custo_g
        custo_d = 500
        document.getElementById("preco_terceiro").textContent = custo_d
        custo_s = 200
        document.getElementById("preco_segundo").textContent = custo_s
        intervalo = 0   
        document.getElementById("escolhas").style.display = "block"
        ranking()
    }

}

function bonus1() {
    custo_g = 30
    document.getElementById("preco_primeiro").textContent = custo_g
    custo_d = 300
    document.getElementById("preco_terceiro").textContent = custo_d
    custo_s = 120
    document.getElementById("preco_segundo").textContent = custo_s
    document.getElementById("escolhas").style.display = "none"
}

function bonus2() {
    document.getElementById("mensagem").textContent = "Você escolheu corretamente, você é a calma na tempestade, você é o protagonista, você é ELE"
    document.getElementById("escolhas").style.display = "none"
}

function bonus3() {
    multiplicador = multiplicador + 1
    document.getElementById("escolhas").style.display = "none"
}
function maiorData() {
    var timestamp1 = new Date(document.getElementById("data1").value);
    var timestamp2 = new Date(document.getElementById("data2").value);

    if (timestamp1 > timestamp2) {
        document.getElementById("resultado").innerHTML = "A primeira data é maior.";
    } else if (timestamp1 < timestamp2) {
        document.getElementById("resultado").innerHTML = "A segunda data é maior.";
    } else {
        document.getElementById("resultado").innerHTML = "As datas são iguais.";
    }
}

function calcularIntervalo(timestamp1, timestamp2) {
    var timestamp1 = new Date(document.getElementById("data1").value + "T00:00:00");
    var timestamp2 = new Date(document.getElementById("data2").value + "T00:00:00");

    var intervaloEmMilissegundos = Math.abs(timestamp2 - timestamp1);
    var intervaloEmDias = intervaloEmMilissegundos / (1000 * 60 * 60 * 24);
    document.getElementById("resultado").innerText = "O intervalo entre as datas é de: " + intervaloEmDias + " dias.";
}

function dataAtual() {
    var agora = new Date();

    var formatarData = agora.getHours() + ":" + agora.getMinutes() + " - " + agora.getDate() + "/" + (agora.getMonth() + 1) + "/" + agora.getFullYear();

    document.getElementById("resultado").textContent = formatarData;
}

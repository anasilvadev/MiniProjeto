let colorCont = 0;

function inserir() {
    let texto = document.getElementById("inserirtexto").value.trim();
    let urgente = document.getElementById("urgenteCheck").checked;
    let nUrgente = document.getElementById("nurgenteCheck").checked;

    if (texto === "") {
        alert("Digite uma nota válida!");
        return;
    }

    if (urgente && nUrgente) {
        alert("Selecione apenas uma opção: Urgente ou Não Urgente.");
        return;
    }

    if (!urgente && !nUrgente) {
        alert("Selecione uma opção: Urgente ou Não Urgente.");
        return;
    }


    var novo = document.createElement("p");
    novo.innerHTML =`${texto}`

    if (colorCont == 0) {
        novo.style.color = "blue";
    } else if (colorCont == 1) {
        novo.style.color = "green";
    } else {
        novo.style.color = "purple";
    }
    colorCont = (colorCont + 1) % 3;


    if (urgente) {
       novo.className = "urgentes"; 
       document.getElementById("urgentes").appendChild(novo);
    } else {
        novo.className = "nUrgentes"; 
        document.getElementById("nUrgentes").appendChild(novo);
    }

}

function excluirnotaU() {
    const div = document.getElementById("urgentes");
    const nota = div.querySelector("p");
    if (!nota) {
        alert("Não há notas urgentes para apagar! :)");
        return;
    }
    nota.remove();
}


function excluirtudoU() {
    const div = document.getElementById("urgentes");
    const notas = div.querySelectorAll("p");
    if (notas.length === 0) {
        alert("Não há notas urgentes para remover!");
        return;
    }
    notas.forEach(n => n.remove());
    /*professor, nesta etapa eu pesquisei pois não sabia como fazer isso. */
}


function excluirnotaNU() {
    const div = document.getElementById("nUrgentes");
    const nota = div.querySelector("p"); 
    if (!nota) {
        alert("Não há notas não urgentes para apagar! :)");
        return;
    }
    nota.remove();
}


function excluirtudoNU() {
    const div = document.getElementById("nUrgentes");
    const notas = div.querySelectorAll("p");
    if (notas.length === 0) {
        alert("Não há notas não urgentes para remover!");
        return;
    }
    notas.forEach(n => n.remove());
}
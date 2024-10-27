const buttons = document.querySelectorAll("button");
const button = buttons[0];

const bodies = document.querySelectorAll("tbody");
const body = bodies[0];

const tables = document.querySelectorAll("table");
const table = tables[0];

const inputs = document.querySelectorAll("input");
const inputNota = inputs[0];
const inputQuestoes = inputs[1];

console.log(table);

function construirTabela(nota, questoes) {
    body.innerHTML = "";
    for(let i = 0; i <= questoes; i++) {

        let valorNota = 10*i/questoes * nota / 10;
        valorNota = valorNota.toFixed(1);

        let rowAcertos = document.createElement("th");
        rowAcertos.setAttribute("scope", "row");
        rowAcertos.innerText = i.toString();

        let rowNota = document.createElement("td");
        rowNota.innerText = valorNota;

        let row = document.createElement("tr");
        row.appendChild(rowAcertos);
        row.appendChild(rowNota);
        body.appendChild(row);
    }
}

function conversao(n, q) {
    n = n.trim();
    q = q.trim();

    n = Number(n);
    q = Number(q);

    if (n && q) {
        return {
            nota: n,
            questoes: q
        }
    } else {
        return false
    }

}


button.addEventListener("click", () => {
    let n = inputNota.value;
    let q = inputQuestoes.value;
    let r = conversao(n, q);
    console.log(r);
    if (r) {
        construirTabela(r["nota"], r["questoes"])
    }
});


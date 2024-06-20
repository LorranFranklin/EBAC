const form = document.getElementById("form");
const msg = document.querySelector("#msg");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const campoA = parseFloat(document.getElementById("CampoA").value);
    const campoB = parseFloat(document.getElementById("CampoB").value);
    
    if (campoB > campoA) {
        msg.textContent = `Formulário válido: B = ${campoB} é maior que A = ${campoA}!`;
        msg.style.color = "green";

        document.getElementById("form").reset();
    } else if (campoA == campoB) {
        msg.textContent = `Formulário inválido: A é igual a B!`;
        msg.style.color = "red";
    } else {
        msg.textContent = `Formulário inválido: B não pode ser menor que A!`;
        msg.style.color = "red";
    }
})
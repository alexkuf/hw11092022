

let products = [['לחמניות פרעצל', 10, ' ש"ח'], ['לחמניות המבורגר', 18, ' ש"ח'], ['לחמניות המבורגר מיני', 13.9, ' ש"ח']];
let myName = [];
let buttons = document.getElementsByTagName("button");
let buttonsCount = buttons.length;

function addSal() {
    for (let i = 0; i < products.length; ++i) {
        buttons[i].onclick = function () {
            if (this.id == "id1") {
                myName.push(products[0]);
            }
            if (this.id == "id2") {
                myName.push(products[1]);
            }
            if (this.id == "id3") {
                myName.push(products[2]);
            }
            let newPar = document.createElement("p");
            let newCheck = document.createElement("input");
            let newContent = document.createTextNode(myName);
            newPar.classList.add('salSel');
            newCheck.setAttribute("type", "checkbox");
            newPar.appendChild(newContent);
            newPar.appendChild(newCheck);
            document.getElementById("mysall").appendChild(newPar);
            myName = [];
        }
    }
}

function removeSall() {
    var doc = document.querySelectorAll('.salSel');
    doc.forEach(x => {
        if (x.querySelector('input').checked) {
            x.remove()
        }
    })
}












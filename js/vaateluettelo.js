// Import list options from common library.
import {ylaosaVaihtoehdot, alaosaVaihtoehdot, jalkineVaihtoehdot} from "./common.js"

// Populates clothing item lists with values from imported library
function lataaListat() {
    const ylaosalista = document.getElementById('ylaosalista')
    addItemsToList(ylaosalista, ylaosaVaihtoehdot);

    const alaosalista = document.getElementById('alaosalista')
    addItemsToList(alaosalista, alaosaVaihtoehdot);

    const jalkineetlista = document.getElementById('jalkineetlista')
    addItemsToList(jalkineetlista, jalkineVaihtoehdot);
}

// Executes lataaListat when page is loaded. 
window.onload = lataaListat

// Creates HTML list elements for given items and adds them to given HTML list.
function addItemsToList(lista, vaihtoehdot) {
    for (let i = 0; i < vaihtoehdot.length; i++) {
        const node = document.createElement("li");
        const textnode = document.createTextNode(vaihtoehdot[i]);
        node.appendChild(textnode);
        lista.appendChild(node);
    }
}

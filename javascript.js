/*Animation bouton code*/

/*Animation bouton HTML, JS    1*/
let btnHtmlJs1 = document.getElementById("button-html-js-1");
let codeHtmlJs1 = document.getElementById("code-html-js-1");
let btnJs1 = document.getElementById("button-js-1");
let codeJs1 = document.getElementById("code-js-1");

codeJs1.style.display = "none";
btnJs1.onclick = afficher6;
function afficher6 () {
    codeJs1.style.display = "flex";
    codeHtmlJs1.style.display = "none";
}

btnHtmlJs1.onclick = cacher6;
function cacher6 () {
    codeHtmlJs1.style.display = "flex";
    codeJs1.style.display = "none";
}

/*Animation bouton HTML, JS     2*/
let btnHtmlJs2 = document.getElementById("button-html-js-2");
let codeHtmlJs2 = document.getElementById("code-html-js-2");
let btnJs2 = document.getElementById("button-js-2");
let codeJs2 = document.getElementById("code-js-2");

codeJs2.style.display = "none";
btnJs2.onclick = afficher7;
function afficher7 () {
    codeJs2.style.display = "flex";
    codeHtmlJs2.style.display = "none";
}

btnHtmlJs2.onclick = cacher7;
function cacher7 () {
    codeHtmlJs2.style.display = "flex";
    codeJs2.style.display = "none";
}

/*Animation bouton HTML, JS     3*/
let btnHtmlJs3 = document.getElementById("button-html-js-3");
let codeHtmlJs3 = document.getElementById("code-html-js-3");
let btnJs3 = document.getElementById("button-js-3");
let codeJs3 = document.getElementById("code-js-3");

codeJs3.style.display = "none";
btnJs3.onclick = afficher8;
function afficher8 () {
    codeJs3.style.display = "flex";
    codeHtmlJs3.style.display = "none";
}

btnHtmlJs3.onclick = cacher8;
function cacher8 () {
    codeHtmlJs3.style.display = "flex";
    codeJs3.style.display = "none";
}

/*Animation bouton HTML, JS     4*/
let btnHtmlJs4 = document.getElementById("button-html-js-4");
let codeHtmlJs4 = document.getElementById("code-html-js-4");
let btnJs4 = document.getElementById("button-js-4");
let codeJs4 = document.getElementById("code-js-4");

codeJs4.style.display = "none";
btnJs4.onclick = afficher9;
function afficher9 () {
    codeJs4.style.display = "flex";
    codeHtmlJs4.style.display = "none";
}

btnHtmlJs4.onclick = cacher9;
function cacher9 () {
    codeHtmlJs4.style.display = "flex";
    codeJs4.style.display = "none";
}



/*Code base*/

/*3. Ajouter un paragraphe à l'aide d'un bouton*/
let ajouter = document.getElementById('demo-bouton-ajout-para');

ajouter.addEventListener('click', ajout);

function ajout(){
    let para = document.createElement('p');
    para.textContent = 'Paragraphe ajouté';
    document.getElementById('demo-ajout-para').appendChild(para);
}

/*4. Afficher un pop-up grâce à un bouton*/
let bonjour = document.getElementById('demo-bouton-alerte');

bonjour.addEventListener('click', alerte);

function alerte(){
    alert('Voici un pop-up !');
}
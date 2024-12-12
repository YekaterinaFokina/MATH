function openForm1() {
    document.getElementById("text1").style.display = "block";
    document.getElementById("text2").style.display = "none";
    document.getElementById("text3").style.display = "none"; 
    document.getElementById("text4").style.display = "none"; 
    document.getElementById("text5").style.display = "none"; 
    document.getElementById("text6").style.display = "none";
    document.getElementById("text7").style.display = "none";
    document.getElementById("text8").style.display = "none"; 
    document.getElementById("text9").style.display = "none"; 
    document.getElementById("text10").style.display = "none"; 
}
function openForm2() {
    document.getElementById("text1").style.display = "none"; 
    document.getElementById("text2").style.display = "block";
    document.getElementById("text3").style.display = "none"; 
    document.getElementById("text4").style.display = "none"; 
    document.getElementById("text5").style.display = "none";
    document.getElementById("text6").style.display = "none";
    document.getElementById("text7").style.display = "none";
    document.getElementById("text8").style.display = "none"; 
    document.getElementById("text9").style.display = "none"; 
    document.getElementById("text10").style.display = "none"; 
}
function openForm3() {
    document.getElementById("text1").style.display = "none"; 
    document.getElementById("text2").style.display = "none";
    document.getElementById("text3").style.display = "block"; 
    document.getElementById("text4").style.display = "none"; 
    document.getElementById("text5").style.display = "none";
    document.getElementById("text6").style.display = "none";
    document.getElementById("text7").style.display = "none";
    document.getElementById("text8").style.display = "none"; 
    document.getElementById("text9").style.display = "none"; 
    document.getElementById("text10").style.display = "none"; 
}
function openForm4() {
    document.getElementById("text1").style.display = "none"; 
    document.getElementById("text2").style.display = "none";
    document.getElementById("text3").style.display = "none"; 
    document.getElementById("text4").style.display = "block"; 
    document.getElementById("text5").style.display = "none";
    document.getElementById("text6").style.display = "none";
    document.getElementById("text7").style.display = "none";
    document.getElementById("text8").style.display = "none"; 
    document.getElementById("text9").style.display = "none"; 
    document.getElementById("text10").style.display = "none"; 
}
function openForm5() {
    document.getElementById("text1").style.display = "none"; 
    document.getElementById("text2").style.display = "none";
    document.getElementById("text3").style.display = "none"; 
    document.getElementById("text4").style.display = "none"; 
    document.getElementById("text5").style.display = "block";
    document.getElementById("text6").style.display = "none";
    document.getElementById("text7").style.display = "none";
    document.getElementById("text8").style.display = "none"; 
    document.getElementById("text9").style.display = "none"; 
    document.getElementById("text10").style.display = "none"; 
}
function openForm6() {
    document.getElementById("text1").style.display = "none";
    document.getElementById("text2").style.display = "none";
    document.getElementById("text3").style.display = "none"; 
    document.getElementById("text4").style.display = "none"; 
    document.getElementById("text5").style.display = "none"; 
    document.getElementById("text6").style.display = "block";
    document.getElementById("text7").style.display = "none";
    document.getElementById("text8").style.display = "none"; 
    document.getElementById("text9").style.display = "none"; 
    document.getElementById("text10").style.display = "none"; 
}
function openForm7() {
    document.getElementById("text1").style.display = "none";
    document.getElementById("text2").style.display = "none";
    document.getElementById("text3").style.display = "none"; 
    document.getElementById("text4").style.display = "none"; 
    document.getElementById("text5").style.display = "none"; 
    document.getElementById("text6").style.display = "none";
    document.getElementById("text7").style.display = "block";
    document.getElementById("text8").style.display = "none"; 
    document.getElementById("text9").style.display = "none"; 
    document.getElementById("text10").style.display = "none"; 
}
function openForm8() {
    document.getElementById("text1").style.display = "none";
    document.getElementById("text2").style.display = "none";
    document.getElementById("text3").style.display = "none"; 
    document.getElementById("text4").style.display = "none"; 
    document.getElementById("text5").style.display = "none"; 
    document.getElementById("text6").style.display = "none";
    document.getElementById("text7").style.display = "none";
    document.getElementById("text8").style.display = "block"; 
    document.getElementById("text9").style.display = "none"; 
    document.getElementById("text10").style.display = "none"; 
}
function openForm9() {
    document.getElementById("text1").style.display = "none";
    document.getElementById("text2").style.display = "none";
    document.getElementById("text3").style.display = "none"; 
    document.getElementById("text4").style.display = "none"; 
    document.getElementById("text5").style.display = "none"; 
    document.getElementById("text6").style.display = "none";
    document.getElementById("text7").style.display = "none";
    document.getElementById("text8").style.display = "none"; 
    document.getElementById("text9").style.display = "block"; 
    document.getElementById("text10").style.display = "none"; 
}
function openForm10() {
    document.getElementById("text1").style.display = "none";
    document.getElementById("text2").style.display = "none";
    document.getElementById("text3").style.display = "none"; 
    document.getElementById("text4").style.display = "none"; 
    document.getElementById("text5").style.display = "none"; 
    document.getElementById("text6").style.display = "none";
    document.getElementById("text7").style.display = "none";
    document.getElementById("text8").style.display = "none"; 
    document.getElementById("text9").style.display = "none"; 
    document.getElementById("text10").style.display = "block"; 
}

const button = document.querySelector('.button')
const menu = document.querySelector('.menu1')
const menuLinks = document.querySelectorAll('.menu-link')
button.addEventListener('click', (e) => {
    button.classList.toggle('active')
    if (button.classList.contains('active')) {
        button.setAttribute('aria-expanded', 'true')
        menu.setAttribute('aria-hidden', 'false')
        menuLinks.forEach(link => link.setAttribute('tabindex', '0'))
    } else {
        button.setAttribute('aria-expanded', 'false')
        menu.setAttribute('aria-hidden', 'true')
        menuLinks.forEach(link => link.setAttribute('tabindex', '-2'))
    }
})

const button1 = document.querySelector('.button1')
const menu1 = document.querySelector('.menu11')
const menuLinks1 = document.querySelectorAll('.menu-link1')
button1.addEventListener('click', (e) => {
    button1.classList.toggle('active1')
    if (button1.classList.contains('active1')) {
        button1.setAttribute('aria-expanded1', 'true')
        menu1.setAttribute('aria-hidden1', 'false')
        menuLinks1.forEach(link => link.setAttribute('tabindex1', '0'))
    } else {
        button1.setAttribute('aria-expanded1', 'false')
        menu1.setAttribute('aria-hidden1', 'true')
        menuLinks1.forEach(link => link.setAttribute('tabindex1', '-1'))
    }
})

function proverit(){
    pr_otv_zadachi_1 = 2;
    pr_otv_zadachi_2 = 4;
    pr_otv_zadachi_3 = 7;

    otv_uch_1 = document.getElementById('z_1').value;
    otv_uch_2 = document.getElementById('z_2').value;
    otv_uch_3 = document.getElementById('z_3').value;

    ball = 0;
    if(otv_uch_1 == pr_otv_zadachi_1){
        ball +=1;
    }
    if(otv_uch_2 == pr_otv_zadachi_2){
        ball +=1;
    }
    if(otv_uch_3 == pr_otv_zadachi_3){
        ball +=1;
    }
    vsego_zadach = 3
    procent_vip = ball/vsego_zadach * 100;
    document.getElementById('rezultat').innerHTML = 'Задания выполнены верно на '+Math.round(procent_vip)+'%';
    document.getElementById("rezultat").style.display = "block"; 
}

function ex2proverit(){
    po_ex2z1 = ">"
    po_ex2z2 = "<"
    po_ex2z3 = "<"
    po_ex2z4 = "="
    po_ex2z5 = ">"
    po_ex2z6 = "="

    ou_ex2z1 = document.getElementById('ex2z1').value;
    ou_ex2z2 = document.getElementById('ex2z2').value;
    ou_ex2z3 = document.getElementById('ex2z3').value;
    ou_ex2z4 = document.getElementById('ex2z4').value;
    ou_ex2z5 = document.getElementById('ex2z5').value;
    ou_ex2z6 = document.getElementById('ex2z6').value;

    ex2ball = 0;
    if(ou_ex2z1 == po_ex2z1){
        ex2ball +=1;
    }
    if(ou_ex2z2 == po_ex2z2){
        ex2ball +=1;
    }
    if(ou_ex2z3 == po_ex2z3){
        ex2ball +=1;
    }
    if(ou_ex2z4 == po_ex2z4){
        ex2ball +=1;
    }
    if(ou_ex2z5 == po_ex2z5){
        ex2ball +=1;
    }
    if(ou_ex2z6 == po_ex2z6){
        ex2ball +=1;
    }
    ex2vsego_zadach = 6
    ex2procent_vip = ex2ball/ex2vsego_zadach * 100;
    document.getElementById('ex2rezultat').innerHTML = 'Задания выполнены верно на '+Math.round(ex2procent_vip)+'%';
    document.getElementById("ex2rezultat").style.display = "block"; 
}

function ex3proverit(){
    po_ex3z1= "yes";
    po_ex3z2 = "yes";
    po_ex3z3 = "no";

    ou_ex3z1 = document.getElementById('ex3z1').value;
    ou_ex3z2 = document.getElementById('ex3z2').value;
    ou_ex3z3 = document.getElementById('ex3z3').value;

    ex3ball = 0;
    if(ou_ex3z1 == po_ex3z1){
        ex3ball +=1;
    }
    if(ou_ex3z2 == po_ex3z2){
        ex3ball +=1;
    }
    if(ou_ex3z3 == po_ex3z3){
        ex3ball +=1;
    }
    ex3vsego_zadach = 3
    ex3procent_vip = ex3ball/ex3vsego_zadach * 100;
    document.getElementById('ex3rezultat').innerHTML = 'Задания выполнены верно на '+Math.round(ex3procent_vip)+'%';
    document.getElementById("ex3rezultat").style.display = "block"; 
}

function ex4proverit(){
    po_ex4z1 = 100
    po_ex4z2 = 200
    po_ex4z3 = 4000
    po_ex4z4 = 3000
    po_ex4z5 = 200
    po_ex4z6 = 4

    ou_ex4z1 = document.getElementById('ex4z1').value;
    ou_ex4z2 = document.getElementById('ex4z2').value;
    ou_ex4z3 = document.getElementById('ex4z3').value;
    ou_ex4z4 = document.getElementById('ex4z4').value;
    ou_ex4z5 = document.getElementById('ex4z5').value;
    ou_ex4z6 = document.getElementById('ex4z6').value;

    ex4ball = 0;
    if(ou_ex4z1 == po_ex4z1){
        ex4ball +=1;
    }
    if(ou_ex4z2 == po_ex4z2){
        ex4ball +=1;
    }
    if(ou_ex4z3 == po_ex4z3){
        ex4ball +=1;
    }
    if(ou_ex4z4 == po_ex4z4){
        ex4ball +=1;
    }
    if(ou_ex4z5 == po_ex4z5){
        ex4ball +=1;
    }
    if(ou_ex4z6 == po_ex4z6){
        ex4ball +=1;
    }
    ex4vsego_zadach = 6
    ex4procent_vip = ex4ball/ex4vsego_zadach * 100;
    document.getElementById('ex4rezultat').innerHTML = 'Задания выполнены верно на '+Math.round(ex4procent_vip)+'%';
    document.getElementById("ex4rezultat").style.display = "block"; 
}

function ex5proverit(){
    po_ex5z1 = "<"
    po_ex5z2 = "="
    po_ex5z3 = "<"
    po_ex5z4 = "="
    po_ex5z5 = ">"
    po_ex5z6 = "="

    ou_ex5z1 = document.getElementById('ex5z1').value;
    ou_ex5z2 = document.getElementById('ex5z2').value;
    ou_ex5z3 = document.getElementById('ex5z3').value;
    ou_ex5z4 = document.getElementById('ex5z4').value;
    ou_ex5z5 = document.getElementById('ex5z5').value;
    ou_ex5z6 = document.getElementById('ex5z6').value;

    ex5ball = 0;
    if(ou_ex5z1 == po_ex5z1){
        ex5ball +=1;
    }
    if(ou_ex5z2 == po_ex5z2){
        ex5ball +=1;
    }
    if(ou_ex5z3 == po_ex5z3){
        ex5ball +=1;
    }
    if(ou_ex5z4 == po_ex5z4){
        ex5ball +=1;
    }
    if(ou_ex5z5 == po_ex5z5){
        ex5ball +=1;
    }
    if(ou_ex5z6 == po_ex5z6){
        ex5ball +=1;
    }
    ex5vsego_zadach = 6
    ex5procent_vip = ex5ball/ex5vsego_zadach * 100;
    document.getElementById('ex5rezultat').innerHTML = 'Задания выполнены верно на '+Math.round(ex5procent_vip)+'%';
    document.getElementById("ex5rezultat").style.display = "block";
}
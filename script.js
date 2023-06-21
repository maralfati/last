const btn1=document.getElementById("btn1")
const btn2=document.getElementById("btn2")
const prev=document.getElementById("prev")
const next=document.getElementById("next")

function move_btn1(){
    document.getElementById("container").style.transform="translateX(311px)"
document.getElementById("content2").style.filter="blur(0)"
}
function move_btn2(){
    document.getElementById("container").style.transform="translateX(31px)"
document.getElementById("content2").style.filter="blur(4px)"

}
function move_btn3(){
    document.getElementById("container").style.transform="translateX(-227px)"
    document.getElementById("content4").style.filter="blur(4px)"

}
function move_btn4(){
    document.getElementById("container").style.transform="translateX(-311px)"
document.getElementById("content4").style.filter="blur(0)"
}

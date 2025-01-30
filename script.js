const message = document.getElementById("message");
const shadow = document.getElementById('shadow');
const btn = document.getElementById("modal");
//   lets start coding !!!!
btn.addEventListener('click',function(){
    shadow.style.visibility="visible";
    message.style.visibility="visible";
});
shadow.addEventListener('click',function(){
    shadow.style.visibility="hidden";
    message.style.visibility="hidden";
})
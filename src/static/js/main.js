const textFull = document.querySelectorAll('.cardT');
const button = document.querySelectorAll('.card_button');
let textFullText= []


textFull.forEach((item)=>{
    textFullText.push(item.innerText)
});

const funSub = (i)=>{
    document.querySelectorAll('.cardT')[i].innerText = textFull[i].innerText.substr(0, 150)+'...';
}

textFull.forEach((item, i)=>{
    funSub(i)
});

const short = (i)=>{
    textFull.forEach((item, i)=>{
        funSub(i)
        button[i].classList.remove("open");
    });
};





const open=(i)=>{
    if(textFull[i].innerText.length >153){
        funSub(i);
        button[i].classList.remove("open");
        return false;
    }
    short(i);
    document.querySelectorAll('.cardT')[i].innerText = textFullText[i];
    button[i].classList.add("open");
}
button.forEach((item, i)=>{
    item.addEventListener("click", ()=>{open(i)});
});

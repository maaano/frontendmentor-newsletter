const validemail = document.querySelector(".validemail");
const text = document.querySelector(".text");
const form = document.querySelector("form");
const image = document.querySelector(".image");
const main = document.querySelector("main");
const submit = document.querySelector(".submit");
const email = document.querySelector(".email");
const list = document.querySelector(".list");
const title = document.querySelector("h1");
const paragraphe = document.querySelector(".join");
const newsletter = document.querySelector(".newsletter-sign-up")
const bigimage = document.querySelector(".bigimage")


let liste;
let x=0;
let y=0;
let v=0;
let r=0;

const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    liste=text.value;
    v=0;
    x=0;
    y=0;
    for(let i=0;i<liste.length;i++){
        r=0;
        if(liste[i]=="@"){
            x=i;
        };
        if(liste[i]=="."){
            y=i;
        };
        for( j=0;j<alphabet.length;j++){
            if(liste[i]==alphabet[j]){
                r++;}
        }
        if(r==0){
             v++;
        }



    }
    if(x!==0 && y-x>=2 && liste.length-y+1>=2 && v==2){
        main.style.display="flex";
        main.style.justifyContent="center";
        main.style.alignItems="Center"
        image.remove();
        text.remove();
        email.remove();
        list.remove();
        submit.value="Dismiss message";
        title.textContent="Thanks for subscribing!"
        paragraphe.innerHTML=`A confirmation email has been sent to <strong>${liste}</strong> . Please open it and click the button inside
        to confirm your subscription.`
        newsletter.innerHTML =`
            <img class="successimage" src="./assets/images/icon-success.svg" alt="succes">` + newsletter.innerHTML;
        newsletter.style.height="100vh";
        newsletter.style.justifyContent="space-around";
    }else{
        validemail.style.visibility="visible";
        text.style.color="var(--Tomato)";
        text.style.background="hsla(4, 100%, 67%, 0.308)";
        text.style.borderColor="var(--Tomato)";
    };
});




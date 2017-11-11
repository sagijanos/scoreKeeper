var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");
var p1Display = document.querySelector("#p1display");
var p2Display = document.querySelector("#p2display");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("#number");
var p1Score= 0;
var p2Score= 0;
var gameOver = false;
var winningScore = 5;
/*****Az p1button szamolasa 5 ig ******/
p1Button.addEventListener("click", function(){
    if(!gameOver){
        p1Score++;
    p1Display.textContent = p1Score;
        
    }
    if(p1Score === winningScore){
        p1Display.classList.add("winner");
        gameOver = true;
        
        
    }
    
})
/*****Az p2button szamolasa 5 ig ******/

p2Button.addEventListener("click", function(){
    if(!gameOver){
        p2Score++;
    p2Display.textContent = p2Score;
        
    }
    if(p2Score === winningScore){
        p2Display.classList.add("winner");
        gameOver = true;
        
    }
    
})
/*****Reset button hogy minden vissza alljon az eredeti allapotban,
fontos hogy a logia egyszeru mindent beleteszel egy functionbe nezd at egyertelmu
******/
resetButton.addEventListener("click", function(){
    p1Score= 0;
    p2Score= 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p2Display.classList.remove("winner");
    p1Display.classList.remove("winner");
    gameOver = false;
    
})
/*****Input mezo ami nem clickel megy hanem change-el itt a gyoztes pontszam nak a textje kell egyeezzen az input mezojevel es fontos hogy az inputnak az erteket kell kerni nem csak az inputot pl numInput.value.
Fontos!!!! numInput.value nem lesz egyenlo  p1Score === winningScore ezzel mert a numInputot Stringkent fogja ertelmezni numInput.value = "20"--> ez pedig nem szam szoval --> ez nem lesz helyes winningScore = numInput.value;
Mert ez nem egyenlo. De ha numIputot szamma alakitjuk akkor viszont jo lesz szoval ezt pedig igy hogy winningScore = Number(numInput.value);******/
numInput.addEventListener("change", function(){
   winningScoreDisplay.textContent = numInput.value;
   winningScore = Number(numInput.value);
})

























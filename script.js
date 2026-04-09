let text=document.getElementById("POS1");
text.addEventListener("click",function(){
    text.innerHTML="name of a person, place, thing (e.g., city, teacher, book)";
    text.style.fontSize="19px";
    text.style.backgroundColor="#A76286";
});
text.addEventListener("mouseleave",function(){
    text.innerHTML="<h1>Noun</h1>";
   text.style.backgroundColor="#d49eba";
    // text.style.fontSize="19px";
});

let text1=document.getElementById("POS2");
text1.addEventListener("click",function(){
    text1.innerHTML="used instead of a noun (e.g., he, they, it)";
    text1.style.fontSize="19px";
    text1.style.backgroundColor="#A76286";
});
text1.addEventListener("mouseleave",function(){
    text1.innerHTML="<h1>Pronoun</h1>";
   text1.style.backgroundColor="#d49eba";
    // text.style.fontSize="19px";
});


let text2=document.getElementById("POS3");
text2.addEventListener("click",function(){
    text2.innerHTML="action or state (e.g., run, think, is)";
    text2.style.fontSize="19px";
    text2.style.backgroundColor="#A76286";
});
text2.addEventListener("mouseleave",function(){
    text2.innerHTML="<h1>Verb</h1>";
   text2.style.backgroundColor="#d49eba";
    // text.style.fontSize="19px";
});


let text3=document.getElementById("POS4");
text3.addEventListener("click",function(){
    text3.innerHTML="describes a noun (e.g., beautiful, tall)";
    text3.style.fontSize="19px";
    text3.style.backgroundColor="#A76286";
});
text3.addEventListener("mouseleave",function(){
    text3.innerHTML="<h1>Adjective</h1>";
   text3.style.backgroundColor="#d49eba";
    // text.style.fontSize="19px";
});

let text4=document.getElementById("POS5");
text4.addEventListener("click",function(){
    text4.innerHTML="describes a verb/adjective (e.g., quickly, very)";
    text4.style.fontSize="19px";
    text4.style.backgroundColor="#A76286";
});
text4.addEventListener("mouseleave",function(){
    text4.innerHTML="<h1>Adverb</h1>";
   text4.style.backgroundColor="#d49eba";
    // text.style.fontSize="19px";
});
let text5=document.getElementById("POS6");
text5.addEventListener("click",function(){
    text5.innerHTML="shows relationship (e.g., on, under, between)";
    text5.style.fontSize="19px";
    text5.style.backgroundColor="#A76286";
});
text5.addEventListener("mouseleave",function(){
    text5.innerHTML="<h1>Preposition</h1>";
   text5.style.backgroundColor="#d49eba";
    // text.style.fontSize="19px";
});

let text6=document.getElementById("POS7");
text6.addEventListener("click",function(){
    text6.innerHTML="joins words/clauses (e.g., and, but, because)";
    text6.style.fontSize="19px";
    text6.style.backgroundColor="#A76286";
});
text6.addEventListener("mouseleave",function(){
    text6.innerHTML="<h1>Conjuction</h1>";
   text6.style.backgroundColor="#d49eba";
    // text.style.fontSize="19px";
});

let text7=document.getElementById("POS8");
text7.addEventListener("click",function(){
    text7.innerHTML="expresses emotion (e.g., Oh!, Wow!)";
    text7.style.fontSize="19px";
    text7.style.backgroundColor="#A76286";
});
text7.addEventListener("mouseleave",function(){
    text7.innerHTML="<h1>Interjection</h1>";
   text7.style.backgroundColor="#d49eba";
    // text.style.fontSize="19px";
});
let text9=document.getElementById("POS9");
text9.addEventListener("click",function(){
    text9.innerHTML="now <br>Simple: She plays.<br>Continuous: She is playing.<br>Perfect: She has played.";
    text9.style.fontSize="19px";
    text9.style.backgroundColor="#A76286";
});
text9.addEventListener("mouseleave",function(){
    text9.innerHTML="<h1>Present Tense</h1>";
   text9.style.backgroundColor="#d49eba";
    // text.style.fontSize="19px";
});
let text10=document.getElementById("POS10");
text10.addEventListener("click",function(){
    text10.innerHTML="before now<br>.Simple: She played.<br>Continuous: She was playing.<br>Perfect: She had played.";
    text10.style.fontSize="19px";
    text10.style.backgroundColor="#A76286";
});
text10.addEventListener("mouseleave",function(){
    text10.innerHTML="<h1>Past Tense</h1>";
   text10.style.backgroundColor="#d49eba";
    // text.style.fontSize="19px";
});
let text11=document.getElementById("POS11");
text11.addEventListener("click",function(){
    text11.innerHTML="later:<br> Simple: She will play.<br>Continuous: She will be playing.<br> Perfect: She will have played.";
    text11.style.fontSize="19px";
    text11.style.backgroundColor="#A76286";
});
text11.addEventListener("mouseleave",function(){
    text11.innerHTML="<h1>Future Tense</h1>";
   text11.style.backgroundColor="#d49eba";
    // text.style.fontSize="19px";
});
let text12=document.getElementById("POS12");
text12.addEventListener("click",function(){
    text12.innerHTML="Subject performs the action.<br>The chef cooked the meal.";
    text12.style.fontSize="19px";
    text12.style.backgroundColor="#A76286";
});
text12.addEventListener("mouseleave",function(){
    text12.innerHTML="<h1>Active Voice</h1>";
   text12.style.backgroundColor="#d49eba";
    // text.style.fontSize="19px";
});
let text13=document.getElementById("POS13");
text13.addEventListener("click",function(){
    text13.innerHTML="Subject receives the action.<br>The meal was cooked by the chef.";
    text13.style.fontSize="19px";
    text13.style.backgroundColor="#A76286";
});
text13.addEventListener("mouseleave",function(){
    text13.innerHTML="<h1>Passive Voice</h1>";
   text13.style.backgroundColor="#d49eba";
    // text.style.fontSize="19px";
});




let form=document.getElementById("vocab");
let vocablist=document.getElementById("vocablist");
form.addEventListener("submit",function(e){
    e.preventDefault();
    let wordInput=document.getElementById("vocabInput").value.trim();
    if (wordInput==="") return;
let key="vocab_" +Date.now();
    let data = {
    word:wordInput
};
localStorage.setItem(key,JSON.stringify(data));
document.getElementById("vocabInput").value = "";
renderList();

});


function renderList(){
    // vocabulary=[],
    let keys=Object.keys(localStorage);
    let html="<ol>"

    for (let i=0;i< keys.length; i++) {
        let item =JSON.parse(localStorage.getItem(keys[i]));
        

        if(item &&item.word){
            html +=`
            <li> ${item.word}
            <button onclick="deleteWord('${keys[i]}')"
            style="margin-left:10px;background:red;color :white;border:none;padding:2px 6px">
            Delete
            </button>
            
            </li>`;
        }
}
html+="</ol>";
vocablist.innerHTML=html;
}
function deleteWord(key){
    localStorage.removeItem(key);
    renderList();
}
renderList();

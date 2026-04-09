function setupQuiz(){
    let score=0;
    const options = document.querySelectorAll(".option");

    // const messageBox = document.getElementById("message");
    const scoreBox = document.getElementById("score");



    options.forEach(option =>{
        option.addEventListener("click",()=>{
            const questionID =option.dataset.question;

            const allOptions =document.querySelectorAll(`.option[data-question="${questionID}"]`);
            if(allOptions[0].classList.contains("answered")) return;
            allOptions.forEach(o=>{
                if(o.dataset.correct==="true"){
                    o.style.backgroundColor="green";
                    
                }
                else{
                    o.style.backgroundColor="red";
                    
                }
})

                if(option.dataset.correct==="true"){
                    
                    // messageBox.innerText="You got it right!";
                    score++;
                }
                // else{
                    
                    
                // }
allOptions.forEach(o => o.classList.add("answered"));
                scoreBox.innerText= `Score : ${score}`;
            


        })
    })
    
}


setupQuiz();
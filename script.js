let form = document.querySelector(".form");
let input = document.getElementById("comment-field");
let commentList = document.querySelector(".list");
let changeButton = document.querySelector(".btn");


changeButton.addEventListener("click", function(){
    changeButton.classList.toggle("important")
    if(changeButton.classList.contains("important")){
        changeButton.textContent = "Muhim xabar"
    }
    else{
        changeButton.textContent = "Odatiy xabar"
    }
})

form.addEventListener("submit", function(evt){
    evt.preventDefault();
    let newComment = document.createElement("li");

    newComment.textContent = input.value
    input.value = ""
    newComment.classList.add("list__item")
    if(changeButton.classList.contains("important")){
        newComment.classList.add("important")
    }
    else{
        newComment.classList.remove("important")
    }
    commentList.append(newComment);
})
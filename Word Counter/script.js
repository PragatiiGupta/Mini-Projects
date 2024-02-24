const button = document.getElementById("submit").addEventListener("click",()=>{
const input = document.getElementById("input_box").value;
const char_count = input.length;
const word_count = input.split(" ").length;
const sentence_count = input.split(". ").length;

    document.getElementById("char").innerText = "Characters : " + char_count;
    document.getElementById("word").innerText = "Words : " + word_count;
    document.getElementById("sentence").innerText = "Sentences : " + sentence_count;

});

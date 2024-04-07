let check = (str) => {
    return str === str.split("").reverse().join("");
}
document.getElementById("myform").addEventListener("submit", (event) => {
    var textInput = document.getElementById("text-input").value.trim();
    let modifiedtextInput = textInput.replace(/[^a-zA-Z0-9]/gi,'').toLowerCase();
    let result = document.getElementById("result");
    if (modifiedtextInput === "") {
        alert("Please input a value");
        event.preventDefault(); // Prevent form submission
    } else {
        if (check(modifiedtextInput)) {
            result.innerText = textInput+" is a palindrome";
        } else {
            result.innerText = textInput+" is not a palindrome";
        }
        document.getElementById("text-input").value="";
        event.preventDefault(); // Prevent form submission
    }
});
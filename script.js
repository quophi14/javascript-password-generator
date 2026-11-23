const passwordBox = document.getElementById("password");
const copyMessage = document.getElementById("copy-message");
const passwordLength = Number(prompt("choose the length of your password and click the 'Generate' button "));

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "~!@#$%^&*(()_+}{?><";

const allChars = uppercase + lowercase + numbers + symbols;



function createPassword() {
    if (
      !Number.isInteger(passwordLength) ||
      passwordLength < 4 ||
      passwordLength > 64
    ) {
      alert("Password length must be a number between 4 and 64");
      return;
    }
    let password = "";
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];
    
    while (passwordLength > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    let shuffledPassword = [...password].sort(() => Math.random() - 0.5).join("");
    passwordBox.value = shuffledPassword;
    copyMessage.style.display = "none";
}

function copyPassword() {
    passwordBox.select();
    document.execCommand('copy');
    copyMessage.textContent = "PassWord Copied";
    copyMessage.style.display = "block";
    
    
}


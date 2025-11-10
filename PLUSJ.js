const X = document.getElementById("x");
const Y = document.getElementById("y");
const Z = document.getElementById("z");
const Genr = document.getElementById("genr");
const Check = document.getElementById("check");
const messagePara = document.getElementById("message");

let a, b, c;

Genr.addEventListener("click", () => {
    // Generate random numbers between 0 and 999
    a = Math.floor(Math.random() * 1000);
    b = Math.floor(Math.random() * 1000);
    c = a + b;

    // Display numbers in buttons
    X.textContent = a;
    Y.textContent = b;

    // Clear input and message
    Z.value = "";
    messagePara.textContent = "";
});

Check.addEventListener("click", () => {
    const userAnswer = parseInt(Z.value);

    if (!Z.value) {
        messagePara.textContent = "⚠ বুঝনা কিছু দুদু খাও! কিছু লেখ আগে সালা!";
        messagePara.style.color = "#ff9800";
        return;
    }

    if (userAnswer === c) {
        messagePara.textContent = "✅ অভিনন্দন! আপনার উত্তরটি সঠিক.";
        messagePara.style.color = "green";
    } else {
        messagePara.textContent = `❌ ভুল উত্তর, কিরে মামা অংক করতে পারোস না! সঠিক উত্তর ${c}.`;
        messagePara.style.color = "red";
    }
});

var ones = ['0️⃣','1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣'];
var seperator = "​";
		
String.prototype.format = function () {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function (match, number) {
        return typeof args[number] !== 'undefined' ? args[number] : match;
    });
};

function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
}

function isNumber(str) {
    return str.length == 1 && str.match(/^\d+$/);
}

function replaceText() {
    var text = document.getElementById("enteredText").value;
    var result = "";
    for (var i = 0; i < text.length; i++) {
        var char = text.charAt(i).toLowerCase();
        var regional = "";
        if (isLetter(char)) {
            switch(char) {
                case "a": regional = "🇦"; break;
                case "b": regional = "🇧"; break;
                case "c": regional = "🇨"; break;
                case "d": regional = "🇩"; break;
                case "e": regional = "🇪"; break;
                case "f": regional = "🇫"; break;
                case "g": regional = "🇬"; break;
                case "h": regional = "🇭"; break;
                case "i": regional = "🇮"; break;
                case "j": regional = "🇯"; break;
                case "k": regional = "🇰"; break;
                case "l": regional = "🇱"; break;
                case "m": regional = "🇲"; break;
                case "n": regional = "🇳"; break;
                case "o": regional = "🇴"; break;
                case "p": regional = "🇵"; break;
                case "q": regional = "🇶"; break;
                case "r": regional = "🇷"; break;
                case "s": regional = "🇸"; break;
                case "t": regional = "🇹"; break;
                case "u": regional = "🇺"; break;
                case "v": regional = "🇻"; break;
                case "w": regional = "🇼"; break;
                case "x": regional = "🇽"; break;
                case "y": regional = "🇾"; break;
                case "z": regional = "🇿"; break;
            }
            result += regional + seperator;
        }
        else if (isNumber(char)) {
            result += ones[ parseInt(char)] + seperator;
        }
        else if (char === "#") {
            result += "#️⃣" + seperator;
        }
        else if (char === "?") {
            result += "❔" + seperator;
        } else if (char === "!") {
            result += "❕" + seperator;
        } else if (char === "+") {
            result += "➕" + seperator;
        } else if (char === "-") {
            result += "➖" + seperator;
        }
        else if (char === " ") {
            result += char;
        }
        else {
            result += char + seperator;
        }
    }
    var output = document.getElementById("output");
    output.value = result;
}

function copyText() {
    var output = document.getElementById("output");
    output.focus();
    output.select();
    var copySuccess = document.getElementById("copySuccess");
    try {
        var successful = document.execCommand('copy');
        copySuccess.innerText = "Text copied";
    } catch (err) {
        copySuccess.innerText = "Failed to copy text";
    }
}

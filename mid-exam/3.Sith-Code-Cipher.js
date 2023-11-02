function decrypt(text, shift) {
    let resultTxt = '';
    for (let i = 0; i < text.length; i++) {
        let currChar = text[i];
        let currCharCode = currChar.charCodeAt(0);
        let newCharCode = currCharCode;
        if (currChar.match(/[a-z]/)) {
            newCharCode -= shift;
            if(newCharCode < 'a'.charCodeAt(0)) {
                newCharCode += 26;
            }
        } else if (currChar.match(/[A-Z]/)) {
            newCharCode -= shift;
            if(newCharCode < 'A'.charCodeAt(0)) {
                newCharCode += 26;
            }
        } else if (currChar.match(/[0-9]/)) {
            newCharCode -= shift;
            if(newCharCode < '0'.charCodeAt(0)) {
                newCharCode += 10;
            }
        }
        
        resultTxt += String.fromCharCode(newCharCode);
    }

    console.log(resultTxt)
}

// decrypt("Uifsf jt b tfdsfu", 1);
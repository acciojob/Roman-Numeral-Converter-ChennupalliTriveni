function convertToRoman(num) {
    if (num === 0) return "";  // No Roman numeral for 0

    const symbols = [
        ["M", 1000],
        ["CM", 900],
        ["D", 500],
        ["CD", 400],
        ["C", 100],
        ["XC", 90],
        ["L", 50],
        ["XL", 40],
        ["X", 10],
        ["IX", 9],
        ["V", 5],
        ["IV", 4],
        ["I", 1]
    ];

    let roman = "";

    for (let [symbol, value] of symbols) {
        while (num >= value) {
            roman += symbol;
            num -= value;
        }
    }
    return roman;
}

function showRoman() {
    let num = parseInt(document.getElementById("number").value);
    document.getElementById("result").innerText = convertToRoman(num);
}

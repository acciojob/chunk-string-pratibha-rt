function chunkString(str, size) {
    if (str === null || str === "") return []; // Handle null or empty input
    if (size <= 0) return []; // Handle non-positive chunk size

    let chunks = [];
    for (let i = 0; i < str.length; i += size) {
        let subStr = str.slice(i, i + size);
        chunks.push(subStr);
    }
    return chunks;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = parseInt(prompt("Enter Chunk Size."), 10);
alert("[" + chunkString(str, size).map(s => `"${s}"`).join(", ") + "]");
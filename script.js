function chunkStr(str, size) {
    
	if (str === null) {
		return []; 
	}

	let chunks = [];
	
    for (let i = 0; i < str.length; i = i + size) {
        let subStr = str.slice(i, i + size);
        chunks.push(subStr);
    }
    return chunks;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = parseInt(prompt("Enter Chunk Size."), 10);
alert("[" + chunkStr(str, size).map(s => `"${s}"`).join(", ") + "]");
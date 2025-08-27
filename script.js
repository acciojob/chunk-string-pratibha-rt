function stringChop(str, size) {
  // your code here
	let chunks = [];
	for (int i = 0; i < str.length; i = i + size) {
		let subStr = str.slice(i, i + size);
		chunks.push(subStr);
	}
	return chunks;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));

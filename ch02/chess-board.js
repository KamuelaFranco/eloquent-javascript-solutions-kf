var size = 8; // Can be any number but console will wrap
var chessBoard = new String();

for (var row=1;row<=size;row++) {
	if (row%2==0) { // Determines even characters
		for (var charNum=1;charNum<=size;charNum++) {
			if (charNum%2==0) chessBoard += "#";
			else chessBoard += " ";
		}
	} else for (var charNum=1;charNum<=size;charNum++) {
		if (charNum%2==0) chessBoard += " ";
		else chessBoard += "#";
	}
	chessBoard += "\n";
}

console.log(chessBoard);
var fs = require('fs');

var useStdin = function() {
	var input = process.stdin.read();
	if (input !== null) {
		var inputSplit = input.toString().trim().split(" ");
		if (inputSplit[0] == "cat") {
			//cat <filename>
			catFile(inputSplit[1]);
		} else if (inputSplit[0] == "touch") {
			//touch <filename>
			createNewFile(inputSplit[1]);
		} else if (inputSplit[0] == "rm"){
			//rm <filename>
			delFile(inputSplit[1]);
		} else if (inputSplit[0] == "rpl") {
			//rpl <filename><word1><word2>
			replaceWord(inputSplit[1],inputSplit[2],inputSplit[3]);
		} else if (inputSplit[0] == "grep") {
			findLine(inputSplit[1],inputSplit[2]);
		}
	}
};

//create a file (touch)
function createNewFile(fileName) {
	fs.writeFile(fileName, "", function(err){
		if (err) {
			console.log("Could not write to file");
		} else {
			console.log("File created and saved");
		}
	});
}

//read from a file (cat)
function catFile(fileName) {
	fs.readFile(fileName, function(err, data) {
		if (err) {
			console.log("Unable to read from file");
		} else {
			console.log(data.toString());
		}
	});
}

process.stdin.on('readable', useStdin);


/*Your assignment is to implement the following functionality:
	* remove a file
		"rm" <file name>
		> rm hello.txt
			entirely delete the file hello.txt*/

 //delete a file (unlink)
function delFile(fileName) {
	fs.unlink(fileName, function(err) {
		if (err) {
			console.log("Unable to delete file");
		} else {
			console.log("File deleted.");
		}
	});
}

//find and replace a word in the file

function replaceWord(fileName, oldWord, newWord) {
    fs.readFile(fileName, function(err, data) {
        if (err) {
            console.log('There was an error reading the file.');
            console.log (err);
        } else {
            var result = data.toString().split(oldWord).join(newWord);
            fs.writeFile(fileName, result, function (err) {
                if (err) {
                    console.log("There was an error writing the file.");
                } else {
                    console.log("The file was replaced with new words.");
                }
            })
        }
    })
}

		/*"replace" <file to search> <word to replace> <replacement word>
		> replace hello.txt hello goodbye
			replace all instances of hello in hello.txt with goodbye
		> replace what.txt there their
			replace all instances of there in what.txt with their*/

//find and replace a word in the file

// find a line in a file
function findLine(fileName, word) {
    fs.readFile(fileName, function(err, data) {
        if (err) {
            console.log('There was an error reading the file.');
            return console.log (err);
        } else
            fs.readFile(fileName, function(err, data) {
                if (err) {
                    console.log("There was an error writing the file.");
                } else {
                    data.toString().split('\n').forEach(function(line){
                        if (line.indexOf(word) !== -1) {
                            return console.log(line);
                        }
                    })
                }
            })
    })
}

		/*"grep" <file name> <word to find>
		> grep hello.txt hello
			print out all of the lines in hello.txt that contain "hello"
		> grep what.txt there
			print out all of the lines in what.txt that contain "there"*/

	/*Bonus work:
		* Ask for confirmation before deleting a file
		* Don't let people delete files that are above the current working directory (i.e. disallow "../")
		* Have grep take a regular expression as the word to find
		* Create mkdir and rmdir
*!/*/


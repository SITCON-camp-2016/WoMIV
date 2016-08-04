var fs = require('fs');
readline = require('readline');


function processFile(inputFile) {
    instream = fs.createReadStream(inputFile),
    outstream = new (require('stream'))(),
    rl = readline.createInterface(instream, outstream);
     
    rl.on('line', function (line) {
		console.log(line);
        var pair = line.toString().split(" ");
		var fjson
		fs.readFile('map.json', 'UTF-8', function(err, data) {
			fjson = JSON.parse(data);
			var len = fjson.fetures.length;
			for(var i = 0; i < len; i++) {
				if(fjson.fetures[i].properties.name === pair[0] ) {
					fjson.fetures[i].properties.fill = "#ffffff";
				}
			}
			fs.writeFile('.json', fjson, function(err, data){if(!err) console.log("save");});
		});
    });
    
    rl.on('close', function (line) {
        var pair = line.toString().split(" ");
		var fjson
		fs.readFile('map.json', 'UTF-8', function(err, data) {
			fjson = JSON.parse(data);
			var len = fjson.fetures.length;
			for(var i = 0; i < len; i++) {
				if(fjson.fetures[i].properties.name === pair[0] ) {
					fjson.fetures[i].properties.fill = "#ffffff";
				}
			}
			fs.writeFile('.json', fjson, function(err, data){if(!err) console.log("save");});
		});
        console.log('done reading file.');
    });
}
processFile('pair.txt');


list = [];
var label = 
    [{ "word": "酸", "freq": 3 },
     { "word": "你们都是疯子吗", "freq": 7 }, 
     { "word": "ametalk", "freq": 35 }, 
     { "word": "becky", "freq": 2 },
     { "word": "cp爱", "freq": 2 }, 
     { "word": "daigo", "freq": 2 }, 
     { "word": "downtown", "freq": 5 }, 
     { "word": "honeyworks", "freq": 2 },
     { "word": "ippon", "freq": 2 },
     { "word": "peace", "freq": 3 }, 
     { "word": "rozan", "freq": 2 }, 
     { "word": "taka&toshi", "freq": 2 }, { "word": "unjash", "freq": 9 }, { "word": "unjash组合", "freq": 2 }];

for (var i in label) {
    if (label[i]["freq"] > 0) {
        list.push([label[i]["word"], label[i]["freq"]])
    }

}

var div = document.getElementById("canvas-container")

var canvas = document.getElementById("canvas_cloud");

canvas.height = div.offsetHeight;

canvas.width = div.offsetWidth;

var options = {
    list: list,
    gridSize: Math.round(8 * document.getElementById('canvas_cloud').offsetWidth / 1024),
    weightFactor: function(size) {

        wf = Math.pow(size, 0.3) * 15 * document.getElementById('canvas_cloud').offsetWidth / 1024;
        console.log(wf);
        return wf
        // return 180/max(size);
    },
    rotateRatio: 0.5,
    rotationSteps: 2,
    color: 'random-light',
    backgroundColor: "transparent"
}

WordCloud(document.getElementById('canvas_cloud'), options);

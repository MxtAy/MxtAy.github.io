list = [];
var label = 
    [{ "word": "酸", "freq": 3 },
     { "word": "你们都是疯子吗", "freq": 7 }, 
     { "word": "我前男友", "freq": 35 }, 
     { "word": "卫校", "freq": 2 },
     { "word": "操行", "freq": 2 }, 
     { "word": "我也是人", "freq": 2 }, 
     { "word": "aka", "freq": 5 }, 
     { "word": "骆驼", "freq": 2 },
     { "word": "去厕所", "freq": 2 },
     { "word": "儿子睡觉呢", "freq": 3 }, 
     { "word": "他挺猛", "freq": 2 }, 
     { "word": "我就这么操行", "freq": 2 },
     { "word": "是有点大", "freq": 9 },
     { "word": "但是想尝试下", "freq": 2 }
    ];

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

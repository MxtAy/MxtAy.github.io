list = [];
var label = 
    [{ "word": "24小时不准笑", "freq": 3 },
     { "word": "akb48", "freq": 7 }, 
     { "word": "ametalk", "freq": 35 }, 
     { "word": "becky", "freq": 2 },
     { "word": "cp爱", "freq": 2 }, 
     { "word": "daigo", "freq": 2 }, 
     { "word": "downtown", "freq": 5 }, 
     { "word": "honeyworks", "freq": 2 },
     { "word": "ippon", "freq": 2 },
     { "word": "peace", "freq": 3 }, 
     { "word": "rozan", "freq": 2 }, 
     { "word": "taka&toshi", "freq": 2 }, { "word": "unjash", "freq": 9 }, { "word": "unjash组合", "freq": 2 }, { "word": "三四郎", "freq": 2 }, { "word": "三明治人", "freq": 3 }, { "word": "三森铃子", "freq": 2 }, { "word": "上田晋也", "freq": 22 }, { "word": "下野紘", "freq": 2 }, { "word": "不准笑", "freq": 3 }, { "word": "东京03", "freq": 8 }, { "word": "严肃歌曲", "freq": 4 }, { "word": "中居之窗", "freq": 2 }, { "word": "中居正广", "freq": 4 }, { "word": "中岡創一", "freq": 2 }, { "word": "中川家", "freq": 2 }, { "word": "井上聪", "freq": 2 }, { "word": "井上裕介", "freq": 9 }, { "word": "井戸田润", "freq": 4 }, { "word": "今夜比一比", "freq": 5 }, { "word": "今田耕司", "freq": 2 }, { "word": "佐藤栞里", "freq": 4 }, { "word": "假面骑士", "freq": 2 }, { "word": "儿岛一哉", "freq": 5 }, { "word": "光浦靖子", "freq": 2 }, { "word": "児岛一哉", "freq": 2 }, { "word": "児嶋一哉", "freq": 7 }, { "word": "全员逃走中", "freq": 3 }, { "word": "关8", "freq": 7 }, { "word": "关八", "freq": 2 }, { "word": "内村光良", "freq": 4 }, { "word": "内田理央", "freq": 5 }, { "word": "冈井千圣", "freq": 2 }, { "word": "写真偶像", "freq": 2 }, { "word": "冢地武雅", "freq": 2 }, { "word": "出川哲朗", "freq": 7 }, { "word": "剑道小林", "freq": 3 }, { "word": "剧团一人", "freq": 30 }, { "word": "千原弟", "freq": 3 }, { "word": "千秋", "freq": 2 }, { "word": "博多华丸", "freq": 10 }, { "word": "博多华丸大吉", "freq": 2 }, { "word": "博多大吉", "freq": 20 }, { "word": "博多華丸", "freq": 2 }, { "word": "又吉直树", "freq": 12 }, { "word": "又吉直樹", "freq": 3 }, { "word": "友近", "freq": 5 }, { "word": "吉本兴业", "freq": 5 }, { "word": "吉村崇", "freq": 6 }, { "word": "吉田敬", "freq": 5 }, { "word": "后藤辉基", "freq": 16 }, { "word": "向井慧", "freq": 2 }, { "word": "品川佑", "freq": 3 }, { "word": "品川祐", "freq": 5 }, { "word": "土屋伸之", "freq": 2 }, { "word": "土田晃之", "freq": 10 }, { "word": "坂上忍", "freq": 5 }, { "word": "坪仓由幸", "freq": 5 }, { "word": "城岛茂", "freq": 2 }, { "word": "堀內健", "freq": 2 }, { "word": "堀田茜", "freq": 4 }, { "word": "塙宣之", "freq": 4 }, { "word": "塚地武雅", "freq": 3 }, { "word": "大久保佳代子", "freq": 12 }, { "word": "大喜利", "freq": 6 }, { "word": "大家志津香", "freq": 2 }, { "word": "大悟", "freq": 7 }, { "word": "大水洋介", "freq": 2 }, { "word": "大泉洋", "freq": 2 }, { "word": "失恋岛", "freq": 2 }, { "word": "奇迹美照", "freq": 3 }, { "word": "奥黛丽", "freq": 15 }, { "word": "宇治原史规", "freq": 2 }, { "word": "宫迫博之", "freq": 4 }, { "word": "小峠英二", "freq": 3 }, { "word": "小木博明", "freq": 7 }, { "word": "小木矢作", "freq": 34 }, { "word": "小杉竜一", "freq": 5 }, { "word": "小林剑道", "freq": 3 }, { "word": "小沢一敬", "freq": 15 }, { "word": "小泽一敬", "freq": 4 }, { "word": "山崎弘也", "freq": 6 }, { "word": "山本博", "freq": 3 }, { "word": "山里亮太", "freq": 8 }, { "word": "岡井千聖", "freq": 2 }, { "word": "岩井勇气", "freq": 3 }, { "word": "岩尾望", "freq": 10 }, { "word": "川岛明", "freq": 10 }, { "word": "川島明", "freq": 7 }, { "word": "市川美织", "freq": 2 }, { "word": "平爱梨", "freq": 2 }, { "word": "徳井義実", "freq": 5 }, { "word": "德井义实", "freq": 19 }, { "word": "心斋桥二丁目", "freq": 2 }, { "word": "情热大陆", "freq": 2 }, { "word": "指原莉乃", "freq": 7 }, { "word": "挑战", "freq": 6 }, { "word": "擦边球", "freq": 2 }, { "word": "斎藤司", "freq": 2 }, { "word": "新田惠海", "freq": 2 }, { "word": "日文翻唱", "freq": 3 }, { "word": "日村勇紀", "freq": 3 }, { "word": "日村勇纪", "freq": 16 }, { "word": "早见明里", "freq": 2 }, { "word": "明石家秋刀鱼", "freq": 9 }, { "word": "春日", "freq": 6 }, { "word": "春日俊彰", "freq": 35 }, { "word": "月亭方正", "freq": 4 }, { "word": "月曜夜", "freq": 3 }, { "word": "月曜夜未央", "freq": 12 }, { "word": "有吉之壁", "freq": 3 }, { "word": "有吉弘行", "freq": 66 }, { "word": "有村架纯", "freq": 2 }, { "word": "有野晋哉", "freq": 3 }, { "word": "朝日奈央", "freq": 3 }, { "word": "杉山裕之", "freq": 2 }, { "word": "村上信五", "freq": 17 }, { "word": "村本大辅", "freq": 9 }, { "word": "東京03", "freq": 5 }, { "word": "松冈茉优", "freq": 3 }, { "word": "松子", "freq": 4 }, { "word": "松子deluxe", "freq": 8 }, { "word": "松尾陽介", "freq": 2 }, { "word": "松本人志", "freq": 5 }, { "word": "栗山千明", "freq": 2 }, { "word": "森下悠里", "freq": 2 }, { "word": "森川葵", "freq": 2 }, { "word": "森泉", "freq": 19 }, { "word": "次长课长", "freq": 3 }, { "word": "武井咲", "freq": 2 }, { "word": "水卜麻美", "freq": 2 }, { "word": "沟端淳平", "freq": 2 }, { "word": "河本准一", "freq": 3 }, { "word": "洒落主义", "freq": 6 }, { "word": "海王星", "freq": 2 }, { "word": "深夜番", "freq": 2 }, { "word": "清水枫", "freq": 2 }, { "word": "渡部建", "freq": 18 }, { "word": "滨边美波", "freq": 2 }, { "word": "漫才", "freq": 28 }, { "word": "瀧上伸一郎", "freq": 2 }, { "word": "熊田曜子", "freq": 2 }, { "word": "爆笑问题", "freq": 2 }, { "word": "狩野英孝", "freq": 9 }, { "word": "猎奇", "freq": 2 }, { "word": "田中卓志", "freq": 6 }, { "word": "田中直树", "freq": 2 }, { "word": "田村亮", "freq": 6 }, { "word": "田村淳", "freq": 22 }, { "word": "男女纠察队", "freq": 48 }, { "word": "痛快tv", "freq": 11 }, { "word": "真人秀", "freq": 3 }, { "word": "真的假的tv", "freq": 4 }, { "word": "矢作兼", "freq": 8 }, { "word": "知念侑李", "freq": 2 }, { "word": "短剧", "freq": 14 }, { "word": "石田明", "freq": 11 }, { "word": "神之舌", "freq": 8 }, { "word": "神舌", "freq": 84 }, { "word": "福田充德", "freq": 4 }, { "word": "私立恵比寿中学", "freq": 3 }, { "word": "秋山龙次", "freq": 3 }, { "word": "笑福亭鹤瓶", "freq": 3 }, { "word": "笨蛋主义", "freq": 47 }, { "word": "綾部祐二", "freq": 2 }, { "word": "红白模仿歌合战", "freq": 2 }, { "word": "给与明细", "freq": 2 }, { "word": "绝对不准笑", "freq": 3 }, { "word": "绫部佑二", "freq": 7 }, { "word": "翻唱", "freq": 4 }, { "word": "聊天主播", "freq": 2 }, { "word": "芹那", "freq": 3 }, { "word": "若林", "freq": 7 }, { "word": "若林正恭", "freq": 58 }, { "word": "草彅刚", "freq": 3 }, { "word": "菅広文", "freq": 2 }, { "word": "菊地亚美", "freq": 3 }, { "word": "菜菜绪", "freq": 2 }, { "word": "藤原一裕", "freq": 2 }, { "word": "藤木直人", "freq": 20 }, { "word": "藤本敏史", "freq": 5 }, { "word": "設楽統", "freq": 3 }, { "word": "设乐统", "freq": 17 }, { "word": "设楽统", "freq": 2 }, { "word": "谷田部俊", "freq": 2 }, { "word": "足立梨花", "freq": 3 }, { "word": "近藤春菜", "freq": 2 }, { "word": "远藤章造", "freq": 2 }, { "word": "速水重道", "freq": 2 }, { "word": "野吕佳代", "freq": 3 }, { "word": "金子贵俊", "freq": 4 }, { "word": "金爆", "freq": 2 }, { "word": "鈴木拓", "freq": 2 }, { "word": "闲聊007", "freq": 6 }, { "word": "阵内智则", "freq": 7 }, { "word": "隧道", "freq": 3 }, { "word": "雨上敢死队", "freq": 5 }, { "word": "雨后敢死队", "freq": 7 }, { "word": "雨后脱口秀", "freq": 2 }, { "word": "饭尾和树", "freq": 2 }, { "word": "香蕉人", "freq": 35 }, { "word": "高桥茂雄", "freq": 5 }, { "word": "高槻king", "freq": 2 }, { "word": "高橋茂雄", "freq": 2 }, { "word": "黑色美乃滋", "freq": 3 }];

// var label = [
//   {"word":"是是","freq":40},
//   {"word":"19950809","freq":28},
// ]

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

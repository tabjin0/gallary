var data = [];

var dataStr = "1、我最喜欢老婆啦0<br>\
<br>\
description：我最喜欢老婆啦1<br>\
我最喜欢老婆啦2<br>\
我最喜欢老婆啦3<br>\
我最喜欢老婆啦4<br>\
我最喜欢老婆啦5<br>\
<br>\
<br>\
2、老婆永远是对的0<br>\
<br>\
description：老婆永远是对的1<br>\
老婆永远是对的2<br>\
老婆永远是对的3<br>\
老婆永远是对的4<br>\
老婆永远是对的5<br>\
<br>\
<br>\
3、老婆这个月的家用0<br>\
<br>\
description：老婆这个月的家用1<br>\
老婆这个月的家用2<br>\
老婆这个月的家用3<br>\
老婆这个月的家用4<br>\
老婆这个月的家用5<br>\
<br>\
<br>\
4、老婆怎么看都漂亮啊～0<br>\
<br>\
description：老婆怎么看都漂亮啊～1<br>\
老婆怎么看都漂亮啊～2<br>\
老婆怎么看都漂亮啊～3<br>\
老婆怎么看都漂亮啊～4<br>\
老婆怎么看都漂亮啊～5<br>\
<br>\
<br>\
5、赶快开流量老婆在等我0<br>\
<br>\
description：赶快开流量老婆在等我1<br>\
赶快开流量老婆在等我2<br>\
赶快开流量老婆在等我3<br>\
赶快开流量老婆在等我4<br>\
赶快开流量老婆在等我5<br>\
<br>\
<br>\
6、上交给老婆0<br>\
<br>\
description：上交给老婆1<br>\
上交给老婆2<br>\
上交给老婆3<br>\
上交给老婆4<br>\
上交给老婆5<br>\
<br>\
<br>\
7、给老婆盖被子0<br>\
<br>\
description：给老婆盖被子1<br>\
给老婆盖被子2<br>\
给老婆盖被子3<br>\
给老婆盖被子4<br>\
给老婆盖被子5<br>\
<br>\
<br>\
8、我要粘着老婆0<br>\
<br>\
description：我要粘着老婆1<br>\
我要粘着老婆2<br>\
我要粘着老婆3<br>\
我要粘着老婆4<br>\
我要粘着老婆5<br>\
<br>\
<br>\
9、老婆！老婆！老婆！我们心里只有老婆！0<br>\
<br>\
description：老婆！老婆！老婆！我们心里只有老婆！1<br>\
老婆！老婆！老婆！我们心里只有老婆！2<br>\
老婆！老婆！老婆！我们心里只有老婆！3<br>\
老婆！老婆！老婆！我们心里只有老婆！4<br>\
老婆！老婆！老婆！我们心里只有老婆！5<br>\
<br>";
//dataStr注解，上面的每一个通过split()方法和三个<br>将一个字符串分解为若干个元素的数组，在第二维，为了提取photo的名字，又通过split()方法和两个<br>将其分解为数组
//但是有一点要注意，从最后一个数组来看，似乎多了一个<br>没有用，但不意味着前面的数组元素与元素之间多一个<br>，这三个<br>缺一不可

//下面将这个长字符串分解为二维数组
var d = dataStr.split("<br><br><br>");//三个<br>分离
for (var i = 0;i < d.length;i++) {
    var c = d[i].split("<br><br>");//两个个<br>分离
    data.push({
        img: c[0].replace("、"," ")+".jpg",//动态获取图片名
        caption: c[0].replace("、"," ")+".jpg",//动态变更标签名，以第9个为例，split("、")返回["9", "老婆！老婆！老婆！我们心里只有老婆！0"]
        //c[0].split("、")[1]就是"老婆！老婆！老婆！我们心里只有老婆！0"
        description: c[1]  //description
    });
    console.log(c[0].replace("、"," ")+".jpg");
}


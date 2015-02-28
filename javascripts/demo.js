function init() {
    initCanvas('track-info', 300, 480);
    //drawCircle('track-info', 100, 30, 5);
    drawRect('track-info', 150, 30, 10, 10);
    drawRect('track-info', 150, 90, 10, 10);
    drawRect('track-info', 150, 180, 10, 10);
    drawRect('track-info', 150, 260, 10, 10);
    drawRect('track-info', 150, 320, 10, 10);
    drawRect('track-info', 150, 430, 10, 10);

    drawLine('track-info', 155, 40, 155, 90);
    drawLine('track-info', 155, 100, 155, 180);
    drawLine('track-info', 155, 190, 155, 260);
    drawLine('track-info', 155, 270, 155, 320);
    drawLine('track-info', 155, 330, 155, 430);

    drawText('track-info', 155, 30, true, '采摘日期:');
    drawText('track-info', 155, 45, true, '2015-01-01');
    drawText('track-info', 155, 90, false, '入库冷藏日期:');
    drawText('track-info', 155, 105, false, '2015-01-03');
    drawText('track-info', 155, 180, true, '出库日期:');
    drawText('track-info', 155, 195, true, '2015-01-07');
    drawText('track-info', 155, 260, false, '冷藏运输途经河北:');
    drawText('track-info', 155, 275, false, '2015-01-08');
    drawText('track-info', 155, 335, true, '进入北京超市:');
    drawText('track-info', 155, 320, true, '2015-01-09');
    drawText('track-info', 155, 430, true, '待售中');
}

function initCanvas(id, width, height) {
    var canvas = document.getElementById(id);
    if (canvas == null)
        return false;
    canvas.width = width;
    canvas.height = height;
}

function drawRectTest(id) {
    var canvas = document.getElementById(id);
    if (canvas == null)
        return false;
    var context = canvas.getContext("2d");
    //实践表明在不设施fillStyle下的默认fillStyle=black
    context.fillRect(0, 0, 100, 100);
    //实践表明在不设施strokeStyle下的默认strokeStyle=black
    context.strokeRect(120, 0, 100, 100);

    //设置纯色
    context.fillStyle = "green";
    context.strokeStyle = "white";
    context.fillRect(0, 120, 100, 100);
    context.strokeRect(120, 120, 100, 100);

    //设置透明度实践证明透明度值>0,<1值越低，越透明，值>=1时为纯色，值<=0时为完全透明
    context.fillStyle = "rgba(255,0,0,0.2)";
    context.strokeStyle = "rgba(255,0,0,0.2)";
    context.fillRect(240, 0, 100, 100);
    context.strokeRect(240, 120, 100, 100);
}

function drawRect(id, x, y, width, height) {
    var canvas = document.getElementById(id);
    if (canvas == null)
        return false;
    var context = canvas.getContext("2d");

    context.fillStyle = "green";
    context.strokeStyle = "white";
    context.fillRect(x, y, width, height);
    context.strokeRect(x, y, width, height);
}

function drawLine(id, x1, y1, x2, y2) {
    var canvas = document.getElementById(id);
    if (canvas == null)
        return false;
    var context = canvas.getContext("2d");

    // context.fillStyle = "blue";
    context.strokeStyle = "blue";
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
}

function drawCircle(id, x, y, r) {
    var canvas = document.getElementById(id);
    if (canvas == null) {
        return false;
    }
    var context = canvas.getContext('2d');
    context.beginPath();
    context.arc(x, y, r, 0, Math.PI * 2, true);
    //不关闭路径路径会一直保留下去，当然也可以利用这个特点做出意想不到的效果
    context.closePath();
    context.fillStyle = 'rgba(0,255,0,0.25)';
    context.fill();
}

function drawText(id, midx, y, left, txt) {
    var canvas = document.getElementById(id);
    if (canvas == null)
        return false;
    var context = canvas.getContext("2d");
    // context.fillStyle = "#EEEEFF";
    // context.fillRect(0, 0, 400, 300);
    context.fillStyle = "#0223ff";
    context.font = "14px sans-serif";
    context.textBaseline = 'top';

    //填充字符串

    var x;
    if (left) {
        var length = context.measureText(txt);
        x = midx - length.width - 15;
    } else {
        x = midx + 15;
    }
    context.font = "bolid 30px sans-serif";
    context.fillText(txt, x, y);
    // txt = "stroke示例文字";
    // length = context.measureText(txt);
    // context.strokeText(txt, 0, 100);
}

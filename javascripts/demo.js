function init() {

  gWinHeight = document.body.clientHeight;
  gWinWidth = document.body.clientWidth;
  //alert(gWinWidth + "," + gWinHeight);

  initCanvas('track-info', gWinWidth, 600);
  //drawCircle('track-info', 100, 30, 5);
  var midx = gWinWidth / 2,
    rectW = 10,
    halfRectW = 5;
  drawRect('track-info', midx - halfRectW, 30, rectW, rectW);
  drawRect('track-info', midx - halfRectW, 90, rectW, rectW);
  drawRect('track-info', midx - halfRectW, 180, rectW, rectW);
  drawRect('track-info', midx - halfRectW, 260, rectW, rectW);
  drawRect('track-info', midx - halfRectW, 320, rectW, rectW);
  drawRect('track-info', midx - halfRectW, 430, rectW, rectW);
  drawRect('track-info', midx - halfRectW, 540, rectW, rectW);

  drawLine('track-info', midx, 40, midx, 90);
  drawLine('track-info', midx, 100, midx, 180);
  drawLine('track-info', midx, 190, midx, 260);
  drawLine('track-info', midx, 270, midx, 320);
  drawLine('track-info', midx, 330, midx, 430);
  drawLine('track-info', midx, 440, midx, 540);

  drawText('track-info', midx + halfRectW, 25, true, 'xxxx年xx月xx日');
  drawText('track-info', midx + halfRectW, 40, true, '从内黄果蔬基地采摘');
  drawText('track-info', midx + halfRectW, 80, false, 'xxxx年xx月xx日');
  drawText('track-info', midx + halfRectW, 100, false, '由园区物流冷藏运输至');
  drawText('track-info', midx + halfRectW, 120, false, '果蔬城冷库');
  drawText('track-info', midx + halfRectW, 175, true, 'xxxx年xx月xx日');
  drawText('track-info', midx + halfRectW, 190, true, '从果蔬城冷库运出，送至xx市');
  drawText('track-info', midx + halfRectW, 250, false, 'xxxx年xx月xx日');
  drawText('track-info', midx + halfRectW, 270, false, '由园区物流冷藏运输至xx市');
  drawText('track-info', midx + halfRectW, 290, false, '蔬菜交易市场');
  drawText('track-info', midx + halfRectW, 315, true, 'xxxx年xx月xx日');
  drawText('track-info', midx + halfRectW, 335, true, 'xx超市采购');
  drawText('track-info', midx + halfRectW, 425, false, 'xxxx年xx月xx日');
  drawText('track-info', midx + halfRectW, 445, false, '经冷藏运输至xx超市销售');
  drawText('track-info', midx + halfRectW, 530, true, '待售中');
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
  context.strokeStyle = "#0066CC";
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
  context.fillStyle = "#669900";
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

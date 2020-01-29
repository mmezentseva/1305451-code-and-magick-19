'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_GAP = 10;
var GAP = 20;
var FONT_GAP = 16;
var FONT_STYLE = '16px PT Mono';
var FONT_COLOR = '#000';
var FONT_TEXT = 'hanging';
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var YOU = 'Вы';
var YOU_BAR_COLOR = 'rgba(255, 0, 0, 1)';
var barHueColor = 240;
var barLightnessColor = 50;
var barHeight = 150;
var barTopPoint = 180;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

var getRandomNumber = function (hue, lightness) {
  return 'hsl(' + hue + ',' + Math.round(Math.random() * 100) + '%' + ',' + lightness + '%' + ')';
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = FONT_COLOR;
  ctx.font = FONT_STYLE;
  ctx.textBaseline = FONT_TEXT;
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    var currentHeight = barHeight * times[i] / maxTime;

    ctx.fillStyle = FONT_COLOR;
    ctx.fillText(names[i], CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + CLOUD_HEIGHT - GAP);

    ctx.fillText(Math.round(times[i]), CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + CLOUD_HEIGHT - barTopPoint - GAP + (barHeight - currentHeight), BAR_WIDTH, currentHeight);
    ctx.fillStyle = names[i] === YOU ? YOU_BAR_COLOR : getRandomNumber(barHueColor, barLightnessColor);

    ctx.fillRect(CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + CLOUD_HEIGHT - barTopPoint + (barHeight - currentHeight), BAR_WIDTH, currentHeight);
  }
};

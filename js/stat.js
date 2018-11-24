'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var PADDING = 10;
var FONT = 16;
var BAR_WIDTH = 40;
var GAP = 50;
var NAMES_Y = 260;
var MAX_BAR_HEIGHT = 150;

var renderCloud = function (ctx, color, x, y) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};
var getMaxElement = function (array) {
  var maxElement = array[0];
  for (var i = 0; i < array.length; i++) {
    if (array[i] > maxElement) {
      maxElement = array[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, 'rgba(0, 0, 0, 0.7)', CLOUD_X + PADDING, CLOUD_Y + PADDING);
  renderCloud(ctx, '#ffffff', CLOUD_X, CLOUD_Y);

  ctx.fillStyle = '#000000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура! Вы победили!', CLOUD_X + PADDING * 2, CLOUD_Y + PADDING + FONT);
  ctx.fillText('Список результатов:', CLOUD_X + PADDING * 2, CLOUD_Y + PADDING + FONT * 2);

  var maxTime = Math.round(getMaxElement(times));

  for (var i = 0; i < names.length; i++) {
    var barHeight = Math.round(MAX_BAR_HEIGHT * times[i] / maxTime);
    var barY = (CLOUD_Y + GAP + FONT + PADDING) + (MAX_BAR_HEIGHT - barHeight);
    ctx.fillStyle = '#000000';
    ctx.fillText(names[i], CLOUD_X + PADDING + GAP + (BAR_WIDTH + GAP) * i, NAMES_Y);
    ctx.fillText(Math.round(times[i]), CLOUD_X + PADDING + GAP + (BAR_WIDTH + GAP) * i, barY - PADDING);
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255, ' + Math.random() + ')';
    }
    ctx.fillRect(CLOUD_X + PADDING + GAP + (BAR_WIDTH + GAP) * i, barY, BAR_WIDTH, barHeight);
  }
};

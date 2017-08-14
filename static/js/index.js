/* eslint-disable no-undef,no-unused-vars,one-var */

layui.use('layer', function () {
  var layer = layui.layer
})

var treeSpan = '#ffffff', windowHeight = $(window).height(), tabelHeight = windowHeight - 145, windowWidth = $(window).width(),
  tableWidth = windowWidth - 279, cacheNode, HoverDomFlag = 0
$('#children-table').height(tabelHeight)
$('#right').width(tableWidth)

var setting = {
  view: {
    dblClickExpand: false,
    fontCss: {color: treeSpan},
    showLine: false,
    addHoverDom: addHoverDom,
    removeHoverDom: removeHoverDom,
    showIcon: false
  },
  async: {
    enable: true,
    type: 'get',
    url: '../data/getBaseTree.json',
    autoParam: ['id'],
    dataFilter: null
  },
  data: {
    simpleData: {
      enable: true
    }
  },
  callback: {
    onAsyncSuccess: toChangeMinusSign,
    onClick: treeOnClick,
    onExpand: onExpand,
    onCollapse: onCollapse
  }
}
function addHoverDom(treeId, treeNode) {
  if (treeNode.id === '4' && HoverDomFlag === 0) {
    var aObj = $('#' + treeNode.tId)
    var editStr = '<span class="exportIcon" id="word' + treeNode.tId + '" title="导出Word" onfocus="this.blur();"><span class="button word"></span></span>' +
    '<span class="exportIcon" id="excel' + treeNode.tId + '" title="导出Excel" onfocus="this.blur();"><span class="button excel"></span></span>'
    aObj.append(editStr)
    $('#word' + treeNode.tId).bind('click', function() { alert('导出word' + treeNode.tId) })
    $('#excel' + treeNode.tId).bind('click', function() { alert('导出excel' + treeNode.tId) })
    HoverDomFlag = 1
  }
}
function removeHoverDom(treeId, treeNode) {
  if (treeNode.id === '4') {
    $('#word' + treeNode.tId).unbind().remove()
    $('#excel' + treeNode.tId).unbind().remove()
    HoverDomFlag = 0
  }
}

function onExpand(event, treeId, treeNode) {
  if ($('#' + treeNode.tId + '_a').hasClass('fixTree')) {
    $('#' + treeNode.tId + '_switch').addClass('fixTree')
  } else {
    $('#fixDiv').removeClass('fixDiv')
  }
}
function onCollapse(event, treeId, treeNode) {
  if ($('#' + treeNode.tId + '_a').hasClass('fixTree')) {
    $('#' + treeNode.tId + '_switch').addClass('fixTree')
  } else {
    $('#fixDiv').removeClass('fixDiv')
  }
}
function treeOnClick(event, treeId, treeNode) {
  if (cacheNode) {
    $('#' + cacheNode.tId + '_a').removeClass('fixTree')
    $('#' + cacheNode.tId + '_switch').removeClass('fixTree')
    $('#word' + cacheNode.tId).removeClass('fixTree')
    $('#excel' + cacheNode.tId).removeClass('fixTree')
  }
  var $fixDiv = $('#fixDiv')
  var fixHeight = event.target.offsetTop - 7
  $fixDiv.addClass('fixDiv')
  $fixDiv.css({top: fixHeight})
  $('#' + treeNode.tId + '_a').addClass('fixTree')
  $('#' + treeNode.tId + '_switch').addClass('fixTree')
  $('#word' + treeNode.tId).addClass('fixTree')
  $('#excel' + treeNode.tId).addClass('fixTree')
  if (treeNode.id === '2') {
    jghsjwd()
  } else if (treeNode.id === '3') {
    dxxxgl()
  } else if (treeNode.id === '5') {
    bxxgl()
  } else if (treeNode.id === '6') {
    sxxxgl()
  } else {
    hidden()
  }
  cacheNode = treeNode
}
function toChangeMinusSign(event, treeId, treeNode, msg) {}

var initTreeUrl = '../data/getBaseTree.json'
$.post(initTreeUrl, function (data) {
  var zNodes = data
  $.fn.zTree.init($('#treeDemo'), setting, zNodes)
})
$('.set_btn').on('click', function () {
  var self = $(this)
  self.siblings().removeClass('setBtnG')
  self.addClass('setBtnG')
})
$('#search-bar-input').focus(function () {
  var self = $(this)
  self.parent().addClass('active')
})
$('#search-bar-input').blur(function () {
  var self = $(this)
  self.parent().removeClass('active')
})
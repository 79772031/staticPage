/* eslint-disable no-undef,no-unused-vars,one-var */

layui.use('layer', function () {
  var layer = layui.layer
})

var treeSpan = '#ffffff', windowHeight = $(window).height(), tabelHeight = windowHeight - 145, windowWidth = $(window).width(),
  tableWidth = windowWidth - 279, cacheNode
$('#children-table').height(tabelHeight)
$('#right').width(tableWidth)

var setting = {
  view: {
    addDiyDom: addDiyDom,
    dblClickExpand: false,
    fontCss: {color: treeSpan},
    showLine: false,
    showIcon: false
  },
  async: {
    enable: true,
    type: 'get',
    url: '../data/getBaseTree.json',
    autoParam: ['id'],
    dataFilter: null
  },
  edit: {
    drag: {
      autoExpandTrigger: true,
      prev: true,
      inner: false,
      next: true
    },
    enable: true,
    showRemoveBtn: false,
    showRenameBtn: false
  },
  data: {
    keep: {
      parent: true,
      leaf: true
    },
    simpleData: {
      enable: true
    }
  },
  callback: {
    onAsyncSuccess: toChangeMinusSign,
    onClick: treeOnClick
  }
}
function addDiyDom(treeId, treeNode) {
  if (treeNode.id === '4') {
    var aObj = $('#' + treeNode.tId)
    var editStr = '<span class="exportIcon" id="word' + treeNode.tId + '" title="' + treeNode.name + '" onfocus="this.blur();"><span class="button word"></span></span>' +
    '<span class="exportIcon" id="excel' + treeNode.tId + '" title="' + treeNode.name + '" onfocus="this.blur();"><span class="button excel"></span></span>'
    aObj.append(editStr)
    $('#word' + treeNode.tId).bind('click', function() { alert('导出word' + treeNode.tId) })
    $('#excel' + treeNode.tId).bind('click', function() { alert('导出excel' + treeNode.tId) })
  }
}

function treeOnClick(event, treeId, treeNode) {
  if (cacheNode) {
    $('#' + cacheNode.tId + '_a').addClass('fixTree')
    $('#' + cacheNode.tId + '_switch').addClass('fixTree')
    $('#word' + cacheNode.tId).addClass('fixTree')
    $('#excel' + cacheNode.tId).addClass('fixTree')
  }
  var $fixDiv = $('#fixDiv')
  var fixHeight = event.target.offsetTop - 6
  console.log(event)
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
/* eslint-disable no-undef,no-unused-vars,one-var */

layui.use('layer', function () {
  var layer = layui.layer
})

var treeSpan = '#ffffff', windowHeight = $(window).height(), tabelHeight = windowHeight - 145
$('#children-table').height(tabelHeight)

var setting = {
  view: {
    addDiyDom: addDiyDom,
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
    var editStr = '<span class="exportIcon" id="word' + treeNode.id + '" title="' + treeNode.name + '" onfocus="this.blur();"><span class="button word"></span></span>' +
    '<span class="exportIcon" id="excel' + treeNode.id + '" title="' + treeNode.name + '" onfocus="this.blur();"><span class="button excel"></span></span>'
    aObj.append(editStr)
    $('#word' + treeNode.id).bind('click', function() { alert('导出word' + treeNode.id) })
    $('#excel' + treeNode.id).bind('click', function() { alert('导出excel' + treeNode.id) })
  }
}

function treeOnClick(event, treeId, treeNode) {
  if (treeNode.id === '2') {
    jghsjwd()
  } else if (treeNode.id === '3') {
    dxxxgl()
  } else if (treeNode.id === '5') {
    bxxgl()
  } else if (treeNode.id === '6') {
    sxxxgl()
  } else{
    hidden()
  }
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
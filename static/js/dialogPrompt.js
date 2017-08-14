/**
 * 提示框的js
 *
 * @returns
 */
// 打开新增属性信息管理弹窗
function openAddAttribute() {
    // 打开弹窗
    $("#dlgAddAttribute").dialog("open")
    // 清空表单
    $("#AttributeForm").form("clear");
}
// 关闭新增属性信息管理弹窗
function closeAddAttribute() {
    // 关闭弹窗
    $("#dlgAddAttribute").dialog("close")
    // 清空表单
    $("#AttributeForm").form("clear");
}
// 打开新增对象弹框
function openAddObj() {
    // 打开弹窗
    $("#dlgAddObj").dialog("open");
    // 清空表单
    $("#AddObjForm").form("clear");
}
// 新增对象保存按钮点击事件
function saveAddObj() {
    // layer.alert("新增对象保存操作代码书写处");
    $("#dlgAddObj").dialog("close");
    openPromptCreate();
    // 清空表单
    $("#AddObjForm").form('clear');
}

// 打开新增表信息管理弹框
function openAddTableInfo() {
    $("#dlgAddTableInfo").dialog("open");
    // 清空表单
    $("#tableInfoForm").form('clear');
}
// 新增表信息管理保存按钮点击事件
function saveAddTableInfo() {
    // layer.alert("新增对象保存操作代码书写处");
    $("#dlgAddTableInfo").dialog("close");
    openPromptCreate();
    // 清空表单
    $("#tableInfoForm").form('clear');
}
// 打开是否删除提示
function openPromptDel() {
    $("#dlgPromptDel").dialog("open");
}
//打开重置温馨提示
function openPromptwxts() {
    $("#resetPrompt").dialog("close");
    $("#wxtsPrompt").dialog("open");
}
//关闭重置温馨提示
function closePromptwxts() {
    $("#wxtsPrompt").dialog("close");
}
//打开重置提示
function openPromptreset() {
    $("#resetPrompt").dialog("open");
}
//关闭重置重置
function closePromptreset() {
    $("#resetPrompt").dialog("close");
}
// 是否删除 确定按钮点击事件
function deleteSure() {
    // layer.alert("执行删除操作代码书写处");
    $("#dlgPromptDel").dialog("close");
    openPromptFail();
}

// 打开显示不一致 提示框
function openPromptAtypism() {
    $("#dlgPromptAtypism").dialog("open");
}
// 关闭 不一致 提示框
function atypismSure() {
    $("#dlgPromptAtypism").dialog("close");
}

// 打开创建成功提示
function openPromptCreate() {
    $("#dlgPromptCreate").dialog("open");
}

// 创建成功提示 中 前往发布按钮点击事件
function gotoPublish() {
    // layer.alert("跳转前往发布的代码书写处");
    $("#dlgPromptCreate").dialog("close");
    openPromptAtypism();
}

// 打开至少选择一个提示
function openPromptChoice() {
    $("#dlgPromptChoice").dialog("open");
}

// 关闭至少选择一个提示
function closePromptChoice() {
    $("#dlgPromptChoice").dialog("close");
}

// 打开操作失败提示
function openPromptFail() {
    $("#dlgPromptFail").dialog("open");
}
// 关闭操作失败提示
function closePromptFail() {
    $("#dlgPromptFail").dialog("close");
}
// 打开上面的 意见反馈按钮
function opendFeedBack() {
    $("#dlgfeedback").dialog("open");
    $("#feedBackForm").form('clear');
    setDate()
}
// 关闭 上面的 意见反馈按钮
function closeFeedBack() {
    $("#dlgfeedback").dialog("close");

}

// 意见反馈汇总的 弹出框弹出方法
function showFeedBack() {
    $('#dlgList').dialog('open')
    $("#ffList").form('clear')
    setDate()
}

// 右悬浮的位置的 新增意见反馈弹出框
function addFeedBack() {
    $('#dlginsert').dialog('open')
    $("#InsertFeedBack").form('clear')
    setDate()
}
// table生成序号（即行号） 的方法
function formatterIndex(value, rowData, rowIndex) {
    // value是当前字段的值，rowData是该行的所有数据，rowIndex是该行的索引
    return rowIndex + 1;

}

// 假数据
var data = [{
    "data1": 1,
    "data2": 1,
    "data3": 1,
    "data4": 1,
    "data5": 1,
    "data6": 1
}, {
    "data1": 1,
    "data2": 1,
    "data3": 1,
    "data4": 1,
    "data5": 1,
    "data6": 1
}, {
    "data1": 1,
    "data2": 1,
    "data3": 1,
    "data4": 1,
    "data5": 1,
    "data6": 1
}, {
    "data1": 1,
    "data2": 1,
    "data3": 1,
    "data4": 1,
    "data5": 1,
    "data6": 1
}, {
    "data1": 1,
    "data2": 1,
    "data3": 1,
    "data4": 1,
    "data5": 1,
    "data6": 1
}, {
    "data1": 1,
    "data2": 1,
    "data3": 1,
    "data4": 1,
    "data5": 1,
    "data6": 1
}, {
    "data1": 1,
    "data2": 1,
    "data3": 1,
    "data4": 1,
    "data5": 1,
    "data6": 1
}, {
    "data1": 1,
    "data2": 1,
    "data3": 1,
    "data4": 1,
    "data5": 1,
    "data6": 1
}, {
    "data1": 1,
    "data2": 1,
    "data3": 1,
    "data4": 1,
    "data5": 1,
    "data6": 1
}];

//意见反馈表格初始化
$('#dgListFeedBack').datagrid({
    method: "GET",
    contentType: "application/json",
    // url: '',
    data: data,
    queryParams: {},
    pagination: true,
    pageSize: 10,
    singleSelect: true
// 行单选
});


$(function () {
    //初始化日期框
    setDate();

});
//日期初始化函数
function setDate() {
    function formatterDate(date) { // 制作日期格式的函数
        var day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate()
        var month = (date.getMonth() + 1) > 9 ? (date.getMonth() + 1)
            : '0' + (date.getMonth() + 1)
        return date.getFullYear() + '-' + month + '-' + day
    }

// 给查询的开始日期赋值（当前日期 -7天）
    $('#questionStartTime').datebox(
        'setValue',
        formatterDate(new Date(new Date().getTime() - 7 * 24 * 3600 * 1000)))
// 给查询的结束日期赋值（当前日期 +1天，查询包括当天所有）
    $('#questionEndTime').datebox(
        'setValue',
        formatterDate(new Date(new Date().getTime() + 1 * 24 * 3600 * 1000)))
// 右悬浮位置的 新增意见反馈的反馈日期（当天日期）
    $('#addQuestionTime').datebox(
        'setValue',
        formatterDate(new Date(new Date())))
    // 上面按钮组的 新增意见反馈的反馈日期（当天日期）
    $('#feedBackTime').datebox(
        'setValue',
        formatterDate(new Date(new Date())))
}

//新增对象 的编辑按钮点击事件
function updateObj() {//判断没有选择弹出至少选择一个提示框
    var a = $('#sxxxgl').datagrid('getChecked');
    if (a.length < 1) {
        $("#dlgPromptChoice").dialog("open");
        return;
    }
    else {
        openAddObj();
    }
}
//新增 的编辑按钮点击事件
function updateTableInfo() {//判断没有选择弹出至少选择一个提示框
    var a = $('#sxxxgl').datagrid('getChecked');
    if (a.length < 1) {
        $("#dlgPromptChoice").dialog("open");
        return;
    }
    else {
        openAddTableInfo();
    }
}
//新增属性信息 的编钮点击事件
function updateAttr() {//判断没有选择弹出至少选择一个提示框
    var a = $('#sxxxgl').datagrid('getChecked');
    if (a.length < 1) {
        $("#dlgPromptChoice").dialog("open");
        return;
    }
    else {
        openAddAttribute();
    }
}


//新增对象 的删除按钮点击事件
function delectObj() {//判断没有选择弹出至少选择一个提示框
    var a = $('#sxxxgl').datagrid('getChecked');
    if (a.length < 1) {
        $("#dlgPromptChoice").dialog("open");
        return;
    }
    else {
        //是否确认删除弹出框
        openPromptDel();
    }
}
//新增 的删除按钮点击事件
function delectTableInfo() {
    var a = $('#sxxxgl').datagrid('getChecked');
    if (a.length < 1) {//判断没有选择弹出至少选择一个提示框
        $("#dlgPromptChoice").dialog("open");
        return;
    }
    else {
        //是否确认删除弹出框
        openPromptDel();
    }
}
//新增属性信息 的删除按钮点击事件
function delectAttr() {
    var a = $('#sxxxgl').datagrid('getChecked');
    if (a.length < 1) { //判断没有选择弹出至少选择一个提示框
        $("#dlgPromptChoice").dialog("open");
        return;
    }
    else {
        //是否确认删除弹出框
        openPromptDel();
    }
}

//属性信息管理
function hidden() {
    $("#rightBtnForAttr").css("display","none")
    $("#rightBtnForTable").css("display","none")
    $("#rightBtnForObj").css("display","none")
    $("#children-name").text("")
    // $("#rightBtnForAttr").css("display","none")
}
function sxxxgl(){
    hidden()
    $("#children-name").text("属性信息管理")
    $("#rightBtnForAttr").css("display","block")
    $('#sxxxgl').datagrid({
        url: '../data/sxxxgl.json',
        cache:false,
        pagination: true,
        method: 'get',
        width:"100%",
        striped:true,
        height:"100%",
        singleSelect: false,
        fitColumns:true,
        columns: [[
            {
                field: '',
                checkbox: true
            },
            {
                field: 'index',
                title: '序号',
                width: 40,
                align: 'center',
                formatter: function (value, row, index) {
                    return index + 1
                }
            },
            {
                field: 'englishTableName',
                title: '英文表名',
                width: 200,
                align: 'center'
            }
            ,
            {
                field: 'attributeName',
                title: '属性名',
                width: 120,
                align: 'center'
            },
            {
                field: 'englishAttributeName',
                title: '英文属性名',
                width: 200,
                align: 'center'
            },
            {
                field: 'dataType',
                title: '数据类型',
                width: 80,
                align: 'center'
            },
            {
                field: 'constraint',
                title: '约束条件',
                width: 80,
                align: 'center'
            },
            {
                field: 'modality',
                title: '产生形式',
                width: 80,
                align: 'center'
            },
            {
                field: 'effectiveSign',
                title: '生效标志',
                width: 80,
                align: 'center'
            }

        ]]
    });
}
// 结构化设计文档
function jghsjwd(){
    hidden()
    $("#children-name").text("结构化设计文档")
    $('#sxxxgl').datagrid({
        url: '../data/jghsjwd.json',
        cache:false,
        pagination: true,
        method: 'get',
        width:"100%",
        height:"100%",
        singleSelect: false,
        striped:true,
        fitColumns:true,
        columns: [[
            {
                field: 'index',
                title: '序号',
                width: 40,
                align: 'center',
                formatter: function (value, row, index) {
                    return index + 1
                }
            },
            {
                field: 'filetitle',
                title: '文档名',
                width: 600,
                align: 'center',
                formatter: function (value, row, index) {
                    return '<a href="#">'+value+'</a>'
                }
            },
            {
                field: 'updateMan',
                title: '更新人',
                width: 150,
                align: 'center'
            },
            {
                field: 'updateTime',
                title: '更新时间',
                width: 200,
                align: 'center'
            }
        ]]
    });
}
// 对象信息管理
function dxxxgl(){
    hidden()
    $("#children-name").text("对象信息管理")
    $("#rightBtnForObj").css("display","block")
    $('#sxxxgl').datagrid({
        url: '../data/dxxxgl.json',
        cache:false,
        pagination: true,
        method: 'get',
        width:"100%",
        height:"100%",
        singleSelect: false,
        striped:true,
        fitColumns:true,
        columns: [[
            {
                field: '',
                checkbox: true
            },
            {
                field: 'index',
                title: '序号',
                width: 40,
                align: 'center',
                formatter: function (value, row, index) {
                    return index + 1
                }
            },
            {
                field: 'objectCoding',
                title: '对象编码',
                width: 140,
                align: 'center'
            }
            ,
            {
                field: 'objectChineseName',
                title: '对象中文名称',
                width: 140,
                align: 'center'
            },
            {
                field: 'objectEnglishName',
                title: '对象英文名称',
                width: 140,
                align: 'center'
            },
            {
                field: 'codingRule',
                title: '编码规则',
                width: 100,
                align: 'center'
            },
            {
                field: 'effectiveSign',
                title: '生效标志',
                width: 100,
                align: 'center'
            },
            {
                field: 'accountfor',
                title: '说明',
                width: 200,
                align: 'center'
            },
            {
                field: 'category',
                title: '类别',
                width: 140,
                align: 'center'
            }

        ]]
    });
}
// 表信息管理
function bxxgl(){
    hidden()
    $("#children-name").text("表信息管理")
    $("#rightBtnForTable").css("display","block")
    $('#sxxxgl').datagrid({
        url: '../data/bxxgl.json',
        cache:false,
        pagination: true,
        method: 'get',
        width:"100%",
        height:"100%",
        singleSelect: false,
        fitColumns:true,
        striped:true,
        columns: [[
            {
                field: '',
                checkbox: true
            },
            {
                field: 'index',
                title: '序号',
                width: 60,
                align: 'center',
                formatter: function (value, row, index) {
                    return index + 1
                }
            },
            {
                field: 'objectCoding',
                title: '对象代码',
                width: 150,
                align: 'center'
            }
            ,
            {
                field: 'tableChineseName',
                title: '中文表名',
                width: 200,
                align: 'center'
            },
            {
                field: 'tableEnglishName',
                title: '英文表名',
                width: 200,
                align: 'center'
            },
            {
                field: 'effectiveSign',
                title: '生效标志',
                width: 100,
                align: 'center'
            },
            {
                field: 'accountfor',
                title: '说明',
                width: 60,
                align: 'center'
            },
            {
                field: 'founder',
                title: '创建人',
                width: 100,
                align: 'center'
            },
            {
                field: 'createDate',
                title: '创建时间',
                width: 200,
                align: 'center'
            }

        ]]
    });
}
/*属性维护痕迹查看*/
function sxwhhjck(){
    $('#sxwhhjckDialog').dialog({
        title: '维护痕迹查看',
        width: 800,
        height: 600,
        closed: false,
        cache: false,
        modal: true
    });
    $('#sxwhhjck').datagrid({
        url: '../data/sxwhhjck.json',
        cache:false,
        pagination: true,
        method: 'get',
        height:551,
        striped:true,
        fitColumns:true,
        columns: [[
            {
                field: 'index',
                title: '序号',
                width:40,
                align: 'center',
                formatter: function (value, row, index) {
                    return index + 1
                }
            },
            {
                field: 'operatingClass',
                title: '操作类别',
                width:100,
                align: 'center'
            }
            ,
            {
                field: 'versions',
                title: '版本',
                width:100,
                align: 'center'
            },
            {
                field: 'name',
                title: '名称',
                width: 200,
                align: 'center'
            },
            {
                field: 'operatingContent',
                width: 100,
                title: '操作内容',
                align: 'center'
            },
            {
                field: 'operater',
                title: '操作人',
                width: 100,
                align: 'center'
            },
            {
                field: 'operatingDate',
                title: '操作时间',
                width: 100,
                align: 'center'
            }
        ]]
    });
}
// 历史版本查看
function  lsbbck(){
    $('#lsbbckDialog').dialog({
        title: '历史版本查看',
        width: 1200,
        height: 600,
        closed: false,
        cache: false,
        modal: true
    });
    $('#lsbbck').datagrid({
        url: '../data/sxxxgl.json',
        cache:false,
        pagination: true,
        method: 'get',
        height:551,
        striped:true,
        columns:[[
            {
                field: 'index',
                title: '序号',
                width: 40,
                align: 'center',
                formatter: function (value, row, index) {

                    return index + 1
                }
            },
            {
                field: 'englishTableName',
                title: '英文表名',
                width: 200,
                align: 'center'
            }
            ,
            {
                field: 'attributeName',
                title: '属性名',
                width: 120,
                align: 'center'
            },
            {
                field: 'englishAttributeName',
                title: '英文属性名',
                width: 200,
                align: 'center'
            },
            {
                field: 'dataType',
                title: '数据类型',
                width: 80,
                align: 'center'
            },
            {
                field: 'constraint',
                title: '约束条件',
                width: 100,
                align: 'center'
            },
            {
                field: 'modality',
                title: '产生形式',
                width: 80,
                align: 'center'
            },
            {
                field: 'effectiveSign',
                title: '生效标志',
                width: 80,
                align: 'center'
            }
            ,
            {
                field: 'founder',
                title: '创建人',
                width: 80,
                align: 'center'
            }
            ,
            {
                field: 'createDate',
                title: '创建时间',
                width: 200,
                align: 'center'
            }
        ]]
    });
}
/*工作记录*/
function  workLogging(){
    $('#gzjlckDialog').dialog({
        title: '工作记录查看',
        width: 800,
        height: 600,
        closed: false,
        cache: false,
        modal: true
    });
    $('#gzjlck').datagrid({
        url: '../data/gzjlck.json',
        cache:false,
        pagination: true,
        method: 'get',
        width:"100%",
        height:538,
        striped:true,
        columns:[[
            {
                field: 'index',
                title: '序号',
                width: 40,
                align: 'center',
                formatter: function (value, row, index) {

                    return index + 1
                }
            },
            {
                field: 'date',
                title: '时间',
                width: 200,
                align: 'center'
            }
            ,
            {
                field: 'founder',
                title: '操作人',
                width: 80,
                align: 'center'
            },
            {
                field: 'category',
                title: '操作类别',
                width: 100,
                align: 'center'
            },
            {
                field: 'workContent',
                title: '工作内容',
                width: 326,
                align: 'center'
            }
        ]]
    });
}
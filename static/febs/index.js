window.rootPath = (function (src) {
    var strFullPath = window.document.location.href;
    var strPath = window.document.location.pathname;
    var pos = strFullPath.indexOf(strPath);
    var prePath = strFullPath.substring(0, pos);
    var postPath = strPath.substring(0, strPath.substr(1).indexOf('/') + 1);
    return (prePath + postPath + "/");
})();

window.febsPath = (function (src) {
    src = document.scripts[document.scripts.length - 1].src;
    return src.substring(0, src.lastIndexOf("/") + 1);
})();

// layui.extend({
//     febs: 'lay/modules/febs',
//     validate: 'lay/modules/validate'
// }).define(['febs', 'conf'], function (exports) {
//     layui.febs.initPage();
//     console.log("\n %c lay-admin-ui 2.0 %c https://github.com/iwenzhou/lay-admin-ui %c 如果该项目对您有帮助的话，还请点个star给予精神支持！🐤", "color: #fff; font-size: .84rem;background: #366ed8; padding:5px 0;", "font-size: .84rem;background: #fff; border: 2px solid #b0e0a8;border-left: none; padding:3px 0;", " font-size: .84rem;background: #fcf9ec; padding:5px 0;margin-left: 8px");
//     exports('index', {});
// });

layui.config({
    base: febsPath,
    version: true,
    debug: true,
}).extend({
    febs: 'lay/modules/febs',
    validate: 'lay/modules/validate',
    formSelects: 'lay/extends/formSelects-v4.min',
    treeSelect: 'lay/extends/treeSelect',
    apexcharts: 'lay/extends/apexcharts.min',
    eleTree: 'lay/extends/eleTree',

    // miniAdmin: "layuimini/miniAdmin", // layuimini后台扩展
    // miniMenu: "layuimini/miniMenu", // layuimini菜单扩展
    // miniTab: "layuimini/miniTab", // layuimini tab扩展
    // miniTheme: "layuimini/miniTheme", // layuimini 主题扩展
    // miniTongji: "layuimini/miniTongji", // layuimini 统计扩展
    // step: 'step-lay/step', // 分步表单扩展
    // treetable: 'treetable-lay/treetable', //table树形扩展
    // tableSelect: 'tableSelect/tableSelect', // table选择扩展
    // iconPickerFa: 'iconPicker/iconPickerFa', // fa图标选择扩展
    // echarts: 'echarts/echarts', // echarts图表扩展
    // echartsTheme: 'echarts/echartsTheme', // echarts图表主题扩展
    // wangEditor: 'wangEditor/wangEditor', // wangEditor富文本扩展
    // layarea: 'layarea/layarea', //  省市县区三级联动下拉选择器

}).define(['febs', 'conf'], function (exports) {
    layui.febs.initPage();

    console.log("\n %c lay-admin-ui 2.0 %c https://github.com/iwenzhou/lay-admin-ui %c 如果该项目对您有帮助的话，还请点个star给予精神支持！🐤", "color: #fff; font-size: .84rem;background: #366ed8; padding:5px 0;", "font-size: .84rem;background: #fff; border: 2px solid #b0e0a8;border-left: none; padding:3px 0;", " font-size: .84rem;background: #fcf9ec; padding:5px 0;margin-left: 8px");

    exports('index', {});

});
// ==UserScript==
// @name         Torn翻译
// @namespace    WOOH
// @version      0.1
// @description  UI翻译
// @author       Woohoo-
// @match        https://www.torn.com/*
// @grant        none
// ==/UserScript==


!(function() {
    'use strict';
    const $ = window.jQuery;

    /**
     * 飞行
     */
    if ($('.travelling h4').length!==0){
        return;
    }

    /**
     * 边栏
     */
    const sidebarDict={ // todo 从json加载
        'Money':'现金',
        'Level':'等级',
        'Points':'PT',
        'Merits':'技能点',
        'Energy':'能量E',
        'Nerve':'犯罪N',
        'Happy':'快乐',
        'Life':'血量',
        'Chain':'连击链Chain',
        'Home':'主页',
        'Items':'物品',
        'City':'城市',
        'Job':'工作',
        'Gym':'健身房',
        'Properties':'房产',
        'Education':'教育',
        'Crimes':'犯罪',
        'Missions':'任务',
        'Newspaper':'报纸',
        'Jail':'监狱',
        'Hospital':'医院',
        'Casino':'赌场',
        'Forums':'论坛',
        'Hall of Fame':'名人堂',
        'My Faction':'帮派',
        'Recruit Citizens':'招募玩家',
        'Competitions':'活动日历',
        'Community Events':'社区事件',
        'Friends':'好友',
        'Enemies':'敌人',
    };
    const transSidebar=function (){
        // 边栏块标题
        $('h2[class^="header"]')[0].firstChild.nodeValue='信息';
        $('h2[class^="header"]')[1].firstChild.nodeValue='区域';
        $('h2[class^="header"]')[2].firstChild.nodeValue='列表';
        // 边栏人物名字
        $('span[class^="menu-name"]')[0].firstChild.nodeValue='名字:';
        // 钱 等级 pt 技能点
        $('p[class^="point-block"]').each((i,e)=>{
            e.firstChild.firstChild.nodeValue=sidebarDict[e.firstChild.firstChild.nodeValue];
        });
        // 4条
        $('p[class^="bar-name"]').each((i,e)=>{
            e.firstChild.nodeValue=sidebarDict[e.firstChild.nodeValue];
        });
        // 边栏菜单
        $('span[class^="linkName"]').each((i,e)=>{
            e.firstChild.nodeValue=sidebarDict[e.firstChild.nodeValue];
        });

        // 监控配置
        let tooltip=$('div[class^="tooltip"]')[0];
        const config = { attributes: true, childList: true, subtree: true };
        const observer = new MutationObserver(tooltip,config);
    };

    /**
     * 主页
     */
    transSidebar();


})();




// $('body').find("*").each(function(i,elem){
//     if($(elem).text()===$(elem).html()){console.log(i);
//     console.log($(elem).text());}})

//$('ul.user-info-list-wrap span.reason').each(function(i,e){
//     console.log($(e).text(123))})

// $('ul.user-info-list-wrap span.reason').each(function(i,e){
//     console.log($(e).html($(e).html().replace('Hospitalized by', '被此人送往医院：')))})
// $("#text_test").contents().filter(function(){
// return this.nodeType === 3;
// }).text(123);


// 设计一个读取元素包含文本的通用方法
// http://c.biancheng.net/view/5908.html
//获取指定元素包含的文本
//参数：e 表示指定元素
//返回包含的所有文本，包括子元素中包含的文本
// function text(e) {
//     let s = "";
//     e = e.childNodes || e;  //判断元素是否包含子节点
//     for (let i = 0; i < e.length; i ++) {  //遍历所有子节点
//         //通过递归遍历所有元素的子节点
//         s += e[i].nodeType !== 1 ? e[i].nodeValue : text(e[i].childNodes);
//     }
//     return s;
// }
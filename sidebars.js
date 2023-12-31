/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure 使用自动生成侧边栏，文件结构决定侧边栏结构，不用手写侧边栏文件
  
  // But you can create a sidebar manually 手动+自动
  // 如果dirName可以只写文件夹的名字，可以写函数，然后调用函数，参考小谭文档？？？
  
  profession: [
   
    {

      type: 'category',//类型：文件夹
      
      label: '程序设计语言',//文件夹显示在页面上的名字
      
      //items里的内容是次文件夹下的md文件生成后将自动展示在侧边栏

      link: {
        type: 'generated-index',//自动生成索引页
      },
      items:[{
      
      type: 'autogenerated',
      
      dirName: 'obsidian/🗃️ 卡片盒子/110 - 前端开发/程序设计语言',//文件夹名称
      
      }]
      
      },

      {

        type: 'category',//类型：文件夹
        
        label: '程序设计语言',//文件夹显示在页面上的名字
        
        //items里的内容是次文件夹下的md文件生成后将自动展示在侧边栏
  
        link: {
          type: 'generated-index',//自动生成索引页
        },
        items:[{
        
        type: 'autogenerated',
        
        dirName: '网站开发',//文件夹名称
        
        }]
        
        },
      
   
  ],

  development: [
    
    {

      type: 'category',//类型：文件夹
      
      label: '科学学习',//文件夹显示在页面上的名字
      
      //items里的内容是次文件夹下的md文件生成后将自动展示在侧边栏

      link: {
        type: 'generated-index',//自动生成索引页
      },
      items:[{
      
      type: 'autogenerated',
      
      dirName: 'obsidian/🗃️ 卡片盒子/200 - 学习成长/科学学习',//文件夹名称docs/obsidian/🗃️ 卡片盒子/200 - 学习成长/科学学习
      
      }]
      
      },

      {

        type: 'category',//类型：文件夹
        
        label: '自我管理',//文件夹显示在页面上的名字
        
        //items里的内容是次文件夹下的md文件生成后将自动展示在侧边栏
  
        link: {
          type: 'generated-index',//自动生成索引页
        },
        items:[{
        
        type: 'autogenerated',
        
        dirName: 'obsidian/🗃️ 卡片盒子/200 - 学习成长/自我管理',//导航栏为tutorial内的子文件夹1名称
        
        }]
        
        },
   
  ],

  creation: [

    {

      type: 'category',//类型：文件夹
      
      label: '摄影',//文件夹显示在页面上的名字
      
      //items里的内容是次文件夹下的md文件生成后将自动展示在侧边栏

      link: {
        type: 'generated-index',//自动生成索引页
      },
      items:[{
      
      type: 'autogenerated',
      
      dirName: 'docs/obsidian/🗃️ 卡片盒子/400 - 创造兴趣/摄影',//导航栏为tutorial内的子文件夹1名称
      
      }]
      
      },
   

  ],
 
};

module.exports = sidebars;

## 项目小记

1. `webpack`中配置`less`时要单独配置一份，而不是在`css`后直接添加，否则会报错
   ```js
   // webpack配置
   {
     test: /\.less$/,
     use: [
       require.resolve('style-loader'),
       {
         loader: require.resolve('css-loader'),
         options: {
           importLoaders: 1,
         },
       },
       {
         loader: require.resolve('postcss-loader'),
         options: {
           ident: 'postcss',
           plugins: () => [
             require('postcss-flexbugs-fixes'),
             autoprefixer({
               browsers: [
                 '>1%',
                 'last 4 versions',
                 'Firefox ESR',
                 'not ie < 9', // React doesn't support IE8 anyway
               ],
               flexbox: 'no-2009',
             }),
           ],
         },
       },
       {
         // 添加less-loader
         // use中的loader是从后往前进行作用的
         loader: require.resolve('less-loader'),
         options: {
           modifyVars: {
             'primary-color': '#1DA57A',
           },
           javascriptEnabled: true,
         },
       }
     ],
   },
   {
     test: /\.css$/,
     use: [
       require.resolve('style-loader'),
       {
         loader: require.resolve('css-loader'),
         options: {
           importLoaders: 1,
         },
       },
       {
         loader: require.resolve('postcss-loader'),
         options: {
           ident: 'postcss',
           plugins: () => [
             require('postcss-flexbugs-fixes'),
             autoprefixer({
               browsers: [
                 '>1%',
                 'last 4 versions',
                 'Firefox ESR',
                 'not ie < 9', // React doesn't support IE8 anyway
               ],
               flexbox: 'no-2009',
             }),
           ],
         },
       },
     ],
   },
   ```
2. 项目中添加`ant design`并更改项目中用到的`ant design`颜色主题：  
   `package.json`文件进行配置：
   ```json
   ...
   "babel": {
      "presets": [
        "react-app"
      ],
      "plugins": [
        // 配置babel-plugin-import，用于按需加载ant组件代码和样式
        [
          "import",
          {
            "libraryName": "antd",
            "libraryDirectory": "es",
            // 这里设置为true，才可以通过配置less-loader进行切换主题
            "style": true
          }
        ]
      ]
    },
   ```
   `less-loader`的配置：
   ```js
   //webpack配置
   {
     loader: require.resolve('less-loader'),
     options: {
       // 通过less变量进行ant主题样式修改
       modifyVars: {
         'primary-color': '#1DA57A',
       },
       javascriptEnabled: true,
     },
   }
   ```
3. 通过`styled-component`来书写样式：防止`css`样式冲突  
   最简单的一个例子

   ```js
   import React, { Component } from 'react'
   import styled from 'styled-components'
   class NavLeft extends Component {
     constructor() {
       super()
       this.state = {}
     }
     render() {
       return <Wrapper>NavLeft</Wrapper>
     }
   }
   export default NavLeft
   const Wrapper = styled.div`
     background-color: red;
   `
   ```

## [切换主题](http://www.react-china.org/t/antd/25833)

- `color.less`中在代码底部有会有一些全局样式，引入`index.html`中成为行内样式，会覆盖调一些自己定义或者`ant design`中定义的样式

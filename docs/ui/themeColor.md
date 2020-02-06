# theme

`wave-ui`的所有组件均可设置`themeColor`，不同于一些框架采用`less`、`sass`等预处理器， 这里采用`CSS`[自定义属性](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)（`--themeColor`）实现。

每个组件可以单独设置（并不推荐，影响统一风格），也可以全局设置（推荐）。

```css
wave-button{
    --themeColor: #42b983;/**单独设置**/
}
:root {
    --themeColor: #42b983;/**全局设置**/
}
```

也可以通过`JavaScript`实时修改。

```js
document.body.style.setProperty('--themeColor','#F44336');
```

除了主题颜色`themeColor`以外，还支持如下主题定制

```css
:root {
    --fontColor:#333; /*文字颜色*/
    --borderColor:#d9d9d9;/*边框颜色，按钮、输入框*/
    --borderRadius:3px;/*圆角*/
    --successColor:#52c41a;/*成功色*/
    --waringColor:#faad14;/*警告色*/
    --errorColor:#f4615c;/*错误色*/
    --infoColor:#1890ff;/*提示色*/
    --dangerColor:#ff7875/*危险色*/
}
```

<wave-color-pane defaultvalue="#42b983" onchange="changeColor(this.value)"><wave-color-pane>

实时预览

<wave-button type="primary">primary</wave-button>
<wave-button type="dashed">dashed</wave-button>
<wave-button type="flat">flat</wave-button>
<wave-button>default</wave-button>
<wave-button type="primary" loading>loading</wave-button>
<wave-slider defaultvalue="30" min="-100" max="100" step="1"></wave-slider>
<p></p>
<wave-select>
    <wave-option value="1">Option1</wave-option>
    <wave-option value="2">Option2</wave-option>
    <wave-option value="3">Option3</wave-option>
</wave-select>
<p></p>
<wave-switch checked></wave-switch>
<p></p>
<wave-radio name="b" checked>React</wave-radio>
<wave-radio name="b">Vue</wave-radio>
<wave-radio name="b">Angular</wave-radio>
<wave-radio name="b">Other</wave-radio>
<p></p>
<wave-checkbox name="a" checked>Html</wave-checkbox>
<wave-checkbox name="a">Css</wave-checkbox>
<wave-checkbox name="a">Javascript</wave-checkbox>
<wave-checkbox name="a">Python</wave-checkbox>
<wave-checkbox name="a">Php</wave-checkbox>
<wave-checkbox name="a">Dart</wave-checkbox>
<wave-checkbox name="a">Swift</wave-checkbox>

可以通过`--themeBackground`来自定义背景（部分组件支持，如`button`、`switch`等），比如渐变色

```css
:root{
    --themeBackground:linear-gradient(-180deg,#2fcb53,#269f42 90%);
}
```

<div style="--themeBackground:linear-gradient(-180deg,#2fcb53,#269f42 90%);--themeColor: #269f42">
<wave-button type="primary">primary</wave-button>
<wave-button type="dashed">dashed</wave-button>
<wave-button type="flat">flat</wave-button>
<wave-button>default</wave-button>
<wave-button type="primary" loading>loading</wave-button>
<p></p>
<wave-select type="primary">
    <wave-option value="1">Option1</wave-option>
    <wave-option value="2">Option2</wave-option>
    <wave-option value="3">Option3</wave-option>
</wave-select>
<p></p>
<wave-switch checked></wave-switch>
<p></p>
<wave-date-pane style="width:400px"></wave-date-pane>
</div>

> 注意和`--themeColor`搭配使用，其他比如字体颜色仍取自`--themeColor`，只有背景部分才优先取自`--themeBackground`，同时，使用`--themeBackground`会失去动画效果。

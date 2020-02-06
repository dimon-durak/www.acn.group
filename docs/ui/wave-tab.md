# wave-tab

标签页。

## 使用方式

```html
<!-- 引入 -->
<script type="module">
    import './node_modules/wave-ui/components/wave-tab.js';
</script>
<!-- 使用 -->
<wave-tab>
    <wave-tab-content label="tab1">tab1</wave-tab-content>
    <wave-tab-content label="tab2">tab2</wave-tab-content>
    <wave-tab-content label="tab3">tab3</wave-tab-content>
</wave-tab>
```

`wave-tab`需和`wave-tab-content`组合使用。

## 名称`label`

每个`wave-tab-content`需要指定一个名称`label`，用于显示标签头。

<wave-tab>
    <wave-tab-content label="tab1">tab1</wave-tab-content>
    <wave-tab-content label="tab2">tab2</wave-tab-content>
    <wave-tab-content label="tab3">tab3</wave-tab-content>
</wave-tab>

```html
<wave-tab>
    <wave-tab-content label="tab1">tab1</wave-tab-content>
    <wave-tab-content label="tab2">tab2</wave-tab-content>
    <wave-tab-content label="tab3">tab3</wave-tab-content>
</wave-tab>
```

JavaScript操作`get`、`set`

> 作用于`wave-tab-content`

```js
//wave-tab-content
content.label;
content.label = 'tab';
//原生属性操作
content.getAttribute('label');
content.setAttribute('label','tab');
```

## 禁用`disabled`

每个`wave-tab-content`可以指定`disabled`属性，用来禁用该标签页。

<wave-tab>
    <wave-tab-content label="tab1">tab1</wave-tab-content>
    <wave-tab-content id="tab-content-disabled" label="tab2" disabled>tab2</wave-tab-content>
    <wave-tab-content label="tab3">tab3</wave-tab-content>
</wave-tab>
<wave-switch checked onchange="document.getElementById('tab-content-disabled').disabled = this.checked;"></wave-switch>

```html
<wave-tab>
    <wave-tab-content label="tab1">tab1</wave-tab-content>
    <wave-tab-content label="tab2" disabled>tab2</wave-tab-content>
    <wave-tab-content label="tab3">tab3</wave-tab-content>
</wave-tab>
```

JavaScript操作`get`、`set`

> 作用于`wave-tab-content`

```js
//wave-tab-content
content.disabled;
content.disabled = true;
content.disabled = false;
//原生属性操作
content.getAttribute('disabled');
content.setAttribute('disabled','');
content.removeAttribute('disabled');
```

## 标识`key`、`activekey`

每个`wave-tab-content`需要指定一个标识`key`，没有会默认以序列号为`key`，

`activekey`作用在`wave-tab`上，可以指定切换到具体标签页，也可以指定初始值。

<wave-tab activekey="B">
    <wave-tab-content label="tab1" key="A">tab1</wave-tab-content>
    <wave-tab-content label="tab2" key="B">tab2</wave-tab-content>
    <wave-tab-content label="tab3" key="C">tab3</wave-tab-content>
</wave-tab>
<wave-button type="primary" onclick="this.previousElementSibling.activekey='C'">跳转tab3</wave-button>

```html
<wave-tab activekey="B">
    <wave-tab-content label="tab1" key="A">tab1</wave-tab-content>
    <wave-tab-content label="tab2" key="B">tab2</wave-tab-content>
    <wave-tab-content label="tab3" key="C">tab3</wave-tab-content>
</wave-tab>
<wave-button type="primary" onclick="this.previousElementSibling.activekey='C'">跳转tab3</wave-button>
```

JavaScript操作`get`、`set`

```js
tab.activekey;
tab.activekey = 'key';
//原生属性操作
tab.getAttribute('activekey');
tab.setAttribute('activekey','key');
```

## 图标`icon`

每个`wave-tab-content`可以指定`icon`，配合`label`实现图标加文字的效果。

<wave-tab>
    <wave-tab-content label="home" icon="home">tab1</wave-tab-content>
    <wave-tab-content label="message" icon="message">tab2</wave-tab-content>
    <wave-tab-content label="user" icon="user">tab3</wave-tab-content>
</wave-tab>

```html
<wave-tab>
    <wave-tab-content label="home" icon="home">tab1</wave-tab-content>
    <wave-tab-content label="message" icon="message">tab2</wave-tab-content>
    <wave-tab-content label="user" icon="user">tab3</wave-tab-content>
</wave-tab>
```

也可以单独指定`icon`，不使用`label`。

<wave-tab>
    <wave-tab-content icon="home">tab1</wave-tab-content>
    <wave-tab-content icon="message">tab2</wave-tab-content>
    <wave-tab-content icon="user">tab3</wave-tab-content>
</wave-tab>

```html
<wave-tab>
    <wave-tab-content icon="home">tab1</wave-tab-content>
    <wave-tab-content icon="message">tab2</wave-tab-content>
    <wave-tab-content icon="user">tab3</wave-tab-content>
</wave-tab>
```

JavaScript操作`get`、`set`

> 作用于`wave-tab-content`

```js
//wave-tab-content
content.icon;
content.icon = 'name';
//原生属性操作
content.getAttribute('icon');
content.setAttribute('icon','name');
```

## 风格`type`

可选择标签页风格，`flat`、`card`，默认为`flat`

* `card`卡片式风格，通常适用于有背景的卡片中
* `line`线框式风格

<wave-radio-group onchange="this.nextElementSibling.type=this.value" defaultvalue="flat">
    <wave-radio value="flat">flat</wave-radio>
    <wave-radio value="card">card</wave-radio>
    <wave-radio value="line">line</wave-radio>
</wave-radio-group>
<wave-tab type="flat" style="padding:.8em;">
    <wave-tab-content label="home" icon="home">tab1</wave-tab-content>
    <wave-tab-content label="message" icon="message">tab2</wave-tab-content>
    <wave-tab-content label="user" icon="user">tab3</wave-tab-content>
</wave-tab>
<style>
wave-tab[type="card"]{
    background:#f1f1f1;
}
</style>

```css
wave-tab[type="card"]{
    padding:.8em; 
    background:#f1f1f1;
}
```
```html
<wave-tab type="card">
    ...
</wave-tab>
```

> 纯`CSS`修改(属性选择器)，当设置成`card`或者`line`风格时，容器不再有滚动动画


## 对齐`align`

设置标签头的对齐方式，默认为`start`(居左)，可设置`center`(居中)、`end`（居右）

<wave-radio-group onchange="this.nextElementSibling.align=this.value" defaultvalue="start">
    <wave-radio value="start">start</wave-radio>
    <wave-radio value="center">center</wave-radio>
    <wave-radio value="end">end</wave-radio>
</wave-radio-group>
<wave-tab type="card" style="padding:.8em; background:#f1f1f1">
    <wave-tab-content label="home" icon="home">tab1</wave-tab-content>
    <wave-tab-content label="message" icon="message">tab2</wave-tab-content>
    <wave-tab-content label="user" icon="user">tab3</wave-tab-content>
</wave-tab>

```html
<wave-tab type="card" align="center">
    ...
</wave-tab>
```

JavaScript操作`get`、`set`

> 作用于`wave-tab`

```js
//wave-tab
tab.align;
tab.align = 'center';
//原生属性操作
tab.getAttribute('align');
tab.setAttribute('align','center');
```

## 事件`event`

### onchange

`wave-tab`切换完成时触发。

<wave-tab onchange="WaveMessage.info(event.detail.label)">
    <wave-tab-content label="tab1">tab1</wave-tab-content>
    <wave-tab-content label="tab2">tab2</wave-tab-content>
    <wave-tab-content label="tab3">tab3</wave-tab-content>
</wave-tab>

```html
<wave-tab onchange="WaveMessage.info(event.detail.label)">
    <wave-tab-content label="tab1">tab1</wave-tab-content>
    <wave-tab-content label="tab2">tab2</wave-tab-content>
    <wave-tab-content label="tab3">tab3</wave-tab-content>
</wave-tab>
```


```js
tab.onchange = function(ev){
    //获取key、index和label的几种方式
    /*
    event:{
        detail:{
            key,
            index,
            label,
        }
    }
    */
    const { key, index, label } = ev.detail;
    console.log(key, index, label);
}

tab.addEventListener('change',function(ev){
    const { key, index, label } = ev.detail;
    console.log(key, index, label);
})
```

## 其他

当`tab`比较多时，超出范围，会自动滚动。

<wave-tab>
    <wave-tab-content label="tab11111111111111">tab1</wave-tab-content>
    <wave-tab-content label="tab2222222222222">tab2</wave-tab-content>
    <wave-tab-content label="tab333333333">tab3</wave-tab-content>
    <wave-tab-content label="tab4">tab4</wave-tab-content>
    <wave-tab-content label="tab5">tab5</wave-tab-content>
    <wave-tab-content label="tab64444444444">tab6</wave-tab-content>
    <wave-tab-content label="tab7">tab7</wave-tab-content>
    <wave-tab-content label="tab855555555">tab8</wave-tab-content>
    <wave-tab-content label="tab9">tab9</wave-tab-content>
    <wave-tab-content label="tab106666666666">tab10</wave-tab-content>
</wave-tab>

各个组件相互独立，可以随意嵌套，如下。

<wave-tab>
    <wave-tab-content label="tab1">
        <wave-tab>
            <wave-tab-content label="1-tab1">1-tab1</wave-tab-content>
            <wave-tab-content label="1-tab2">1-tab2</wave-tab-content>
            <wave-tab-content label="1-tab3">1-tab3</wave-tab-content>
        </wave-tab>
    </wave-tab-content>
    <wave-tab-content label="tab2">tab2</wave-tab-content>
    <wave-tab-content label="tab3">tab3</wave-tab-content>
</wave-tab>

```html
<wave-tab>
    <wave-tab-content label="tab1">
        <wave-tab>
            <wave-tab-content label="1-tab1">1-tab1</wave-tab-content>
            <wave-tab-content label="1-tab2">1-tab2</wave-tab-content>
            <wave-tab-content label="1-tab3">1-tab3</wave-tab-content>
        </wave-tab>
    </wave-tab-content>
    <wave-tab-content label="tab2">tab2</wave-tab-content>
    <wave-tab-content label="tab3">tab3</wave-tab-content>
</wave-tab>
```


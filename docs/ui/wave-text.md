# wave-text

文本，集成了常见的几种状态。

## 使用方式

```html
<!-- 引入 -->
<script type="module">
    import './node_modules/wave-ui/components/wave-text.js';
</script>
<!-- 使用 -->
<wave-text>text</wave-text>
```

内部仅仅集成了部分`css`样式，可随意嵌套，如果不满足完全可以通过`css`自定义。

## 类型`type`

内置不同类型的文本，也就是颜色的区别。

<wave-text>normal</wave-text>

<wave-text type="warning">warning</wave-text>

<wave-text type="error">error</wave-text>

<wave-text type="success">success</wave-text>

```html
<wave-text>normal</wave-text>
<wave-text type="warning">warning</wave-text>
<wave-text type="error">error</wave-text>
<wave-text type="success">success</wave-text>
```

## 行数`rows`

可以设置行数`rows`，超出部分会出现省略号。

<wave-slider type="number" min="1" max="10" defaultvalue="3" showtips oninput="this.nextElementSibling.rows=this.value"></wave-slider>
<wave-text rows="3">wave-ui is a front end cross-framework ui library based on web-components.wave-ui is a front end cross-framework ui library based on web-components.wave-ui is a front end cross-framework ui library based on web-components.wave-ui is a front end cross-framework ui library based on web-components.wave-ui is a front end cross-framework ui library based on web-components.wave-ui is a front end cross-framework ui library based on web-components.wave-ui is a front end cross-framework ui library based on web-components.wave-ui is a front end cross-framework ui library based on web-components.wave-ui is a front end cross-framework ui library based on web-components.wave-ui is a front end cross-framework ui library based on web-components.wave-ui is a front end cross-framework ui library based on web-components.wave-ui is a front end cross-framework ui library based on web-components.wave-ui is a front end cross-framework ui library based on web-components.wave-ui is a front end cross-framework ui library based on web-components.wave-ui is a front end cross-framework ui library based on web-components.wave-ui is a front end cross-framework ui library based on web-components.wave-ui is a front end cross-framework ui library based on web-components.wave-ui is a front end cross-framework ui library based on web-components.wave-ui is a front end cross-framework ui library based on web-components.wave-ui is a front end cross-framework ui library based on web-components.wave-ui is a front end cross-framework ui library based on web-components.wave-ui is a front end cross-framework ui library based on web-components.wave-ui is a front end cross-framework ui library based on web-components.wave-ui is a front end cross-framework ui library based on web-components.wave-ui is a front end cross-framework ui library based on web-components.wave-ui is a front end cross-framework ui library based on web-components.wave-ui is a front end cross-framework ui library based on web-components.wave-ui is a front end cross-framework ui library based on web-components.wave-ui is a front end cross-framework ui library based on web-components.</wave-text>


```html
<wave-text rows="3">a front end cross-framework ui library based on web-components.</wave-text>
```

JavaScript操作`get`、`set`

```js
text.rows;//获取
text.rows = 5;
//原生属性操作
text.getAttribute('rows');
text.setAttribute('rows',5);
```

另外，当出现省略号时，`wave-text`会自动添加上`truncated`属性。

```css
wave-text+button::before{
    content:'收起'
}
wave-text[truncated]+button::before{
    content:'展开'
}
```

## 拖拽`draggable`

添加`draggable`属性可以将文本拖拽至指定容器，比如输入框，可用`drop`接收，同原生`drag`。

```js
dropbox.addEventListener('drop',(event)=>{
    event.dataTransfer.getData('text')
})
```

<wave-text draggable>13299999999</wave-text>

<wave-input placeholder="drop in here"></wave-input>

```html
<wave-text draggable>13299999999</wave-text>
```

## 其他

其他还内置了`mark`、`code`属性。

<wave-text mark>mark</wave-text>

<wave-text code>code</wave-text>

```html
<wave-text mark>mark</wave-text>
<wave-text code>code</wave-text>
```

<wave-text><wave-text mark>跨框架</wave-text>。无论是<wave-text code>react</wave-text>、<wave-text code>vue</wave-text>还是原生项目均可使用。</wave-text>

<wave-text><wave-text mark>组件化</wave-text>。<wave-text code>shadow dom</wave-text>真正意义上实现了样式和功能的组件化。</wave-text>

```html
<wave-text>
    <wave-text mark>跨框架</wave-text>。无论是<wave-text code>react</wave-text>、<wave-text code>vue</wave-text>还是原生项目均可使用。
</wave-text>
<wave-text>
    <wave-text mark>组件化</wave-text>。<wave-text code>shadow dom</wave-text>真正意义上实现了样式和功能的组件化。
</wave-text>
```

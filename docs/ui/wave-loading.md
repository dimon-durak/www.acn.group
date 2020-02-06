# wave-loading

加载器，用于页面和区块的加载中状态。

## 使用方式

```html
<!-- 引入 -->
<script type="module">
    import './node_modules/wave-ui/components/wave-loading.js';
</script>
<!-- 使用 -->
<wave-loading></wave-loading>
```

## 尺寸`size`

通过`size`可以设置加载器尺寸，默认为`font-size`大小。

<wave-loading></wave-loading>
<wave-loading size="30"></wave-loading>
<wave-loading size="40"></wave-loading>
<wave-loading size="50"></wave-loading>

```html
<wave-loading></wave-loading>
<wave-loading size="30"></wave-loading>
<wave-loading size="40"></wave-loading>
<wave-loading size="50"></wave-loading>
```

CSS操作（推荐）

```css
wave-loading{
    font-size:30px;
}
```

JavaScript操作`get`、`set`

```js
loading.size;
loading.size = 30;
//原生属性操作
loading.getAttribute('size');
loading.setAttribute('size',30);
```

> CSS操作更灵活，可以写在样式中，属性值和JavaScript操作优先级更高，下同

## 颜色`color`

通过`color`可以设置加载器颜色，默认为主题颜色`themeColor`。

<wave-loading size="40"></wave-loading>
<wave-loading size="40" color="green"></wave-loading>
<wave-loading size="40" color="olivedrab"></wave-loading>
<wave-loading size="40" color="orange"></wave-loading>

```html
<wave-loading size="40"></wave-loading>
<wave-loading size="40" color="green"></wave-loading>
<wave-loading size="40" color="olivedrab"></wave-loading>
<wave-loading size="40" color="orange"></wave-loading>
```

CSS操作（推荐）

```css
wave-loading{
    color:orangered;
}
```

JavaScript操作`get`、`set`

```js
loading.color;
loading.color = 'orangered';
//原生属性操作
loading.getAttribute('color');
loading.setAttribute('color','orangered');
```

## 其他

可以直接嵌套文本作为加载提示语

<wave-loading>loading...</wave-loading>

```html
<wave-loading>loading...</wave-loading>
```

如果需要垂直排列，设置一下`css`就可以了

<wave-loading style="flex-direction:column">loading...</wave-loading>

```html
<style>
wave-loading{
    flex-direction:column
}
</style>
<wave-loading>loading...</wave-loading>
```

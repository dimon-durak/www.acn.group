# wave-layout

布局，基于`flex`和`grid`的简单实现。

## 使用方式

```html
<!-- 引入 -->
<script type="module">
    import './node_modules/wave-ui/components/wave-layout.js';
</script>
<!-- 使用 -->
<wave-layout row expand>
    <wave-layout class="side"></wave-layout>
    <wave-layout expand center class="main">
        <wave-layout center class="box">wave-layout</wave-layout>
    </wave-layout>
    <wave-layout class="side"></wave-layout>
</wave-layout>

<wave-row gutter="10">
    <wave-col span="4">col-4</wave-col>
    <wave-col span="8">col-8</wave-col>
    <wave-col span="8">col-8</wave-col>
    <wave-col span="4">col-4</wave-col>
</wave-row>
```

内部仅仅根据属性选择器实现，属性可叠加使用。

## 水平排列`row`

默认为垂直排列，`row`表示水平排列。

<wave-layout row>
    <wave-layout class="box">1</wave-layout>
    <wave-layout class="box box-o">2</wave-layout>
</wave-layout>

```html
<wave-layout row>
    <wave-layout class="box">1</wave-layout>
    <wave-layout class="box box-o">2</wave-layout>
</wave-layout>
```

## 填充`expand`

根据剩余空间填充（主轴方向）。

<wave-layout row>
    <wave-layout class="box" expand>1</wave-layout>
    <wave-layout class="box box-o">2</wave-layout>
</wave-layout>

```html
<wave-layout row>
    <wave-layout class="box" expand>1</wave-layout>
    <wave-layout class="box box-o">2</wave-layout>
</wave-layout>
```

如果有多个，则会等分剩余空间。

<wave-layout row>
    <wave-layout class="box">1</wave-layout>
    <wave-layout class="box box-o" expand>2</wave-layout>
    <wave-layout class="box" expand>3</wave-layout>
</wave-layout>

```html
<wave-layout row>
    <wave-layout class="box">1</wave-layout>
    <wave-layout class="box box-o" expand>2</wave-layout>
    <wave-layout class="box" expand>3</wave-layout>
</wave-layout>
```

## 居中`center`

默认水平垂直居中，可以指定某一方向居中，主轴`mainAxis`和交叉轴`crosAxis`。

<wave-layout center style="height:200px">
    <wave-layout class="box">1</wave-layout>
</wave-layout>

```html
<wave-layout center style="height:200px">
    <wave-layout class="box">1</wave-layout>
</wave-layout>
```

`center="crosAxis"`

<wave-layout row center="crosAxis" style="height:200px">
    <wave-layout class="box">1</wave-layout>
</wave-layout>

```html
<wave-layout row center="crosAxis" style="height:200px">
    <wave-layout class="box">1</wave-layout>
</wave-layout>
```

`center="mainAxis"`

<wave-layout row center="mainAxis" style="height:200px">
    <wave-layout class="box">1</wave-layout>
</wave-layout>

```html
<wave-layout row center="mainAxis" style="height:200px">
    <wave-layout class="box">1</wave-layout>
</wave-layout>
```

## 栅格`row`、`col`

现在支持栅格系统，基于`grid`布局

`24`栅格系统。把水平方向行`wave-row`平均分为`24`份，然后指定每一列`wave-col`的跨越范围`span`

<wave-row gutter="10">
    <wave-col span="12">col-12</wave-col>
    <wave-col span="12">col-12</wave-col>
    <wave-col span="4">col-4</wave-col>
    <wave-col span="8">col-8</wave-col>
    <wave-col span="8">col-8</wave-col>
    <wave-col span="4">col-4</wave-col>
    <wave-col span="8">col-8</wave-col>
    <wave-col span="8">col-8</wave-col>
    <wave-col span="8">col-8</wave-col>
</wave-row>

```html
<wave-row gutter="10">
    <wave-col span="12">col-12</wave-col>
    <wave-col span="12">col-12</wave-col>
    <wave-col span="4">col-4</wave-col>
    <wave-col span="8">col-8</wave-col>
    <wave-col span="8">col-8</wave-col>
    <wave-col span="4">col-4</wave-col>
    <wave-col span="8">col-8</wave-col>
    <wave-col span="8">col-8</wave-col>
    <wave-col span="8">col-8</wave-col>
</wave-row>
```

## 间隔`gutter`

通过`gutter`属性可以设置栅格间隔

<wave-slider type="number" min="0" max="24" suffix="px" defaultvalue="10" showtips oninput="this.nextElementSibling.gutter=this.value"></wave-slider>
<wave-row gutter="10">
    <wave-col span="4">col-4</wave-col>
    <wave-col span="8">col-8</wave-col>
    <wave-col span="8">col-8</wave-col>
    <wave-col span="4">col-4</wave-col>
</wave-row>

JavaScript操作`get`、`set`

```js
row.gutter;//获取
row.gutter = 10;
//原生属性操作
row.getAttribute('gutter');
row.setAttribute('gutter',10);
```

## 示例

下面是一个`wave-layout`简单的示例。

<wave-layout class="layout">
    <wave-layout class="header">HEADER</wave-layout>
    <wave-layout row expand>
        <wave-layout class="side"></wave-layout>
        <wave-layout expand center class="main">
            <wave-layout center class="box">wave-layout</wave-layout>
        </wave-layout>
        <wave-layout class="side"></wave-layout>
    </wave-layout>
    <wave-layout class="footer">FOOTER</wave-layout>
</wave-layout>

```html
<wave-layout class="layout">
    <wave-layout class="header">HEADER</wave-layout>
    <wave-layout row expand>
        <wave-layout class="side"></wave-layout>
        <wave-layout expand center class="main">
            <wave-layout center class="box">wave-layout</wave-layout>
        </wave-layout>
        <wave-layout class="side"></wave-layout>
    </wave-layout>
    <wave-layout class="footer">FOOTER</wave-layout>
</wave-layout>
```

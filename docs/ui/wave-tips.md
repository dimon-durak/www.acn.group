# wave-tips

文字提示气泡框。类似于元素属性`title`。

通过`hover`和`focus`触发。

## 使用方式

```html
<!-- 引入 -->
<script type="module">
    import './node_modules/wave-ui/components/wave-tips.js';
</script>
<!-- 使用 -->
<wave-tips tips="this is a tip">
    <wave-button>button</wave-button>
</wave-tips>
```

## 提示`tips`

提示文字。如果不设置则不显示提示。

<wave-tips tips="this is a tip">
    <wave-button>button</wave-button>
</wave-tips>
<wave-button type="primary" onclick="this.previousElementSibling.tips='this is a new tip!'">改变tips</wave-button>

```html
<wave-tips tips="this is a tip">
    <wave-button>button</wave-button>
</wave-tips>
```

JavaScript操作`get`、`set`

```js
tips.tips;
tips.tips = 'some tips';
//原生属性操作
tips.getAttribute('tips');
tips.setAttribute('tips','some tips');
```

## 方向`dir`

通过`dir`可以设置气泡框方向，默认为`top`，可以取值`top`、`right`、`bottom`、`left`、`topleft`、`topright`、`righttop`、`rightbottom`、`bottomleft`、`bottomright`、`lefttop`、`leftbottom`。

<wave-tips tips="some tips" dir="top"><wave-button>top</wave-button></wave-tips>
<wave-tips tips="some tips" dir="right"><wave-button>right</wave-button></wave-tips>
<wave-tips tips="some tips" dir="bottom"><wave-button>bottom</wave-button></wave-tips>
<wave-tips tips="some tips" dir="left"><wave-button>left</wave-button></wave-tips>
<wave-tips tips="some tips" dir="topleft"><wave-button>topleft</wave-button></wave-tips>
<wave-tips tips="some tips" dir="topright"><wave-button>topright</wave-button></wave-tips>
<wave-tips tips="a a a a a a a a a righttop righttop righttop righttop righttop some tips" dir="righttop"><wave-button>righttop</wave-button></wave-tips>
<wave-tips tips="a a a rightbottom rightbottom rightbottom rightbottom rightbottom some tips" dir="rightbottom"><wave-button>rightbottom</wave-button></wave-tips>


<wave-tips tips="some tips" dir="bottomleft"><wave-button>bottomleft</wave-button></wave-tips>
<wave-tips tips="some tips" dir="bottomright"><wave-button>bottomright</wave-button></wave-tips>
<wave-tips tips="a a a a a a a a a lefttop lefttop lefttop lefttop lefttop lefttop some tips" dir="lefttop"><wave-button>lefttop</wave-button></wave-tips>
<wave-tips tips="a a a a a a a a a leftbottom leftbottom leftbottom leftbottom leftbottom leftbottom leftbottom leftbottom some tips" dir="leftbottom"><wave-button>leftbottom</wave-button></wave-tips>

```html
<wave-tips dir="top" tips="some tips"><wave-button>top</wave-button></wave-tips>
<wave-tips dir="right" tips="some tips"><wave-button>right</wave-button></wave-tips>
<wave-tips dir="bottom" tips="some tips"><wave-button>bottom</wave-button></wave-tips>
<wave-tips dir="left" tips="some tips"><wave-button>left</wave-button></wave-tips>
<wave-tips dir="topleft" tips="some tips"><wave-button>topleft</wave-button></wave-tips>
<wave-tips dir="topright" tips="some tips"><wave-button>topright</wave-button></wave-tips>
<wave-tips dir="righttop" tips="some tips"><wave-button>righttop</wave-button></wave-tips>
<wave-tips dir="rightbottom" tips="some tips"><wave-button>rightbottom</wave-button></wave-tips>
<wave-tips dir="bottomleft" tips="some tips"><wave-button>bottomleft</wave-button></wave-tips>
<wave-tips dir="bottomright" tips="some tips"><wave-button>bottomright</wave-button></wave-tips>
<wave-tips dir="lefttop" tips="some tips"><wave-button>lefttop</wave-button></wave-tips>
<wave-tips dir="leftbottom" tips="some tips"><wave-button>leftbottom</wave-button></wave-tips>
```


JavaScript操作`get`、`set`

```js
tips.dir;
tips.dir = 'right';
//原生属性操作
tips.getAttribute('dir');
tips.setAttribute('dir','right');
```

除了上述四个方位外，还可以设置`auto`，可以自动根据位置来选择一个合适的方向（还不完善）。

```html
<wave-tips tips="some tips" dir="auto"><wave-button>auto</wave-button></wave-tips>
```

## 类型`type`

可以通过`type`设置提示框的颜色，有三种类型`success`、`error`、`warning`

<wave-tips tips="success tips" type="success"><wave-button>success</wave-button></wave-tips>
<wave-tips tips="warning tips" type="warning"><wave-button>warning</wave-button></wave-tips>
<wave-tips tips="error tips" type="error"><wave-button>error</wave-button></wave-tips>

```html
<wave-tips tips="success tips" type="success"><wave-button>success</wave-button></wave-tips>
<wave-tips tips="warning tips" type="warning"><wave-button>warning</wave-button></wave-tips>
<wave-tips tips="error tips" type="error"><wave-button>error</wave-button></wave-tips>
```

JavaScript操作`get`、`set`

```js
tips.type;
tips.type = 'success';
//原生属性操作
tips.getAttribute('type');
tips.setAttribute('type','success');
```

## 颜色`color`

通过`color`可以设置提示框为任意颜色，优先级高于`type`。

<wave-tips tips="some tips" color="skyblue"><wave-button>custom color</wave-button></wave-tips>

```html
<wave-tips tips="some tips" color="skyblue"><wave-button>custom color</wave-button></wave-tips>
```

JavaScript操作`get`、`set`

```js
tips.color;
tips.color = 'red';
//原生属性操作
tips.getAttribute('color');
tips.setAttribute('color','red');
```

## 显示`show`

添加`show`属性可以主动控制提示框的出现时机，不再与`hover`和`focus`关联，可以取值`true`和`false`。

适用于表单错误信息描述。

<wave-tips tips="some tips" show="true"><wave-button>tips is show</wave-button></wave-tips>
<wave-switch checked onchange="this.previousElementSibling.show = this.checked;"></wave-switch>

```html
<wave-tips tips="some tips" show="true"><wave-button>tips is show</wave-button></wave-tips>
```

JavaScript操作`set`

```js
tips.show = true;
tips.show = false;
//原生属性操作
tips.setAttribute('show',true);
```

# wave-button

按钮。用于替代原生`button`。

## 使用方式

```html
<!-- 引入 -->
<script type="module">
    import './node_modules/wave-ui/components/wave-button.js';
</script>
<!-- 使用 -->
<wave-button>button</wave-button>
```

## 风格`type`

按钮有5种风格，分别为`primary`，`dashed`，`flat`，`danger`和默认。

<wave-button type="primary" id="btn">primary</wave-button>
<wave-button type="dashed">dashed</wave-button>
<wave-button type="flat">flat</wave-button>
<wave-button type="danger">danger</wave-button>
<wave-button>default</wave-button>

```html
<wave-button type="primary">primary</wave-button>
<wave-button type="dashed">dashed</wave-button>
<wave-button type="flat">flat</wave-button>
<wave-button type="danger">danger</wave-button>
<wave-button>default</wave-button>
```

## 链接`href`

当设置`href`属性时，`wave-button`内部会渲染成`a`标签。

<wave-button type="primary" href="https://github.com/XboWavean/wave-ui">visit wave-ui</wave-button>
<wave-button type="dashed" href="https://github.com/XboWavean/wave-ui">visit wave-ui</wave-button>
<wave-button type="flat" href="https://github.com/XboWavean/wave-ui">visit wave-ui</wave-button>
<wave-button href="https://github.com/XboWavean/wave-ui">visit wave-ui</wave-button>


```html
<wave-button href="https://github.com/XboWavean/wave-ui">visit wave-ui</wave-button>
```

此外，还可以设置`download`、`target`和`rel`属性，同原生`a`标签。

<wave-img src="/img/Gokou Ruri.gif"></wave-img>

<wave-button href="/img/Gokou Ruri.gif" download="Gokou Ruri">download</wave-button>

```html
<wave-button href="/img/Gokou Ruri.gif" download="Gokou Ruri">download</wave-button>
```

## 禁用`disabled`

通过`disabled`可以禁用按钮，禁用后该按钮上的事件失效。

<wave-button disabled type="primary">primary</wave-button>
<wave-switch checked onchange="this.previousElementSibling.disabled = this.checked;"></wave-switch>

<wave-button disabled type="dashed">dashed</wave-button>
<wave-switch checked onchange="this.previousElementSibling.disabled = this.checked;"></wave-switch>

<wave-button disabled type="flat">flat</wave-button>
<wave-switch checked onchange="this.previousElementSibling.disabled = this.checked;"></wave-switch>

<wave-button disabled >default</wave-button>
<wave-switch checked onchange="this.previousElementSibling.disabled = this.checked;"></wave-switch>

<wave-button href="https://github.com/XboWavean/wave-ui" disabled>visit wave-ui</wave-button>
<wave-switch checked onchange="this.previousElementSibling.disabled = this.checked;"></wave-switch>

```html
<wave-button disabled type="primary">primary</wave-button>
<wave-button disabled type="dashed">dashed</wave-button>
<wave-button disabled type="flat">flat</wave-button>
<wave-button disabled >default</wave-button>
```

JavaScript操作`get`、`set`

```js
btn.disabled;//获取
btn.disabled = false;
btn.disabled = true;
//原生属性操作
btn.getAttribute('disabled');
btn.setAttribute('disabled','');
btn.removeAttribute('disabled');
```

!> 所有组件关于属性的获取和设置均类似，如下

```js
com.props;//获取
com.props = newProps;
//原生属性操作
com.setAttribute('props',newProps);
com.removeAttribute('props');
```

## 按钮组`wave-button-group`

`<wave-button-group>`可以将一组同类型的按钮组合起来。

<wave-button-group>
    <wave-button>button1</wave-button>
    <wave-button>button2</wave-button>
    <wave-button>button3</wave-button>
    <wave-button>button4</wave-button>
</wave-button-group>

<p></p>

<wave-button-group>
    <wave-button type="primary">button1</wave-button>
    <wave-button type="primary">button2</wave-button>
    <wave-button type="primary">button3</wave-button>
    <wave-button type="primary">button4</wave-button>
</wave-button-group>

<p></p>

<wave-button-group>
    <wave-button type="dashed">button1</wave-button>
    <wave-button type="dashed">button2</wave-button>
    <wave-button type="dashed">button3</wave-button>
    <wave-button type="dashed">button4</wave-button>
</wave-button-group>

<p></p>

<wave-button-group>
    <wave-button type="flat">button1</wave-button>
    <wave-button type="flat">button2</wave-button>
    <wave-button type="flat">button3</wave-button>
    <wave-button type="flat">button4</wave-button>
</wave-button-group>

<p></p>

<wave-button-group>
    <wave-button type="primary">button1</wave-button>
    <wave-button type="primary">button2</wave-button>
    <wave-button>button3</wave-button>
    <wave-button>button4</wave-button>
</wave-button-group>

```html
<wave-button-group>
    <wave-button>button1</wave-button>
    <wave-button>button2</wave-button>
    <wave-button>button3</wave-button>
    <wave-button>button4</wave-button>
</wave-button-group>
```


## 状态切换`toggle`

可以给按钮添加`toggle`属性，来实现简单的按钮状态切换。

可以简单的通过`checked`属性改变样式。

<style>
.button-toggle[checked]{
    background:var(--themeColor);
    color:#fff;
}
</style>
<wave-button toggle class="button-toggle">toggle button</wave-button>

```html
<style>
.button-toggle[checked]{
    background:var(--themeColor);
    color:#fff;
}
</style>
<wave-button toggle class="button-toggle">toggle button</wave-button>
```

也可以通过`js`获取到`checked`属性。

<wave-button toggle class="button-toggle" icon="like" onclick="WaveMessage.show({icon:'like',text:this.checked?'I dislike it':'I like it'})">like</wave-button>

```js
btn.addEventListener('click',function(ev){
    if(this.checked){
        //do something
    }else{
        //do something
    }
})
```

## 加载`loading`

添加`loading`属性即可让按钮处于加载状态，处于加载状态所有事件会被禁用，类似于`disabled`

<wave-button type="primary" loading>loading</wave-button>
<wave-switch checked onchange="this.previousElementSibling.loading = this.checked;"></wave-switch>

```html
<wave-button type="primary" loading>loading</wave-button>
```

JavaScript操作`get`、`set`

```js
btn.loading;
btn.loading = false;
btn.loading = true;
//原生属性操作
btn.getAttribute('loading');
btn.setAttribute('loading','');
btn.removeAttribute('loading');
```

## 图标`icon`

当需要在`wave-button`内嵌入`wave-icon`时，可以设置`icon`属性。

关于`wave-icon`的取值可以查看[`wave-icon`](wave-icon.md)

<wave-button type="primary" icon="heart">like</wave-button>
<wave-button type="dashed" icon="search">search</wave-button>
<wave-button type="flat" icon="left">back</wave-button>
<wave-button icon="link">link</wave-button>

```html
<wave-button type="primary" icon="heart">like</wave-button>
<wave-button type="dashed" icon="search">search</wave-button>
<wave-button type="flat" icon="left">back</wave-button>
<wave-button icon="link">link</wave-button>
```

JavaScript操作`set`

```js
btn.icon = 'name';
//原生属性操作
btn.setAttribute('icon','name');
```

当然，上述图标均位于文字左侧，如果想位于文字右侧，你可以直接嵌套`wave-icon`组件。

<wave-button>heart<wave-icon name="heart"></wave-icon></wave-button>
<wave-button>right<wave-icon name="right"></wave-icon></wave-button>

```html
<wave-button>heart  <wave-icon name="heart"></wave-icon></wave-button>
<wave-button>right  <wave-icon name="right"></wave-icon></wave-button>
```

## 形状`shape`

当只有`icon`时，可配合`shape=circle`属性，实现圆形图标按钮。

<wave-button type="primary" icon="heart" shape="circle"></wave-button>
<wave-button type="dashed" icon="heart" shape="circle"></wave-button>
<wave-button type="flat" icon="heart" shape="circle"></wave-button>
<wave-button icon="heart" shape="circle"></wave-button>

```html
<wave-button type="primary" icon="heart" shape="circle"></wave-button>
<wave-button type="dashed" icon="heart" shape="circle"></wave-button>
<wave-button type="flat" icon="heart" shape="circle"></wave-button>
<wave-button icon="heart" shape="circle"></wave-button>
```

## 块状`block`

`block`属性将使按钮适合其父宽度。

<wave-button type="primary" block>primary</wave-button>
<wave-button type="dashed" block>dashed</wave-button>
<wave-button type="flat" block>flat</wave-button>
<wave-button block>default</wave-button>

```html
<wave-button type="primary" block>primary</wave-button>
<wave-button type="dashed" block>dashed</wave-button>
<wave-button type="flat" block>flat</wave-button>
<wave-button block>default</wave-button>
```

当然该属性只是样式的重置，你可以通过`CSS`来实现

```css
wave-button{
    diplay:flex;
}
```

## 事件`event`

与普通`button`标签一致。

### onfocus、onblur

`focus`、`blur`后的回调事件。

<wave-button onfocus="WaveMessage.info('focus')" onblur="WaveMessage.info('blur')">primary</wave-button>

```html
<wave-button onfocus="WaveMessage.info('focus')" onblur="WaveMessage.info('blur')">primary</wave-button>
```

其他触发方式

```js
btn.onfocus = function(ev){
    console.log(ev)
}

btn.addEventListener('focus',function(ev){
    console.log(ev)
})
```

### 其他事件

`onclick`、`onmousedown`等等，使用方式同上。

## 方法`function`

### focus

用于主动聚焦`focus`，聚焦以后可以响应键盘事件，`Enter`可以触发`click`事件。

<wave-button onclick="WaveMessage.info('click')" onfocus="WaveMessage.info('focus')" onblur="WaveMessage.info('blur')" >primary</wave-button>
<wave-button type="primary" onclick="this.previousElementSibling.focus()">主动聚焦</wave-button>

```js
btn.focus();
```

## 自定义样式

目前可以修改的部分样式如下

```css
:host{ 
    display:inline-flex; 
    padding:0 .8em; 
    box-sizing:border-box; 
    height: 36px; 
    align-items:center;
    justify-content: center;
    border:1px solid #ddd; 
    font-size: 14px; 
    color: #333;  
    border-radius: 3px; 
}
```

下面是一个自定义样式的按钮

<style>
.custom-button{
    font-size:20px;
    border-radius:50%;
    height:100px;
    width:100px;
}
</style>
<wave-button type="primary" class="custom-button">primary</wave-button>

```html
<style>
.custom-button{
    font-size:20px;
    border-radius:50%;
    height:100px;
    width:100px;
}
</style>
<wave-button type="primary" class="custom-button">primary</wave-button>
```

也可以通过修改`font-size`来控制按钮尺寸

<style>
.custom-button2{
    font-size:30px;
}
</style>
<wave-button type="primary" class="custom-button2">primary</wave-button>

```html
<style>
.custom-button2{
    font-size:30px;
}
</style>
<wave-button type="primary" class="custom-button2">primary</wave-button>
```

> 大部分组件均可通过`font-size`来控制组件尺寸

此外，所有组件均有主题颜色`themeColor`，通过`CSS`自定义属性实现

详细可参考[主题](themeColor.md)。

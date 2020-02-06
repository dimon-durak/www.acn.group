# wave-select

下拉选择器。用于替代原生`select`。

## 使用方式

```html
<!-- 引入 -->
<script type="module">
    import './node_modules/wave-ui/components/wave-select.js';
</script>
<!-- 使用 -->
<wave-select>
    <wave-option value="1">Option1</wave-option>
    <wave-option value="2">Option2</wave-option>
    <wave-option value="3">Option3</wave-option>
</wave-select>
```

> `wave-select`配合`wave-option`才能渲染到下拉菜单中，其他标签不会渲染。

## 风格`type`

跟随`wave-button`。

<wave-select>
    <wave-option value="1">Option1</wave-option>
    <wave-option value="2">Option2</wave-option>
    <wave-option value="3">Option3</wave-option>
</wave-select>
<wave-select type="flat">
    <wave-option value="1">Option1</wave-option>
    <wave-option value="2">Option2</wave-option>
    <wave-option value="3">Option3</wave-option>
</wave-select>
<wave-select type="primary">
    <wave-option value="1">Option1</wave-option>
    <wave-option value="2">Option2</wave-option>
    <wave-option value="3">Option3</wave-option>
</wave-select>
<wave-select type="dashed">
    <wave-option value="1">Option1</wave-option>
    <wave-option value="2">Option2</wave-option>
    <wave-option value="3">Option3</wave-option>
</wave-select>

```html
<wave-select>
    <wave-option value="1">Option1</wave-option>
    <wave-option value="2">Option2</wave-option>
    <wave-option value="3">Option3</wave-option>
</wave-select>
<wave-select type="flat">
    <wave-option value="1">Option1</wave-option>
    <wave-option value="2">Option2</wave-option>
    <wave-option value="3">Option3</wave-option>
</wave-select>
<wave-select type="primary">
    <wave-option value="1">Option1</wave-option>
    <wave-option value="2">Option2</wave-option>
    <wave-option value="3">Option3</wave-option>
</wave-select>
<wave-select type="dashed">
    <wave-option value="1">Option1</wave-option>
    <wave-option value="2">Option2</wave-option>
    <wave-option value="3">Option3</wave-option>
</wave-select>
```

## 块状`block`

跟随`wave-button`，宽度充满父级。

<wave-select block>
    <wave-option value="1">Option1</wave-option>
    <wave-option value="2">Option2</wave-option>
    <wave-option value="3">Option3</wave-option>
</wave-select>

```html
<wave-select block>
    <wave-option value="1">Option1</wave-option>
    <wave-option value="2">Option2</wave-option>
    <wave-option value="3">Option3</wave-option>
</wave-select>
```

## 初始值`defaultvalue`

设置或返回下拉选择器的默认值，如果不设置，则默认选中第一项。

<wave-select defaultvalue="2">
    <wave-option value="1">Option1</wave-option>
    <wave-option value="2">Option2</wave-option>
    <wave-option value="3">Option3</wave-option>
</wave-select>

```html
<wave-select defaultvalue="2">
    <wave-option value="1">Option1</wave-option>
    <wave-option value="2">Option2</wave-option>
    <wave-option value="3">Option3</wave-option>
</wave-select>
```

## 占位`placeholder`

当没有设置初始值`defaultvalue`时，可设置默认提示，默认为`请选择`。

<wave-select placeholder="请选择一项">
    <wave-option value="1">Option1</wave-option>
    <wave-option value="2">Option2</wave-option>
    <wave-option value="3">Option3</wave-option>
</wave-select>

```html
<wave-select placeholder="请选择一项">
    <wave-option value="1">Option1</wave-option>
    <wave-option value="2">Option2</wave-option>
    <wave-option value="3">Option3</wave-option>
</wave-select>
```

## 禁用`disabled`

通过`disabled`可以禁用下拉选择器。

<wave-select disabled>
    <wave-option value="1">Option1</wave-option>
    <wave-option value="2">Option2</wave-option>
    <wave-option value="3">Option3</wave-option>
</wave-select>
<wave-switch checked onchange="this.previousElementSibling.disabled = this.checked;"></wave-switch>

```html
<wave-select disabled>
    <wave-option value="1">Option1</wave-option>
    <wave-option value="2">Option2</wave-option>
    <wave-option value="3">Option3</wave-option>
</wave-select>
```

JavaScript操作`get`、`set`

```js
select.disabled; //获取
select.disabled = false;
select.disabled = true;
//原生属性操作
select.setAttribute('disabled','');
select.removeAttribute('disabled');
```

如果设置在`wave-option`可单独禁用某一项

<wave-select>
    <wave-option value="1">Option1</wave-option>
    <wave-option value="2" disabled>Option2</wave-option>
    <wave-option value="3">Option3</wave-option>
</wave-select>

```html
<wave-select>
    <wave-option value="1">Option1</wave-option>
    <wave-option value="2" disabled>Option2</wave-option>
    <wave-option value="3">Option3</wave-option>
</wave-select>
```

## 值`value`、文本`text`

设置或返回下拉选择器的当前`value`属性值。

返回下拉选择器的`text`。

`value`指定在`wave-option`上，`text`指`wave-option`的`textContent`。

每个`wave-option`必须指定一个不重复的`value`。

该属性值在`wave-select`标签上不可见。

<wave-select>
    <wave-option value="1">Option1</wave-option>
    <wave-option value="2">Option2</wave-option>
    <wave-option value="3">Option3</wave-option>
</wave-select>
<wave-button type="primary" onclick="this.previousElementSibling.value='3'">选中Option3</wave-button>
<wave-button type="primary" onclick="WaveMessage.info('当前选中: '+this.previousElementSibling.previousElementSibling.text)">获取当前选中textContent</wave-button>

JavaScript操作`get`、`set`

```js
select.value; //获取
select.text; //获取textContent(没有set方法)
select.value = 50;
//原生属性操作
select.setAttribute('value',50);
select.getAttribute('value');
```

## 分组`wave-optgroup`

可以通过`wave-optgroup`进行分组，名称为`label`。

<wave-select>
    <wave-optgroup label="group1">
        <wave-option value="1">Option1</wave-option>
        <wave-option value="2">Option2</wave-option>
        <wave-option value="3">Option3</wave-option>
    </wave-optgroup>
    <wave-optgroup label="group2">
        <wave-option value="4">Option4</wave-option>
        <wave-option value="5">Option5</wave-option>
    </wave-optgroup>
    <wave-option value="6">Option6</wave-option>
</wave-select>

```html
<wave-select>
    <wave-optgroup label="group1">
        <wave-option value="1">Option1</wave-option>
        <wave-option value="2">Option2</wave-option>
        <wave-option value="3">Option3</wave-option>
    </wave-optgroup>
    <wave-optgroup label="group2">
        <wave-option value="4">Option4</wave-option>
        <wave-option value="5">Option5</wave-option>
    </wave-optgroup>
    <wave-option value="6">Option6</wave-option>
</wave-select>
```


## 搜索`search`

添加`search`可对选项进行搜索。

过滤的条件是`wave-option`中的`key`属性（不区分大小写）。

<wave-select search>
    <wave-option value="wuhan" key="wuhan-武汉-wh">武汉</wave-option>
    <wave-option value="beijing" key="beijing-北京-bj">北京</wave-option>
    <wave-option value="shnaghai" key="shnaghai-上海-sh">上海</wave-option>
    <wave-option value="shenzhen" key="shenzhen-深圳-sz">深圳</wave-option>
    <wave-option value="chongqing" key="chongqing-重庆-cq">重庆</wave-option>
    <wave-option value="hangzhou" key="hangzhou-杭州-hz">杭州</wave-option>
    <wave-option value="guangzhou" key="guangzhou-广州-gz">广州</wave-option>
    <wave-option value="hongkong" key="hongkong-香港-hk">香港</wave-option>
</wave-select>

```html
<wave-select search>
    <wave-option value="wuhan" key="wuhan-武汉-wh">武汉</wave-option>
    <wave-option value="beijing" key="beijing-北京-bj">北京</wave-option>
    <wave-option value="shnaghai" key="shnaghai-上海-sh">上海</wave-option>
    <wave-option value="shenzhen" key="shenzhen-深圳-sz">深圳</wave-option>
    <wave-option value="chongqing" key="chongqing-重庆-cq">重庆</wave-option>
    <wave-option value="hangzhou" key="hangzhou-杭州-hz">杭州</wave-option>
    <wave-option value="guangzhou" key="guangzhou-广州-gz">广州</wave-option>
    <wave-option value="hongkong" key="hongkong-香港-hk">香港</wave-option>
</wave-select>
```

> 内部通过属性选择器`wave-option:not([key*="${value}" i])`简单实现，设置`search`后，`type`风格失效

## 必填项`required`

表单验证属性，表示必填

<wave-select required>
    <wave-option value="1">Option1</wave-option>
    <wave-option value="2">Option2</wave-option>
    <wave-option value="3">Option3</wave-option>
</wave-select>

<wave-select type="flat" required>
    <wave-option value="1">Option1</wave-option>
    <wave-option value="2">Option2</wave-option>
    <wave-option value="3">Option3</wave-option>
</wave-select>

<wave-select type="primary" required>
    <wave-option value="1">Option1</wave-option>
    <wave-option value="2">Option2</wave-option>
    <wave-option value="3">Option3</wave-option>
</wave-select>

<wave-select type="dashed" required>
    <wave-option value="1">Option1</wave-option>
    <wave-option value="2">Option2</wave-option>
    <wave-option value="3">Option3</wave-option>
</wave-select>

```html
<wave-select required>
    <wave-option value="1">Option1</wave-option>
    <wave-option value="2">Option2</wave-option>
    <wave-option value="3">Option3</wave-option>
</wave-select>
```

> 默认提示信息为`请选择一项`，可通过`errortips`自定义提示。

## 合法性`validity`

可以通过属性`validity`来获取下拉框的合法性。

<wave-select required>
    <wave-option value="1">Option1</wave-option>
    <wave-option value="2">Option2</wave-option>
    <wave-option value="3">Option3</wave-option>
</wave-select>
<wave-button type="primary" onclick="WaveMessage.info('合法性:'+this.previousElementSibling.validity)">合法性</wave-button>

JavaScript操作`get`

```js
select.validity;//获取
```

## 自定义尺寸

默认情况下，`wave-select`尺寸跟随`wave-button`，可以自定义宽高

<style>
.wave-select-custom{
    width:120px;
    height:30px;
}
</style>
<wave-select class="wave-select-custom">
    <wave-option value="1">Option1</wave-option>
    <wave-option value="2">Option2</wave-option>
    <wave-option value="3">Option3</wave-option>
</wave-select>

```html
<style>
.wave-select-custom{
    width:120px;
    height:30px;
}
</style>
<wave-select class="wave-select-custom">
    <wave-option value="1">Option1</wave-option>
    <wave-option value="2">Option2</wave-option>
    <wave-option value="3">Option3</wave-option>
</wave-select>
```

## 事件`event`

### onchange

在下拉选中完成时触发。

<wave-select onchange="WaveMessage.info('当前选中value:'+this.value)">
    <wave-option value="1">Option1</wave-option>
    <wave-option value="2">Option2</wave-option>
    <wave-option value="3">Option3</wave-option>
</wave-select>

```html
<wave-select onchange="WaveMessage.info('当前选中value:'+this.value)">
    <wave-option value="1">Option1</wave-option>
    <wave-option value="2">Option2</wave-option>
    <wave-option value="3">Option3</wave-option>
</wave-select>
```

```js
select.onchange = function(ev){
    //获取value和text的几种方式
    /*
    event:{
        detail:{
            value,
            text,
        }
    }
    */
    console.log(this.value);
    console.log(this.text);
    console.log(ev.target.value);
    console.log(ev.target.text);
    console.log(ev.detail.value);
    console.log(ev.detail.text);
}

select.addEventListener('change',function(ev){
    console.log(this.value);
    console.log(this.text);
    console.log(ev.target.value);
    console.log(ev.target.text);
    console.log(ev.detail.value);
    console.log(ev.detail.text);
})
```

### onfocus

`focus`后的回调事件。

与[`wave-button`](wave-button.md?id=onfocus、onblur)使用方式一致。

## 方法`function`

### focus

用于主动聚焦`focus`，聚焦以后可以响应键盘事件，支持方向键。

<wave-select onfocus="WaveMessage.info('focus')" onblur="WaveMessage.info('blur')" onchange="WaveMessage.info('当前选中value:'+this.value)">
    <wave-option value="1">Option1</wave-option>
    <wave-option value="2">Option2</wave-option>
    <wave-option value="3">Option3</wave-option>
</wave-select>
<wave-button type="primary" onclick="this.previousElementSibling.focus()">主动聚焦</wave-button>

```js
select.focus();
```

### reset

复原选项，回到默认值。

<wave-select defaultvalue="2">
    <wave-option value="1">Option1</wave-option>
    <wave-option value="2">Option2</wave-option>
    <wave-option value="3">Option3</wave-option>
</wave-select>
<wave-button type="primary" onclick="this.previousElementSibling.reset()">reset</wave-button>

```js
select.reset();
```

当然，直接操作也是可行的

```js
this.value = this.defaultvalue;
```

### checkValidity

用于主动校验，弹出提示信息。

<wave-select required>
    <wave-option value="1">Option1</wave-option>
    <wave-option value="2">Option2</wave-option>
    <wave-option value="3">Option3</wave-option>
</wave-select>
<wave-button type="primary" onclick="this.previousElementSibling.checkValidity()">主动校验</wave-button>

```js
select.checkValidity();
```

## 其他

`wave-select`除了包裹`wave-option`以外，还能包裹其他标签，比如`a`链接

<style>
.wave-link{
    display:block;
    padding:0 .8em;
}
</style>
<wave-select>
    <wave-option value="1">Option1</wave-option>
    <wave-option value="2">Option2</wave-option>
    <wave-option value="3">Option3</wave-option>
    <a class="wave-link" href="#">link</a>
</wave-select>

```html
<wave-select>
    <wave-option value="1">Option1</wave-option>
    <wave-option value="2">Option2</wave-option>
    <wave-option value="3">Option3</wave-option>
    <a class="wave-link" href="#">link</a>
</wave-select>
```

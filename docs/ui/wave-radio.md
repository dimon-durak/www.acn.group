# wave-radio

单项选择器。用于替代原生`input[type=radio]`。

## 使用方式

```html
<!-- 引入 -->
<script type="module">
    import './node_modules/wave-ui/components/wave-radio.js';
</script>
<!-- 使用 -->
<wave-radio>radio</wave-radio>
```

## 禁用`disabled`

通过`disabled`可以禁用开关。

<wave-radio disabled>radio</wave-radio>
<wave-switch checked onchange="this.previousElementSibling.disabled = this.checked;"></wave-switch>

```html
<wave-radio disabled>radio</wave-radio>
```

JavaScript操作`get`、`set`

```js
radio.disabled;//获取
radio.disabled = false;
radio.disabled = true;
//原生属性操作
radio.setAttribute('disabled','');
radio.removeAttribute('disabled');
```

## 值`value`

返回`value`。

通常`wave-radio`会有一个`value`属性，类似于`id`，如果不存在则返回文本内容`textContent`。

<wave-radio value="AAA">radio</wave-radio>
<wave-button type="primary" onclick="WaveMessage.info(this.previousElementSibling.value)">获取value</wave-button>

```html
<wave-radio value="AAA">radio</wave-radio>
<wave-button type="primary" onclick="WaveMessage.info(this.previousElementSibling.value)">获取value</wave-button>
```

JavaScript操作`get`

```js
radio.value;//获取
//原生属性操作
radio.getAttribute('value');
```

## 选中`checked`

`checked`属性表示选中，通常不可取消。

<wave-radio>radio</wave-radio>
<wave-button type="primary" onclick="this.previousElementSibling.checked = true;">选中</wave-button>

```html
<wave-radio checked>radio</wave-radio>
```

通常多个出现，有一个相同的`name`，表示同一组，可以通过`name`来获取当前组的选中（通过`dom`获取即可）。

<wave-radio name="lib" checked>React</wave-radio>
<wave-radio name="lib">Vue</wave-radio>
<wave-radio name="lib">Angular</wave-radio>
<wave-radio name="lib">Other</wave-radio>
<wave-button type="primary" onclick="WaveMessage.info(document.querySelector('wave-radio[name=lib][checked]').value)">获取选中状态</wave-button>

```html
<wave-radio name="lib" checked>React</wave-radio>
<wave-radio name="lib">Vue</wave-radio>
<wave-radio name="lib">Angular</wave-radio>
<wave-radio name="lib">Other</wave-radio>
<wave-button type="primary" onclick="WaveMessage.info(document.querySelector('wave-radio[name=lib][checked]').value)">获取选中状态</wave-button>
```

JavaScript操作`get`、`set`

```js
radio.checked;//获取
radio.checked = false;
radio.checked = true;
//原生属性操作
radio.setAttribute('checked','');
radio.removeAttribute('checked');
```

现新增`wave-radio-group`组件，表示同一组，

* `defaultvalue`设置初始选中项
* 设置和获取`disabled`
* 设置和获取`vaule`
* 支持`change`事件

<wave-radio-group name="lan" disabled defaultvalue="Css">
    <wave-radio>Html</wave-radio>
    <wave-radio>Css</wave-radio>
    <wave-radio>Javascript</wave-radio>
    <wave-radio>Php</wave-radio>
    <wave-radio>Dart</wave-radio>
</wave-radio-group>
<wave-switch checked onchange="this.previousElementSibling.disabled = this.checked;"></wave-switch>
<wave-button type="primary" onclick="this.previousElementSibling.previousElementSibling.value='Php'">选中Php</wave-button>

```html
<wave-radio-group name="lan" disabled defaultvalue="Css">
    <wave-radio>Html</wave-radio>
    <wave-radio>Css</wave-radio>
    <wave-radio>Javascript</wave-radio>
    <wave-radio>Php</wave-radio>
    <wave-radio>Dart</wave-radio>
</wave-radio-group>
```

JavaScript操作`get`、`set`

```js
radiogroup.value;//获取
radiogroup.value = 'Css';
//原生属性操作
radiogroup.getAttribute('value');
radiogroup.setAttribute('value','Css');
```

## 必填项`required`

表单验证属性，表示必填，作用于`wave-radio-group`

配合[`checkValidity()`](wave-radio.md?id=checkValidity)方法可以主动校验

## 事件`event`

### onchange

在切换完成时触发。

<wave-radio onchange="WaveMessage.info('当前状态checked:'+this.checked)">radio</wave-radio>

```html
<wave-radio onchange="WaveMessage.info('当前状态checked:'+this.checked)">radio</wave-radio>
```

```js
radio.onchange = function(ev){
    //获取checked的几种方式
    /*
    event:{
        detail:{
            checked,
        }
    }
    */
    console.log(this.checked);
    console.log(ev.target.checked);
    console.log(ev.detail.checked);
}

radio.addEventListener('change',function(ev){
    console.log(this.checked);
    console.log(ev.target.checked);
    console.log(ev.detail.checked);
})
```

`wave-radio-group`支持`change`事件

<wave-radio-group name="lan" defaultvalue="Javascript" onchange="WaveMessage.info(this.value)">
    <wave-radio>Html</wave-radio>
    <wave-radio>Css</wave-radio>
    <wave-radio>Javascript</wave-radio>
    <wave-radio>Php</wave-radio>
    <wave-radio>Dart</wave-radio>
</wave-radio-group>

```js
radiogroup.onchange = function(ev){
    //获取value的几种方式
    /*
    event:{
        detail:{
            value,
        }
    }
    */
    console.log(this.value);
    console.log(ev.target.value);
    console.log(ev.detail.value);
}

radiogroup.addEventListener('change',function(ev){
    console.log(this.value);
    console.log(ev.target.value);
    console.log(ev.detail.value);
})
```

### onfocus、onblur

`focus`、`blur`后的回调事件。

与[`wave-button`](wave-button.md?id=onfocus、onblur)使用方式一致。

## 方法`function`

### focus

用于主动聚焦`focus`，聚焦以后可以响应键盘事件，`Enter`或者`Space`选中。

<wave-radio onchange="WaveMessage.info('当前状态checked:'+this.checked)">radio</wave-radio>
<wave-button type="primary" onfocus="WaveMessage.info('focus')" onclick="this.previousElementSibling.focus()">主动聚焦</wave-button>

```js
radio.focus();
```

### reset

复原选项，回到默认值。

<wave-radio-group name="books" defaultvalue="React">
    <wave-radio>React</wave-radio>
    <wave-radio>Vue</wave-radio>
    <wave-radio>Angular</wave-radio>
    <wave-radio>Flutter</wave-radio>
    <wave-radio>Swift</wave-radio>
</wave-radio-group>
<wave-button type="primary" onclick="this.previousElementSibling.reset()">reset</wave-button>

```js
radiogroup.reset();
```

### checkValidity

用于主动校验，弹出提示信息。

<wave-radio-group required name="lan">
    <wave-radio>Html</wave-radio>
    <wave-radio>Css</wave-radio>
    <wave-radio>Javascript</wave-radio>
    <wave-radio>Php</wave-radio>
    <wave-radio>Dart</wave-radio>
</wave-radio-group>
<wave-button type="primary" onclick="this.previousElementSibling.checkValidity()">主动校验</wave-button>

```js
radiogroup.checkValidity();
```

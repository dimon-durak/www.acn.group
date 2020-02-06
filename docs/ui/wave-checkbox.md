# wave-checkbox

多项选择器。用于替代原生`input[type=checkbox]`。

## 使用方式

```html
<!-- 引入 -->
<script type="module">
    import './node_modules/wave-ui/components/wave-checkbox.js';
</script>
<!-- 使用 -->
<wave-checkbox>checkbox</wave-checkbox>
```

## 禁用`disabled`

通过`disabled`可以禁用开关。

<wave-checkbox disabled>checkbox</wave-checkbox>
<wave-switch checked onchange="this.previousElementSibling.disabled = this.checked;"></wave-switch>

```html
<wave-checkbox disabled>checkbox</wave-checkbox>
```

JavaScript操作

```js
checkbox.disabled;//获取
checkbox.disabled = false;
checkbox.disabled = true;
//原生属性操作
checkbox.setAttribute('disabled','');
checkbox.removeAttribute('disabled');
```

## 值`value`

返回`value`。

通常`wave-checkbox`会有一个`value`属性，类似于`id`，如果不存在则返回文本内容`textContent`。

<wave-checkbox value="AAA">checkbox</wave-checkbox>
<wave-button type="primary" onclick="WaveMessage.info(this.previousElementSibling.value)">获取value</wave-button>

```html
<wave-checkbox value="AAA">checkbox</wave-checkbox>
<wave-button type="primary" onclick="WaveMessage.info(this.previousElementSibling.value)">获取value</wave-button>
```

JavaScript操作

```js
checkbox.value;//获取
//原生属性操作
checkbox.getAttribute('value');
```

## 选中`checked`

`checked`属性表示选中。

<wave-checkbox checked>checkbox</wave-checkbox>
<wave-switch checked onchange="this.previousElementSibling.checked = this.checked;"></wave-switch>

```html
<wave-checkbox checked>checkbox</wave-checkbox>
```

通常多个出现，有一个相同的`name`，表示同一组，可以通过`name`来获取当前组的选中（通过`dom`获取即可）。

<wave-checkbox name="lang" checked>Html</wave-checkbox>
<wave-checkbox name="lang">Css</wave-checkbox>
<wave-checkbox name="lang">Javascript</wave-checkbox>
<wave-checkbox name="lang">Python</wave-checkbox>
<wave-checkbox name="lang">Php</wave-checkbox>
<wave-checkbox name="lang">Dart</wave-checkbox>
<wave-checkbox name="lang">Swift</wave-checkbox>
<wave-button type="primary" onclick="WaveMessage.info(Array.from(document.querySelectorAll('wave-checkbox[name=lang][checked]')).map(el=>el.textContent))">获取选中状态</wave-button>

```html
<wave-checkbox name="lang" checked>Html</wave-checkbox>
<wave-checkbox name="lang">Css</wave-checkbox>
<wave-checkbox name="lang">Javascript</wave-checkbox>
<wave-checkbox name="lang">Python</wave-checkbox>
<wave-checkbox name="lang">Php</wave-checkbox>
<wave-checkbox name="lang">Dart</wave-checkbox>
<wave-checkbox name="lang">Swift</wave-checkbox>
<wave-button type="primary" onclick="WaveMessage.info(Array.from(document.querySelectorAll('wave-checkbox[name=lang][checked]')).map(el=>el.textContent))">获取选中状态</wave-button>
```


JavaScript操作

```js
checkbox.checked;//获取
checkbox.checked = false;
checkbox.checked = true;
//原生属性操作
checkbox.setAttribute('checked','');
checkbox.removeAttribute('checked');
```

现新增`wave-checkbox-group`组件，表示同一组，

* `defaultvalue`设置初始选中项，格式为`defaultvalue="React,Angular"`
* 设置和获取`disabled`
* 设置和获取`vaule`（数组格式）
* 支持`change`事件

<wave-checkbox-group name="books" disabled defaultvalue="React,Angular">
    <wave-checkbox>React</wave-checkbox>
    <wave-checkbox>Vue</wave-checkbox>
    <wave-checkbox>Angular</wave-checkbox>
    <wave-checkbox>Flutter</wave-checkbox>
    <wave-checkbox>Swift</wave-checkbox>
</wave-checkbox-group>
<wave-switch checked onchange="this.previousElementSibling.disabled = this.checked;"></wave-switch>
<wave-button type="primary" onclick="this.previousElementSibling.previousElementSibling.value='[\'Vue\',\'Flutter\']'">选中Vue、Flutter</wave-button>

```html
<wave-checkbox-group name="books" disabled defaultvalue="React,Angular">
    <wave-checkbox>React</wave-checkbox>
    <wave-checkbox>Vue</wave-checkbox>
    <wave-checkbox>Angular</wave-checkbox>
    <wave-checkbox>Flutter</wave-checkbox>
    <wave-checkbox>Swift</wave-checkbox>
</wave-checkbox-group>
```

JavaScript操作`get`、`set`

```js
radiogroup.value;//获取
radiogroup.value = ['React','Vue'];
//原生属性操作
radiogroup.getAttribute('value');
radiogroup.setAttribute('value',['React','Vue']);
```

## 不确定状态`indeterminate`

可以通过`JavaScript`设置`wave-checkbox`的不确定状态

<wave-checkbox>indeterminate</wave-checkbox>
<wave-button type="primary" onclick="this.previousElementSibling.indeterminate='true'">设置indeterminate</wave-button>

JavaScript操作`get`、`set`

```js
checkbox.indeterminate;//获取
checkbox.indeterminate = false;
checkbox.indeterminate = true;
```

## 必填项`required`

表单验证属性，表示必填，可作用于`wave-checkbox`或者`wave-checkbox-group`上

<wave-checkbox required>I agree</wave-checkbox>

```html
<wave-checkbox required>I agree</wave-checkbox>
```

> 常用于同意用户协议等功能，默认提示信息为"如果要继续，请选中此框"，可用`errortips`自定义提示。

如果是在`wave-checkbox-group`上，则表示必须要选一项。

配合[`checkValidity()`](wave-checkbox.md?id=checkValidity)方法可以主动校验

## 最少项`min`、最多项`max`

表单验证属性，表示最少选中和最多选中项目

<wave-checkbox-group name="books" required min="2" max="3" defaultvalue="React,Angular">
    <wave-checkbox>React</wave-checkbox>
    <wave-checkbox>Vue</wave-checkbox>
    <wave-checkbox>Angular</wave-checkbox>
    <wave-checkbox>Flutter</wave-checkbox>
    <wave-checkbox>Swift</wave-checkbox>
</wave-checkbox-group>

```html
<wave-checkbox-group name="books" required min="2" max="3" defaultvalue="React,Angular">
    <wave-checkbox>React</wave-checkbox>
    <wave-checkbox>Vue</wave-checkbox>
    <wave-checkbox>Angular</wave-checkbox>
    <wave-checkbox>Flutter</wave-checkbox>
    <wave-checkbox>Swift</wave-checkbox>
</wave-checkbox-group>
```

## 合法性`validity`

可以通过属性`validity`来获取多选框的合法性。

<wave-checkbox-group name="books" required min="2" max="3">
    <wave-checkbox>React</wave-checkbox>
    <wave-checkbox>Vue</wave-checkbox>
    <wave-checkbox>Angular</wave-checkbox>
    <wave-checkbox>Flutter</wave-checkbox>
    <wave-checkbox>Swift</wave-checkbox>
</wave-checkbox-group>
<wave-button type="primary" onclick="WaveMessage.info('合法性:'+this.previousElementSibling.validity)">合法性</wave-button>

JavaScript操作`get`

```js
checkbox.validity;//获取
```

## 事件`event`

### onchange

在切换完成时触发。

<wave-checkbox onchange="WaveMessage.info('当前状态checked:'+this.checked)">checkbox</wave-checkbox>

```html
<wave-checkbox onchange="WaveMessage.info('当前状态checked:'+this.checked)">checkbox</wave-checkbox>
```

```js
checkbox.onchange = function(ev){
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

checkbox.addEventListener('change',function(ev){
    console.log(this.checked);
    console.log(ev.target.checked);
    console.log(ev.detail.checked);
})
```

`wave-checkbox-group`支持`change`事件

<wave-checkbox-group name="books" required min="2" max="3" defaultvalue="React,Angular" onchange="WaveMessage.info(this.value)">
    <wave-checkbox>React</wave-checkbox>
    <wave-checkbox>Vue</wave-checkbox>
    <wave-checkbox>Angular</wave-checkbox>
    <wave-checkbox>Flutter</wave-checkbox>
    <wave-checkbox>Swift</wave-checkbox>
</wave-checkbox-group>


```js
checkboxgroup.onchange = function(ev){
    //获取value的几种方式
    /*
    event:{
        detail:{
            value,
        }
    }
    */
    console.log(this.value);//["React","Angular"]
    console.log(ev.target.value);
    console.log(ev.detail.value);
}

checkboxgroup.addEventListener('change',function(ev){
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

用于主动聚焦`focus`，聚焦以后可以响应键盘事件，`Enter`或者`Space`切换选中状态。

<wave-checkbox onfocus="WaveMessage.info('focus')" onchange="WaveMessage.info('当前状态checked:'+this.checked)">checkbox</wave-checkbox>
<wave-button type="primary" onclick="this.previousElementSibling.focus()">主动聚焦</wave-button>

```js
checkbox.focus();
```

### reset

复原选项，回到默认值。

<wave-checkbox-group name="books" defaultvalue="React,Angular">
    <wave-checkbox>React</wave-checkbox>
    <wave-checkbox>Vue</wave-checkbox>
    <wave-checkbox>Angular</wave-checkbox>
    <wave-checkbox>Flutter</wave-checkbox>
    <wave-checkbox>Swift</wave-checkbox>
</wave-checkbox-group>
<wave-button type="primary" onclick="this.previousElementSibling.reset()">reset</wave-button>

```js
checkboxgroup.reset();
```

### checkValidity

用于主动校验，弹出提示信息。

<wave-checkbox-group name="books" required min="2" max="3">
    <wave-checkbox>React</wave-checkbox>
    <wave-checkbox>Vue</wave-checkbox>
    <wave-checkbox>Angular</wave-checkbox>
    <wave-checkbox>Flutter</wave-checkbox>
    <wave-checkbox>Swift</wave-checkbox>
</wave-checkbox-group>
<wave-button type="primary" onclick="this.previousElementSibling.checkValidity()">主动校验</wave-button>

```js
checkboxgroup.checkValidity();
```

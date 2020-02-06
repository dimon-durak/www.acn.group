# wave-input

输入框。用于替代原生`input`。

## 使用方式

```html
<!-- 引入 -->
<script type="module">
    import './node_modules/wave-ui/components/wave-input.js';
</script>
<!-- 使用 -->
<wave-input></wave-input>
```

## 初始值`defaultvalue`

设置或返回输入框的默认值。

<wave-input defaultvalue="XboWavean"></wave-input>

```html
<wave-input defaultvalue="XboWavean"></wave-input>
```

## 标签`label`

用来指定输入框的标记。

`label`属性提供了类似于`Metiral Design`的输入体验。

<wave-input label="user"></wave-input>


```html
<wave-input label="user"></wave-input>
```

## 占位`placeholder`

与原生`placeholder`一致。当有`label`属性时无效。

<wave-input placeholder="user"></wave-input>

```html
<wave-input placeholder="user"></wave-input>
```

## 图标`icon`

可以设置一个`icon`来表示标签标识，设置后`label`失效。

<wave-input icon="user"></wave-input>

```html
<wave-input icon="user"></wave-input>
```

## 禁用`disabled`

通过`disabled`可以禁用输入框，禁用后该按钮上的事件失效。

<wave-input label="user" disabled></wave-input>
<wave-switch checked onchange="this.previousElementSibling.disabled = this.checked;"></wave-switch>

```html
<wave-input label="user" disabled></wave-input>
```

JavaScript操作`get`、`set`

```js
input.disabled;//获取
input.disabled = false;
input.disabled = true;
//原生属性操作
input.getAttribute('disabled');
input.setAttribute('disabled','');
input.removeAttribute('disabled');
```

## 只读`readonly`

通过`readonly`让输入框只读。

<wave-input label="user" readonly defaultvalue="XboWavean"></wave-input>
<wave-switch checked onchange="this.previousElementSibling.readonly = this.checked;"></wave-switch>

```html
<wave-input label="user" readonly defaultvalue="XboWavean"></wave-input>
```

JavaScript操作`get`、`set`

```js
input.readonly;//获取
input.readonly = false;
input.readonly = true;
//原生属性操作
input.getAttribute('readonly');
input.setAttribute('readonly','');
input.removeAttribute('readonly');
```

## 块状`block`

`block`属性将使按钮适合其父宽度。

<wave-input label="user" block></wave-input>

```html
<wave-input label="user" block></wave-input>
```

## 值`value`

设置或返回输入框的`value`属性值。
该属性值在`wave-input`标签上不可见。

<wave-input></wave-input>
<wave-button type="primary" onclick="this.previousElementSibling.value='XboWavean'">设置value为XboWavean</wave-button>
<wave-button type="primary" onclick="WaveMessage.info('当前value: '+this.previousElementSibling.previousElementSibling.value)">显示当前value</wave-button>

JavaScript操作`get`、`set`

```js
input.value; //获取
input.value = 'name';
//原生属性操作
input.getAttribute('value');
input.setAttribute('value','name');
```

## 类型`type`

目前支持`password`、`search`、`number`这几种类型，设置后会出现额外的`ui`控件。

### type=password

支持密码明文和密文切换。

<wave-input icon="lock" type="password"></wave-input>

```html
<wave-input icon="lock" type="password"></wave-input>
```

### type=search

右侧出现`search`图标，点击会执行`onsubmit`事件

<wave-input type="search" onsubmit="WaveMessage.info(this.value)"></wave-input>

```html
<wave-input type="search" onsubmit="WaveMessage.info(this.value)"></wave-input>
```

### type=number

数字输入框，类似于原生`input[type=number]`，支持`min`、`max`、`step`属性，支持键盘上下键切换数字。

<wave-input icon="creditcard" type="number" min="-10" max="10" step="0.5" ></wave-input>

```html
<wave-input icon="creditcard" type="number" min="-10" max="10" step="0.5" ></wave-input>
```

## 验证`checkValidity`

支持正则校验，如果不满足要求，则会出现错误提示。

### 1.内置的表单验证

#### 必填项`required`

<wave-input icon="user" required placeholder="required"></wave-input>

```html
<wave-input icon="user" required placeholder="required"></wave-input>
```

#### 最小长度`minlength`、最大长度`minlength`

<wave-input icon="user" placeholder="user" minlength="6" maxlength="10"></wave-input>

```html
<wave-input icon="user" placeholder="user" minlength="6" maxlength="10"></wave-input>
```

#### 邮箱email

设置`type='email'`可以对邮箱格式进行校验。

<wave-input icon="mail" type="email" placeholder="email"></wave-input>

```html
<wave-input icon="mail" type="email" placeholder="email"></wave-input>
```

这是原生支持的类型，如果不满足可以采用下面更为通用的正则校验。

### 2.正则pattern

设置`pattern`属性，这是一个正则。

<wave-input icon="phone" pattern="^1(3|4|5|6|7|8|9)\d{9}$" placeholder="请输入手机号"></wave-input>

```html
<wave-input icon="phone" pattern="^1(3|4|5|6|7|8|9)\d{9}$" placeholder="请输入手机号"></wave-input>
```

默认提示信息可能不人性化，可以自定义提示信息`errortips`

<wave-input icon="phone" pattern="^1(3|4|5|6|7|8|9)\d{9}$" placeholder="请输入手机号" errortips="手机号格式有误"></wave-input>

```html
<wave-input icon="phone" pattern="^1(3|4|5|6|7|8|9)\d{9}$" placeholder="请输入手机号" errortips="手机号格式有误"></wave-input>
```

可以设置提示信息的位置，默认为`top`，参考[`wave-tips`](wave-tips.md)。

<wave-input icon="mail" type="email" placeholder="email" errordir="right"></wave-input>

```html
<wave-input icon="mail" type="email" placeholder="email" errordir="right"></wave-input>
```

### 3.自定义验证

上面的校验均针对输入格式，如果需要对值进行校验，可使用`customValidity`，比如校验重复密码

<wave-form-item labelwidth="100" legend="password">
    <wave-input name="password" id="pwd" required type="password" placeholder="password" minlength="6"></wave-input>
</wave-form-item>
<wave-form-item labelwidth="100" legend="password again">
    <wave-input name="password_confirm" id="pwdAgain" required type="password" placeholder="password confirm"></wave-input>
</wave-form-item>

```html
<wave-form-item labelwidth="100" legend="password">
    <wave-input name="password" id="pwd" required type="password" placeholder="password" minlength="6"></wave-input>
</wave-form-item>
<wave-form-item labelwidth="100" legend="password again">
    <wave-input name="password_confirm" id="pwdAgain" required type="password" placeholder="password confirm"></wave-input>
</wave-form-item>
```

自定义格式如下

```js
pwdAgain.customValidity = {
    method:(el)=>{
        return el.value == pwd.value;//校验规则
    },
    tips:'前后密码不一致'//错误提示
}
```

### 4.忽略验证`novalidate`

如果使用该属性，则输入时不进行验证。

<wave-input icon="user" novalidate placeholder="user" minlength="6" maxlength="10"></wave-input>

```html
<wave-input icon="user" novalidate placeholder="user" minlength="6" maxlength="10"></wave-input>
```

## 合法性`validity`

可以通过属性`validity`来获取输入框内容的合法性。

<wave-input required placeholder="required"></wave-input>
<wave-button type="primary" onclick="WaveMessage.info('合法性:'+this.previousElementSibling.validity)">合法性</wave-button>

JavaScript操作`get`

```js
input.validity;//获取
```

## 事件`event`

该组件暴露了常见的回调事件。

### onchange

当输入框文本改变的时候触发（失焦后）。

<wave-input onchange="WaveMessage.info(this.value)"></wave-input>

```html
<wave-input onchange="fn(event)"></wave-input>
```

```js
input.onchange = function(ev){
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

input.addEventListener('change',function(ev){
    console.log(this.value);
    console.log(ev.target.value);
    console.log(ev.detail.value);
})
```

### oninput

当输入框在输入时触发。

<wave-input oninput="WaveMessage.info(this.value)"></wave-input>

```html
<wave-input oninput="fn(event)"></wave-input>
```

```js
input.oninput = function(ev){
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

input.addEventListener('input',function(ev){
    console.log(this.value);
    console.log(ev.target.value);
    console.log(ev.detail.value);
})
```

通常，配合`debounce`可以设置防抖，比如`debounce="300"`表示在`300ms`内无操作才会触发。

<wave-input debounce="300" oninput="WaveMessage.info(this.value)"></wave-input>

```html
<wave-input debounce="300" oninput="fn(event)"></wave-input>
```

### onsubmit

当聚焦时，按回车键`Enter`触发。

<wave-input onsubmit="WaveMessage.info(this.value)" placeholder="Press Enter"></wave-input>

```html
<wave-input onsubmit="fn(event)"></wave-input>
```

```js
input.onsubmit = function(ev){
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

input.addEventListener('submit',function(ev){
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

用于主动聚焦`focus`。

<wave-input onfocus="WaveMessage.info('focus')"></wave-input>
<wave-button type="primary" onclick="this.previousElementSibling.focus()">主动聚焦</wave-button>

```js
input.focus();
```

### checkValidity

用于主动校验，弹出提示信息。

<wave-input required placeholder="required"></wave-input>
<wave-button type="primary" onclick="this.previousElementSibling.checkValidity()">主动校验</wave-button>

```js
input.checkValidity();
```

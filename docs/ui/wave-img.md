# wave-img

图片。用于替代原生`img`。

## 使用方式

```html
<!-- 引入 -->
<script type="module">
    import './node_modules/wave-ui/components/wave-img.js';
</script>
<!-- 使用 -->
<wave-img src="img.jpg"></wave-img>
```

用法与原生`img`基本一致。

## 链接`src`

图片链接。可以是绝对路径，也可以是相对路径。

<wave-img src="https://images.pexels.com/photos/841228/pexels-photo-841228.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></wave-img>

```html
<wave-img src="https://images.pexels.com/photos/841228/pexels-photo-841228.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></wave-img>
```

JavaScript操作`get`、`set`

```js
img.src;
img.src = 'img.jpg';
//原生属性操作
img.getAttribute('src');
img.setAttribute('src','img.jpg');
```

当图片链接加载失败时，会默认显示一个占位符。

<wave-img src="https://images.xxx.jpg"></wave-img>

```html
<wave-img src="https://images.xxx.jpg"></wave-img>
```

可以设置`background`、`font-size`和`color`来定制占位符。

<style>
.img-placeholder{
    background:#333;
    color:#f1f1f1;
    font-size:16px;
}
</style>
<wave-img src="https://images.xxx.jpg" class="img-placeholder"></wave-img>

```html
<style>
.img-placeholder{
    background:#333;
    color:#f1f1f1;
    font-size:16px;
}
</style>
<wave-img src="https://images.xxx.jpg" class="img-placeholder"></wave-img>
```

## 默认链接`defaultsrc`

默认链接。如果不能保证`src`一定能加载成功（一般是外部链接），可以设置一个`defaultsrc`来处理当`src`加载失败时的情况。

<wave-img src="https://images.xxx.jpg" defaultsrc="https://images.pexels.com/photos/374918/pexels-photo-374918.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></wave-img>

```html
<wave-img src="https://images.xxx.jpg" defaultsrc="https://images.pexels.com/photos/374918/pexels-photo-374918.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></wave-img>
```

当`defaultsrc`仍加载失败时（当然这种情况很少见，而且可控），会默认显示一个占位符。

<wave-img src="https://images.xxx.jpg" defaultsrc="https://images.xxx.jpg"></wave-img>

```html
<wave-img src="https://images.xxx.jpg" defaultsrc="https://images.xxx.jpg"></wave-img>
```

## 描述`alt`

可以设置一个描述，加载成功时会显示在左下方，加载失败时会显示在占位符上。

<wave-img src="https://images.pexels.com/photos/841228/pexels-photo-841228.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="image-keyboard"></wave-img>

<wave-img src="https://images.xxx.jpg" alt="image-keyboard"></wave-img>

```html
<wave-img src="https://images.pexels.com/photos/841228/pexels-photo-841228.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="image-keyboard"></wave-img>
<wave-img src="https://images.xxx.jpg" alt="image-keyboard"></wave-img>
```

## 比例`ratio`

可以设置一个比例来约束图片的尺寸（以宽度为基准）。

格式为`w/h`，如`16/9`。

<wave-radio name="img-ratio" value="16/9" checked onchange="document.getElementById('img-ratio').ratio = this.value">16/9</wave-radio>
<wave-radio name="img-ratio" value="3/2" onchange="document.getElementById('img-ratio').ratio = this.value">3/2</wave-radio>
<wave-radio name="img-ratio" value="1/1" onchange="document.getElementById('img-ratio').ratio = this.value">1/1</wave-radio>

<wave-img ratio="16/9" id="img-ratio" src="https://images.pexels.com/photos/841228/pexels-photo-841228.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></wave-img>

```html
<wave-img ratio="16/9" src="https://images.pexels.com/photos/841228/pexels-photo-841228.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></wave-img>
```

JavaScript操作`get`、`set`

```js
img.ratio;
img.ratio = '16/9';
//原生属性操作
img.getAttribute('ratio');
img.setAttribute('ratio','16/9');
```

## 自适应`fit`

设置自适应方式，同原生`object-fit`，可取值`cover`（默认）、`fill`、`contain`。

<wave-radio name="img-fit" value="cover" checked onchange="document.getElementById('img-fit').fit = this.value">cover</wave-radio>
<wave-radio name="img-fit" value="fill" onchange="document.getElementById('img-fit').fit = this.value">fill</wave-radio>
<wave-radio name="img-fit" value="contain" onchange="document.getElementById('img-fit').fit = this.value">contain</wave-radio>

<wave-img fit="cover" id="img-fit" src="https://images.pexels.com/photos/1274640/pexels-photo-1274640.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"></wave-img>

```html
<wave-img fit="cover" src="https://images.pexels.com/photos/1274640/pexels-photo-1274640.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"></wave-img>
```

JavaScript操作`get`、`set`

```js
img.fit;
img.fit = 'contain';
//原生属性操作
img.getAttribute('fit');
img.setAttribute('fit','contain');
```

## 懒加载`lazy`

可以设置`lazy`让图片在可见范围时才加载，在此之前不会发送网络请求，提升用户体验。

<wave-img lazy src="https://images.pexels.com/photos/1440387/pexels-photo-1440387.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></wave-img>
<wave-img lazy alt="image-keyboard" src="https://images.pexels.com/xxx.jpg" defaultsrc="https://images.pexels.com/photos/374918/pexels-photo-374918.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></wave-img>
<wave-img lazy src="https://images.pexels.com/xxx.jpg" defaultsrc="https://images.pexels.com/xxxx.jpg"></wave-img>

```html
<wave-img lazy src="https://images.pexels.com/photos/841228/pexels-photo-841228.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=650&w=940"></wave-img>
```

## 画廊`gallery`

可以设置`gallery`属性，得到一个画廊效果，此时鼠标`hover`会出现<wave-icon style="vertical-align: middle;" class="view" color="var(--themeColor)" size="18" name='View'></wave-icon>标识，点击放大展示原图大小，支持键盘操作（左右键切换、`Esc`和`Backspace`退出）。

加载失败的图片不会计入。

<wave-img gallery src="https://images.pexels.com/photos/841228/pexels-photo-841228.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=650&w=940"></wave-img>
<wave-img gallery src="https://images.pexels.com/photos/698808/pexels-photo-698808.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></wave-img>
<wave-img gallery src="https://images.pexels.com/photos/1440387/pexels-photo-1440387.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></wave-img>
<wave-img gallery alt="image-keyboard" src="https://images.pexels.com/xxx.jpg" ></wave-img>

```html
<wave-img gallery src="https://images.pexels.com/photos/841228/pexels-photo-841228.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=650&w=940"></wave-img>
<wave-img gallery src="https://images.pexels.com/photos/698808/pexels-photo-698808.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></wave-img>
<wave-img gallery src="https://images.pexels.com/photos/1440387/pexels-photo-1440387.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></wave-img>
<wave-img gallery alt="image-keyboard" src="https://images.pexels.com/xxx.jpg" ></wave-img>
```

可以根据`gallery`属性值自动分类成不同组别。

`gallery="A"`

<wave-img gallery="A" src="https://images.pexels.com/photos/841228/pexels-photo-841228.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=650&w=940"></wave-img>
<wave-img gallery="A" src="https://images.pexels.com/photos/698808/pexels-photo-698808.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></wave-img>

`gallery="B"`

<wave-img gallery="B" src="https://images.pexels.com/photos/1440387/pexels-photo-1440387.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></wave-img>
<wave-img gallery="B" alt="image-keyboard" src="https://images.pexels.com/photos/1274640/pexels-photo-1274640.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"></wave-img>

```html
<wave-img gallery="A" src="https://images.pexels.com/photos/1440387/pexels-photo-1440387.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></wave-img>
<wave-img gallery="B" alt="image-keyboard" src="https://images.pexels.com/photos/1274640/pexels-photo-1274640.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"></wave-img>
```

## 事件`event`

### onfocus、onblur

仅适用于`gallery`存在的情况。 

`focus`、`blur`后的回调事件。

与[`wave-button`](wave-button.md?id=onfocus、onblur)使用方式一致。

## 方法`function`

### focus

仅适用于`gallery`存在的情况。 

用于主动聚焦`focus`，聚焦以后可以响应键盘事件，按`Enter`打开画廊。

<wave-img gallery="C"  onfocus="WaveMessage.info('focus')" onblur="WaveMessage.info('blur')" src="https://images.pexels.com/photos/698808/pexels-photo-698808.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></wave-img>
<wave-button type="primary" onclick="this.previousElementSibling.focus()">主动聚焦</wave-button>

```js
img.focus();
```

# wave-date-picker

日期选择器。

## 使用方式

```html
<!-- 引入 -->
<script type="module">
    import './node_modules/wave-ui/components/wave-date-picker.js';
</script>
<!-- 使用 -->
<wave-date-picker></wave-date-picker>
```

## 默认值`defaultvalue`

可以给日期选择器指定一个初始日期`defaultvalue`，取值为合法的时间戳字符串`DataString`，默认为当前日期。

支持形如以下的字符串，可参考[Date.parse()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/parse)

```js
"2019-2-28"
"2019-02-28"
"2019/2/28"
"2019,2,28"
"2019 2 28"
"Feb 28 2019"
//...其他日期格式
//以上均表示2019年2月28日。
```

<wave-date-picker defaultvalue="2019-2-28"></wave-date-picker>

```html
<wave-date-picker defaultvalue="2019-2-28"></wave-date-picker>
```

## 类型`type`

支持设置日期选择类型，可选择`date`（默认）、`month`、`year`，分别实现日期选择器、月选择器、年选择器。

<wave-date-picker></wave-date-picker>
<wave-date-picker type="month"></wave-date-picker>
<wave-date-picker type="year"></wave-date-picker>

```html
<wave-date-picker></wave-date-picker>
<wave-date-picker type="month"></wave-date-picker>
<wave-date-picker type="year"></wave-date-picker>
```

## 值`value`、日期`date`

设置或返回日期选择器的`value`属性值。值为当前类型下的日期，格式形如`2019-10-10`。

返回日期的标准格式`date`，可以将值转换成任意格式的日期。。

```js
//value
"2019-08-31"
//date
"Sat Aug 31 2019 14:54:05 GMT+0800 (中国标准时间)"
```

该属性值在`wave-date-picker`标签上不可见。

<wave-date-picker id="date-picker-value"></wave-date-picker>

<wave-button type="primary" onclick="document.getElementById('date-picker-value').value='2019-10-10'">设置日期为2019-10-10</wave-button>
<wave-button type="primary" onclick="WaveMessage.info('当前日期: '+document.getElementById('date-picker-value').value)">显示当前日期</wave-button>

JavaScript操作`get`、`set`

```js
date.value; //获取
date.date; //获取
date.value = '2019-10-10';
//原生属性操作
date.getAttribute('value');
date.getAttribute('date');
date.setAttribute('value','2019-10-10');
```

## 最小值`min`、最大值`max`

设置日期选择范围，超出范围之外的不可选中，格式同`defaultvalue`。

<wave-date-picker min="2019-8-20" max="2019-12-21"></wave-date-picker>
<wave-date-picker type="month" min="2019-5" max="2019-12"></wave-date-picker>
<wave-date-picker type="year" min="2018" max="2050"></wave-date-picker>

```html
<wave-date-picker min="2019-8-20" max="2019-12-21"></wave-date-picker>
<wave-date-picker type="month" min="2019-5" max="2019-12"></wave-date-picker>
<wave-date-picker type="year" min="2018" max="2050"></wave-date-picker>
```

## 禁用`disabled`

通过`disabled`可以禁用，禁用后无法打开日期选择器。

<wave-date-picker disabled></wave-date-picker>
<wave-switch checked onchange="this.previousElementSibling.disabled = this.checked;"></wave-switch>

```html
<wave-date-picker disabled></wave-date-picker>
```

JavaScript操作`get`、`set`

```js
date.disabled;//获取
date.disabled = false;
date.disabled = true;
//原生属性操作
date.getAttribute('disabled');
date.setAttribute('disabled','');
date.removeAttribute('disabled');
```

## 方向`dir`

通过`dir`可以设置日期选择器方向，默认为`bottomleft`，可以取值`top`、`right`、`bottom`、`left`、`topleft`、`topright`、`righttop`、`rightbottom`、`bottomleft`、`bottomright`、`lefttop`、`leftbottom`。同[`wave-popover`](wave-popover.md)。

<wave-date-picker dir="righttop"></wave-date-picker>

```html
<wave-date-picker dir="righttop"></wave-date-picker>
```

JavaScript操作`get`、`set`

```js
date.dir;
date.dir = 'right';
//原生属性操作
date.getAttribute('dir');
date.setAttribute('dir','right');
```

## 范围选择`range`

添加`range`属性可以实现日期范围选择。

<wave-date-picker range></wave-date-picker>

```html
<wave-date-picker range></wave-date-picker>
```

可以指定一个默认范围`defaultvalue`，格式形如`2019-10-10~2019-12-31`，用`~`链接。默认为当前日期。

<wave-date-picker range defaultvalue="2019-10-10~2019-12-31"></wave-date-picker>

```html
<wave-date-picker range defaultvalue="2019-10-10~2019-12-31"></wave-date-picker>
```

范围选择模式下的`value`和`date`均为数组

```js
//value
["2019-05-15", "2019-12-26"]
//date
["Wed May 15 2019 08:00:00 GMT+0800 (中国标准时间)", "Thu Dec 26 2019 08:00:00 GMT+0800 (中国标准时间)"]
```

其他属性均可叠加，比如`type`

<wave-date-picker range></wave-date-picker>
<wave-date-picker range type="month"></wave-date-picker>
<wave-date-picker range type="year" dir="bottom"></wave-date-picker>

```html
<wave-date-picker range></wave-date-picker>
<wave-date-picker range type="month"></wave-date-picker>
<wave-date-picker range type="year" dir="bottom"></wave-date-picker>
```

## 自定义尺寸

默认情况下，`wave-date-picker`尺寸跟随`wave-button`，可以自定义宽高，同[`wave-select`](wave-select.md)

<style>
.date-custom{
    width:150px;
    height:40px;
}
</style>
<wave-date-picker class="date-custom"></wave-date-picker>

```html
<style>
.date-custom{
    width:100px;
    height:30px;
}
</style>
<wave-date-picker class="date-custom"></wave-date-picker>
```

也可以通过设置`font-size`来改变尺寸

<style>
.date-custom2{
    font-size:20px;
}
</style>
<wave-date-picker class="date-custom2"></wave-date-picker>

```html
<style>
.date-custom2{
    font-size:20px;
}
</style>
<wave-date-picker class="date-custom2"></wave-date-picker>
```

## 事件`event`

该组件暴露了常见的回调事件

### onchange

当选好日期后，按确定按钮可以触发`change`回调。

<wave-date-picker onchange="WaveMessage.info('当前选择日期: '+this.value)"></wave-date-picker>

```html
<wave-date-picker onchange="WaveMessage.info('当前选择日期: '+this.value)"></wave-date-picker>
```

其他触发方式

```js
date.onchange = function(ev){
    //获取value的几种方式
    /*
    event:{
        detail:{
            value,
            date
        }
    }
    */
    console.log(this.value);
    console.log(this.date);
    console.log(ev.target.value);
    console.log(ev.detail.value);
    console.log(ev.detail.date);
}

date.addEventListener('change',function(ev){
    console.log(this.value);
    console.log(this.date);
    console.log(ev.target.value);
    console.log(ev.detail.value);
    console.log(ev.detail.date);
})
```

## 其他

`wave-date-picker`内部基于`wave-popover`和`wave-date-pane`实现。

```html
<wave-popover >
    <wave-button class="date-btn"></wave-button>
    <wave-popcon>
        <wave-date-pane id="color-pane"></wave-date-pane>
        <div class="pop-footer">
            <wave-button id="btn-cancel">取消</wave-button>
            <wave-button type="primary" id="btn-submit">确认</wave-button>
        </div>
    </wave-popcon>
</wave-popover>
```

其中，`wave-date-pane`为日期选择面板，可独立使用。

<wave-date-pane></wave-date-pane>

```html
<wave-date-pane></wave-date-pane>
```

事件和属性与`wave-date-picker`一致。

```js
datePane.value = '2019-10-10';
datePane.onchange = function(ev){
    console.log(this.value);
    console.log(this.date);
    console.log(ev.target.value);
    console.log(ev.detail.value);
    console.log(ev.detail.date);
}
datePane.addEventListener('change',function(ev){
    console.log(this.value);
    console.log(this.date);
    console.log(ev.target.value);
    console.log(ev.detail.value);
    console.log(ev.detail.date);
})
```

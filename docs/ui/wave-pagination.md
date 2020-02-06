# wave-pagination

分页。

## 使用方式

```html
<!-- 引入 -->
<script type="module">
    import './node_modules/wave-ui/components/wave-pagination.js';
</script>
<!-- 使用 -->
<wave-pagination pagesize="3" total="50"></wave-pagination>
```

支持键盘左右键向前一页和向后一页。

## 数据总数`total`、每页条数`pagesize`

设置或返回分页组件的数据总数和每页条数。

<wave-pagination pagesize="3" total="50"></wave-pagination>
<wave-button type="primary" onclick="this.previousElementSibling.pagesize=5">设置pagesize为5</wave-button>

```html
<wave-pagination pagesize="3" total="50">
```

JavaScript操作`get`、`set`

```js
pagination.pagesize; //获取
pagination.pagesize = 5;
pagination.total;
pagination.total = 100;
//原生属性操作
pagination.getAttribute('pagesize');
pagination.getAttribute('total');
pagination.setAttribute('pagesize',5);
pagination.setAttribute('total',100);
```

当页数较少时（不超过`10`页），则完整显示

<wave-pagination pagesize="3" total="20"></wave-pagination>

```html
<wave-pagination pagesize="3" total="20"></wave-pagination>
```

## 默认值`defaultcurrent`

可以给分页指定一个初始值`defaultcurrent`，默认为`1`。

<wave-pagination defaultcurrent="7" pagesize="3" total="50"></wave-pagination>

```html
<wave-pagination defaultcurrent="7" pagesize="3" total="50"></wave-pagination>
```

## 当前页`current`

设置或返回分页组件的当前页。

该属性值在`wave-pagination`标签上不可见。

<wave-pagination pagesize="3" total="50"></wave-pagination>
<wave-button type="primary" onclick="this.previousElementSibling.current=10">跳转到第10页</wave-button>
<wave-button type="primary" onclick="WaveMessage.info('当前value: '+this.previousElementSibling.previousElementSibling.current)">显示当前页数</wave-button>

JavaScript操作`get`、`set`

```js
pagination.current; //获取
pagination.current = 2;
//原生属性操作
pagination.getAttribute('current');
pagination.setAttribute('current',2);
```

> 如果设置的值超过最大页数，会取最大页数，比如上述最大页数是`17`，设置`pagination.current=100`，则实际会设置为`17`

## 简约模式`simple`

可以添加`simple`属性，只展示当前页和总页数。

<wave-pagination simple pagesize="3" total="50"></wave-pagination>

```html
<wave-pagination simple pagesize="3" total="50"></wave-pagination>
```

## 自定义尺寸

内部采用`em`相对尺寸，可通过`font-size`来控制大小。

<style>
.pagination-custom{
    font-size:20px;
}
</style>
<wave-pagination class="pagination-custom" pagesize="3" total="50"></wave-pagination>

```html
<style>
.pagination-custom{
    font-size:20px;
}
</style>
<wave-pagination class="pagination-custom" pagesize="3" total="50"></wave-pagination>
```

## 事件`event`

该组件暴露了常见的回调事件

### onchange

页码改变的回调。

<wave-pagination  onchange="WaveMessage.info('当前页: '+this.current)" pagesize="3" total="50"></wave-pagination>

```html
<wave-pagination  onchange="WaveMessage.info('当前页: '+this.current)" pagesize="3" total="50"></wave-pagination>
```

其他触发方式

```js
pagination.onchange = function(ev){
    //获取参数的几种方式
    /*
    event:{
        detail:{
            current,
            pagesize,
            total,
        }
    }
    */
    console.log(this.current);
    console.log(ev.target.current);
    console.log(ev.detail.current);
}

pagination.addEventListener('change',function(ev){
    console.log(this.current);
    console.log(ev.target.current);
    console.log(ev.detail.current);
})
```

## 实例

一个常见的完整分页组件，配合`wave-select`和`wave-input`实现。

<style>
.pagination-demo{
    display: flex;
    white-space: nowrap;
    align-items: center;
}
.pagination-demo>*{
    margin-bottom:0;
}
.pagination-demo>span{
    margin-right:10px;
}
.pagination-demo wave-input{
    width:50px;
}
</style>

<div class="pagination-demo">
    <wave-pagination id="pagination-demo" onchange="WaveMessage.info('当前页: '+this.current)" pagesize="10" total="200"></wave-pagination>
    <wave-select defaultvalue="10" onchange="this.previousElementSibling.pagesize=this.value">
        <wave-option value="10">每页10条</wave-option>
        <wave-option value="15">每页15条</wave-option>
        <wave-option value="20">每页20条</wave-option>
    </wave-select>
    <span>跳转</span><wave-input type="number" defaultvalue="1" min="1" onchange="document.getElementById('pagination-demo').current = this.value"></wave-input><span>页</span>
</div>

```html
<style>
.pagination-demo{
    display: flex;
    white-space: nowrap;
    align-items: center;
}
.pagination-demo>*{
    margin-bottom:0;
}
.pagination-demo>span{
    margin-right:10px;
}
.pagination-demo wave-input{
    width:50px;
}
</style>
<div class="pagination-demo">
    <wave-pagination id="pagination-demo" onchange="WaveMessage.info('当前页: '+this.current)" pagesize="10" total="200"></wave-pagination>
    <wave-select defaultvalue="10" onchange="document.getElementById('pagination-demo').pagesize=this.value">
        <wave-option value="10">每页10条</wave-option>
        <wave-option value="15">每页15条</wave-option>
        <wave-option value="20">每页20条</wave-option>
    </wave-select>
    <span>跳转</span><wave-input type="number" defaultvalue="1" min="1" onchange="document.getElementById('pagination-demo').current = this.value"></wave-input><span>页</span>
</div>
```

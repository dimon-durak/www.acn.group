# wave-table

表格，基于`grid`的简单实现，可简单代替`table`。

## 使用方式

```html
<!-- 引入 -->
<script type="module">
    import './node_modules/wave-ui/components/wave-table.js';
</script>
<!-- 使用 -->
<wave-table thead="Name,Age,Address">
    <wave-tr>
        <wave-td>John Brown</wave-td>
        <wave-td>32</wave-td>
        <wave-td>New York No. 1 Lake Park</wave-td>
    </wave-tr>
    <wave-tr>
        <wave-td>Jim Green</wave-td>
        <wave-td>42</wave-td>
        <wave-td>London No. 1 Lake Park</wave-td>
    </wave-tr>
</wave-table>
```

内部仅仅根据`grid`布局实现，如果不满足需求或者差异太大，也可以直接使用`table`标签。

## 表头`thead`

`thead`用来规定表头的数据，格式形如`Name,Age,Address`

`<wave-tr></wave-tr>`、`<wave-td></wave-td>`分别对应原生`<tr></tr>`、`<td></td>`，结构用法如下

<wave-table thead="Name,Age,Address">
    <wave-tr>
        <wave-td>John Brown</wave-td>
        <wave-td>32</wave-td>
        <wave-td>New York No. 1 Lake Park</wave-td>
    </wave-tr>
    <wave-tr>
        <wave-td>Jim Green</wave-td>
        <wave-td>42</wave-td>
        <wave-td>London No. 1 Lake Park</wave-td>
    </wave-tr>
</wave-table>

```html
<wave-table thead="Name,Age,Address">
    <wave-tr>
        <wave-td>Jim Green</wave-td>
        <wave-td>42</wave-td>
        <wave-td>London No. 1 Lake Park</wave-td>
    </wave-tr>
    <wave-tr>
        <wave-td>Jim Green</wave-td>
        <wave-td>42</wave-td>
        <wave-td>London No. 1 Lake Park</wave-td>
    </wave-tr>
</wave-table>
```

## 表格分配`grid-template-columns`

默认情况下，表格是均等分配。这里采用了`grid`布局，可实现通过`css`来控制表格分配，默认均等分配如下

```css
wave-table{
    grid-template-columns: repeat(3,1fr); /* 1fr 1fr 1fr */
}
```

如需改成跟随内容自适应，可进行如下修改

<wave-table thead="Name,Age,Address" style="grid-template-columns: auto 1fr 1fr;">
    <wave-tr>
        <wave-td>John Brown</wave-td>
        <wave-td>32</wave-td>
        <wave-td>New York No. 1 Lake Park</wave-td>
    </wave-tr>
    <wave-tr>
        <wave-td>Jim Green</wave-td>
        <wave-td>42</wave-td>
        <wave-td>London No. 1 Lake Park</wave-td>
    </wave-tr>
    <wave-tr>
        <wave-td>Jim Green</wave-td>
        <wave-td>42</wave-td>
        <wave-td>London No. 1 Lake Park</wave-td>
    </wave-tr>
    <wave-tr>
        <wave-td>Jim Green</wave-td>
        <wave-td>42</wave-td>
        <wave-td>London No. 1 Lake Park</wave-td>
    </wave-tr>
</wave-table>

```css
wave-table{
    grid-template-columns: auto 1fr 1fr; 
    /* 第一列自适应，剩余两项均等分配 */
}
```

也可改为具体数值，如下

<wave-table thead="Name,Age,Address" style="grid-template-columns: 100px auto 1fr;">
    <wave-tr>
        <wave-td>John Brown</wave-td>
        <wave-td>32</wave-td>
        <wave-td>New York No. 1 Lake Park</wave-td>
    </wave-tr>
    <wave-tr>
        <wave-td>Jim Green</wave-td>
        <wave-td>42</wave-td>
        <wave-td>London No. 1 Lake Park</wave-td>
    </wave-tr>
    <wave-tr>
        <wave-td>Jim Green</wave-td>
        <wave-td>42</wave-td>
        <wave-td>London No. 1 Lake Park</wave-td>
    </wave-tr>
    <wave-tr>
        <wave-td>Jim Green</wave-td>
        <wave-td>42</wave-td>
        <wave-td>London No. 1 Lake Park</wave-td>
    </wave-tr>
</wave-table>

```css
wave-table{
    grid-template-columns: 100px auto 1fr;
     /* 第一列100px，第二列自适应，剩余两项均等分配 */
}
```

> 以上所有规则均为`grid`布局规范

## 加载中`loading`

可以给表格设置`loading`属性，表示加载中，一般用于数据渲染

<wave-table thead="Name,Age,Address" style="grid-template-columns: auto auto 1fr; margin-bottom:20px;" loading>
    <wave-tr>
        <wave-td>John Brown</wave-td>
        <wave-td>32</wave-td>
        <wave-td>New York No. 1 Lake Park</wave-td>
    </wave-tr>
    <wave-tr>
        <wave-td>Jim Green</wave-td>
        <wave-td>42</wave-td>
        <wave-td>London No. 1 Lake Park</wave-td>
    </wave-tr>
    <wave-tr>
        <wave-td>Jim Green</wave-td>
        <wave-td>42</wave-td>
        <wave-td>London No. 1 Lake Park</wave-td>
    </wave-tr>
    <wave-tr>
        <wave-td>Jim Green</wave-td>
        <wave-td>42</wave-td>
        <wave-td>London No. 1 Lake Park</wave-td>
    </wave-tr>
</wave-table>
<wave-switch checked onchange="this.previousElementSibling.loading = this.checked;"></wave-switch>

```html
<wave-table loading>
    ...
</wave-table>
```

JavaScript操作`get`、`set`

```js
table.loading;
table.loading = false;
table.loading = true;
//原生属性操作
table.getAttribute('loading');
table.setAttribute('loading','');
table.removeAttribute('loading');
```

## 可选择`select`

可以设置`select`属性来实现一个常见的表格选择效果。

通过`value`可以获取到当前选中的元素的`id`（如果没有设置`id`，这返回序列）。

<wave-table thead="Name,Age,Address" select style="margin-bottom:20px">
    <wave-tr id="00001">
        <wave-td>John Brown</wave-td>
        <wave-td>32</wave-td>
        <wave-td>New York No. 1 Lake Park</wave-td>
    </wave-tr>
    <wave-tr id="00002">
        <wave-td>Jim Green</wave-td>
        <wave-td>42</wave-td>
        <wave-td>London No. 1 Lake Park</wave-td>
    </wave-tr>
    <wave-tr id="00003">
        <wave-td>Jim Green</wave-td>
        <wave-td>42</wave-td>
        <wave-td>London No. 1 Lake Park</wave-td>
    </wave-tr>
    <wave-tr id="00004">
        <wave-td>Jim Green</wave-td>
        <wave-td>42</wave-td>
        <wave-td>London No. 1 Lake Park</wave-td>
    </wave-tr>
</wave-table>
<wave-button type="primary" onclick="WaveMessage.info(this.previousElementSibling.value)">获取当前选中表格</wave-button>

```html
<wave-table thead="Name,Age,Address" select>
    <wave-tr id="00001">
        <wave-td>John Brown</wave-td>
        <wave-td>32</wave-td>
        <wave-td>New York No. 1 Lake Park</wave-td>
    </wave-tr>
    <wave-tr id="00002">
        <wave-td>Jim Green</wave-td>
        <wave-td>42</wave-td>
        <wave-td>London No. 1 Lake Park</wave-td>
    </wave-tr>
    <wave-tr id="00003">
        <wave-td>Jim Green</wave-td>
        <wave-td>42</wave-td>
        <wave-td>London No. 1 Lake Park</wave-td>
    </wave-tr>
    <wave-tr id="00004">
        <wave-td>Jim Green</wave-td>
        <wave-td>42</wave-td>
        <wave-td>London No. 1 Lake Park</wave-td>
    </wave-tr>
</wave-table>
```

JavaScript操作`get`

```js
table.value;
//[id1,id2,id3]
```

## 其他

默认情况下，`wave-th`居中显示，`wave-td`为默认对齐方式，可通过`justify-content:center`修改对齐方式

```css
wave-td{
    justify-content:center;
}
```

<style>
.table-demo wave-td{
    justify-content:center;
}
</style>
<wave-table thead="Name,Age,Address" class="table-demo">
    <wave-tr>
        <wave-td>John Brown</wave-td>
        <wave-td>32</wave-td>
        <wave-td>New York No. 1 Lake Park</wave-td>
    </wave-tr>
    <wave-tr>
        <wave-td>Jim Green</wave-td>
        <wave-td>42</wave-td>
        <wave-td>London No. 1 Lake Park</wave-td>
    </wave-tr>
    <wave-tr>
        <wave-td>Jim Green</wave-td>
        <wave-td>42</wave-td>
        <wave-td>London No. 1 Lake Park</wave-td>
    </wave-tr>
    <wave-tr>
        <wave-td>Jim Green</wave-td>
        <wave-td>42</wave-td>
        <wave-td>London No. 1 Lake Park</wave-td>
    </wave-tr>
</wave-table>

可以通过`grid-gap`来修改表格间隙，实现内边框的效果

```css
wave-table{
    grid-gap:1px;
}
```

<wave-table thead="Name,Age,Address" style="grid-gap:1px;">
    <wave-tr>
        <wave-td>John Brown</wave-td>
        <wave-td>32</wave-td>
        <wave-td>New York No. 1 Lake Park</wave-td>
    </wave-tr>
    <wave-tr>
        <wave-td>Jim Green</wave-td>
        <wave-td>42</wave-td>
        <wave-td>London No. 1 Lake Park</wave-td>
    </wave-tr>
    <wave-tr>
        <wave-td>Jim Green</wave-td>
        <wave-td>42</wave-td>
        <wave-td>London No. 1 Lake Park</wave-td>
    </wave-tr>
    <wave-tr>
        <wave-td>Jim Green</wave-td>
        <wave-td>42</wave-td>
        <wave-td>London No. 1 Lake Park</wave-td>
    </wave-tr>
</wave-table>

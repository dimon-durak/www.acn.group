# wave-dialog

对话框。用于代替原生`dialog`、`alert`、`comfirm`。

## 使用方式

```html
<!-- 引入 -->
<script type="module">
    import WaveDialog from './node_modules/wave-ui/components/wave-dialog.js';
    //使用
    WaveDialog.alert('alert');
</script>
<!-- 使用 -->
<wave-dialog>
    <div>dialog</div>
</wave-dialog>
```
!> `<script type="module"></script>`中的变量是局部变量，如果需要`WaveDialog`在全局范围内使用，可以执行`window.WaveDialog = WaveDialog;`。

> 如果是全部引用则没有这个问题，已经默认挂载在`window`对象上了

## WaveDialog[level]

与`wave-message`类似，`WaveDialog`也提供了几个静态`API`方法。

* `WaveDialog.alert(config)`

* `WaveDialog.success(config)`

* `WaveDialog.error(config)`

* `WaveDialog.warning(config)`

* `WaveDialog.confirm(config)`

* `WaveDialog.prompt(config)`

所有方法返回均为`<wave-dialog></wave-dialog>`对象。

`config`支持两种类型的参数。

```js
WaveDialog.alert(title, ok);
//object传入
WaveDialog.alert({
    title:'title',//标题
    oktext:'ok',//确定键文本
    canceltext:'cancel',//取消键文本
    ok:function(){
        //按确定键的操作
    },
    content:'content',//内容
});

```

<wave-button type="primary" onclick="WaveDialog.alert('alert')">alert</wave-button>
<wave-button type="primary" onclick="WaveDialog.info('info')">info</wave-button>
<wave-button type="primary" onclick="WaveDialog.success({title:'成功',content:'success',oktext:'send'})">success</wave-button>
<wave-button type="primary" onclick="WaveDialog.error('error')">error</wave-button>
<wave-button type="primary" onclick="WaveDialog.warning('warning')">warning</wave-button>

`WaveDialog.confirm`有两个按钮，确定键和取消键

```js
WaveDialog.confirm(title, ok, cancel);
//object传入
WaveDialog.confirm({
    title:'title',//标题
    oktext:'ok',//确定键文本
    canceltext:'cancel',//取消键文本
    type:'error',//类型，可选择以上几类
    ok:function(){
        //按确定键的操作
    },
    cancel:function(){
        //按取消键的操作
    },
    content:'content',//内容
});
```
<wave-button type="primary" onclick="WaveDialog.confirm('this is a question',()=>{WaveMessage.info('ok')},()=>{WaveMessage.info('cancel')})">confirm</wave-button>
<wave-button type="primary" onclick="WaveDialog.confirm({type:'error',content:'this is a danger confirm'})">danger confirm</wave-button>

`WaveDialog.prompt`用于显示可提示用户进行输入的对话框。

```js
WaveDialog.prompt(title, ok, cancel);
//object传入
WaveDialog.prompt({
    title:'title',//标题
    oktext:'ok',//确定键文本
    ok:function(value){
        console.log(value);
        //返回输入内容
        //按确定键的操作
    },
    cancel:function(){
        //按取消键的操作
    },
    content:'content',//内容描述
});
```

<wave-button type="primary" onclick="WaveDialog.prompt('',(value)=>{WaveMessage.info(value)},()=>{WaveMessage.info('cancel')})">prompt</wave-button>
<wave-button type="primary" onclick="WaveDialog.prompt({content:'please input your name',ok:(value)=>{WaveMessage.info(value)}})">prompt with content</wave-button>

## 显示`open`

当`WaveDialog`内容比较复杂时，可以直接写在页面`body`上，通过`open`属性来控制显示。

<wave-dialog id="dialog01" title="标题" oktext="确 定" canceltext="取消" >
    <wave-tab>
        <wave-tab-content label="tab1">tab1</wave-tab-content>
        <wave-tab-content label="tab2">tab2</wave-tab-content>
        <wave-tab-content label="tab3">tab3</wave-tab-content>
    </wave-tab>
</wave-dialog>
<wave-button type="primary" onclick="document.getElementById('dialog01').open = true;">open dialog</wave-button>

```html
<body>
    <wave-button type="primary" onclick="document.getElementById('dialog01').open = true;">open dialog</wave-button>
    <wave-dialog id="dialog01" title="标题" oktext="确 定" canceltext="取消" >
        <wave-tab>
            <wave-tab-content label="tab1">tab1</wave-tab-content>
            <wave-tab-content label="tab2">tab2</wave-tab-content>
            <wave-tab-content label="tab3">tab3</wave-tab-content>
        </wave-tab>
    </wave-dialog>
</body>
```

JavaScript操作`set`

```js
dialog.open = false;
dialog.open = true;
//原生属性操作
dialog.setAttribute('open',true);
```

## 加载`loading`

实际业务中可能会出现异步关闭的情况，可以在`onsubmit`回调中添加`loading`属性，在异步操作结束后主动关闭弹窗。

<wave-dialog id="dialog02" title="标题" oktext="确 定" canceltext="取消" >
    这是一个异步关闭的弹窗
</wave-dialog>
<wave-button type="primary" onclick="window.dialog02 = document.getElementById('dialog02');window.dialog02.open = true;window.dialog02.onsubmit = function(){this.loading = true;setTimeout(()=>{this.open = false;}, 1000);}">open dialog</wave-button>

```js
dialog.onsubmit = function(){
    this.loading = true;//添加loading属性后可以阻止关闭
    setTimeout(()=>{
        this.open = false;
    }, 1000);
}
```

JavaScript操作`set`

```js
dialog.loading = false;
dialog.loading = true;
//原生属性操作
dialog.setAttribute('loading',true);
```

## 事件`event`

### onsubmit

在点击确认操作时执行。

### oncancel

在点击取消操作时执行。

<wave-button type="primary" onclick="WaveDialog.confirm('confirm',()=>{WaveMessage.info('submit')},()=>{WaveMessage.info('cancel')})">confirm</wave-button>

```js
dialog.onsubmit = function(){
    //
}
dialog.addEventListener('submit',function(){
    //
})
dialog.oncancel = function(){
    //
}
dialog.addEventListener('cancel',function(){
    //
})
```



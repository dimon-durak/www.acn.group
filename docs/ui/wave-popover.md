# wave-popover

悬浮提示（操作）框。

## 使用方式

```html
<!-- 引入 -->
<script type="module">
    import './node_modules/wave-ui/components/wave-popover.js';
</script>
<!-- 使用 -->

<!--简易模式-->
<wave-popover content="提示"><wave-button>pop confirm</wave-button></wave-popover>

<!--自定义模式-->
<wave-popover>
    <wave-button>pop confirm</wave-button>
    <wave-popcon>
        <!-- dom -->
        <div>
            <div>自定义删除后无法撤销</div>
            <div>删除后无法撤销</div>
            <div>删除后无法撤销</div>
            <div>删除后无法撤销</div>
            <div>删除后无法撤销</div>
        </div>
    </wave-popcon>
</wave-popover>
```

有两种模式，简易模式和自定义模式，自定义模式通常配合嵌套`wave-popcon`来实现自定义悬浮框。

## 类型`type`

当没有设置类型`type`时，`wave-popover`没有任何交互样式，仅仅提供悬浮功能，可以自定义内容。

<wave-popover content="提示111"><wave-button>wave-popover</wave-button></wave-popover>

可以设置`comfirm`和`pane`两种类型。

#### 确认提示框`comfirm`

当设置`type=comfirm`时，`wave-popover`为一个确认提示层。

<wave-popover type="confirm" onsubmit="WaveMessage.success('next')" oncancel="WaveMessage.warning('cancel')" title="确定删除吗?" content="删除后无法撤销">
    <wave-button>pop confirm</wave-button>
</wave-popover>

```html
<wave-popover type="confirm" title="确定删除吗?" content="删除后无法撤销" onsubmit="WaveMessage.success('next')" oncancel="WaveMessage.warning('cancel')" >
    <wave-button>pop confirm</wave-button>
</wave-popover>
```

和`wave-dialog`比较类似，提供了`title（标题）`、`content（内容）`属性来显示内容，同时支持`submit`、`cancel`事件回调。

```js
popover.onsubmit = function(){
    //
}
popover.addEventListener('submit',function(){
    //
})
popover.oncancel = function(){
    //
}
popover.addEventListener('cancel',function(){
    //
})
```

#### 普通提示框`pane`

当设置`type=pane`时，`wave-popover`为一个普通提示层，没有交互确认取消按钮。

<wave-popover type="pane" title="提示" content="这是提示信息提示信息">
    <wave-button>pop pane</wave-button>
</wave-popover>

```html
<wave-popover type="pane" title="提示" content="这是提示信息">
    <wave-button>pop pane</wave-button>
</wave-popover>
```

#### 自定义

当内容需要自定义时，`content`可能无法满足需求，可以将`dom`节点直接嵌入`wave-popcon`中。

!> 此时所有属性均定义在`wave-popcon`上。

**自定义确认框**

<wave-popover>
    <wave-button>pop confirm</wave-button>
    <wave-popcon title="确定删除吗?" type="confirm" onsubmit="WaveMessage.success('next')">
        <div>
            <div>自定义删除后无法撤销</div>
            <div>删除后无法撤销</div>
            <div>删除后无法撤销</div>
            <div>删除后无法撤销</div>
            <div>删除后无法撤销</div>
        </div>
    </wave-popcon>
</wave-popover>

```html
<wave-popover>
    <wave-button>pop confirm</wave-button>
    <wave-popcon title="确定删除吗?" type="confirm" onsubmit="WaveMessage.success('next')">
        <div>
            <div>自定义删除后无法撤销</div>
            <div>删除后无法撤销</div>
            <div>删除后无法撤销</div>
            <div>删除后无法撤销</div>
            <div>删除后无法撤销</div>
        </div>
    </wave-popcon>
</wave-popover>
```

此时，事件监听绑定在`popcon`上。

```js
popcon.onsubmit = function(){
    //
}
popcon.addEventListener('submit',function(){
    //
})
popcon.oncancel = function(){
    //
}
popcon.addEventListener('cancel',function(){
    //
})
```

**自定义提示框**

<style>
.pop-tips{
    font-size:14px;
}
</style>
<wave-popover>
    <wave-tips tips="点击查看更多提示" style="margin:0"><wave-icon size="16" name="question-circle"></wave-icon></wave-tips>
    <wave-popcon type="pane" title="提示">
        <div class="pop-tips">
            <div>这是一段提示提示提示提示提示</div>
            <div>这是一段提示</div>
            <div>这是一段提示</div>
            <div>这是一段提示</div>
            <div>这是一段提示</div>
            <div>这是一段提示示提</div>
            <div>这是一段提示</div>
            <div>这是一段提示示提</div>
        </div>
    </wave-popcon>
</wave-popover>

```html
<wave-popover>
    <wave-tips tips="点击查看更多提示"><wave-icon size="16" name="question-circle"></wave-icon></wave-tips>
    <wave-popcon type="pane" title="提示">
        <div class="pop-tips">
            <div>这是一段提示提示提示提示提示</div>
            <div>这是一段提示</div>
            <div>这是一段提示</div>
            <div>这是一段提示</div>
            <div>这是一段提示</div>
            <div>这是一段提示示提</div>
            <div>这是一段提示</div>
            <div>这是一段提示示提</div>
        </div>
    </wave-popcon>
</wave-popover>
```


**自定义下拉框**

<style>
.pop-list a{
    display:block;
    padding:0 .8em;
    line-height: 36px;
}
.pop-list a:hover{
    background:#f1f1f1;
}
</style>
<wave-popover>
    <wave-button>pop list</wave-button>
    <wave-popcon>
        <div class="pop-list">
            <a href="#">链接链接一</a>
            <a href="#">链接链接一</a>
            <a href="#">链接链接一</a>
            <a href="#">链接一</a>
            <a href="#">链接链接一</a>
        </div>
    </wave-popcon>
</wave-popover>

```html
<style>
.pop-list a{
    display:block;
    padding:0 .8em;
    line-height: 36px;
}
.pop-list a:hover{
    background:#f1f1f1;
}
</style>
<wave-popover>
    <wave-button>pop confirm</wave-button>
    <wave-popcon>
        <div class="pop-list">
            <a href="#">链接一</a>
            <a href="#">链接一</a>
            <a href="#">链接一</a>
            <a href="#">链接一</a>
            <a href="#">链接一</a>
        </div>
    </wave-popcon>
</wave-popover>
```

## disabled

> 该属性仅作用在`wave-popover`上

当设置`disabled`时，可以禁用悬浮层，对于`type=confirm`可以直接触发`submit`事件。

<wave-popover disabled type="confirm" onsubmit="WaveMessage.success('next')" oncancel="WaveMessage.warning('cancel')" title="确定删除吗?" content="删除后无法撤销">
    <wave-button>pop confirm</wave-button>
</wave-popover>
<wave-switch checked onchange="this.previousElementSibling.disabled = this.checked;"></wave-switch>

<p></p>

<wave-popover disabled>
    <wave-button>pop list</wave-button>
    <wave-popcon>
        <div class="pop-list">
            <a href="#">链接一</a>
            <a href="#">链接一</a>
            <a href="#">链接一</a>
            <a href="#">链接一</a>
            <a href="#">链接一</a>
        </div>
    </wave-popcon>
</wave-popover>
<wave-switch checked onchange="this.previousElementSibling.disabled = this.checked;"></wave-switch>

```html
<wave-popover disabled type="confirm" onsubmit="WaveMessage.success('next')" oncancel="WaveMessage.warning('cancel')" title="确定删除吗?" content="删除后无法撤销">
    <wave-button>pop confirm</wave-button>
</wave-popover>

<wave-popover disabled>
    <wave-button>pop list</wave-button>
    <wave-popcon>
        <div class="pop-list">
            <a href="#">链接一</a>
            <a href="#">链接一</a>
            <a href="#">链接一</a>
            <a href="#">链接一</a>
            <a href="#">链接一</a>
        </div>
    </wave-popcon>
</wave-popover>
```

JavaScript操作`get`、`set`

```js
popover.disabled;//获取
popover.disabled = false;
popover.disabled = true;
//原生属性操作
popover.getAttribute('disabled');
popover.setAttribute('disabled','');
popover.removeAttribute('disabled');
```

## 方向`dir`

> 该属性仅作用在`wave-popover`上

通过`dir`可以设置悬浮层方向，默认为`bottomleft`，可以取值`top`、`right`、`bottom`、`left`、`topleft`、`topright`、`righttop`、`rightbottom`、`bottomleft`、`bottomright`、`lefttop`、`leftbottom`。同[`wave-tips`](wave-tips.md)。

<wave-popover dir="top" type="confirm" onsubmit="WaveMessage.success('next')" title="确定删除吗?" content="删除后无法撤销"><wave-button>top</wave-button></wave-popover>
<wave-popover dir="right" type="confirm" onsubmit="WaveMessage.success('next')" title="确定删除吗?" content="删除后无法撤销"><wave-button>right</wave-button></wave-popover>
<wave-popover dir="bottom" type="confirm" onsubmit="WaveMessage.success('next')" title="确定删除吗?" content="删除后无法撤销"><wave-button>bottom</wave-button></wave-popover>
<wave-popover dir="left" type="confirm" onsubmit="WaveMessage.success('next')" title="确定删除吗?" content="删除后无法撤销"><wave-button>left</wave-button></wave-popover>
<wave-popover dir="lefttop" type="confirm" onsubmit="WaveMessage.success('next')" title="确定删除吗?" content="删除后无法撤销"><wave-button>lefttop</wave-button></wave-popover>
<wave-popover dir="leftbottom" type="confirm" onsubmit="WaveMessage.success('next')" title="确定删除吗?" content="删除后无法撤销"><wave-button>leftbottom</wave-button></wave-popover>
<wave-popover dir="topleft" type="confirm" onsubmit="WaveMessage.success('next')" title="确定删除吗?" content="删除后无法撤销"><wave-button>topleft</wave-button></wave-popover>
<wave-popover dir="topright" type="confirm" onsubmit="WaveMessage.success('next')" title="确定删除吗?" content="删除后无法撤销"><wave-button>topright</wave-button></wave-popover>


<wave-popover dir="righttop" type="confirm" onsubmit="WaveMessage.success('next')" title="确定删除吗?" content="删除后无法撤销"><wave-button>righttop</wave-button></wave-popover>
<wave-popover dir="rightbottom" type="confirm" onsubmit="WaveMessage.success('next')" title="确定删除吗?" content="删除后无法撤销"><wave-button>rightbottom</wave-button></wave-popover>
<wave-popover dir="bottomleft" type="confirm" onsubmit="WaveMessage.success('next')" title="确定删除吗?" content="删除后无法撤销"><wave-button>bottomleft</wave-button></wave-popover>
<wave-popover dir="bottomright" type="confirm" onsubmit="WaveMessage.success('next')" title="确定删除吗?" content="删除后无法撤销"><wave-button>bottomright</wave-button></wave-popover>

```html
<wave-popover dir="top" type="confirm" onsubmit="WaveMessage.success('next')" title="确定删除吗?" content="删除后无法撤销"><wave-button>top</wave-button></wave-popover>
<wave-popover dir="right" type="confirm" onsubmit="WaveMessage.success('next')" title="确定删除吗?" content="删除后无法撤销"><wave-button>right</wave-button></wave-popover>
<wave-popover dir="bottom" type="confirm" onsubmit="WaveMessage.success('next')" title="确定删除吗?" content="删除后无法撤销"><wave-button>bottom</wave-button></wave-popover>
<wave-popover dir="left" type="confirm" onsubmit="WaveMessage.success('next')" title="确定删除吗?" content="删除后无法撤销"><wave-button>left</wave-button></wave-popover>
<wave-popover dir="lefttop" type="confirm" onsubmit="WaveMessage.success('next')" title="确定删除吗?" content="删除后无法撤销"><wave-button>lefttop</wave-button></wave-popover>
<wave-popover dir="leftbottom" type="confirm" onsubmit="WaveMessage.success('next')" title="确定删除吗?" content="删除后无法撤销"><wave-button>leftbottom</wave-button></wave-popover>
<wave-popover dir="topleft" type="confirm" onsubmit="WaveMessage.success('next')" title="确定删除吗?" content="删除后无法撤销"><wave-button>topleft</wave-button></wave-popover>
<wave-popover dir="topright" type="confirm" onsubmit="WaveMessage.success('next')" title="确定删除吗?" content="删除后无法撤销"><wave-button>topright</wave-button></wave-popover>
<wave-popover dir="righttop" type="confirm" onsubmit="WaveMessage.success('next')" title="确定删除吗?" content="删除后无法撤销"><wave-button>righttop</wave-button></wave-popover>
<wave-popover dir="rightbottom" type="confirm" onsubmit="WaveMessage.success('next')" title="确定删除吗?" content="删除后无法撤销"><wave-button>rightbottom</wave-button></wave-popover>
<wave-popover dir="bottomleft" type="confirm" onsubmit="WaveMessage.success('next')" title="确定删除吗?" content="删除后无法撤销"><wave-button>bottomleft</wave-button></wave-popover>
<wave-popover dir="bottomright" type="confirm" onsubmit="WaveMessage.success('next')" title="确定删除吗?" content="删除后无法撤销"><wave-button>bottomright</wave-button></wave-popover>
```

JavaScript操作`get`、`set`

```js
popover.dir;
popover.dir = 'right';
//原生属性操作
popover.getAttribute('dir');
popover.setAttribute('dir','right');
```


## 触发`trigger`

默认触发方式是`click`（鼠标单击），还可以选择`hover`、`focus`、`contextmenu`（鼠标右键）。

需要注意的是`hover`、`focus`需要使用自定义模式。

**hover触发**

<wave-popover trigger="hover">
    <wave-button>hover</wave-button>
    <wave-popcon>
        <div class="pop-list">
            <a href="#">链接一</a>
            <a href="#">链接链接一</a>
            <a href="#">链接一</a>
        </div>
    </wave-popcon>
</wave-popover>

```html
<wave-popover trigger="hover">
    <wave-button>hover</wave-button>
    <wave-popcon>
        <div class="pop-list">
            <a href="#">链接一</a>
            <a href="#">链接链接一</a>
            <a href="#">链接一</a>
        </div>
    </wave-popcon>
</wave-popover>
```

**focus触发**

<wave-popover trigger="focus">
    <wave-button>focus</wave-button>
    <wave-popcon>
        <div class="pop-list">
            <a href="#">链接一</a>
            <a href="#">链接链接一</a>
            <a href="#">链接一</a>
        </div>
    </wave-popcon>
</wave-popover>

```html
<wave-popover trigger="focus">
    <wave-button>focus</wave-button>
    <wave-popcon>
        <div class="pop-list">
            <a href="#">链接一</a>
            <a href="#">链接链接一</a>
            <a href="#">链接一</a>
        </div>
    </wave-popcon>
</wave-popover>
```

**contextmenu触发**

可以取代原生右键菜单，在该条件下，方向`dir`无效，位置跟随鼠标。

<wave-popover class="pop-user" trigger="contextmenu">
    <wave-img src="https://images.pexels.com/photos/698808/pexels-photo-698808.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></wave-img>
    <wave-popcon>
        <div class="pop-list">
            <wave-button block type="flat">重新加载</wave-button>
            <wave-button block type="flat">另存为</wave-button>
            <wave-button block type="flat">检查</wave-button>
        </div>
    </wave-popcon>
</wave-popover>

```html
<wave-popover trigger="contextmenu">
    <wave-img src="https://images.pexels.com/photos/698808/pexels-photo-698808.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></wave-img>
    <wave-popcon>
        <wave-button block type="flat">重新加载</wave-button>
        <wave-button block type="flat">另存为</wave-button>
        <wave-button block type="flat">检查</wave-button>
    </wave-popcon>
</wave-popover>
```

## 显示`open`

> 该属性仅作用在`wave-popcon`上

默认情况下，关闭`wave-popcon`可以通过点击关闭按钮和点击文档其他地方完成。

`wave-popcon`还可以通过`open`属性主动控制显示。

<wave-popover>
    <wave-tips tips="点击查看提示" style="margin:0"><wave-icon size="16" name="question-circle"></wave-icon></wave-tips>
    <wave-popcon type="pane" title="提示">
        <div class="pop-tips">
            <div>这是一段提示提示提示提示提示</div>
            <div>这是一段提示</div>
            <div>这是一段提示</div>
            <div>这是一段提示</div>
        </div>
        <wave-button style="margin:10px 0 0 0;" onclick="this.parentNode.open = false;">关闭</wave-button>
    </wave-popcon>
</wave-popover>

```html
<wave-popover>
    <wave-tips tips="点击查看提示"><wave-icon size="16" name="question-circle"></wave-icon></wave-tips>
    <wave-popcon type="pane" title="提示">
        <div class="pop-tips">
            <div>这是一段提示提示提示提示提示</div>
            <div>这是一段提示</div>
            <div>这是一段提示</div>
            <div>这是一段提示</div>
        </div>
        <wave-button onclick="this.parentNode.open = false;">关闭</wave-button>
    </wave-popcon>
</wave-popover>
```

JavaScript操作`get`、`set`

```js
popcon.open;
popcon.open = true;
popcon.open = false;
//原生属性操作
popcon.getAttribute('open');
popcon.setAttribute('open',true);
```

也可以给需要关闭的元素添加`autoclose`属性，点击后自动关闭

<wave-popover>
    <wave-tips tips="点击查看提示" style="margin:0"><wave-icon size="16" name="question-circle"></wave-icon></wave-tips>
    <wave-popcon type="pane" title="提示">
        <div class="pop-tips">
            <div>这是一段提示提示提示提示提示</div>
            <div>这是一段提示</div>
            <div>这是一段提示</div>
            <div>这是一段提示</div>
        </div>
        <wave-button style="margin:10px 0 0 0;" autoclose>关闭</wave-button>
    </wave-popcon>
</wave-popover>

```html
<wave-popover>
    <wave-tips tips="点击查看提示"><wave-icon size="16" name="question-circle"></wave-icon></wave-tips>
    <wave-popcon type="pane" title="提示">
        ...
        <wave-button autoclose>关闭</wave-button>
    </wave-popcon>
</wave-popover>
```

## 示例

这是一个很常见的下拉菜单。

<style>
.pop-user wave-popcon wave-button{
    margin:0;
    justify-content: flex-start;
}
</style>
<wave-popover class="pop-user">
    <wave-button type="flat" shape="circle" icon="user"></wave-button>
    <wave-popcon>
        <wave-button block type="flat">xboWavean</wave-button>
        <wave-button block type="flat">info</wave-button>
        <wave-button block type="flat">setting</wave-button>
        <wave-button block type="flat">login out</wave-button>
    </wave-popcon>
</wave-popover>

```html
<style>
.pop-user wave-popcon wave-button{
    margin:0;
    justify-content: flex-start;
}
</style>
<wave-popover class="pop-user">
    <wave-button type="flat" shape="circle" icon="user"></wave-button>
    <wave-popcon>
        <wave-button block type="flat">xboWavean</wave-button>
        <wave-button block type="flat">info</wave-button>
        <wave-button block type="flat">setting</wave-button>
        <wave-button block type="flat">login out</wave-button>
    </wave-popcon>
</wave-popover>
```

这是一个多级菜单，支持`hover`、`focus`、`click`触发。

<style>
.pop-menu wave-button,.pop-menu wave-popover{
    display:flex;
    margin:0;
    justify-content: flex-start;
}
.pop-menu wave-popover:hover>wave-button,.pop-menu wave-popover:focus-within>wave-button{
    color:var(--themeColor,#42b983);
} 
.pop-menu>wave-popcon wave-popcon{
    margin-left:-10px;
}
</style>
<wave-popover class="pop-menu" trigger="hover" dir="righttop">
    <wave-button>hover Menu</wave-button>
    <wave-popcon>
        <wave-popover trigger="hover" dir="righttop">
            <wave-button block type="flat">itemA<wave-icon name="right"></wave-icon></wave-button>
            <wave-popcon>
                <wave-button block type="flat">subMenu1</wave-button>
                <wave-button block type="flat">subMenu2</wave-button>
                <wave-button block type="flat">subMenu3</wave-button>
                <wave-button block type="flat">subMenu4</wave-button>
            </wave-popcon>
        </wave-popover>
        <wave-popover trigger="hover" dir="righttop">
            <wave-button block type="flat">itemB<wave-icon name="right"></wave-icon></wave-button>
            <wave-popcon>
                <wave-popover trigger="hover" dir="righttop">
                    <wave-button block type="flat">sub-itemB<wave-icon name="right"></wave-icon></wave-button>
                    <wave-popcon>
                        <wave-button block type="flat">subMenu1</wave-button>
                        <wave-button block type="flat">subMenu2</wave-button>
                        <wave-button block type="flat">subMenu3</wave-button>
                    </wave-popcon>
                </wave-popover>
                <wave-button block type="flat">subMenu2</wave-button>
                <wave-button block type="flat">subMenu3</wave-button>
                <wave-button block type="flat">subMenu4</wave-button>
            </wave-popcon>
        </wave-popover>
        <wave-button block type="flat">itemC</wave-button>
    </wave-popcon>
</wave-popover>

<wave-popover class="pop-menu" trigger="focus" dir="righttop">
    <wave-button>focus Menu</wave-button>
    <wave-popcon>
        <wave-popover trigger="focus" dir="righttop">
            <wave-button block type="flat">itemA<wave-icon name="right"></wave-icon></wave-button>
            <wave-popcon>
                <wave-button block type="flat">subMenu1</wave-button>
                <wave-button block type="flat">subMenu2</wave-button>
                <wave-button block type="flat">subMenu3</wave-button>
                <wave-button block type="flat">subMenu4</wave-button>
            </wave-popcon>
        </wave-popover>
        <wave-popover trigger="focus" dir="righttop">
            <wave-button block type="flat">itemB<wave-icon name="right"></wave-icon></wave-button>
            <wave-popcon>
                <wave-popover trigger="focus" dir="righttop">
                    <wave-button block type="flat">sub-itemB<wave-icon name="right"></wave-icon></wave-button>
                    <wave-popcon>
                        <wave-button block type="flat">subMenu1</wave-button>
                        <wave-button block type="flat">subMenu2</wave-button>
                        <wave-button block type="flat">subMenu3</wave-button>
                    </wave-popcon>
                </wave-popover>
                <wave-button block type="flat">subMenu2</wave-button>
                <wave-button block type="flat">subMenu3</wave-button>
                <wave-button block type="flat">subMenu4</wave-button>
            </wave-popcon>
        </wave-popover>
        <wave-button block type="flat">itemC</wave-button>
    </wave-popcon>
</wave-popover>

<wave-popover class="pop-menu" dir="righttop">
    <wave-button>click Menu</wave-button>
    <wave-popcon>
        <wave-popover dir="righttop">
            <wave-button block type="flat">itemA<wave-icon name="right"></wave-icon></wave-button>
            <wave-popcon>
                <wave-button block type="flat">subMenu1</wave-button>
                <wave-button block type="flat">subMenu2</wave-button>
                <wave-button block type="flat">subMenu3</wave-button>
                <wave-button block type="flat">subMenu4</wave-button>
            </wave-popcon>
        </wave-popover>
        <wave-popover dir="righttop">
            <wave-button block type="flat">itemB<wave-icon name="right"></wave-icon></wave-button>
            <wave-popcon>
                <wave-popover dir="righttop">
                    <wave-button block type="flat">sub-itemB<wave-icon name="right"></wave-icon></wave-button>
                    <wave-popcon>
                        <wave-button block type="flat">subMenu1</wave-button>
                        <wave-button block type="flat">subMenu2</wave-button>
                        <wave-button block type="flat">subMenu3</wave-button>
                    </wave-popcon>
                </wave-popover>
                <wave-button block type="flat">subMenu2</wave-button>
                <wave-button block type="flat">subMenu3</wave-button>
                <wave-button block type="flat">subMenu4</wave-button>
            </wave-popcon>
        </wave-popover>
        <wave-button block type="flat">itemC</wave-button>
    </wave-popcon>
</wave-popover>

```html
<wave-popover class="pop-menu" trigger="hover" dir="righttop">
    <wave-button>Menu</wave-button>
    <wave-popcon>
        <wave-popover trigger="hover" dir="righttop">
            <wave-button block type="flat">itemA<wave-icon name="right"></wave-icon></wave-button>
            <wave-popcon>
                <wave-button block type="flat">subMenu1</wave-button>
                <wave-button block type="flat">subMenu2</wave-button>
                <wave-button block type="flat">subMenu3</wave-button>
                <wave-button block type="flat">subMenu4</wave-button>
            </wave-popcon>
        </wave-popover>
        <wave-popover trigger="hover" dir="righttop">
            <wave-button block type="flat">itemB<wave-icon name="right"></wave-icon></wave-button>
            <wave-popcon>
                <wave-popover trigger="hover" dir="righttop">
                    <wave-button block type="flat">sub-itemB<wave-icon name="right"></wave-icon></wave-button>
                    <wave-popcon>
                        <wave-button block type="flat">subMenu1</wave-button>
                        <wave-button block type="flat">subMenu2</wave-button>
                        <wave-button block type="flat">subMenu3</wave-button>
                    </wave-popcon>
                </wave-popover>
                <wave-button block type="flat">subMenu2</wave-button>
                <wave-button block type="flat">subMenu3</wave-button>
                <wave-button block type="flat">subMenu4</wave-button>
            </wave-popcon>
        </wave-popover>
        <wave-button block type="flat">itemC</wave-button>
    </wave-popcon>
</wave-popover>
```

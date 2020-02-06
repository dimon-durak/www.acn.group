# wave-message

全局展示操作反馈信息。

## 使用方式

```html
<!-- 引入 -->
<script type="module">
    import WaveMessage from './node_modules/wave-ui/components/wave-message.js';
    window.WaveMessage = WaveMessage;
    //使用
    WaveMessage.info('info);
</script>
```
!> `<script type="module"></script>`中的变量是局部变量，如果需要`WaveMessage`在全局范围内使用，可以执行`window.WaveMessage = WaveMessage;`。

> 如果是全部引用则没有这个问题，已经默认挂载在`window`对象上了

## WaveMessage[level]

和一般组件不太一样的一个地方是，该组件更类似于一个`API`，这里提供了`WaveMessage`的几个静态方法。

* `WaveMessage.info(text, duration, onclose)`

* `WaveMessage.success(text, duration, onclose)`

* `WaveMessage.error(text, duration, onclose)`

* `WaveMessage.warning(text, duration, onclose)`

* `WaveMessage.loading(text, duration, onclose)`

所有方法返回均为`<wave-message></wave-message>`对象。

<wave-button type="primary" onclick="WaveMessage.info('This a info message')">info</wave-button>
<wave-button type="primary" onclick="WaveMessage.success('This a success message')">success</wave-button>
<wave-button type="primary" onclick="WaveMessage.error('This a error message')">error</wave-button>
<wave-button type="primary" onclick="WaveMessage.warning('This a warning message')">warning</wave-button>
<wave-button type="primary" onclick="WaveMessage.loading('This a loading message')">loading</wave-button>

|参数|说明|类型|默认值|
|---|---|---|---|
|`text`|提示内容|`string`|`''`|
|`duration`|自动关闭的延时，单位毫秒。设为 0 时不自动关闭。|`number`|`3`|
|`onclose`|关闭时触发的回调函数|`Function`|-|

其中，`WaveMessage.loading`默认`duration`为`0`，表示不自动关闭，如果需要手动关闭，可以设置属性`show=false`。

<wave-button type="primary" onclick="this.loader = WaveMessage.loading('This a loading message')">show loading</wave-button>
<wave-button type="primary" onclick="this.previousElementSibling.loader.show = false">hide loading</wave-button>

```js
const loader = WaveMessage.loading('This a loading message');
btn.onclick = function(){
    loader.show = false;
}
```

`onclose`还可以在外部指定，作用同上。

```js
const loader = WaveMessage.loading('This a loading message');
loader.onclose = function(){
    //
}
```

## WaveMessage.show

`WaveMessage.show`是一个更为通用的方法，可以自定义`icon`。

<wave-button type="primary" onclick="WaveMessage.show({icon:'like',text:'I like it!'})">I like it!</wave-button>

```js
WaveMessage.show({
    icon,//图标
    text,//提示内容
    duration,//延时，默认为3000
    onclose//回调函数
})
```

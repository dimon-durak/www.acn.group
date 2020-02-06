# update
* ## 1.9.1
    * [`wave-view`](wave-view.md)新增`draggable`、`allowdrop`、`resizable`等特性
    * 新增[`wave-button-group`](wave-button-group.md?id=按钮组wave-button-group)组件
* ## 1.9.0
    * `wave-form-item`布局采用`grid`实现，去除`legendwidth`属性
    * `wave-text`新增`draggable`属性
    * 表单元素的`reset`方法现定义为"重置"，即还原成默认值
    * `wave-select`新增分组`wave-optgroup`
    * 新增`wave-view`组件（实验性），扩展常见功能，如`drag`等（进行中）
* ## 1.8.8
    *  所有表单元素在表单校验失败时会添加`invalid`属性
    * `wave-tab`在切换时会自适应高度
* ## 1.8.7
    * `wave-slider`新增鼠标滚轮操作
    * `wave-select`新增`placeholder`,`required`属性，支持表单验证
    * `wave-select`搜索条件改为根据`key`查找
    * `wave-popover`现支持点击内部属性带有`autoclose`的元素自动关闭
    * `wave-input`在表单校验失败是会添加`invalid`属性
    * 其他功能优化
* ## 1.8.6
    * [`wave-select`](wave-select.md?id=搜索search)新增`search`属性
    * `wave-input`新增`readonly`属性
    * `wave-tab`新增`line`风格
* ## 1.8.5
    * `wave-tab`新增`card`风格
    * `wave-dialog`新增`prompt`方法
    * `wave-select`现在在不打开的情况下也可以用键盘上下键快速选中
    * `wave-slider`更改`vertical`属性下的`tips`方向
    * `wave-text`在出现省略时会添加`truncated`属性标识
    * 修复`wave-select`、`wave-color-picker`、`wave-date-picker`在`disabled`状态下打开的问题
* ## 1.8.4
    * `wave-slider`在`vertical`属性下支持动态样式修改
* ## 1.8.3
    * `wave-slider`新增`vertical`、`prefix`属性
* ## 1.8.2
    * [`wave-layout`](wave-layout.md?id=栅格row、col)新增`grid`栅格布局
    * `wave-button`新增`danger`类型
    * 修复`wave-slider`在火狐上的`input`触发问题
    * 其他`bug`修复
* ## 1.8.1
    * 新增[`wave-text`](wave-text.md)组件
* ## 1.8.0
    * 新增[`wave-table`](wave-table.md)组件
    * `wave-checkbox`新增`indeterminate`状态
    * 修复`wave-date-picker`在`1`月份选取去年`12`月份的`bug`
    * 修复`wave-color-pane`在空白处触发`change`的`bug`
* ## 1.7.1
    * [`wave-date-picker`](wave-date-picke.md)新增[`range`](wave-date-picke.md?id=范围选择range)属性

    ![wave-date-range-picker](../screenshot/wave-date-range-picker.png)

    * 优化`wave-color-picker`和`wave-date-picker`初始化逻辑
    * 其他`bug`修复
* ## 1.7.0
    * 新增[`wave-date-picker`](wave-date-picke.md)组件

    ![wave-date-picker](../screenshot/wave-date-picker.png)

    * 优化`wave-icon`的图标加载方式，不会再阻塞页面渲染了~
    * 主题配置新增`--themeBackground`
    * 其他`bug`修复
* ## 1.6.1
    * 优化`wave-button`的`Enter`键逻辑
    * 优化`wave-icon`的图标加载方式
    * 替换部分组件内置图标为`svg`方式，减少`wave-icon`依赖
* ## 1.6.0
    * 新增[`wave-pagination`](wave-pagination.md)分页组件

    ![wave-pagination](../screenshot/wave-pagination.png)

    * 修复`wave-form`下`wave-select`回车键触发`submit`问题
    * 更改组件尺寸为`em`相对尺寸，部分组件除外
    * `wave-color-pane`现在在鼠标抬起时才触发`change`回调
    * 其他`bug`修复
* ## 1.5.2
    * 修改属性`lable`为`legend`，`lablewidth`为`legendwidth`
    * `wave-radio-group`、`wave-checkbox-group`新增`disabled`属性
    * 优化`wave-form`和`wave-form-item`的`lablewidth`属性
    * `wave-popover`优化关闭按钮样式
    * `wave-color-picker`新增内置颜色
    * `wave-form`表单校验不会对`disabled`属性表单元素进行校验
* ## 1.5.1
    * 优化`wave-radio-group`和`wave-checkbox-group`的`hover`层级问题
    * `wave-form`新增演示动画

    ![wave-form](../screenshot/wave-form.png)
    
* ## 1.5.0
    * 新增[`wave-form`](wave-form.md)表单组件，集成表单验证功能
    * 新增`wave-radio-group`和`wave-checkbox-group`组件
    * `wave-img`新增加载动画
    * 主题颜色管理，`fontColor`、`errorColor`、`successColor`、`warningColor`、`borderColor`等
    * 其他`bug`修复
* ## 1.4.2
    * 重构[`wave-icon`](wave-icon.md)的引用方式，不用再设置`iconUrl`和`basePath`了~
    * 支持`cdn`引入，采用[unpkg](https://unpkg.com/)
    * 新增`react`项目使用方式[demo](https://codepen.io/xboWavean/pen/mNKWaN)
* ## 1.4.0
    * 新增`wave-color-picker`颜色选择器、`wave-color-pane`颜色面板

    ![wave-color-picker](../screenshot/color-picker.png)

    * 优化[wave-popover](wave-popover.md)空白处点击处关闭逻辑
    * 修复[wave-select](wave-select.md)`hover`层级问题
* ## 1.3.4
    * [wave-button](wave-button.md?id=状态切换toggle)新增`toggle`属性
    * 修复[wave-select](wave-select.md)样式问题
    * 修复[wave-switch](wave-switch.md)、[wave-checkbox](wave-checkbox.md)点击重复触发`focus`的问题
    * 修复[wave-radio](wave-radio.md)在自定义组件内单选问题
* ## 1.3.3
    * 重构[wave-select](wave-select.md)，基于`wave-popover`，逻辑更清晰
    * 修复[wave-popover](wave-popover.md)、[wave-select](wave-select.md)空白处点击处关闭的问题
* ## 1.3.2
    * 修复[wave-popover](wave-popover.md?id=触发trigger)在火狐上的触发（`hover`、`focus`）问题
    * 新增[wave-popover](wave-popover.md?id=示例)示例
* ## 1.3.1
    * [wave-popover](wave-popover.md?id=触发trigger)新增`trigger`属性
* ## 1.3.0
    * 新增[wave-popover](wave-popover.md)悬浮操作组件
    * [wave-tips](wave-tips.md?id=方向dir)的`dir`新增`8`个方向
    * [wave-button](wave-button.md?id=链接href)新增`href`属性
    * [wave-input](wave-input.md?id=oninput)新增`debounce`属性
    * 优化[wave-select](wave-select.md)逻辑
* ## 1.2.0
    * 修复`wave-img`关闭画廊时的定位问题
    * 精简所有`focus`、`blur`事件
    * 新增[wave-rate](wave-rate.md)组件
* ## 1.1.0
    * 重构`wave-button`组件结构，更易于自定义
    * 新增[wave-img](wave-img.md)组件
* ## 1.0.2
    * 修复已知bug
    * `wave-slider` 新增`suffix`属性
* ## 1.0.0
    * 完成基本组件
    - [x] [wave-button](wave-button.md)
    - [x] [wave-icon](wave-icon.md)
    - [x] [wave-slider](wave-slider.md)
    - [x] [wave-select](wave-select.md)
    - [x] [wave-loading](wave-loading.md)
    - [x] [wave-tab](wave-tab.md)
    - [x] [wave-switch](wave-switch.md)
    - [x] [wave-checkbox](wave-checkbox.md)
    - [x] [wave-radio](wave-radio.md)
    - [x] [wave-tips](wave-tips.md)
    - [x] [wave-layout](wave-layout.md)
    - [x] [wave-dialog](wave-dialog.md)
    - [x] [wave-input](wave-input.md)
    - [x] [wave-textarea](wave-textarea.md)

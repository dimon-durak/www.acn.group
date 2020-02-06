# wave-textarea

多行输入框。用于替代原生`textarea`。

## 使用方式

```html
<!-- 引入 -->
<script type="module">
    import './node_modules/wave-ui/components/wave-input.js';
</script>
<!-- 使用 -->
<wave-textarea></wave-textarea>
```

继承自`wave-input.js`。大部分属性通用，不支持`pattern`校验。

<wave-textarea required  placeholder="required"></wave-textarea>

```html
<wave-textarea required  placeholder="required"></wave-textarea>
```

<wave-textarea label="info" placeholder="info" ></wave-textarea>

```html
<wave-textarea label="info" placeholder="info" ></wave-textarea>
```

<wave-textarea icon="location" placeholder="location" ></wave-textarea>

```html
<wave-textarea icon="location" placeholder="location" ></wave-textarea>
```

## 行数`rows`

可以通过`rows`指定`wave-textarea`最大显示行数。

<wave-textarea placeholder="rows" rows="5" ></wave-textarea>

```html
<wave-textarea placeholder="rows" rows="5" ></wave-textarea>
```

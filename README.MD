### What is hg?

hg is a tiny (one-file), 2d game engine, written in vanilla js. No frameworks, no bundlers, no package managers. 

### Why is hg?

The goal of hg is to reduce the amount of friction and boilerplate required to spin up a 2d game in the browser.

### How to hg?
Simply include the script in your html file

```html
<script src="shawn-mcgee.github.io/hg/hg.js"></script>
```

And then get started

```js
const stage = hg.Stage.new()

hg.Stage.setScene(stage, {
  onRender(c) {
    // that's all folks
  }
})
```


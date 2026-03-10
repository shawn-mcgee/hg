### What is hg?

hg is a tiny (one-file), 2d game engine, written in vanilla js. No frameworks, no bundlers, no package managers.

All public facing types in hg are json-safe, meaning that the entire state of the engine can be easily inspected and serialized.

### Why is hg?

hg is intended to reduce the amount of friction required to develop 2d games in the browser.

### How to hg?
Simply include the script in your html file

```html
<script src="shawn-mcgee.github.io/hg/hg.js"></script>
```

And then get started

```js
const stage = hg.Stage.new()

hg.Stage.setScene(stage, hg.Scene.new({
  onRender({g}) {
    // that's all folks
  }
}))
```


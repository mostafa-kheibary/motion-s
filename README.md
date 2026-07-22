<h1 align="center"> <img width="35" height="35" alt="Motion logo" src="https://github.com/user-attachments/assets/00d6d1c3-72c4-4c2f-a664-69da13182ffc" /><br />Motion for svelte</h1>

<p align="center">
  <a href="https://www.npmjs.com/package/motion-s" target="_blank">
    <img src="https://img.shields.io/npm/v/motion-s.svg?style=flat-square" />
  </a>
  <a href="https://www.npmjs.com/package/motion-s" target="_blank">
  <img src="https://img.shields.io/npm/dm/motion-s.svg?style=flat-square" />
  </a>
</p>

<br>
<hr>
<br>

Motion for svelte is an open source, production-ready library that’s designed for all creative developers.

It's the only animation library with a hybrid engine, combining the power of JavaScript animations with the performance of native browser APIs.

It looks like this:

```svelte
<motion.div animate={{ x: 100 }} />
```

It does all this:

- Springs
- Keyframes
- Layout animations
- Shared layout animations
- Gestures (drag/tap/hover)
- Scroll animations
- SVG paths
- Exit animations
- Server-side rendering
- Independent transforms
- Orchestrate animations across components
- CSS variables

...and a whole lot more.

## Get started

### 🐇 Quick start

Install `motion-s` via your package manager:

```
npm install motion-s
```

Then import the `motion` component:

```svelte
<script lang="ts">
	import { motion } from 'motion-s';
</script>

<motion.div animate={{ x: 100 }} />
```

### 👩🏻‍⚖️ License

- Motion for svelte is MIT licensed.

### Personal sponsors

- [Mostafa Kheibary](http://github.com/mostafa-kheibary/) , [Sina Salahshour](https://github.com/sina-salahshour/)

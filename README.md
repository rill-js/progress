<h1 align="center">
  <!-- Logo -->
  <img src="https://raw.githubusercontent.com/rill-js/rill/master/Rill-Icon.jpg" alt="Rill"/>
  <br/>
  @rill/progress
	<br/>

  <!-- Stability -->
  <a href="https://nodejs.org/api/documentation.html#documentation_stability_index">
    <img src="https://img.shields.io/badge/stability-stable-brightgreen.svg?style=flat-square" alt="API stability"/>
  </a>
  <!-- Standard -->
  <a href="https://github.com/feross/standard">
    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square" alt="Standard"/>
  </a>
  <!-- NPM version -->
  <a href="https://npmjs.org/package/@rill/progress">
    <img src="https://img.shields.io/npm/v/@rill/progress.svg?style=flat-square" alt="NPM version"/>
  </a>
  <!-- Downloads -->
  <a href="https://npmjs.org/package/@rill/progress">
    <img src="https://img.shields.io/npm/dm/@rill/progress.svg?style=flat-square" alt="Downloads"/>
  </a>
  <!-- Gitter Chat -->
  <a href="https://gitter.im/rill-js/rill">
    <img src="https://img.shields.io/gitter/room/rill-js/rill.svg?style=flat-square" alt="Gitter Chat"/>
  </a>
</h1>

Adds a simple loading bar during requests with Rill.
The progress bar is powered by [nprogress](http://ricostacruz.com/nprogress).

# Installation

```console
npm install @rill/progress
```

# Example

```javascript
var app = require('rill')()
var progress = require('@rill/progress')

// All requests to the app will now have a progress bar.
app.use(progress({ speed: 500, easing: 'ease' }))
```

# Options

```js
{
	color:   "green", // The default color of the progress bar and spinner.
	spinner: true,    // Show the spinning circle along with the bar.
	parent:  "body",  // The element that will contain the progress bar.
	style:   true     // Uses inline styles to create the progress bar. Set to false to use your own.
}
```

# Styling

All styles are injected into the document when the page is loaded. You can see the unminified styles [here](https://github.com/rstacruz/nprogress/blob/master/nprogress.css). To use your own styles use `style: false` to disable the inline styles.

### Contributions

* Use `npm test` to run tests.

Please feel free to create a PR!

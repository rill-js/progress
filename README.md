[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![Chat about Rill at https://gitter.im/rill-js/rill](https://badges.gitter.im/rill-js/rill.svg)](https://gitter.im/rill-js/rill?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

# Rill Progress

Adds a simple loading bar during requests with Rill.
The progress bar is powered by [nprogress](http://ricostacruz.com/nprogress).

# Installation

#### Npm
```console
npm install @rill/progress
```

# Example

```javascript
var progress = require("@rill/progress");

// All requests to the app will now have a progress bar.
app.use(progress({ speed: 500, easing: "ease" }));
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

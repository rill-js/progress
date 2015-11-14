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
}
```

# Styling

All styles are injected into the document when the page is loaded. You can the unminified styles [here](https://github.com/rstacruz/nprogress/blob/master/nprogress.css) and feel free to override them!

### Contributions

* Use gulp to run tests.

Please feel free to create a PR!

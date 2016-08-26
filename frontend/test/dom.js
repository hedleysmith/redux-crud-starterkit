const jsdom = require('jsdom');

// Setup the simplest document possible.
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');

// Get the window object out of the document.
const win = doc.defaultView;

// Expose globals directly in the test environment.
global.document = doc;
global.window = win;

// Now propogate all properties of the jsdom doc to global.window within
// the test environment.
propagateToGlobal(win)

// From mocha-jsdom https://github.com/rstacruz/mocha-jsdom/blob/master/index.js#L92
function propagateToGlobal (window) {
  for (let key in window) {
    if (!window.hasOwnProperty(key)) continue
    if (key in global) continue

    global[key] = window[key]
  }
}

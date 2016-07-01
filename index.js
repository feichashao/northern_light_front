var self = require('sdk/self');

// a dummy function, to show how tests work.
// to see how to test this function, look at test/test-index.js
function dummy(text, callback) {
  callback(text);
}

exports.dummy = dummy;

var pageMod = require("sdk/page-mod");

pageMod.PageMod({
    include: "*c.na7.visual.force.com*Case_View*",
    contentScript: 'document.body.innerHTML = ' +
                ' "<h1>Page matches ruleset</h1>";'
});

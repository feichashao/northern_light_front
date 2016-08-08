var self = require('sdk/self');

// a dummy function, to show how tests work.
// to see how to test this function, look at test/test-index.js
function dummy(text, callback) {
  callback(text);
}

exports.dummy = dummy;

var pageMod = require("sdk/page-mod");
var Request = require("sdk/request").Request;


pageMod.PageMod({
    include: /.*c\.na7\.visual\.force\.com\/apex\/Case_View.*/,
//    include: "*.feichashao.com",
    contentScriptFile: [self.data.url("jquery-3.0.0.js"), self.data.url("my-script.js")],
    onAttach: function(worker){
        worker.port.on("query_result", function(query_url){
            Request({
                url: query_url,
                onComplete: function(response){
                    worker.port.emit("handle_result", response.json);
                    console.log(response.json);
                }
            }).get();
        } );
    }
});

// The url to query account and contact.
var query_url = "http://10.66.218.20/nl/"

// Account number obj.
var ac = $(".dataCol.col02").filter( function() { return this.innerHTML.match(/^[0-9]{5,12}$/) })[0];
// Contact name obj
var ct = $("a[id^='lookup']")[3];

// Account number
var ac_num = ac.innerHTML;

// Contact name
var ct_name = ct.innerHTML;

// Contact lookup URL
var ct_url = ct.getAttribute('onfocus').match(/\/[0-9]+.*nocache=[0-9]+/)[0];

// Display message
var msg = $("<p>Checking account " + ac_num + " - " + ct_name + "</p>");
msg.appendTo(ac);

var email = "";


// Email address
ct_content = $.get(ct_url)
    .done( function(data) { 
        email = data.match(/mailto\:.*@.*\"\>/)[0].match(/[a-zA-Z0-9\.\#\-\_]*@[a-zA-Z0-9\.\-]*/)[0];
        msg.html("<p>Checking account " + ac_num + " - " + ct_name + " - " + email + "</p>");
        self.port.emit("query_result", query_url + ac_num + "/" + email + "/");
    })
    .fail( function(data) {
        msg.html("<p>Fail to fetch " + ct_name + "s email.</p>");
    });

// Handle query result.
self.port.on("handle_result", function(data){
    msg.html(data.messages + " - " + data.account_number + " - " + data.email);
    if(data.alert){
        alert(data.messages);
    }
});

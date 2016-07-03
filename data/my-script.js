// Account number obj.
var ac = $(".dataCol.col02").filter( function() { return this.innerHTML.match(/^[0-9]+$/) })[0];
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

var check_valid = function(){
        msg.html("<p>here should be messages return from local server.</p>");
    };

var email = "";
// Email address
ct_content = $.get(ct_url)
    .done( function(data) { 
        email = data.match(/mailto\:.*@.*\"\>/)[0].match(/[a-zA-Z0-9\.]*@[a-zA-Z0-9\.]*/)[0];
        msg.html("<p>Checking account " + ac_num + " - " + ct_name + " - " + email + "</p>");
        check_valid();
    })
    .fail( function(data) {
        msg.html("<p>Fail to fetch " + ct_name "s email.</p>");
    });


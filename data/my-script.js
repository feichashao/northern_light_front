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
var msg = $("<p>init message</p>");
msg.appendTo(ac);

// Email address
ct_content = $.get(ct_url).done( function(data) { 
    email = data.match(/mailto\:.*@.*\"\>/)[0].match(/[a-zA-Z0-9\.]*@[a-zA-Z0-9\.]*/)[0];
    alert(email);
    msg = $("<p>got email</p>");
} );
// email = ct_content.responseText.match(/mailto\:.*@.*\"\>/)[0].match(/[a-zA-Z0-9\.]*@[a-zA-Z0-9\.]*/)[0];


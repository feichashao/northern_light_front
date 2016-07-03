// Account number obj.
ac = $(".dataCol.col02").filter( function() { return this.innerHTML.match(/^[0-9]+$/) })[0];
// Contact name obj
ct = $("a[id^='lookup']")[3];

// Account number
ac_num = ac.innerHTML;

// Contact name
ct_name = ct.innerHTML;

// Contact lookup URL
ct_url = ct.getAttribute('onfocus').match(/\/[0-9]+.*nocache=[0-9]+/)[0];

// Email address
ct_content = $.get(ct_url);
// email = ct_content.responseText.match(/mailto\:.*@.*\"\>/)[0].match(/[a-zA-Z0-9\.]*@[a-zA-Z0-9\.]*/)[0];

// Append message under account number
msg = $("<p>some messages</p>");
msg.appendTo(ac);

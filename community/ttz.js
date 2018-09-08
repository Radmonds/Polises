var  users = {
                'gigaho': 'fundamental-analysts',
                'Duane\.Norman': 'fundamental-analysts',
                'MoonBear': 'shorthorns',
                'Dylan': 'bulls',
                'Epistemic\_Crisis': 'shorthorns',
                'gSTRUCTOR': 'shorthorns',
                'Justin': 'shorthorns',
                'joje': 'shorthorns',
                'Mihai': 'shorthorns'
            };
channel = {
                "3KeG6kuRACiXhXEEK": "ttz-channels",
                "H8u3WA8zv6nToxW": "ttz-channels",
                "NooXCRNnu6aisXrzD": "ttz-channels",
                "8QqdmnNB9stcsL77L": "ttz-channels",
                "zoHqJLnHjbGdefJym": "ttz-channels",
                "AerGuebK7A2S93Mjb": "ttz-channels"
            };
function styles() {  
                //TTZ User styles
    			$.each(users, function(key, value) {
                		$('[data-username="' + key + '"]').addClass(value);
                });            		

            	//TTZ Channel styles
            
            	$.each(channel, function(key, value) {
               		 $('section#chat-window-' + key).addClass(value);
            	});
            	var path = window.location.pathname.split('/', 2);
            	if (path == ',channel' || ',group') {
               		 $('.tab-button-icon--team').parents('div.js-action').click();
            	}
            	if (path == ',direct') {
                	$('.tab-button-icon--user').parents('div.js-action').click();
           		 }
};

styles();

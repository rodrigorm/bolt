"use strict";

require('node-thrust')(function(err, api) {
	var window = api.window({
		root_url: 'file://' + require('path').resolve(__dirname, 'index.html'),
		title: 'Bolt'
	});

	window.on('closed', function() {
		try {
			process.kill('-' + process.pid);
		}
		finally {
			process.exit(0);
		}
	});

	window.show();
    window.open_devtools();
});

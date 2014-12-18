'use strict';

var app = angular.module('App');

app.constant('Config', {
	API : {
		urlWS : 'ws://' + window.location.hostname + ':' + (window.location.port || 80) + window.location.pathname + 'server',
		urlAPI : window.location.protocol + '//' + window.location.hostname + ':' + (window.location.port || 80) + window.location.pathname + 'api/',
	}
});

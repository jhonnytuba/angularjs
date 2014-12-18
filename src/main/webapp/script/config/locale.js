'use strict';

var app = angular.module('App');

app.config(function(tmhDynamicLocaleProvider) {
	tmhDynamicLocaleProvider.localeLocationPattern('bower_components/angular-i18n/angular-locale_{{locale}}.js');
});

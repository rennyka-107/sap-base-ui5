sap.ui.define([
	"sap/ui/core/ComponentContainer"
], function (ComponentContainer) {
	"use strict";

	new ComponentContainer({
		name: "sap-app",
		settings : {
			id : "sap-app"
		},
		async: true
	}).placeAt("content");

});

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 SOLCATSet in the list
// * All 3 SOLCATSet have at least one SolCatToSol

sap.ui.require([
	"sap/ui/test/Opa5",
	"supportsolutionsdisp/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"supportsolutionsdisp/test/integration/pages/App",
	"supportsolutionsdisp/test/integration/pages/Browser",
	"supportsolutionsdisp/test/integration/pages/Master",
	"supportsolutionsdisp/test/integration/pages/Detail",
	"supportsolutionsdisp/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "supportsolutionsdisp.view."
	});

	sap.ui.require([
		"supportsolutionsdisp/test/integration/MasterJourney",
		"supportsolutionsdisp/test/integration/NavigationJourney",
		"supportsolutionsdisp/test/integration/NotFoundJourney",
		"supportsolutionsdisp/test/integration/BusyJourney",
		"supportsolutionsdisp/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});
jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"supportsolutionsdisp/test/integration/NavigationJourneyPhone",
		"supportsolutionsdisp/test/integration/NotFoundJourneyPhone",
		"supportsolutionsdisp/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});
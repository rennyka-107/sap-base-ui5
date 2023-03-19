sap.ui.define(
  ["sap-app/controllers/BaseController", "sap/ui/model/json/JSONModel"],
  function (BaseController, JSONModel) {
    "use strict";
    return BaseController.extend("sap-app.controllers.index", {
      onInit: function () {
      },
      onAfterRendering: function () {
        this.getRouter().navTo("listItems");
      },
    });
  }
);

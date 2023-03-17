sap.ui.define(
  ["sap-app/controllers/BaseController", "sap/ui/model/json/JSONModel"],
  function (BaseController, JSONModel) {
    "use strict";
    return BaseController.extend("sap-app.controllers.Employee.Detail", {
      onInit: function () {
        
      },
      onAfterRendering: function () {
        console.log("after rendering");
      },
    });
  }
);

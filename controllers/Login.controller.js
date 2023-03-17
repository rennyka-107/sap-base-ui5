sap.ui.define(
    ["sap-app/controllers/BaseController", "sap/ui/model/json/JSONModel"],
    function (BaseController, JSONModel) {
      "use strict";
      return BaseController.extend("sap-app.controllers.Login", {
        onInit: function () {
          console.log("login init")
        },
        onAfterRendering: function () {
        //   console.log("before rendering");
        },
      });
    }
  );
  
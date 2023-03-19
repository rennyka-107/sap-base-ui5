sap.ui.define(
    ["sap-app/controllers/BaseController", "sap/ui/model/json/JSONModel"],
    function (BaseController, JSONModel) {
      "use strict";
      return BaseController.extend("sap-app.controllers.Employee.index", {
        // onShowHello: function () {
        //   this.getRouter().navTo("listItems");
        // },
        // onInit: function () {
        // },
        // onAfterRendering: function () {
        //   console.log("before rendering");
        // },
        onNavToEmployees: function() {
            console.log("wtf");
            this.getRouter().navTo("employeeList")
        }
      });
    }
  );
  
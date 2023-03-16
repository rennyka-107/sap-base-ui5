sap.ui.define(
  ["sap/ui/model/json/JSONModel", "sap-app/controllers/BaseController"],
  function (BaseController, JSONModel) {
    "use strict";
    return BaseController.extend("sap-app.controllers.list-items", {
      onInit: function () {
        console.log(123);
        fetch("../models/data.json")
          .then((res) => res.json())
          .then((res) => {
            const model = new JSONModel({
              users: res.data,
              user: {
                name: "Long",
                age: "123",
              },
            });
            this.getView().setModel(model);
          });
      },
    });
  }
);

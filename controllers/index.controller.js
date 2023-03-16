sap.ui.define(
  ["sap-app/controllers/BaseController", "sap/ui/model/json/JSONModel"],
  function (BaseController, JSONModel) {
    "use strict";
    return BaseController.extend("sap-app.controllers.index", {
      onShowHello: function () {
        this.getRouter().navTo("listItems");
      },
      onInit: function () {
        console.log(345)
        // fetch("../models/data.json")
        //   .then((res) => res.json())
        //   .then((res) => {
        //     const model = new JSONModel({
        //       users: res.data,
        //       user: {
        //         name: "Long",
        //         age: "123",
        //       },
        //     });
        //     this.getView().setModel(model);
        //     console.log(res, "res");
        //   });
        // fetch("../models/data.json")
        //   .then((res) => res.json())
        //   .then((res) => {
        //     const data = {
        //         user: {
        //           name: "Long",
        //           age: "28",
        //         },
        //       };
        //     const model = new JSONModel(data);
        //     this.getView().setModel(model);
        //     console.log(res);
        //   });
      },
    });
  }
);

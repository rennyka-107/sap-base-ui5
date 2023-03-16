sap.ui.define(
  [
    "sap-app/controllers/BaseController",
    "sap/ui/model/json/JSONModel",
  ],
  function (BaseController,JSONModel) {
    "use strict";
    return BaseController.extend("sap-app.controllers.index", {
      stringCall: "Hello Long",
      onShowHello: function () {
        // show a native JavaScript alert
        // alert(this.stringCall);
        // console.log(this, "this")
        this.getRouter().navTo("listItems");
      },
      onChangeInput: function () {
        // console.log(this.getView().getModel().oData.user.name);
      },
      onInit: function () {
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
            console.log(res, "res");
          });
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

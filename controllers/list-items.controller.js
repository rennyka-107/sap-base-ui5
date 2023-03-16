sap.ui.define(
  ["sap/ui/model/json/JSONModel", "sap-app/controllers/BaseController"],
  function (BaseController, JSONModel) {
    "use strict";
    return BaseController.extend("sap-app.controllers.list-items", {
      onInit: function () {
        console.log(123123)
        fetch("../models/data.json")
          .then((res) => res.json())
          .then((res) => {
            const model = new JSONModel({ users: res.data, user: {
                name: "Long",
                age: "123"
              }});
            this.getView().setModel(model);
          });
        // const model = new JSONModel({
        //   users: [
        //     { name: "Long", age: "28" },
        //     { name: "Linh", age: "26" },
        //     { name: "Minh", age: "Con ngan con" },
        //     { name: "Trung", age: "27" },
        //     { name: "Hiếu", age: "27" },
        //     { name: "Dũng", age: "28" },
        //     { name: "An", age: "unlimited" },
        //   ],
        //   user: {
        //     name: "Long",
        //     age: "123"
        //   }
        // });
        // this.getView().setModel(model);
        // console.log(this.getView(), 123)
      },
    });
  }
);

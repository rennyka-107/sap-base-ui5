sap.ui.define(
  ["sap-app/controllers/BaseController", "sap/ui/model/json/JSONModel"],
  function (BaseController, JSONModel) {
    "use strict";
    return BaseController.extend("sap-app.controllers.Employee.List", {
      onInit: function () {
        fetch("../../models/data.json")
          .then((res) => res.json())
          .then((res) => {
            const model = new JSONModel({
              users: res.data,
              user: {
                name: "Long",
                age: "123",
              },
              product: {
                "ProductId": "HT-1000",
                "Category": "Laptops",
                "MainCategory": "Computer Systems",
                "TaxTarifCode": "1",
                "SupplierName": "Very Best Screens",
                "WeightMeasure": 4.2,
                "WeightUnit": "KG",
                "Description": "Notebook Basic 15 with 2,80 GHz quad core, 15\" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro",
                "Name": "Notebook Basic 15",
                "DateOfSale": "2017-03-26",
                "ProductPicUrl": "https://sdk.openui5.org/test-resources/sap/ui/documentation/sdk/images/HT-1000.jpg",
                "Status": "Available",
                "Quantity": 10,
                "UoM": "PC",
                "CurrencyCode": "EUR",
                "Price": 956,
                "Width": 30,
                "Depth": 18,
                "Height": 3,
                "DimUnit": "cm"
              }
            });
            this.getView().setModel(model);
            console.log(res, "res");
          });
      },
      onAfterRendering: function () {
        console.log("after rendering");
      },
      onListItemPress: function(n) {
        console.log("haha", n);
        this.getRouter().navTo("employeeDetail", { id: n })
      }
    });
  }
);

/*
    If you are using the sample RESTFul services I published on GitHub, use the following URLs...

      - For the Node.js sample backend (available in https://github.com/ccoenraets/app-rest-nodejs)
        Use: http://localhost:3000/employees

      - For the PHP sample backend (available in https://github.com/ccoenraets/app-rest-php)
        Use: /app-rest-php/employees

 */

app.Employee = Backbone.Model.extend({

    urlRoot:"http://localhost:3000/employees",
//    urlRoot:"/app-rest-php/employees",

    initialize:function () {
        this.reports = new app.EmployeeCollection();
        this.reports.url = this.urlRoot + "/" + this.id + "/reports";
    }

});

app.EmployeeCollection = Backbone.Collection.extend({

    model: app.Employee,

    url:"http://localhost:3000/employees"
//    url:"/app-rest-php/employees"

});

var originalSync = Backbone.sync;
Backbone.sync = function (method, model, options) {
    if (method === "read") {
        options.dataType = "jsonp";
        return originalSync.apply(Backbone, arguments);
    }

};
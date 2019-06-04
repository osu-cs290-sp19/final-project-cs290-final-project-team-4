(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['categories-list'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials["category-list-question"],depth0,{"name":"category-list-question","data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "﻿<!DOCTYPE html>\r\n\r\n<html lang=\"en\" xmlns=\"http://www.w3.org/1999/xhtml\">\r\n<head>\r\n    <meta charset=\"utf-8\" />\r\n    <title>categories-list</title>\r\n    <link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.8.1/css/all.css\" crossorigin=\"anonymous\">\r\n    <script> </script>\r\n</head>\r\n<body>\r\n    <header>\r\n        <div>\r\n            <h1 class=\"site-title\">POLLS</h1>\r\n            <div class=\"loginContainer\">\r\n                <div class=\"loginInfo\">\r\n                    <input type=\"text\" id=\"login-username\" placeholder=\"Username...\"></li>\r\n                </div>\r\n                <div class=\"loginInfo\">\r\n                    <input type=\"text\" id=\"login-password\" placeholder=\"Password...\"></li>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div>\r\n            <nav class=\"nav-bar\">\r\n                <ul class=\"nav-list\">\r\n                    <li class=\"nav-item\"><a href=\"public/create-question.html\">Ask</a></li>\r\n                    <li class=\"nav-item\"><a href=\"public/answer_question.html\">Answer</a></li>\r\n                    <li class=\"nav-item\"><a href=\"public/categories.html\">Categories</a></li>\r\n                    <li class=\"nav-item nav-log\"><a href=\"#\">Login</a></li>\r\n                 </ul>\r\n          </nav>\r\n        </div>\r\n    </header>\r\n\r\n    <main class=\"home-container\">\r\n        <div class=\"category-title\">\r\n            <p>"
    + container.escapeExpression(((helper = (helper = helpers["category-name"] || (depth0 != null ? depth0["category-name"] : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"category-name","hash":{},"data":data}) : helper)))
    + "</p>\r\n        </div>\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.questions : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n\r\n    </main>\r\n\r\n\r\n\r\n</body>\r\n</html>\r\n";
},"usePartial":true,"useData":true});
})();
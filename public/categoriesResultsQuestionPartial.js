(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['category-list-question'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "﻿<div class=\"question-container\">\r\n    <div class=\"question\">\r\n        <p>"
    + alias4(((helper = (helper = helpers.question || (depth0 != null ? depth0.question : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"question","hash":{},"data":data}) : helper)))
    + "</p>\r\n    </div>\r\n    <div class=\"author\">\r\n        <p>"
    + alias4(((helper = (helper = helpers.author || (depth0 != null ? depth0.author : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author","hash":{},"data":data}) : helper)))
    + "</p>\r\n    </div>\r\n    <div class=\"answer\">\r\n        <p>"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.choices : depth0)) != null ? stack1.A : stack1), depth0))
    + "</p>\r\n    </div>\r\n    <div class=\"answer\">\r\n        <p>"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.choices : depth0)) != null ? stack1.B : stack1), depth0))
    + "</p>\r\n    </div>\r\n</div>\r\n";
},"useData":true});
})();
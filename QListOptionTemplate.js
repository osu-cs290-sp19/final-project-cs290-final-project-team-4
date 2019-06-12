(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['categoryQListOption'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "﻿<div class=\"answer\">\r\n    <p>"
    + container.escapeExpression(((helper = (helper = helpers.option || (depth0 != null ? depth0.option : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"option","hash":{},"data":data}) : helper)))
    + "</p>\r\n</div>";
},"useData":true});
})();
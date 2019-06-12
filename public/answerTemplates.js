(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['homeAnswer'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"question-dice answer-one-icon\">\r\n  <div type=\"button\" class=\"answer-choice-event-button\"><i class=\"fas fa-dice-one\"></i><p class=\"optionCont\">"
    + container.escapeExpression(((helper = (helper = helpers.option || (depth0 != null ? depth0.option : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"option","hash":{},"data":data}) : helper)))
    + "</p></div>\r\n</div>\r\n";
},"useData":true});
templates['categoryQListAnswer'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"question-dice answer-one-icon\">\r\n  <p><i class=\"fas fa-dice-one\"></i>"
    + container.escapeExpression(((helper = (helper = helpers.option || (depth0 != null ? depth0.option : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"option","hash":{},"data":data}) : helper)))
    + "</p>\r\n</div>\r\n";
},"useData":true});
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['answerStatsBox'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"answer-stats-box\">\n    <div class=\"answer-choice-name\">\n      <p>"
    + alias4(((helper = (helper = helpers.option || (depth0 != null ? depth0.option : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"option","hash":{},"data":data}) : helper)))
    + "</p>\n    </div>\n    <div>\n      <p class=\"percentage\">"
    + alias4(((helper = (helper = helpers.num || (depth0 != null ? depth0.num : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"num","hash":{},"data":data}) : helper)))
    + "</p>\n    </div>\n  </div>\n";
},"useData":true});
templates['answerButton'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<button type=\"button\" class=\"answer-choice-button answer-choice-event-button\">"
    + container.escapeExpression(((helper = (helper = helpers.option || (depth0 != null ? depth0.option : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"option","hash":{},"data":data}) : helper)))
    + "</button>\n";
},"useData":true});
})();
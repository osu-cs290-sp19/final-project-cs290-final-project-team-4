(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['questionStats'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.questionStatsPercentages,depth0,{"name":"questionStatsPercentages","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"question-stats-container\">\r\n    <div class=\"question question-stats-box\">\r\n      <h3 class=\"question-stats-text\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.questions : depth0)) != null ? stack1.text : stack1), depth0))
    + "</h3>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.questions : depth0)) != null ? stack1.choices : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      <div><canvas id=\"question-stats-chart\" width=\"400\", height=\"400\"></canvas></div>\r\n    </div>\r\n</div>\r\n";
},"usePartial":true,"useData":true});
templates['homepageQuestionStat'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"answer-stats-box homepageStat\">"
    + alias4(((helper = (helper = helpers.option || (depth0 != null ? depth0.option : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"option","hash":{},"data":data}) : helper)))
    + " <p class=\"percentage homepageStat\">"
    + alias4(((helper = (helper = helpers.num || (depth0 != null ? depth0.num : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"num","hash":{},"data":data}) : helper)))
    + "</p></div>\r\n";
},"useData":true});
})();
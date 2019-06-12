(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['questionStats'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.questionStatsPercentages,depth0,{"name":"questionStatsPercentages","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"question-stats-container\">\n    <div class=\"question question-stats-box\">\n      <h3 class=\"question-stats-text\">"
    + container.escapeExpression(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"text","hash":{},"data":data}) : helper)))
    + "</h3>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.choices : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      <div><canvas id=\"question-stats-chart\" width=\"400\", height=\"400\"></canvas></div>\n    </div>\n</div>\n";
},"usePartial":true,"useData":true});
})();
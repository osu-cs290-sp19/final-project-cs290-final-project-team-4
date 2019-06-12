(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['homeQuestion'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.homeAnswer,depth0,{"name":"homeAnswer","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "         <div class=\"answer-stats-box homepageStat\">\r\n              <div>"
    + alias4(((helper = (helper = helpers.option || (depth0 != null ? depth0.option : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"option","hash":{},"data":data}) : helper)))
    + "</div>\r\n              <p class=\"percentage homepageStat\">"
    + alias4(((helper = (helper = helpers.num || (depth0 != null ? depth0.num : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"num","hash":{},"data":data}) : helper)))
    + "</p>\r\n         </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {});

  return "  <article class=\"question homepageQuestion\">\r\n    <div class=\"question-icon\">\r\n      <i class=\"far fa-question-circle\"></i>\r\n    </div>\r\n    <div class=\"question-content\">\r\n        <p class=\"question-text\">\r\n            <h3>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.questions : depth0)) != null ? stack1.text : stack1), depth0))
    + "</h3>\r\n        </p>\r\n        <p class=\"question-author\">\r\n            <a href=\"#\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.questions : depth0)) != null ? stack1.author : stack1), depth0))
    + "</a>\r\n        </p>\r\n"
    + ((stack1 = helpers.each.call(alias3,((stack1 = (depth0 != null ? depth0.questions : depth0)) != null ? stack1.choices : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\r\n  </article>\r\n\r\n  <article class=\"question homeQuestionFiller hidden\">\r\n      <h3>"
    + alias2(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias3,{"name":"text","hash":{},"data":data}) : helper)))
    + "</h3>\r\n"
    + ((stack1 = helpers.each.call(alias3,((stack1 = (depth0 != null ? depth0.questions : depth0)) != null ? stack1.choices : stack1),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </article>\r\n";
},"usePartial":true,"useData":true});
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['categoryQListEntry'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.categoryQListAnswer,depth0,{"name":"categoryQListAnswer","data":data,"indent":"          ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "﻿<a href=\"/answer_question/"
    + alias4(((helper = (helper = helpers.cat || (depth0 != null ? depth0.cat : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cat","hash":{},"data":data}) : helper)))
    + "/"
    + alias4(((helper = (helper = helpers.num || (depth0 != null ? depth0.num : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"num","hash":{},"data":data}) : helper)))
    + "\"  class=\"question catQuestion\">\r\n    <div class=\"question-content\">\r\n        <div class=\"question-text\">\r\n            <h3>"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.questions : depth0)) != null ? stack1.text : stack1), depth0))
    + "</h3>\r\n        </div>\r\n        <div class=\"question-author\">\r\n            <p>"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.questions : depth0)) != null ? stack1.author : stack1), depth0))
    + "</p>\r\n        </div>\r\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.questions : depth0)) != null ? stack1.choices : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\r\n</a>\r\n";
},"usePartial":true,"useData":true});
})();
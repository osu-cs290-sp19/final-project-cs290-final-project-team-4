(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['categoryQListEntry'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "﻿<div class=\"question\">\r\n    <a href=\"/answer_question/"
    + alias4(((helper = (helper = helpers.cat || (depth0 != null ? depth0.cat : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cat","hash":{},"data":data}) : helper)))
    + "/"
    + alias4(((helper = (helper = helpers.num || (depth0 != null ? depth0.num : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"num","hash":{},"data":data}) : helper)))
    + "\" class=\"question-content\">\r\n        <div class=\"question-text\">\r\n            <h3>"
    + alias4(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data}) : helper)))
    + "</h3>\r\n        </div>\r\n        <div class=\"question-author\">\r\n            <p>"
    + alias4(((helper = (helper = helpers.author || (depth0 != null ? depth0.author : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author","hash":{},"data":data}) : helper)))
    + "</p>\r\n        </div>\r\n        <div class=\"question-dice answer-one-icon\">\r\n            <p>"
    + alias4(alias5(((stack1 = ((stack1 = (depth0 != null ? depth0.choices : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1.option : stack1), depth0))
    + " <i class=\"fas fa-dice-one\"></i></p>\r\n        </div>\r\n        <div class=\"question-dice answer-two-icon\">\r\n            <p>"
    + alias4(alias5(((stack1 = ((stack1 = (depth0 != null ? depth0.choices : depth0)) != null ? stack1["1"] : stack1)) != null ? stack1.option : stack1), depth0))
    + " <i class=\"fas fa-dice-two\"></i></p>\r\n        </div>\r\n    </a>\r\n</div>\r\n";
},"useData":true});
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['answerQuestion'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "﻿<div class=\"hidden num1\">"
    + alias4(((helper = (helper = helpers.Ans1s || (depth0 != null ? depth0.Ans1s : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Ans1s","hash":{},"data":data}) : helper)))
    + "</div>\r\n<div class=\"hidden num2\">"
    + alias4(((helper = (helper = helpers.Ans2s || (depth0 != null ? depth0.Ans2s : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Ans2s","hash":{},"data":data}) : helper)))
    + "</div>\r\n<article class=\"top-bar\">\r\n    <div class=\"questionBox\">\r\n        <p>"
    + alias4(((helper = (helper = helpers.question || (depth0 != null ? depth0.question : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"question","hash":{},"data":data}) : helper)))
    + "</p>\r\n    </div>\r\n    <div class=\"return-button-container\">\r\n        <a href=\"categories.html\" class=\"return-to-category-button\">Return to List</a>\r\n    </div>\r\n</article>\r\n<main class=\"answerContainer\">\r\n    <button type=\"button\" class=\"answer-choice-button\">"
    + alias4(((helper = (helper = helpers.option1 || (depth0 != null ? depth0.option1 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"option1","hash":{},"data":data}) : helper)))
    + "</button>\r\n    <button type=\"button\" class=\"answer-choice-button\">"
    + alias4(((helper = (helper = helpers.option2 || (depth0 != null ? depth0.option2 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"option2","hash":{},"data":data}) : helper)))
    + "</button>\r\n    <div class=\"answer-stats-box\">\r\n        <div class=\"answer-choice-name\">\r\n            <p>"
    + alias4(((helper = (helper = helpers.Ans1 || (depth0 != null ? depth0.Ans1 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Ans1","hash":{},"data":data}) : helper)))
    + "</p>\r\n        </div>\r\n        <div class=\"percentage\">\r\n\r\n        </div>\r\n    </div>\r\n    <div class=\"answer-stats-box\">\r\n        <div class=\"answer-choice-name\">\r\n            <p>"
    + alias4(((helper = (helper = helpers.Ans2 || (depth0 != null ? depth0.Ans2 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Ans2","hash":{},"data":data}) : helper)))
    + "</p>\r\n        </div>\r\n        <div class=\"percentage\">\r\n\r\n        </div>\r\n    </div>\r\n    <a href=\"/answer_question/"
    + alias4(((helper = (helper = helpers.cat || (depth0 != null ? depth0.cat : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cat","hash":{},"data":data}) : helper)))
    + "/"
    + alias4(((helper = (helper = helpers.num || (depth0 != null ? depth0.num : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"num","hash":{},"data":data}) : helper)))
    + "\" class=\"dont-answer-button\">I prefer not to answer. Next Question.</a>\r\n</main>\n";
},"useData":true});
})();
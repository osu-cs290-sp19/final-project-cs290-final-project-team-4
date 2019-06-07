(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['answerQuestion'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "﻿<!DOCTYPE html>\n\n<html>\n<head>\n    <meta charset=\"utf-8\" />\n    <title>Answer Questions</title>\n    <link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.8.1/css/all.css\" crossorigin=\"anonymous\">\n\n    <link rel=\"stylesheet\" href=\"answerQuestions.css\" media=\"screen\">\n\n    <script src=\"answerQuestions.js\" charset=\"utf-8\" defer></script>\n</head>\n\n<body>\r\n    <div class=\"hidden num1\">"
    + alias4(((helper = (helper = helpers.num1 || (depth0 != null ? depth0.num1 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"num1","hash":{},"data":data}) : helper)))
    + "</div>\r\n    <div class=\"hidden num2\">"
    + alias4(((helper = (helper = helpers.num2 || (depth0 != null ? depth0.num2 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"num2","hash":{},"data":data}) : helper)))
    + "</div>\r\n    <article class=\"top-bar\">\r\n        <div class=\"questionBox\">\r\n            <p>"
    + alias4(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data}) : helper)))
    + "</p>\r\n        </div>\r\n        <div class=\"return-button-container\">\r\n            <a href=\"categories.html\" class=\"return-to-category-button\">Return to List</a>\r\n        </div>\r\n    </article>\r\n    <main class=\"answerContainer\">\r\n        <button type=\"button\" class=\"answer-choice-button\">"
    + alias4(((helper = (helper = helpers.option1 || (depth0 != null ? depth0.option1 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"option1","hash":{},"data":data}) : helper)))
    + "</button>\r\n        <button type=\"button\" class=\"answer-choice-button\">"
    + alias4(((helper = (helper = helpers.option2 || (depth0 != null ? depth0.option2 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"option2","hash":{},"data":data}) : helper)))
    + "</button>\r\n        <div class=\"answer-stats-box\">\r\n            <div class=\"answer-choice-name\">\r\n                <p>"
    + alias4(((helper = (helper = helpers.option1 || (depth0 != null ? depth0.option1 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"option1","hash":{},"data":data}) : helper)))
    + "</p>\r\n            </div>\r\n            <div class=\"percentage\">\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"answer-stats-box\">\r\n            <div class=\"answer-choice-name\">\r\n                <p>"
    + alias4(((helper = (helper = helpers.option2 || (depth0 != null ? depth0.option2 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"option2","hash":{},"data":data}) : helper)))
    + "</p>\r\n            </div>\r\n            <div class=\"percentage\">\r\n\r\n            </div>\r\n        </div>\r\n        <a href=\"/answer_question/"
    + alias4(((helper = (helper = helpers.cat || (depth0 != null ? depth0.cat : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cat","hash":{},"data":data}) : helper)))
    + "/"
    + alias4(((helper = (helper = helpers.num || (depth0 != null ? depth0.num : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"num","hash":{},"data":data}) : helper)))
    + "\" class=\"dont-answer-button\">I prefer not to answer. Next Question.</a>\r\n    </main>\r\n</body>\n</html>\n";
},"useData":true});
})();
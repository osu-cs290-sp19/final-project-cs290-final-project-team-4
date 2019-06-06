(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['homeQuestion'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<main class=\"home-container\">\r\n\r\n  <article class=\"question\">\r\n    <div class=\"question-icon\">\r\n      <i class=\"far fa-question-circle\"></i>\r\n    </div>\r\n    <div class=\"question-content\">\r\n      <p class=\"question-text\">\r\n        "
    + alias4(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data}) : helper)))
    + "\r\n      </p>\r\n      <p class=\"question-author\">\r\n        <a href=\"#\">"
    + alias4(((helper = (helper = helpers.author || (depth0 != null ? depth0.author : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author","hash":{},"data":data}) : helper)))
    + "</a>\r\n      </p>\r\n       <div class=\"question-dice answer-one-icon\">\r\n         <a href=\"#\">"
    + alias4(((helper = (helper = helpers.answerOne || (depth0 != null ? depth0.answerOne : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"answerOne","hash":{},"data":data}) : helper)))
    + "<i class=\"fas fa-dice-one\"></i></a>\r\n      </div>\r\n      <div class=\"question-dice answer-two-icon\">\r\n        <a href=\"#\">"
    + alias4(((helper = (helper = helpers.answerTwo || (depth0 != null ? depth0.answerTwo : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"answerTwo","hash":{},"data":data}) : helper)))
    + "<i class=\"fas fa-dice-two\"></i></a>\r\n      </div>\r\n   </div>\r\n  </article>\r\n";
},"useData":true});
})();
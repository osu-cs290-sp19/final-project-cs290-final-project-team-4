(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['homeQuestion'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "  <article class=\"question\">\r\n    <div class=\"question-icon\">\r\n      <i class=\"far fa-question-circle\"></i>\r\n    </div>\r\n    <div class=\"question-content\">\r\n      <p class=\"question-text\">\r\n        <h3>"
    + alias4(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data}) : helper)))
    + "</h3>\r\n      </p>\r\n      <p class=\"question-author\">\r\n        <a href=\"#\">"
    + alias4(((helper = (helper = helpers.author || (depth0 != null ? depth0.author : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author","hash":{},"data":data}) : helper)))
    + "</a>\r\n      </p>\r\n       <div class=\"question-dice answer-one-icon\">\r\n         <a href=\"#\">"
    + alias4(alias5(((stack1 = ((stack1 = (depth0 != null ? depth0.choices : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1.option : stack1), depth0))
    + "<i class=\"fas fa-dice-one\"></i></a>\r\n         <p>"
    + alias4(alias5(((stack1 = ((stack1 = (depth0 != null ? depth0.choices : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1.num : stack1), depth0))
    + "</p>\r\n      </div>\r\n      <div class=\"question-dice answer-two-icon\">\r\n        <a href=\"#\">"
    + alias4(alias5(((stack1 = ((stack1 = (depth0 != null ? depth0.choices : depth0)) != null ? stack1["1"] : stack1)) != null ? stack1.option : stack1), depth0))
    + "<i class=\"fas fa-dice-two\"></i></a>\r\n        <p>"
    + alias4(alias5(((stack1 = ((stack1 = (depth0 != null ? depth0.choices : depth0)) != null ? stack1["1"] : stack1)) != null ? stack1.num : stack1), depth0))
    + "</p>\r\n      </div>\r\n   </div>\r\n  </article>\r\n";
},"useData":true});
})();
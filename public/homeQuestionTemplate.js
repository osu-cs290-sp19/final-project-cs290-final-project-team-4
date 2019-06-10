(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['homeQuestion'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "  <article class=\"question\">\n    <div class=\"question-icon\">\n      <i class=\"far fa-question-circle\"></i>\n    </div>\n    <div class=\"question-content\">\n      <p class=\"question-text\">\n        <h3>"
    + alias4(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data}) : helper)))
    + "</h3>\n      </p>\n      <p class=\"question-author\">\n        <a href=\"#\">"
    + alias4(((helper = (helper = helpers.author || (depth0 != null ? depth0.author : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author","hash":{},"data":data}) : helper)))
    + "</a>\n      </p>\n       <div class=\"question-dice answer-one-icon\">\n         <a href=\"#\">"
    + alias4(alias5(((stack1 = ((stack1 = (depth0 != null ? depth0.choices : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1.option : stack1), depth0))
    + "<i class=\"fas fa-dice-one\"></i></a>\n         <p>"
    + alias4(alias5(((stack1 = ((stack1 = (depth0 != null ? depth0.choices : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1.num : stack1), depth0))
    + "</p>\n      </div>\n      <div class=\"question-dice answer-two-icon\">\n        <a href=\"#\">"
    + alias4(alias5(((stack1 = ((stack1 = (depth0 != null ? depth0.choices : depth0)) != null ? stack1["1"] : stack1)) != null ? stack1.option : stack1), depth0))
    + "<i class=\"fas fa-dice-two\"></i></a>\n        <p>"
    + alias4(alias5(((stack1 = ((stack1 = (depth0 != null ? depth0.choices : depth0)) != null ? stack1["1"] : stack1)) != null ? stack1.num : stack1), depth0))
    + "</p>\n      </div>\n   </div>\n  </article>\n";
},"useData":true});
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['homeQuestion'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "  <article class=\"question\">\r\n    <div class=\"question-icon\">\r\n      <i class=\"far fa-question-circle\"></i>\r\n    </div>\r\n    <div class=\"question-content\">\r\n      <p class=\"question-text\">\r\n        <h3>"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.questions : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1.text : stack1), depth0))
    + "</h3>\r\n      </p>\r\n      <p class=\"question-author\">\r\n        <a href=\"#\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.questions : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1.author : stack1), depth0))
    + "</a>\r\n      </p>\r\n       <div class=\"question-dice answer-one-icon\">\r\n         <a href=\"#\">"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.questions : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1.choices : stack1)) != null ? stack1["0"] : stack1)) != null ? stack1.option : stack1), depth0))
    + "<i class=\"fas fa-dice-one\"></i></a>\r\n         <p>"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.questions : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1.choices : stack1)) != null ? stack1["0"] : stack1)) != null ? stack1.num : stack1), depth0))
    + "</p>\r\n      </div>\r\n      <div class=\"question-dice answer-two-icon\">\r\n        <a href=\"#\">"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.questions : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1.choices : stack1)) != null ? stack1["1"] : stack1)) != null ? stack1.option : stack1), depth0))
    + "<i class=\"fas fa-dice-two\"></i></a>\r\n        <p>"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.questions : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1.choices : stack1)) != null ? stack1["1"] : stack1)) != null ? stack1.num : stack1), depth0))
    + "</p>\r\n      </div>\r\n   </div>\r\n  </article>\r\n";
},"useData":true});
})();
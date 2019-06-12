(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['homeQuestion'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.homeAnswer,depth0,{"name":"homeAnswer","data":data,"indent":"          ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.homepageQuestionStat,depth0,{"name":"homepageQuestionStat","data":data,"indent":"             ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "  <article class=\"question homepageQuestion\">\r\n    <div class=\"question-icon\">\r\n      <i class=\"far fa-question-circle\"></i>\r\n    </div>\r\n    <div class=\"question-content\">\r\n        <textarea class=\"HPQuestionID hidden\" >"
    + alias4(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data}) : helper)))
    + "</textarea>\r\n        <textarea class=\"HPQuestionName hidden\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</textarea>\r\n        <p class=\"question-text\">\r\n            <h3>"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.questions : depth0)) != null ? stack1.text : stack1), depth0))
    + "</h3>\r\n        </p>\r\n        <p class=\"question-author\">\r\n            <a href=\"javascript:void(0);\">"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.questions : depth0)) != null ? stack1.author : stack1), depth0))
    + "</a>\r\n        </p>\r\n        <div class=\"home-answers-container\">\r\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.questions : depth0)) != null ? stack1.choices : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\r\n        <div class=\"homeQuestionFiller\">\r\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.questions : depth0)) != null ? stack1.choices : stack1),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\r\n    </div>\r\n  </article>\r\n";
},"usePartial":true,"useData":true});
})();
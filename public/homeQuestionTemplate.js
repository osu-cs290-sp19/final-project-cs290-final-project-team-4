(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['homeQuestion'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

<<<<<<< HEAD
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
=======
  return ((stack1 = container.invokePartial(partials.homeAnswer,depth0,{"name":"homeAnswer","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "         <div class=\"answer-stats-box homepageStat\">\r\n              <div>"
    + alias4(((helper = (helper = helpers.option || (depth0 != null ? depth0.option : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"option","hash":{},"data":data}) : helper)))
    + "</div>\r\n              <p class=\"percentage homepageStat\">"
    + alias4(((helper = (helper = helpers.num || (depth0 != null ? depth0.num : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"num","hash":{},"data":data}) : helper)))
    + "</p>\r\n         </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "  <article class=\"question homepageQuestion\">\r\n    <div class=\"question-icon\">\r\n      <i class=\"far fa-question-circle\"></i>\r\n    </div>\r\n    <div class=\"question-content\">\r\n        <p class=\"question-text\">\r\n            <h3>"
    + alias4(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data}) : helper)))
    + "</h3>\r\n        </p>\r\n        <p class=\"question-author\">\r\n            <a href=\"#\">"
    + alias4(((helper = (helper = helpers.author || (depth0 != null ? depth0.author : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author","hash":{},"data":data}) : helper)))
    + "</a>\r\n        </p>\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.choices : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\r\n  </article>\r\n\r\n  <article class=\"question homeQuestionFiller hidden\">\r\n      <h3>"
    + alias4(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data}) : helper)))
    + "</h3>\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.choices : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </article>";
},"usePartial":true,"useData":true});
>>>>>>> 0f1c2dd73a5aff3ec1ad0527b870cc43307a178b
})();
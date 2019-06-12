(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['header'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<header>\n  <div>\n     <h1 class=\"site-title\">POLLS</h1>\n      <div class=\"loginContainer\">\n          <div class=\"loginInfo\">\n            <input type=\"text\" id=\"login-username\" placeholder=\"Username...\"></li>\n          </div>\n          <div class=\"loginInfo\">\n            <input type=\"text\" id=\"login-password\" placeholder=\"Password...\"></li>\n          </div>\n      </div>\n   </div>\n   <div>\n      <nav class=\"nav-bar\">\n        <ul class=\"nav-list\">\n           <li class=\"nav-item\"><i class=\"bars-icon fa fa-bars\"></i></li>\n           <li class=\"nav-item active\"><a href=\"/\">Home</a></li>\n           <li class=\"nav-item\"><a href=\"/create_question\">Ask a Question</a></li>\n<!--           <li class=\"nav-item\"><a href=\"/answer_question\">Answer a Question</a></li>-->\n           <li class=\"nav-item\"><a href=\"/categories\">Categories</a></li>\n           <li class=\"nav-item\"><a href=\"/stats/Brian\">Stats</a/></li>\n\n<!--                  <div class=\"nav-item nav-drop\">\n              <button class=\"nav-item nav-drop-button\">Categories</button>\n                <div class=\"nav-item nav-drop-down-content\">\n                <a href=\"#\">Sports</a>\n                  <a href=\"#\">Politics</a>\n                  <a href=\"#\">Food</a>\n                  <a href=\"#\">Movies & TV</a>\n                  <a href=\"#\">Would You Rather</a>\n                  <a href=\"#\">Lifestyle</a>\n                  <a href=\"#\">MISC</a>-->\n                </div>\n           </div>\n           <li class=\"nav-item nav-log\"><a href=\"#\">Login</a></li>\n         </ul>\n       </nav>\n    </div>\n  </header>\n";
},"useData":true});
})();
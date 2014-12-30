Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', hashTypes, hashContexts, escapeExpression=this.escapeExpression;


  data.buffer.push("<div>\n    <nav class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-ex1-collapse\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" href=\"#\"><img class=\"navbar-logo\" src=\"images/logo/logo-bu.png\">Job Board</img></a>\n        </div>\n        <div class=\"collapse navbar-collapse navbar-ex1-collapse\">\n        </div>\n    </nav>\n    <div class=\"container\" id=\"main\">\n        <div class=\"row\">\n            <div>\n                <div class=\"col-md-12\">\n                    ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"well\">\n	<!-- THIS IS WHERE THE LOGIN INFO SHOULD GO -->\n	<h4 class=\"primary-color\">Enter your information to login</h4>\n    <div class=\"form-group\">\n    	<label for=\"uni-email\">\n    	");
  hashContexts = {'type': depth0,'class': depth0,'id': depth0,'placeHolder': depth0,'valueBinding': depth0};
  hashTypes = {'type': "STRING",'class': "STRING",'id': "STRING",'placeHolder': "STRING",'valueBinding': "STRING"};
  options = {hash:{
    'type': ("email"),
    'class': ("form-control"),
    'id': ("uni-email"),
    'placeHolder': ("Email"),
    'valueBinding': ("controller.userEmail")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n    </div>\n    <div class=\"form-group\">\n    	<label for=\"uni-id\">\n    	");
  hashContexts = {'type': depth0,'class': depth0,'id': depth0,'placeHolder': depth0,'valueBinding': depth0};
  hashTypes = {'type': "STRING",'class': "STRING",'id': "STRING",'placeHolder': "STRING",'valueBinding': "STRING"};
  options = {hash:{
    'type': ("text"),
    'class': ("form-control"),
    'id': ("uni-id"),
    'placeHolder': ("ID #"),
    'valueBinding': ("controller.userId")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n    </div>\n    <button ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "student_submit", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" type=\"button\" class=\"btn btn-login btn-lg\">Login</button>\n    <div class=\"error-message\">\n    	<h5 class=\"text-danger\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.errorMessage", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</h5>\n    </div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["postboard"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this, functionType="function", blockHelperMissing=helpers.blockHelperMissing, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n						");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "job", "in", "job_postings", {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n						");
  data.buffer.push("\n					");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, stack2, options, hashTypes, hashContexts;
  data.buffer.push("\n							");
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  if (stack1 = helpers.newRow) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.newRow; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  hashTypes = {};
  hashContexts = {};
  if (!helpers.newRow) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n							<li class=\"col-md-4\">\n								<div class=\"job-post-container\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "showJobModal", "job.id", {hash:{},contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n									<div ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': (":job-title job.full_time")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "job.job_title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>\n									<div class=\"company-title\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "job.company_name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>\n									<div class=\"description-short\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "job.description_full", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>\n									<div class=\"flex-box-model\">\n										<div class=\"type-of-job box box1\">\n											<ul>\n												");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, "job.type_of_job", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n											</ul>\n										</div>\n			                    		<div class=\"box box2\"></div>\n				                    	<div class=\"save-job-button box box3\">\n				                    		<button class=\"btn btn-default\" \n				                    		  ");
  hashContexts = {'id': depth0};
  hashTypes = {'id': "STRING"};
  options = {hash:{
    'id': ("job.id")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(" \n				                    		  type=\"button\" \n				                    		  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addJobClick", "job.id", {hash:{},contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n				                    		>\n					                    		<span class=\"glyphicon glyphicon-plus\"></span>\n					                    	</button>\n					                    </div>\n					                </div>\n					            </div>\n					        </li>\n					        ");
  options = {hash:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  if (stack2 = helpers.endRow) { stack2 = stack2.call(depth0, options); }
  else { stack2 = depth0.endRow; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  hashTypes = {};
  hashContexts = {};
  if (!helpers.endRow) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n					    ");
  return buffer;
  }
function program3(depth0,data) {
  
  
  data.buffer.push("\n								<div class=\"row\">\n							");
  }

function program5(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n													<li>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</li>\n												");
  return buffer;
  }

function program7(depth0,data) {
  
  
  data.buffer.push("\n					        	</div>\n					        ");
  }

  data.buffer.push("<div>\n	<div id=\"overlay\" class=\"hidden\"></div>\n	<div class=\"container postboard_container\">\n		<!-- Modal Block -->\n		<div class=\"job-post-container-big hidden\">\n			<div class=\"job-title i\">\n				Job Ttitlle\n				<button type=\"button\" class=\"btn btn-default close-button\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "closeJobModal", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Close</button>\n			</div>\n			\n			<div class=\"company-title\">fsdjaslk</div>\n			<div class=\"contact-info flex-box-model well\">\n				<table>\n					<tr>\n						<td><div class=\"contact-name box box1\">Kevin Mannix</div></td>\n						<td><div class=\"contact-position box box2\">CEO</div></td>\n						<td><div class=\"contact-email box box3\">kmannix@example.com</div></td>\n					</tr>\n				</table>\n			</div>\n			<div class=\"description-long\">\n				My experience in the nature study area was full of surprises. First of all, many unexpected creatures crossed our path. For example, as soon as we left the parking area and entered the grassy path, a long snake slithered along the edge of the high grass and quickly disappeared. In addition, I was surprised by how colorful the grasses, which from a distance all appear to be green, actually are. Specifically, the primarily green landscape is dotted with countless purple tassels and brown stalks. Finally and most importantly, I was unprepared for how quickly I felt surrounded by nature. Despite the occasional noise from passing cars and airplanes, the high prairie grasses and rolling pathways create a sense that one is removed from civilization. Altogether, the nature study area unexpectedly allows one to enjoy an ever-changing natural environment without leaving Moraine’s suburban campus.\n			</div>\n			<div class=\"prereqs\">\n				<h5><span class=\"label label-primary\">Prerequisites</span></h5>\n				<ul class=\"list-group prereq-list\">\n					<li class=\"list-group-item\">Cras justo odio</li>\n					<li class=\"list-group-item\">Dapibus ac facilisis in</li>\n					<li class=\"list-group-item\">Morbi leo risus</li>\n					<li class=\"list-group-item\">Porta ac consectetur ac</li>\n					<li class=\"list-group-item\">Vestibulum at eros</li>\n				</ul>\n			</div>\n			<div class=\"flex-box-model\">\n				<div class=\"type-of-job box box1\">\n					<ul>\n						<li>Hello</li>\n						<li>Nice try</li>\n					</ul>\n				</div>\n	    		<div class=\"box box2\"></div>\n	        	<div class=\"save-job-button box box3\">\n	        		<button class=\"btn btn-default\" \n	        		  type=\"button\" \n	        		  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addJobClick", "job.id", {hash:{},contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n	        		>\n	            		<span class=\"glyphicon glyphicon-plus\"></span>\n	            	</button>\n	            </div>\n	        </div>\n		</div>\n		<!-- END Modal Block -->\n		<div class=\"row\">\n			<div class=\"col-md-3 left-sidebar\">\n				<ul>\n					<li>\n						<div class=\"input-group search-bar\">\n							<input type=\"text\" class=\"form-control\" placeholder=\"Search\" aria-label=\"Search Bar\">\n								<span class=\"input-group-btn\">\n						        	<button class=\"btn btn-default\" type=\"button\">\n						        		<span class=\"glyphicon glyphicon-search\"></span>\n						        	</button>\n						      </span>\n							</span>\n						</div>\n					</li>\n				</ul>\n				<ul class=\"nav nav-pills nav-stacked\">\n					");
  data.buffer.push("\n					<li ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sidebarPageClick", "postboard", {hash:{},contexts:[depth0,depth0],types:["STRING","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" class=\"active\"><a href=\"#\">Postboard</a></li>\n					<li ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sidebarPageClick", "saved jobs", {hash:{},contexts:[depth0,depth0],types:["STRING","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><a href=\"#\">Saved Jobs</a></li>\n					<li ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sidebarPageClick", "submit a post", {hash:{},contexts:[depth0,depth0],types:["STRING","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><a href=\"#\">Submit a Post</a></li>\n				</ul>\n			</div>\n			<div class=\"col-md-9 job-grid\">\n				<ul>\n					");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "job_postings.length", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n				</ul>\n			</div>\n		</div>\n	</div>\n	\n</idv>");
  return buffer;
  
});

Ember.TEMPLATES["submit-job"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n									<label>\n										<input type=\"checkbox\" ");
  hashContexts = {'id': depth0};
  hashTypes = {'id': "STRING"};
  options = {hash:{
    'id': ("school.id")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(">  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "school.name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</label>\n								");
  return buffer;
  }

  data.buffer.push("\n\n\n<div>\n	<div class=\"container postboard_container\">\n		<div class=\"row\">\n			<div class=\"col-md-3 left-sidebar\">\n				<ul>\n					<li>\n						<div class=\"input-group search-bar\">\n							<input type=\"text\" class=\"form-control\" placeholder=\"Search\" aria-label=\"Search Bar\">\n								<span class=\"input-group-btn\">\n						        	<button class=\"btn btn-default\" type=\"button\">\n						        		<span class=\"glyphicon glyphicon-search\"></span>\n						        	</button>\n						      </span>\n							</span>\n						</div>\n					</li>\n				</ul>\n				<ul class=\"nav nav-pills nav-stacked\">\n					");
  data.buffer.push("\n					<li ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sidebarPageClick", "postboard", {hash:{},contexts:[depth0,depth0],types:["STRING","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><a href=\"#\">Postboard</a></li>\n					<li ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sidebarPageClick", "saved jobs", {hash:{},contexts:[depth0,depth0],types:["STRING","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><a href=\"#\">Saved Jobs</a></li>\n					<li ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sidebarPageClick", "submit a post", {hash:{},contexts:[depth0,depth0],types:["STRING","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" class=\"active\"><a href=\"#\">Submit a Post</a></li>\n				</ul>\n			</div>\n			<div class=\"col-md-9 submit-job-group\">\n				<h2 class=\"submit-job-title\">Submit a Job</h2>\n\n				<div class=\"submission-field\">\n					<div class=\"input-group input-group-lg pull-right\">\n						");
  hashContexts = {'type': depth0,'class': depth0,'placeholder': depth0,'valueBinding': depth0};
  hashTypes = {'type': "STRING",'class': "STRING",'placeholder': "STRING",'valueBinding': "STRING"};
  options = {hash:{
    'type': ("text"),
    'class': ("form-control"),
    'placeholder': ("Company"),
    'valueBinding': ("controller.submitCompanyName")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n					</div>\n\n					<div class=\"input-group input-group-lg\">\n						");
  hashContexts = {'type': depth0,'class': depth0,'placeholder': depth0,'valueBinding': depth0};
  hashTypes = {'type': "STRING",'class': "STRING",'placeholder': "STRING",'valueBinding': "STRING"};
  options = {hash:{
    'type': ("text"),
    'class': ("form-control"),
    'placeholder': ("Job Title"),
    'valueBinding': ("controller.submitJobTitle")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n					</div>\n\n					<div class=\"input-group input-group-lg pull-right\">\n						");
  hashContexts = {'type': depth0,'class': depth0,'placeholder': depth0,'valueBinding': depth0};
  hashTypes = {'type': "STRING",'class': "STRING",'placeholder': "STRING",'valueBinding': "STRING"};
  options = {hash:{
    'type': ("text"),
    'class': ("form-control"),
    'placeholder': ("Contact email"),
    'valueBinding': ("controller.submitEmail")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n					</div>\n\n					<div class=\"input-group input-group-lg desc-input\">\n						");
  hashContexts = {'class': depth0,'placeholder': depth0,'valueBinding': depth0};
  hashTypes = {'class': "STRING",'placeholder': "STRING",'valueBinding': "STRING"};
  options = {hash:{
    'class': ("form-control"),
    'placeholder': ("Short description"),
    'valueBinding': ("controller.submitDescription")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.textarea || depth0.textarea),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "textarea", options))));
  data.buffer.push("\n					</div>\n\n					<div class=\"alert alert-danger hidden\" id=\"danger-fields\" role=\"alert\">\n						<b>Whoops!</b> Some fields were not filled out.\n					</div>\n					<div class=\"alert alert-danger hidden\" id=\"danger-email\" role=\"alert\">\n						Please use a valid email address.\n					</div>\n\n					<div class=\"prereq-submit-job\">\n						<ul class=\"list-group\">\n							<li class=\"item-1\">\n								<div class=\"input-group\">\n									");
  hashContexts = {'type': depth0,'class': depth0,'valueBinding': depth0,'placeholder': depth0};
  hashTypes = {'type': "STRING",'class': "STRING",'valueBinding': "STRING",'placeholder': "STRING"};
  options = {hash:{
    'type': ("text"),
    'class': ("form-control"),
    'valueBinding': ("prereq-1"),
    'placeholder': ("Prerequisite")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n									<button type=\"button\" class=\"btn btn-default button-remove\">\n										<span class=\"glyphicon glyphicon-remove\"></span>\n									</button>\n									<button ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addPrereq", "1", {hash:{},contexts:[depth0,depth0],types:["STRING","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" type=\"button\" class=\"btn btn-default button-plus\">\n										<span class=\"glyphicon glyphicon-plus\"></span>\n									</button>\n								</div>\n							</li>\n							<li class=\"item-2 hidden\">\n								<div class=\"input-group\">\n									");
  hashContexts = {'type': depth0,'class': depth0,'valueBinding': depth0,'placeholder': depth0};
  hashTypes = {'type': "STRING",'class': "STRING",'valueBinding': "STRING",'placeholder': "STRING"};
  options = {hash:{
    'type': ("text"),
    'class': ("form-control"),
    'valueBinding': ("prereq-2"),
    'placeholder': ("Prerequisite")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n									<button ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removePrereq", "2", {hash:{},contexts:[depth0,depth0],types:["STRING","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" type=\"button\" class=\"btn btn-default button-remove\">\n										<span class=\"glyphicon glyphicon-remove\"></span>\n									</button>\n									<button ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addPrereq", "2", {hash:{},contexts:[depth0,depth0],types:["STRING","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" type=\"button\" class=\"btn btn-default button-plus\">\n										<span class=\"glyphicon glyphicon-plus\"></span>\n									</button>\n								</div>\n							</li>\n							<li class=\"item-3 hidden\">\n								<div class=\"input-group\">\n									");
  hashContexts = {'type': depth0,'class': depth0,'valueBinding': depth0,'placeholder': depth0};
  hashTypes = {'type': "STRING",'class': "STRING",'valueBinding': "STRING",'placeholder': "STRING"};
  options = {hash:{
    'type': ("text"),
    'class': ("form-control"),
    'valueBinding': ("prereq-3"),
    'placeholder': ("Prerequisite")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n									<button ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removePrereq", "3", {hash:{},contexts:[depth0,depth0],types:["STRING","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" type=\"button\" class=\"btn btn-default button-remove\">\n										<span class=\"glyphicon glyphicon-remove\"></span>\n									</button>\n									<button ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addPrereq", "3", {hash:{},contexts:[depth0,depth0],types:["STRING","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" type=\"button\" class=\"btn btn-default button-plus\">\n										<span class=\"glyphicon glyphicon-plus\"></span>\n									</button>\n								</div>\n							</li>\n							<li class=\"item-4 hidden\">\n								<div class=\"input-group\">\n									");
  hashContexts = {'type': depth0,'class': depth0,'valueBinding': depth0,'placeholder': depth0};
  hashTypes = {'type': "STRING",'class': "STRING",'valueBinding': "STRING",'placeholder': "STRING"};
  options = {hash:{
    'type': ("text"),
    'class': ("form-control"),
    'valueBinding': ("prereq-4"),
    'placeholder': ("Prerequisite")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n									<button ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removePrereq", "4", {hash:{},contexts:[depth0,depth0],types:["STRING","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" type=\"button\" class=\"btn btn-default button-remove\">\n										<span class=\"glyphicon glyphicon-remove\"></span>\n									</button>\n									<button ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addPrereq", "4", {hash:{},contexts:[depth0,depth0],types:["STRING","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" type=\"button\" class=\"btn btn-default button-plus\">\n										<span class=\"glyphicon glyphicon-plus\"></span>\n									</button>\n								</div>\n							</li>\n							<li class=\"item-5 hidden\">\n								<div class=\"input-group\">\n									");
  hashContexts = {'type': depth0,'class': depth0,'valueBinding': depth0,'placeholder': depth0};
  hashTypes = {'type': "STRING",'class': "STRING",'valueBinding': "STRING",'placeholder': "STRING"};
  options = {hash:{
    'type': ("text"),
    'class': ("form-control"),
    'valueBinding': ("prereq-5"),
    'placeholder': ("Prerequisite")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n									<button ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removePrereq", "5", {hash:{},contexts:[depth0,depth0],types:["STRING","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" type=\"button\" class=\"btn btn-default button-remove\">\n										<span class=\"glyphicon glyphicon-remove\"></span>\n									</button>\n									<button type=\"button\" class=\"btn btn-default button-plus\">\n										<span class=\"glyphicon glyphicon-plus\"></span>\n									</button>\n								</div>\n							</li>\n						</ul>\n					</div>\n\n					<div class=\"button-grid well flex-box-model\">\n						");
  data.buffer.push("\n							<div class=\"school-group box box1\">\n								");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, "school", "in", "schools", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n								<div class=\"alert alert-danger hidden\" id=\"danger-school\" role=\"alert\">\n									Please choose at least one school.\n								</div>\n							</div>\n\n							<div class=\"box box2\"></div>\n\n							<div class=\"type-group box box2\">\n								<div class=\"btn-group\" data-toggle=\"buttons\">\n							        <label class=\"btn btn-default\">\n							            <input type=\"radio\" name=\"year\" value=\"Full-time\" id=\"full\">Full-time\n							        </label>\n							        <label class=\"btn btn-default active\">\n							            <input type=\"radio\" name=\"year\" value=\"Internship\" id=\"intern\" checked=\"\">Internship\n							        </label>\n							    </div>\n								<div class=\"alert alert-danger hidden\" id=\"danger-type\" role=\"alert\">\n									Please choose full-time or internship.\n								</div>\n							</div>\n						");
  data.buffer.push("\n					</div>\n\n					\n				</div>\n\n				<div>\n					<div class=\"alert alert-success hidden\" id=\"success-submit\" role=\"alert\">\n						Post created!\n					</div>\n					<button ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "job_submit", "schools", {hash:{},contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" type=\"button\" class=\"btn btn-lg btn-login\">Login</button>\n				</div>\n			</div>\n		</div>\n	</div>\n</div>");
  return buffer;
  
});
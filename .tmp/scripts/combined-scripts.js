(function() {

var BuJobBoard = window.BuJobBoard = Ember.Application.create();

/* Order and include as you please. */


})();

(function() {

Ember.Handlebars.helper('job-posting-postboard', function(value, options) {
	// console.log(value);
	var html = "";
	for (var i = 0; i < value.length; i++) {
		var job = value[i];
		var types = "";
		for (var j = 0; j < job.type_of_job.length; j++) {
			types += "<li>" + job.type_of_job[j] + "</li>";
		}
		if (i%3 == 0) html += "<div class=\"row\">";
		html += "<li class=\"col-md-4\"><div class=\"job-post-container\"><div class=\"job-title " + job.full_time + "\">" 
					+ job.job_title + "</div><div class=\"company-title\">" +job.company_name +
					"</div><div class=\"description-short\">" +job.description_full +
					"</div><div class=\"flex-box-model\"><div class=\"type-of-job box box1\"><ul>" + types + "</ul></div>"+
                    "<div class=\"box box2\"></div><div class=\"save-job-button box box3\">" +
                    "<button class=\"btn btn-default\" id=\"" + job.id + "\"type=\"button\" {{action \"addJobClick\" " + job.id + "}}>" +
                    "<span class=\"glyphicon glyphicon-plus\"></span></button></div></div></div></li>";
		if ((i+1)%3 == 0) html += "</div>";
	}
	return new Handlebars.SafeString(html);
});

Handlebars.registerHelper('newRow', function(options) {
    var fnTrue=options.fn, fnFalse=options.inverse;
    return options.data.view.contentIndex % 3 === 0 ? fnTrue() : fnFalse();
});

Handlebars.registerHelper('endRow', function(options) {
    var fnTrue=options.fn, fnFalse=options.inverse;
    return (options.data.view.contentIndex + 1) % 3 === 0 ? fnTrue() : fnFalse();
});

})();

(function() {

BuJobBoard.IndexController = Ember.ObjectController.extend({
	errorMessage: '',
	userEmail: '',
	userId: '',
	actions: {
		student_submit: function() {
			// if (this.get('userEmail') === '' && this.get('userId') === '') {
			// 	this.set("errorMessage", "Please enter your information");
			// } else if (this.get('userEmail') === '') {
			// 	this.set("errorMessage", "Please enter your BU email");
			// } else if (this.get('userId') === '') {
			// 	this.set("errorMessage", "Please enter your BU ID #");
			// } else if (this.get('userEmail').indexOf("@bu.edu") === -1) {
			// 	this.set("errorMessage", "Please enter your BU email");				
			// } else {
			// 	this.set("errorMessage", "");
			// 	this.transitionToRoute('postboard');
			// }
			this.transitionToRoute('postboard');	
		}
	}
});

})();

(function() {

BuJobBoard.PostboardController = Ember.ObjectController.extend({
	actions: {
		sidebarPageClick: function(term) {
			if (term.toLowerCase() === "submit a post") {
				this.transitionToRoute('submit-job');
			} else if (term.toLowerCase() === "saved jobs") {
				//this.transitionToRoute('submit-job');
			}
		},
		addJobClick: function(id) {
			// Should add id to class
			var job_post = Ember.$("#" + id);
			if (job_post.hasClass("clicked")) 
				job_post.removeClass("clicked");
			else 
				job_post.addClass("clicked");
			console.log("ADD JOB:");
		},
		showJobModal: function(id) {
			var $modal = Ember.$(".job-post-container-big");
			var $overlay = Ember.$("#overlay");
		    $overlay.removeClass("hidden");
		    $modal.removeClass("hidden");
		    var top = Math.max(Ember.$(window).height() - $modal.outerHeight(), 0) / 2;
		    var left = Ember.$(".job-grid").offset().left + (Ember.$(".job-grid").width() - $modal.width())/2;
		    $modal.css({
		        top: 5 + Ember.$(window).scrollTop(),
		        left: left
		    });
		},
		closeJobModal: function() {
			console.log("Clicked closeJobModal");
			Ember.$(".job-post-container-big").addClass("hidden");
			Ember.$("#overlay").addClass("hidden");
		}
	}
});

})();

(function() {

BuJobBoard.SubmitJobController = Ember.ObjectController.extend({
	submitCompanyName: '',
	submitJobTitle: '',
	submitEmail: '',
	submitDescription: '',
	actions: {
		job_submit: function(schools) {	
			// GET ALL DATA NEEDED
			var submit_success = Ember.$("#success-submit"),
				type_danger = Ember.$('#danger-type'),
				fields_danger = Ember.$('#danger-fields'),
				school_danger = Ember.$('#danger-school'),
				email_danger = Ember.$("#danger-email");
			type_danger.addClass("hidden"); fields_danger.addClass("hidden"); 
			school_danger.addClass("hidden"); email_danger.addClass("hidden"); submit_success.addClass("hidden");
			var full = Ember.$('#full').hasClass("active"),
				intern = Ember.$('#intern').hasClass("active"),
				checked_schools = [];
			for (var i = 0; i < schools.length; i++) {
				if (Ember.$('#' + schools[i].id).is(':checked')) checked_schools.push(schools[i]);
			}

			// VALIDATE FIELDS & BUTTONS
			if (!this.get("submitDescription") || !this.get("submitJobTitle") || !this.get("submitEmail") || !this.get("submitCompanyName")) {
				fields_danger.removeClass("hidden");
			} else if (this.get("submitEmail").indexOf("@") == -1) {
				email_danger.removeClass("hidden");
			}else if (!full && !intern) {
				type_danger.removeClass("hidden");
			} else if (checked_schools.length === 0) {
				school_danger.removeClass("hidden");
			} else {
				submit_success.removeClass("hidden");
			}
		},
		sidebarPageClick: function() {
			this.transitionToRoute('postboard');
		},
		addPrereq: function(number) {
			console.log("num " + number);
			switch (parseInt(number)) {
				case 1:
					Ember.$(".item-2").removeClass("hidden");
					break;
				case 2:
					Ember.$(".item-3").removeClass("hidden");
					break;
				case 3:
					Ember.$(".item-4").removeClass("hidden");
					break;
				case 4:
					Ember.$(".item-5").removeClass("hidden");
					break;
			}
		},
		removePrereq: function(number) {
			console.log("num " + number);
			switch (parseInt(number)) {
				case 2:
					Ember.$(".item-2").addClass("hidden");
					Ember.$(".item-2 .input-group input").val('');
					break;
				case 3:
					Ember.$(".item-3").addClass("hidden");
					Ember.$(".item-3 .input-group input").val('');
					break;
				case 4:
					Ember.$(".item-4").addClass("hidden");
					Ember.$(".item-4 .input-group input").val('');
					break;
				case 5:
					Ember.$(".item-5").addClass("hidden");
					Ember.$(".item-5 .input-group input").val('');
					break;
			}
		}
	}
});

})();

(function() {

BuJobBoard.ApplicationAdapter = DS.FixtureAdapter;


})();

(function() {

BuJobBoard.JobPosting = Ember.Object.extend({
	job_title: null,
	company_name: null,
	type_of_job: null,
	full_time: null,
	description_full: null,
	contact_email: null,
	schools: null,
	id: null
});

})();

(function() {

BuJobBoard.ApplicationRoute = Ember.Route.extend({

});


})();

(function() {

BuJobBoard.PostboardRoute = Ember.Route.extend({
	model: function() {
		var page_names = ["Postboard", "Saved Jobs", "Submit a Post"];
		var job_postings = [];
		for (var i = 0; i < 10; i++) {
			var k = chance.word();
			job_postings.push(BuJobBoard.JobPosting.create({
				job_title: k,
				company_name: chance.word(),
				type_of_job: [chance.string({length: 3}), chance.string({length: 3})],
				full_time: chance.bool() ? 'i' : 'f',
				description_full: chance.paragraph({sentences: 1}),
				contact_email: chance.email({domain: "bu.edu"}), 
				id: chance.bb_pin()
			}));
		}
		return {job_postings: job_postings, page_names: page_names};
	}
});

})();

(function() {

BuJobBoard.SubmitJobRoute = Ember.Route.extend({
	model: function() {
		var page_names = ["Postboard", "Saved Jobs", "Submit a Post"];
		
		// Putting all the school info
		var schools = [{name: "College of Engineering", id: "eng"}, 
					   {name: "School of Management", id: "smg"},
					   {name: "College of Communication", id: "com"},
					   {name: "College of Arts & Sciences", id: "cas"}];

		Ember.$("#jquery-click-type-group button").click(function() {
			console.log("Click");
			Ember.$(this).addClass('clicked-type').siblings().removeClass('clicked-type');
		});

		return {page_names: page_names, schools: schools};
	}
});

})();

(function() {

BuJobBoard.Router.map(function () {
  // Add your routes here
  this.route('postboard', {
  	path: 'postboard'
  });
  this.route('submit-job', {
  	path: 'submit-job'
  });
});


})();
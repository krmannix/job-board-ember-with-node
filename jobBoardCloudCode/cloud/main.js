
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("hello", function(request, response) {
  response.success("Hello world!");
});

// Checking for preexisting posts that are similar
Parse.Cloud.beforeSave("JobPost", function(request, response) {
	var jobPost = request.object;
	var query = new Parse.Query(Parse.Object.extend("JobPost"));
	query.equalTo("company_name", jobPost.get("company_name"));
	query.equalTo("full_time", jobPost.get("full_time"));
	query.equalTo("job_title", jobPost.get("job_title"));
	// If company name, job title, and full-time already exists, don't count it
	query.find({
		success: function(results) {
			if (results.length === 0) {
				response.success();
			} else {
				response.error("There's already an existing post that's too similar.");
			}
		},
		error: function(error) {
			response.error("There was an error submitting this job post. Try again soon.");
		}
	});
});

// Making sure a user doesn't have over 20 favorites at a time
Parse.Cloud.beforeSave(Parse.User, function(request, response) {
	var user = request.object;
	var favs = user.get("favorite_posts");
	if (favs) {
		if (favs.length > 20) {
			response.error("Too many saved posts!");
		} else {
			response.success();
		}
	} else {
		response.success();
	}
});

Parse.Cloud.define("getSavedJobs", function(request, response) {
	var user = request.object;
	var favs = user.get('favorite_posts');
	var query = new Parse.Query("JobPost");
	query.containedIn("objectId", favs);
	query.find({
		success: function(results) {
			response.success(results);
		},
		error: function(error) {
			response.error("There was an error getting the saved jobs. " + error.message);
		}
	});
});

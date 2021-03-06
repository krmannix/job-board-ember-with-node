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
		console.log("Has saves");
		if (favs.length > 20) {
			response.error("Too many saved posts!");
		} else {
			response.success();
		}
	} else {
		// Make sure they have the favorite posts array, or else errors will occur when trying to access it
		console.log("No saves");
		request.object.set("favorite_posts", []);
		response.success();
	}
});

// Takes a user and grabs all the saved jobs in a query
Parse.Cloud.define("getSavedJobs", function(request, response) {
	var user = request.user;
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

// Adds a job onto the user's favorite_posts array
Parse.Cloud.define("addSavedJob", function(request, response) {
	var id = request.params.jobId;
	if (request.user.get('favorite_posts').length < 20) {
		var fav_array = request.user.get('favorite_posts');
		fav_array.push(id);
		request.user.set('favorite_posts', fav_array);
		request.user.save(null, {
			success: function(ok) {
				response.success();
			}, 
			error: function(ok, error) {
				response.error("There was an error getting the saved jobs. " + error.message);
			}
		});
	} else {
		response.error("Too many saved jobs!");
	}
});

// Deletes a job from a user's favorite_posts array
Parse.Cloud.define("removeSavedJob", function(request, response) {
	var user = request.user;
	var id = request.params.jobId;
	if (user.get('favorite_posts') && user.get('favorite_posts').indexOf(id) > 0) {
		var newFavs = user.get('favorite_posts');
		newFavs.splice(newFavs.indexOf(id), 1);
		user.set('favorite_posts', newFavs);
		user.save(null, {
			success: function(ok) {
				response.success();
			}, 
			error: function(ok, error) {
				response.error("There was an error saving the new favorites list. " + error.message);
			}
		});
	} else {
		response.error("Could not find job in favorites!");
	}
});

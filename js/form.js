$(document).ready(function() {
	console.log("document ready");

	var db = firebase.firestore();

	$("#reg-form").submit(function() {
        var name = $("#name").val();
        console.log(name);
        var email = $("#email").val();
        console.log(email);
        var phone = $("#phone").val();
        console.log(phone);
        var org = $("#org").val();
        console.log(org);
		// var food = $("#food").val();
		// var prof = $("#prof").val();
        var timestamp = Date();
        
        var food = $("input[name='food-pref']:checked").val();
        console.log(food);
        var prof = $("input[name='status']:checked").val();
        console.log(prof);

        var tshirt = $("#tshirt option:selected").val();
        console.log(tshirt);

		db.collection("innova1").add({
			name: name.trim(),
			email : email.trim(),
			phone : phone.trim(),
			org : org.trim(),
			food : food.trim(),
            prof : prof.trim(),
            tshirt : tshirt.trim(),
			timestamp : timestamp
		}).then(function(docRef) {
			console.log("Message saved");
			if (prof === "prof") {
                console.log("prof");
                window.location.replace(""); // payment link for prof
            }
            else {
                console.log("std");
                window.location.replace(""); // for std
            }
		}).catch(function(err) {
			console.log("Got an error: ", err);
			alert("Error submitting data");
		});

		return false;
	});	
});
$(document).ready(function() {
	console.log("document ready");

	var db = firebase.firestore();

	$("#reg-form").submit(function() {

        // change to submitting..

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

        // query string

        qstring = "?data_name="+name.trim()+"&data_email="+email.trim()+"&data_phone="+phone.trim();

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
                window.location.href = ("https://www.instamojo.com/innovatorsummit/innovators-summit-ticket-professional/" + qstring); // payment link for prof
            }
            else {
                console.log("std");
                window.location.href = ("https://www.instamojo.com/innovatorsummit/innovators-summit-ticket-student/" + qstring); // for std
            }
		}).catch(function(err) {
			console.log("Got an error: ", err);
			alert("Error submitting data");
		});

		return false;
	});	
});
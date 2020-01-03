$(document).ready(function() {
    console.log("document ready");

    const db = firebase.firestore();

    const doc = location.pathname.split("/");
    const len = doc.length;
    const form = doc[len - 1]; // getting which document type

    if (form === "form1.html") {
        var pref = "Talks Only";
        var prof = "Student";
        var link = "https://www.instamojo.com/innovatorsummit/student-session-ticket/";
    }
    else if (form === "form2.html") {
        var pref = "Workshops Only";
        var prof = "Student";
        var link = "https://www.instamojo.com/innovatorsummit/student-workshop-ticket/";
    }
    else if (form === "form3.html") {
        var pref = "Combo Track-1";
        var prof = "Student";
        var link = "https://www.instamojo.com/innovatorsummit/innovators-summit-ticket-student/";
    }
    else if (form === "form4.html") {
        var pref = "Combo Track-2";
        var prof = "Student";
        var link = "https://www.instamojo.com/innovatorsummit/innovator-summit-ticket-track-2-student/";
    }
    else if (form === "form5.html") {
        var pref = "Talks Only";
        var prof = "Professional";
        var link = "https://www.instamojo.com/innovatorsummit/professional-session-ticket/";
    }
    else if (form === "form6.html") {
        var pref = "Workshops Only";
        var prof = "Professional";
        var link = "https://www.instamojo.com/innovatorsummit/professional-workshop-ticket/";
    }
    else if (form === "form7.html") {
        var pref = "Combo Track-1";
        var prof = "Professional";
        var link = "https://www.instamojo.com/innovatorsummit/innovators-summit-ticket-professional/";
    }
    else if (form === "form5.html") {
        var pref = "Combo Track-2";
        var prof = "Professional";
        var link = "https://www.instamojo.com/innovatorsummit/innovator-summit-ticket-track-2-professional/";
    }
    else {
        console.log("Something is wrong with forms");
        var pref = "";
        var prof = "";
    }

    $("#reg-form").submit(function() {

        console.log("submit pressed");

        $("#btn1").text("Submitting..."); // change button

        var name = $("#name").val();
        console.log(name);
        var email = $("#email").val();
        console.log(email);
        var phone = $("#phone").val();
        console.log(phone);
        var org = $("#org").val();
        console.log(org);

        var timestamp = Date();
        
        var food = $("#food option:selected").val();
        console.log(food);
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
            tshirt : tshirt.trim(),

            timestamp : timestamp,

            pref : pref.trim(),
            prof : prof.trim()
		}).then(function(docRef){
            // redirect to payment page
            window.location.href = link + qstring;
        }).catch(function(err) {
            // catch error
            console.log(err);
        });
    }); 
});
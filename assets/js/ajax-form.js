$(function() {

	// Get the form.
	var form = $('#rsvp-form');

	// Get the messages div.
	var formMessages = $('#form-messages');

	// Set up an event listener for the contact form.
	$(form).submit(function(e) {
		var isvalid=$("#rsvp-form").valid();
		if(isvalid)
        {
			// Stop the browser from submitting the form.
			e.preventDefault();

			// Serialize the form data.
			var formData = $(form).serialize();

			var url = 'https://script.google.com/macros/s/AKfycbxFnKI4v3HnO4WGT6MlS9J0Qj77lBrppqQjatcmq7ttSW5BGhCY/exec'; /* Debes agregar aquí el vínculo hacia el aplicativo web ejecutable */
	        // show the loading 
	        $('#postForm').prepend($('<span></span>').addClass('glyphicon glyphicon-refresh glyphicon-refresh-animate'));
	        var jqxhr = $.post(url, formData, function(data) {
	            console.log("Success! Data: " + data.statusText);
	            $(formMessages).removeClass('alert alert-danger');
				$(formMessages).addClass('alert alert-success');

				// Set the message text.
				$(formMessages).text("Gracias! Hemos registrado tu confirmación de asistencia.");

				// Clear the form.
				$('#cname').val('');
				$('#cemail').val('');
				$('#cevents').val('');
				$('#cguests').val('');
				$('#cguestinfo').val('');
				$('#cmessage').val('');
	        }).fail(function(data) {
	            $(formMessages).removeClass('alert alert-success');
				$(formMessages).addClass('alert alert-danger');

				$(formMessages).text('Oops! Ocurrió un error y tu confirmación no fue registrada.');
	        });
	    }
	});

});

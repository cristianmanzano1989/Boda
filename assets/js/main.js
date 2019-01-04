$(document).ready(function() {
   
    /* ======= Scrollspy ======= */
    $('body').scrollspy({ target: '#header', offset: 100});
    
    /* ======= ScrollTo ======= */
    $('a.scrollto').on('click', function(e){
        
        //store hash
        var target = this.hash;
                
        e.preventDefault();
        
		$('body').scrollTo(target, 800, {offset: -55, 'axis':'y'});
        //Collapse mobile menu after clicking
		if ($('.navbar-collapse').hasClass('in')){
			$('.navbar-collapse').removeClass('in').addClass('collapse');
		}
		
	}); 
     
    /* ======= jQuery Placeholder ======= */
    /* Ref: https://github.com/mathiasbynens/jquery-placeholder */
    
    $('input, textarea').placeholder();
        /* ======= Countdown ========= */
	// set the date we're counting down to
    var target_date = new Date("July 20, 2018").getTime();
     
    // variables for time units
    var days, hours, minutes, seconds;
     
    // get tag element
    var countdown =  document.getElementById("countdown-box");
    var days_span = document.createElement("SPAN");
    days_span.className = 'days';
    countdown.appendChild(days_span);
    var hours_span = document.createElement("SPAN");
    hours_span.className = 'hours';
    countdown.appendChild(hours_span);
    var minutes_span = document.createElement("SPAN");
    minutes_span.className = 'minutes';
    countdown.appendChild(minutes_span);
    var secs_span = document.createElement("SPAN");
    secs_span.className = 'secs';
    countdown.appendChild(secs_span);
     
    // update the tag with id "countdown" every 1 second
    setInterval(function () {
     
        // find the amount of "seconds" between now and target
        var current_date = new Date().getTime();
        var seconds_left = (target_date - current_date) / 1000;
     
        // do some time calculations
        days = parseInt(seconds_left / 86400);
        seconds_left = seconds_left % 86400;
         
        hours = parseInt(seconds_left / 3600);
        seconds_left = seconds_left % 3600;
         
        minutes = parseInt(seconds_left / 60);
        seconds = parseInt(seconds_left % 60);
         
        // format countdown string + set tag value.
        days_span.innerHTML = '<span class="number">' + days + '</span>' + '<span class="unit script">Días</span>';
        hours_span.innerHTML = '<span class="number">' + hours + '</span>' + '<span class="unit script">Hrs</span>';
        minutes_span.innerHTML = '<span class="number">' + minutes + '</span>' + '<span class="unit script">Mins</span>';
        secs_span.innerHTML = '<span class="number">' + seconds + '</span>' + '<span class="unit script">Segs</span>';
        
      
        //countdown.innerHTML = days + "d, " + hours + "h, "
       // + minutes + "m, " + seconds + "s";  
     
    }, 1000);         
    

    /* ======= Google Map ======= */
    map = new GMaps({
        div: '#map',
        lat: 50.980187,
        lng: -3.179117,
        scrollwheel: false,
        zoom: 14,
    });
    
    map.addMarker({
        lat: 50.980187,
        lng: -3.179117,
        verticalAlign: 'top',
        title: 'Ubicación Ceremonia',  
        infoWindow: {
            content: '<div class="note">Ceremonia</div><h4 class="map-title script">Iglesia San Paulo</h4><div class="address"><span class="region">Direcci&oacute;n</span><br><span class="postal-code">C&oacute;digo postal</span><br><span class="city-name">Ciudad</span></div>'
        }
        
        
    });
    

    map.addMarker({
        lat: 50.969747,
        lng: -3.199985,
        title: 'Ubicación Recepción',      
        infoWindow: {
            content: '<div class="note">Recepción</div><h4 class="map-title script">La Casa Manor</h4><div class="address"><span class="region">Direcci&oacute;n</span><br><span class="postal-code">C&oacute;digo postal</span><br><span class="city-name">Ciudad</span></div>'
        } 
        
    });
    
    /*display marker 1 address on load */
    google.maps.event.trigger(map.markers[0], 'click');
    /*display marker 2 address on load */
    google.maps.event.trigger(map.markers[1], 'click');
    
    
    
    

    /* ======= Instagram ======= */
    //Instafeed.js - add Instagram photos to your website
    //Ref: http://instafeedjs.com/

    var loadButton = document.getElementById('load-more');
    var feed = new Instafeed({
            limit: 28,
            get: 'tagged',
            tagName: 'filmweddingphotographer', /* Remember to use a unique hastag for the wedding */
            clientId: "467ede5a6b9b48ae8e03f4e2582aeeb3", /* IMPORTANT: REPLACE THE DEMO CLIENTID WITH YOUR CLIENTID! Find out your clientID: http://darkwhispering.com/how-to/get-a-instagram-client_id-key */
            resolution: 'thumbnail',
            template: '<a class="instagram-item item" href="{{link}}" target="_blank"><img class="img-responsive" src="{{image}}" /></a>',
            sortBy: 'most-liked',
          // every time we load more, run this function
          after: function() {
            // disable button if no more results to load
            if (!this.hasNext()) {
              loadButton.setAttribute('disabled', 'disabled');
            }
          },
    });

    // bind the load more button
    loadButton.addEventListener('click', function() {
      feed.next();
    });

    // run our feed!
    feed.run();

    
    /* ===== Packery ===== */
    //Ref: http://packery.metafizzy.co/
    //Ref: http://imagesloaded.desandro.com/

    var $container = $('#photos-wrapper');
    
    // init
    $container.imagesLoaded(function () {
        $container.packery({
            itemSelector: '.item',
            percentPosition: true
        });
    });
    
    
    /* ======= RSVP Form (Dependent form field) ============ */
    $('#cguests').on("change", function(){
        
        if ($(this).val() == "") {
            $('.guestinfo-group').slideUp(); //hide
            console.log('not selected');
        } else if ($(this).val() == 'No Guests' ) {
            $('.guestinfo-group').slideUp(); //hide
            console.log('No guests');
            $('#cguestinfo').val('No Guests'); //Pass data to the field so mailer.php can send the form.
            
        } else {
            $('.guestinfo-group').slideDown(); //show
            $('#cguestinfo').val(''); //Clear data
            console.log('Has guests');
        }

       
    });
    
	/* ======= jQuery form validator ======= */ 
    /* Ref: http://jqueryvalidation.org/documentation/ */   
    $(".rsvp-form").validate({
        messages: {
            name: {
                required: 'Por favor ingresa tu nombre' //You can customise this message
            },
            email: {
                required: 'Por favor ingresa tu email' //You can customise this message
            },
            events: {
                required: '¿Asistirás?' //You can customise this message
            },
            guests: {
                required: '¿Con cuántos invitados vendrás?' //You can customise this message
            },
            guestinfo: {
                required: 'Por favor ingresa los nombres de los invitados' //You can customise this message
            },
        }
    });
  

});
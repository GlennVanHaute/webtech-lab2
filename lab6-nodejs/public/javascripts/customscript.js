$(document).ready(function(){

	var client = new Faye.Client('http://localhost:3000/faye/',
		{timeout: 120 });


	var i = 0;
	$('.error').css('display','none');
	$('#verzend').on('click',function(e){

		e.preventDefault();

		var naam = $('#naam').val();
		var vraag = $('#vraag').val();

		if (vraag.length > 100) {
			$('#vraag').focus();
			$('.error').css('display','block');
			$('.error').text('please use less than 100 characters!')

		}
		else if (naam.length != 0 && vraag.length != 0){

			client.publish('/message',{
				naam: naam,
				vraag: vraag
			});

			i++;

			$('.error').css('display','none');

		} 
	}); 
	client.subscribe('/message', function(message){
		var naam = message.naam;
		var vraag = message.vraag;

		$('#allevragen').prepend('<div class="container" id="vraag' + i + '"><p class="naam">' + naam + '</p><p class="vraag">' + vraag + '</p></div>');
	});

	client.subscribe('/message', function(message){
		var naam = message.naam;
		var vraag = message.vraag;
		$('#allevragentonen').prepend('<div class="wrapper" id="vraag' + i + '"><p class="naam">' + naam + '</p><p class="vraag">' + vraag + '</p></div>');
	});

});

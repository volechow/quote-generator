var link = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="

function onClick() {	
	$.ajax({
		type: 'GET',
		url: 'https://got-quotes.herokuapp.com/quotes',
		success: function(data) {
			var quote = data.quote;
			var author = data.character;
			var text = escape('"'+quote+'" '+author);
			$('#quote').text(quote);
			$('#author').text("- "+author);
			$('#post-tweet').attr("href", link+text)
		}
	});
}

$( document ).ready(function() {
	onClick();	
	$('#new-quote').click(function() {
		onClick();
	});	
});

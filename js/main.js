
function hitBack(link, target) {
  target ? window.open(link, target) : window.location.href = link;
};

$(document).ready(function(){

	// track links with google
	$('a.outbound').click(function(e) {
		var link = $(this);
		var trackingName = link.attr('data-eventName') || 'outbound';

		ga('send', 'event', trackingName, 'click', link.attr('href'),
			{'hitCallback': hitBack(link.attr('href'), link.attr('target') === '_blank') }
		);
		
		e.preventDefault();
	});

});
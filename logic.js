let newQuest = {};
let bestMatch = {
	diff: 500,
	name: "",
	image: ""
};


$('#submit').on('click', function() {
	let userQuest = $('#name').val().trim();
	let imag = $('#image').val().trim();
	let resp1 = $('#qust1').val().trim();
	let resp2 = $('#qust2').val().trim();
	let resp3 = $('#qust3').val().trim();
	let resp4 = $('#qust4').val().trim();
	let resp5 = $('#qust5').val().trim();
	let resp6 = $('#qust6').val().trim();
	let resp7 = $('#qust7').val().trim();
	let resp8 = $('#qust8').val().trim();
	let resp9 = $('#qust9').val().trim();
	let resp10 = $('#qust10').val().trim();

	if (userQuest === "" || imag === "" || resp1 === "" || resp2 === "" || resp3 === "" || resp4 === "" || resp5 === "" || resp6 === "" || resp7 === "" || resp8 === "" || resp9 === "" || resp10 === "") {
		alert("Missing Data, Fill in");	
	} else {
		newQuest = {
			name: userQuest,
			picture: imag,
			scores: [resp1, resp2, resp3, resp4, resp5, resp6, resp7, resp8, resp9, resp10]
		};

		findMatch(newQuest.scores);

		setTimeout(postData, 1000);

		function postData() {
			$.post({url: '/api/friends', contentType: 'application/json'}, JSON.stringify(newQuest));
		}

		$('#name').val("");
		$('#image').val("");
		$('#qust1').val("");
		$('#qust2').val("");
		$('#qust3').val("");
		$('#qust4').val("");
		$('#qust5').val("");
		$('#qust6').val("");
		$('#qust7').val("");
		$('#qust8').val("");
		$('#qust9').val("");
		$('#qust10').val("");
	}
});


function findMatch(scores) {

	$.get('/api/friends', function(friends) {

		let count = 0;
		let arrayLength = friends.length;

		for (var i = 0; i < arrayLength; i++) {
			calcScoreDiff(scores, friends[i]);
			count++;		
		}		

		if (count === arrayLength) {
			$('#friendName').text(bestMatch.name);
			$('#friendImg').attr('src', bestMatch.image);
			$('#myModal').modal('toggle');
		}
	});	
}


function calcScoreDiff(user, friend) {

	let diff = 0;
	let count = 0;

	for (var i = 0; i < 10; i++) {
		diff += Math.abs(user[i] - friend.scores[i]);
		count++;
	}

	if (count === 10) {
		if (diff < bestMatch.diff) {
			bestMatch.diff = diff;
			bestMatch.name = friend.name;
			bestMatch.image = friend.picture;
		} else {
			return;
		}
	}  	
}




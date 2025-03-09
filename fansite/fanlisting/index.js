fetch(`members.json?v=${Date.now()}`)
	.then(function (response) {
		return response.json();
	})

	.then(function (json) {
		let name = json["fanlistingMembers"][0].name;
		let members = json["fanlistingMembers"].length;

		let nameSpan = document.querySelector("#latestMember");
		let membersSpan = document.querySelector("#membersTotal");

		nameSpan.innerHTML = name;
		membersSpan.innerHTML = members;
	});

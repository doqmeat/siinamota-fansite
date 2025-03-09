fetch(`members.json?v=${Date.now()}`)
	.then(function (response) {
		return response.json();
	})

	.then(function (json) {
		let members = json["fanlistingMembers"];
		let memberList = document.querySelector("#fans ol");

		console.log(members.length);

		for (i = 0; i < members.length; i++) {
			let name = members[i].name;
			let song = members[i]["favorite song"];
			let album = members[i]["favorite album"];
			let country = members[i].country;
			let email = members[i].email;
			let website = members[i].website;

			if (!email && !website) {
				// if no email and website
				memberList.innerHTML +=
					"<li><span>" +
					name +
					"</span> - <s>e-mail</s> - <s>website</s> - " +
					country +
					"<p><b>favorite song:</b> " +
					song +
					"</p> <p><b>favorite album:</b> " +
					album +
					"</p></li>";
			} else if (!email) {
				// if no email only
				memberList.innerHTML +=
					"<li><span>" +
					name +
					"</span> - <s>e-mail</s> - <a title='" +
					website +
					"' href='" +
					website +
					"' target='_blank'>website</a> - " +
					country +
					"<p><b>favorite song:</b> " +
					song +
					"</p> <p><b>favorite album:</b> " +
					album +
					"</p></li>";
			} else if (!website) {
				// if no website only
				memberList.innerHTML +=
					"<li><span>" +
					name +
					"</span> - <a title='" +
					email +
					"' href='mailto:" +
					email +
					"' target='_blank'>e-mail</a> - <s>website</s> - " +
					country +
					"<p><b>favorite song:</b> " +
					song +
					"</p> <p><b>favorite album:</b> " +
					album +
					"</p></li>";
			} else {
				memberList.innerHTML +=
					"<li><span>" +
					name +
					"</span> - <a title='" +
					email +
					"' href='mailto:" +
					email +
					"' target='_blank'>e-mail</a> - <a title='" +
					website +
					"' href='" +
					website +
					"' target='_blank'>website</a> - " +
					country +
					"<p><b>favorite song:</b> " +
					song +
					"</p> <p><b>favorite album:</b> " +
					album +
					"</p></li>";
			}
		}
	});

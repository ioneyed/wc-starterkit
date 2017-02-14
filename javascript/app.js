(function() {
	let getStoredJson = function() {
		return JSON.parse(localStorage.getItem("json"));
	}

	arisHelper.getJSON("./styleguide.json").then(function(json) {
		//console.log(json);
		localStorage.setItem("json", JSON.stringify(json));

		/*Put the inital content on the page*/
		let mainHtml = `
			<section class="elementInfo">
				<h1>${json.pageTitle}</h1>
				<p>${json.pageDescription}</p>
			</section>
		`;
		document.querySelector("main").innerHTML = mainHtml;

		/*Prepare the sidenav*/
		let sideNavHtml = ``;
		for(let element of json.elements) {
			sideNavHtml += `<li><a class="js-side-nav__link side-nav__link" href="#${element.name}">${element.name}</a></li>`;
		}
		document.querySelector(".side-nav__content").innerHTML = sideNavHtml;
		new SideNav(); //call new SideNav() only once all the links are rendered in the HTML.

		/* when link is clicked, show content for the element */
		document.querySelector(".side-nav__content").addEventListener("click", function() {
			setTimeout(function() { //wait 300 ms so that you get the new hash
				let element = window.location.hash;
				element = element.replace("#", "")
				let elements = getStoredJson().elements;

				for(let elementInList of elements) {
					if (elementInList.name == element) {
						let mainHtml = ``;

						mainHtml += `<section class="exampleContainer">`;

						if (elementInList.name) {
							mainHtml += `<h1>${elementInList.name}</h1>`;
						}

						if (elementInList.description) {
							mainHtml += `<p>${elementInList.description}</p>`;
						}

						mainHtml += `</section>`;

						if (elementInList.examples) {
							for (let example of elementInList.examples) {
								let codeString = example.html.replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/#newline#/g,"<br>").replace(/#tab#/g, "&nbsp;&nbsp;&nbsp;&nbsp;");

								mainHtml += `
									<hr>
									<section class="example">
										<h2>${example.title}</h2>
										<p>${example.description}</p>
										<div class="codeContainer">
											<div class="codeSyntaxContainer">
												<code class="codeSyntax">${codeString}</code>
											</div>
											<div class="codeRendered">${example.code}</div>
										</div>
									</section>
								`;
							}
						}

						document.querySelector("main").innerHTML = mainHtml;
					}
				}
			}, 300);
		});

	}, function(reason) {
		console.log(reason);
	});
})();
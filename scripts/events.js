function seenEvent(x){
	let event = $(x).attr("id").split("-")[0];
	let name = $(x).attr("id").split("-")[1];
	let seen = x.checked;
	let cname="seen"+event+name;
	if (seen){
		setCookie(cname,"true",100);
	} else {
		setCookie(cname,"false",100);
	}
}
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  console.log("cookie "+ cname + " set to "+ cvalue);
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "no cookie";
}

function deleteCookie(cname) {
	if(getCookie(cname) != "no cookie"){
		document.cookie = cname + "=" + ";expires=Thu, 18 Dec 2013 12:00:00 UTC;path=/";
	}
	console.log("cookie "+cname+" deleted");
}

function one(name) {
	$("#currently-"+name).find("img").attr("src","empty.png");
	$("#currently-"+name).find("img").eq(0).attr("src","filled.png");
	$("#currently-"+name).attr("data-value","1");
	setCookie(name+"Hearts","1",100);
	console.log("function One ran for "+name);
}

function two(name) {
	$("#currently-"+name).find("img").attr("src","empty.png");
	for(let i=0;i<2; i++){
		$("#currently-"+name).find("img").eq(i).attr("src","filled.png");
	}
	$("#currently-"+name).attr("data-value","2");
	setCookie(name+"Hearts","2",100);
	console.log("function Two ran for "+name);
}

function three(name) {
	$("#currently-"+name).find("img").attr("src","empty.png");
	for(let i=0;i<3; i++){
		$("#currently-"+name).find("img").eq(i).attr("src","filled.png");
	}
	$("#currently-"+name).attr("data-value","3");
	setCookie(name+"Hearts","3",100);
	console.log("function Three ran for "+name);
}

function four(name) {
	$("#currently-"+name).find("img").attr("src","empty.png");
	for(let i=0;i<4; i++){
		$("#currently-"+name).find("img").eq(i).attr("src","filled.png");
	}
	$("#currently-"+name).attr("data-value","4");
	setCookie(name+"Hearts","4",100);
	console.log("function Four ran for "+name);
}

function five(name) {
	$("#currently-"+name).find("img").attr("src","empty.png");
	for(let i=0;i<5; i++){
		$("#currently-"+name).find("img").eq(i).attr("src","filled.png");
	}
	$("#currently-"+name).attr("data-value","5");
	setCookie(name+"Hearts","5",100);
	console.log("function Five ran for "+name);
}

function six(name) {
	$("#currently-"+name).find("img").attr("src","empty.png");
	for(let i=0;i<6; i++){
		$("#currently-"+name).find("img").eq(i).attr("src","filled.png");
	}
	$("#currently-"+name).attr("data-value","6");
	setCookie(name+"Hearts","6",100);
	console.log("function Six ran for "+name);
}

function seven(name) {
	$("#currently-"+name).find("img").attr("src","empty.png");
	for(let i=0;i<7; i++){
		$("#currently-"+name).find("img").eq(i).attr("src","filled.png");
	}
	$("#currently-"+name).attr("data-value","7");
	setCookie(name+"Hearts","7",100);
	console.log("function Seven ran for "+name);
}

function eight(name) {
	$("#currently-"+name).find("img").attr("src","empty.png");
	for(let i=0;i<8; i++){
		$("#currently-"+name).find("img").eq(i).attr("src","filled.png");
	}
	$("#currently-"+name).attr("data-value","8");
	setCookie(name+"Hearts","8",100);
	console.log("function Eight ran for "+name);
}

function nine(name) {
	$("#currently-"+name).find("img").attr("src","empty.png");
	for(let i=0;i<9; i++){
		$("#currently-"+name).find("img").eq(i).attr("src","filled.png");
	}
	$("#currently-"+name).attr("data-value","9");
	setCookie(name+"Hearts","9",100);
	console.log("function Nine ran for "+name);
}

function ten(name) {
	$("#currently-"+name).find("img").attr("src","empty.png");
	for(let i=0;i<10; i++){
		$("#currently-"+name).find("img").eq(i).attr("src","filled.png");
	}
	$("#currently-"+name).attr("data-value","10");
	setCookie(name+"Hearts","10",100);
	console.log("function Ten ran for "+name);
}

function eleven(name) {
	$("#currently-"+name).find("img").attr("src","empty.png");
	for(let i=0;i<11; i++){
		$("#currently-"+name).find("img").eq(i).attr("src","filled.png");
	}
	$("#currently-"+name).attr("data-value","11");
	setCookie(name+"Hearts","11",100);
	console.log("function Eleven ran for "+name);
}

function twelve(name) {
	$("#currently-"+name).find("img").attr("src","empty.png");
	for(let i=0;i<12; i++){
		$("#currently-"+name).find("img").eq(i).attr("src","filled.png");
	}
	$("#currently-"+name).attr("data-value","12");
	setCookie(name+"Hearts","12",100);
	console.log("function Twelve ran for "+name);
}

function thirteen(name) {
	$("#currently-"+name).find("img").attr("src","empty.png");
	for(let i=0;i<13; i++){
		$("#currently-"+name).find("img").eq(i).attr("src","filled.png");
	}
	$("#currently-"+name).attr("data-value","13");
	setCookie(name+"Hearts","13",100);
	console.log("function Thirteen ran for "+name);
}

function fourteen(name) {
	$("#currently-"+name).find("img").attr("src","empty.png");
	for(let i=0;i<14; i++){
		$("#currently-"+name).find("img").eq(i).attr("src","filled.png");
	}
	$("#currently-"+name).attr("data-value","14");
	setCookie(name+"Hearts","14",100);
	console.log("function Fourteen ran for "+name);
}
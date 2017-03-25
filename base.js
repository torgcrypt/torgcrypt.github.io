function getCookie(key) {
	var value = "; " + document.cookie;
	var parts = value.split("; " + key + "=");
	if (parts.length == 2) return parts.pop().split(";").shift();
	else return null;
}

function diffie(gen,secret) {
	return Math.abs((gen^secret) % 9321478927);
}

function stringToIntKey(str) {
	return parseInt(str.split("").map((x)=>x.charCodeAt(0)).reduce((a,b)=>""+a+b));
}

var cookieSecret = getCookie("secret");
if (cookieSecret !== null) {
	document.getElementById("secret").value = cookieSecret;
}

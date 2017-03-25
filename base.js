String.prototype.hashCode = function() {
  var hash = 0, i, chr;
  if (this.length === 0) return hash;
  for (i = 0; i < this.length; i++) {
    chr   = this.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};

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
	return Math.abs(str.hashCode());
	// return parseInt(str.split("").map((x)=>x.charCodeAt(0)%10).reduce((a,b)=>""+a+b,0));
}

var cookieSecret = getCookie("secret");
if (cookieSecret !== null) {
	document.getElementById("secret").value = cookieSecret;
}

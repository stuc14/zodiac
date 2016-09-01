//Horoscope
var avatarInfo = [
{
	name: "aquarius", 
	link: ("http://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=11")
}, 
{
	name: "pisces",
	link: ("http://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=12")
}, 
{
	name: "capricorn",
	link: ("http://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=10")
}, 
{
	name: "aries",
	link: ("http://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=1")
}, 
{
	name: "sagittarius",
	link: ("http://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=9")
}, 
{
	name: "gemini",
	link: ("http://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=3")
}, 
{
	name: "leo",
	link: ("http://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=5")
}, 
{
	name: "taurus",
	link: ("http://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=2")
}, 
{
	name: "scorpio",
	link: ("http://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=8")
}, 
{
	name: "virgo",
	link: ("http://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=6")
}, 
{
	name: "libra",
	link: ("http://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=7")
}, 
{
	name: "cancer",
	link: ("http://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=4")
},

]

function search() {
	var  info = document.getElementById("sign").value
	for (var i = 0; i < avatarInfo.length; i++) {

	if (avatarInfo[i].name === info) {
		window.open (avatarInfo[i].link)
		return
		}
	}
	alert("Sign not valid")
}
// a random fact generator written by @daveburdick for practice

var factsOriginal = [
	'I have worked at four news organizations, two of which were startups, as well as one Buddhist-inspired university and a big-box retailer.',
	'I\'m a Colorado native, but I don\'t have a bumper sticker about it.',
	'I\'ve lived in five states, none of which share a border.',
	'I was once a stand-up comedian.',
	'I am married to <a href="http://twitter.com/rachelcernansky">a really awesome journalist</a>.',
	'These facts are being served up by javascript I wrote.',
	'<a href="http://twitter.com/thesoccerdave">I like soccer</a> more than you might have thought.',
	'I\'m the entertainment editor of <a href="http://denverpost.com">The Denver Post</a>.'
];

var i = 0;

var spewFacts = function(){
	while (i < 3) {
		var facts = factsOriginal;
		var length = facts.length;
		var rand = Math.round(Math.random()*(length-1));
		document.write("<p>"+facts[rand]+"</p>");
		facts.splice(rand, 1);
		i++;
		}
}
var reverse = function(string) {
	var str = "This is my string";
	str.split('');
	str.reverse;
	str.join('');
	console.log(str);
}
reverse();

cant modify strings....must make new variable
 
var reverse = function(string) {
	var newArr = str.split('');
	var reversedArr = newArr.reverse();
	var newStr = reversedArr.join('');
	return newStr;
}
reverse('This is my string');



var friends = ['Jake', 'Tyler', 'Ryan', 'Jason'];

for (var i = 0; i < friends.length; i++) {
	if(friends[i] === 'Ryan') {
		splice.splice(i, 1);
		console.log("We removed Ryan")
	}
}

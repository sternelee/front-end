/* tslint:disable */
let addMyEvent = function(el, ev, fn) {
	if (el.addEventListen) {
		el.addEventListen(ev, fn, false);
	} else if (el.attachEvent) {
		el.attachEvent('on' + ev, fn);
	} else {
		el['on' + ev] = fn;
	}
};

var girl = function(name) {
	this.name = name;
};

var dudu = function(girl) {
	this.girl = girl;
	this.sendGift = function(gift) {
		alert('Hi ' + girl.name + ', dudu send a gift' + gift);
	};
};

var proxyTom = function(girl) {
	this.girl = girl;
	this.sendGift = function(gift) {
		new dudu(girl).sendGift(gift);
	};
};


function funcName(target) {
	target.name = '小明'
}

@funcName
class MyNameClass{}
console.log(MyNameClass.name)



function uniUname(users: any[]) {
	const newUsers: any[] = []
	newUsers.push(users[0])
	for (let i = 1; i < users.length; i++) {
		// for (let j = 0; j < newUsers.length; j++) {
		// 	if (users[i].uName == newUsers[j].uName) break
		// }
		newUsers.push(users[i])
	}
	return newUsers
}

const users = [{id: 0, uName: '12'}, {id: 1, uName: '23'}, {id: 3, uName: '12'}]
console.log(uniUname(users))

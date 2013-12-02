function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

var j = [];
var t = 50000;
for(k=0; k < t; k++){
	j.push(k);
}

console.log(""+shuffle(j));
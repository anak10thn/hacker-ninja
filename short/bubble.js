console.log('short algorithm');
var j = [3,1,6,4,8,2,9,18,20,36,12,25,15,43,13,16,14,12]
var k = j.length;

for (t = 1; t < k; t++ ){
	var a = j[t];
	var c = t;
	while((c >= 0)){
		if(a <= j[c-1]){
			j[c] = j[c-1];
			j[c-1] = a;
		}
		c--;
	}
}

console.log("Done : "+j);
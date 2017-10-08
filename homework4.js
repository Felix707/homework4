//TriangleStars(num)
const stars = function(numStars){
	if(numStars === 0) {
		return '';
	}
	return '*' + stars(numStars-1);
}; 
const space = function(numSpaces){
	if (numSpaces === 0){ 	
		return '';
	}
	return ' ' + space(numSpaces-1);
};
const helper = function(sp, st){
  if(st <= 0){
   return '';
  }
  console.log(space(sp ) + stars(st) );
  return helper(sp+1, st-2);
}
const triangleStars = function(z){
	helper(0, 2*z-1);
};	
triangleStars(5);


//pow(num1, num2)
const pow = function(base, n){
  if(n === 0){
    return 1; 
  }
  return (base * pow(base, n-1));
};
const result = pow(2, 5);
console.log(result);
  
  
//reverse function
const reverse = function(str){
console.log(str[str.length-1]);	
	if(str.length === 1){
		return '';
    }
reverse(str.substring(0, str.length-1))
};
reverse('abcd');


//checkerboard
const checkerboard = function(num, star, space){
	if(num === 0){
		return '';
	}
	return star + space + checkerboard(num-2, star, space)
};

const board = function(num, length){
	if(num === 0) {
		return '';
	}
	else{
		console.log(checkerboard(length, '*', ' '));
		console.log(checkerboard(length, ' ', '*'));
	}
	return board(num-4, length);
};

board(8, 8);

const result = checkerboard(8, '*', ' ');
console.log(result);

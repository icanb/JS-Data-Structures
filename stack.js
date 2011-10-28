/*  last-in-first-out (LIFO) stack - built in to JavaScript */
function Stack(){

	var stack = [];

	this.getLength = function(){

	return (stack.length);

	}

	this.isEmpty = function(){

		return (stack.length == 0);

	}

	this.push = function(item){

		stack.push(item);

	}

	this.pop = function(){

		stack.pop(item);
		
	}


	this.peek = function(){

		// return the item at the front of the queue
		return (stack.length > 0 ? stack[stack.length-1] : undefined);
		
	}
	
	this.getArray = function(){

		return stack;
		
	}
	
	this.print = function(){
		
		var divStack = document.getElementById('stack');

		for(var i=0; i<stack.length; i++) 
		{
			divStack.innerHTML=divStack.innerHTML+ stack[i] + " | ";
		}

		divStack.innerHTML=divStack.innerHTML+"<br />";
		
	}
	
}

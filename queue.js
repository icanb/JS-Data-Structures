/*  first-in-first-out (FIFO) queue */
function Queue(){

	var queue  = [];
	var offset = 0;

	this.getLength = function(){

	return (queue.length - offset);

	}

	this.isEmpty = function(){

		return (queue.length == 0);

	}

	this.enqueue = function(item){

		queue.push(item);

	}

	this.dequeue = function(){

		if (queue.length == 0) return undefined;

		var item = queue[offset];

		// increment the offset and remove the free space if necessary
		if (++ offset * 2 >= queue.length){
			queue  = queue.slice(offset);
			offset = 0;
		}

		// return the dequeued item
		return item;

	}


	this.peek = function(){

		// return the item at the front of the queue
		return (queue.length > 0 ? queue[offset] : undefined);
		
	}
	
	this.getArray = function(){

		return queue;
		
	}
	
	this.print = function(){

		var divQueue = document.getElementById('queue');

		for(var i=0; i<queue.length; i++) 
		{
			divQueue.innerHTML=divQueue.innerHTML+ queue[i] + " | ";
		}

		divQueue.innerHTML=divQueue.innerHTML+"<br />";
		
	}

}

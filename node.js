'use strict';

class Node {
	constructor(data, left, right) {
		this.data = data || null;
		this.left = left || null;
		this.right = right || null;
	}

	adder(data){
		if (this.data > data){
			if (this.left == null){
				this.left = new Node(data);
			} else this.left.adder(data);
		} else {
			if (this.right == null){
				this.right = new Node(data);
			} else this.right.adder(data);
		}
	}
		
	size(){
		var i = 0;
		if (this.data != undefined){
			i += 1;
		}
		if (this.left != null){
			i += this.left.size();
		}
		if (this.right != null){
			i += this.right.size();
		}
		return i;
	}
}

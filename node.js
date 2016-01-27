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
	
	contains(data){
		var nodeValue = this.data;
		if (nodeValue == data){
			return true;
		} else if (nodeValue > data && this.left != null){
			return this.left.contains(data);
		} else if (nodeValue < data && this.right != null){
			 return this.right.contains(data);
		} else {
			return false;
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

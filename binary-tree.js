'use strict';

class BinaryTree {
	constructor() {
		this.root = null;
	}

	insert(data) {
		if (this.root == null){
			this.root = new Node(data);
		} else {
			this.root.adder(data);
		}
		
	}
		
	contains(data) {
		return this.root.contains(data);	
	}

	remove(data) {

	}

	size() {
		return this.size();
	}

	isEmpty() {

	}
}
	
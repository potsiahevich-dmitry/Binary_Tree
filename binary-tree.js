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
		if (this.root != 0 && this.root.data != data){
			this.root.remove(data);
		} else if (this.root.data == data && this.root.left == null && this.root.right == null){
			this.root = null;
		}
	}

	size() {
		if (this.root == null){
			return 0;
		} else {
		return this.root.size();
		}
	}

	isEmpty() {
		return (this.root == null);
	}
}
	
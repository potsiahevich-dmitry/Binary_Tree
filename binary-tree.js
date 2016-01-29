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
		var currentNode = this.root;
		while (currentNode != null){
			if (currentNode.data == data){
				return true
			} else {
				if (currentNode.data > data){
					currentNode = currentNode.left;
				} else currentNode = currentNode.right;
			}
		}
		return false
	}

	remove(data) {
		if (this.root.data == data && this.root.left == null && this.root.right == null){
			this.root = null;
		} else remove(this.root, data);
	}
	
	

	size() {
	/*	if (this.root == null){
			return 0;
		} else {
		return this.root.size();
		}*/
	}

	isEmpty() {
		return (this.root == null);
	}
}

function remove(node, data){ 

		if (node == null){
			console.log(node);
			return node;
		}
		if (data < node.data){
		
			node.left = remove(node.left, data);
		} else if (data > node.data){
			node.right = remove(node.right, data);
		} else if (node.left != null && node.right != null){
			node.data = minimum(node.right).data;
			node.right = remove(node.right, node.right.data);
		} else {
			if (node.left != null){
				node = node.left;
			} else {
				node = node.right;
			}
		}
		return node
	}
	
function minimum(x){
		if (x.left == null){
			return x;
		}
		return minimum(x.left);
	}
	
'use strict';

class BinaryTree {
	constructor() {
		this.root = null;
	}

	insert(data) {
		if (this.root == null){
			this.root = new Node(data);
			return
		}
		var currentNode = this.root;
		while (true){
			if (currentNode.data > data){
				if (currentNode.left == null){
					currentNode.left = new Node(data);
					return
				} else currentNode = currentNode.left;
			} else if (currentNode.right == null){
				currentNode.right = new Node(data);
				return
			} else currentNode = currentNode.right;
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
		if (this.root == null){
			return 0;
		} else {
		return this.root.size();
		}
	}

	isEmpty() {
		return (this.root == null)
	}
}

function remove(node, data){ 
	if (node == null){
			return node;
		}
		if (data < node.data){
			node.left = remove(node.left, data);
		} else if (data > node.data){
			node.right = remove(node.right, data);
		} else if (node.left != null && node.right != null){
			node.data = maximum(node.left).data;
			node.left = remove(node.left, node.left.data);
		} else {
			if (node.left != null){
				node = node.left;
			} else {
				node = node.right;
			}
		}
		return node
	}
	
function maximum(x){
	if (x.right == null){
		return x;
	}
	return maximum(x.right);
}
	
#include <iostream>
struct Node {
  int value;
  Node* next;
  Node(int v) : value(v), next(0) {}
};
struct Tree {
  int key;
  Tree* left;
  Tree* right;
  Tree(int k) : key(k), left(0), right(0) {}
};
int main() {
  // A ring: the second node points back at the first.
  Node* a = new Node(1);
  Node* b = new Node(2);
  a->next = b;
  b->next = a;
  __ctj_show("ring", a);
  // A chain that ends in null.
  Node* c = new Node(3);
  b->next = c;
  __ctj_show("chain", a);
  // A tree with empty children.
  Tree* root = new Tree(5);
  root->left = new Tree(3);
  root->right = new Tree(8);
  root->left->left = new Tree(1);
  __ctj_show("tree", root);
  std::cout << "done" << std::endl;
  return 0;
}

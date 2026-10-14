#include <iostream>
#include <vector>
struct Node {
  int value;
  Node* next;
};
struct Big {
  int data[100];
  int used;
};
int main() {
  // An array longer than the item limit: the first items, then the count left out.
  Big b;
  for (int i = 0; i < 100; i++) b.data[i] = i;
  b.used = 100;
  __ctj_show("big", b);
  // A vector longer than the item limit.
  std::vector<int> v;
  for (int i = 0; i < 40; i++) v.push_back(i);
  __ctj_show("vector", v);
  // A chain longer than the node limit: the nodes past the limit are cut, and marked.
  Node* head = 0;
  for (int i = 0; i < 350; i++) {
    Node* n = new Node;
    n->value = i;
    n->next = head;
    head = n;
  }
  __ctj_show("chain", head);
  std::cout << "done" << std::endl;
  return 0;
}

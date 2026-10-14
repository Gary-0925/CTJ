#include <iostream>
#include <string>
#include <vector>
struct Item {
  std::string name;
  int qty;
};
int main() {
  std::string s = "hi there";
  __ctj_show("str", s);
  std::vector<std::string> names;
  names.push_back("ann");
  names.push_back("bob");
  __ctj_show("names", names);
  std::vector<int> empty;
  __ctj_show("empty", empty);
  std::vector<int> nums;
  for (int i = 0; i < 5; i++) nums.push_back(i * i);
  __ctj_show("nums", nums);
  Item it;
  it.name = "pen";
  it.qty = 3;
  __ctj_show("item", it);
  std::cout << "done" << std::endl;
  return 0;
}

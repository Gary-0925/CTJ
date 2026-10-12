#include <forward_list>
#include <iostream>
using namespace std;
int main(){
  forward_list<int> f;
  f.push_front(1); f.push_front(2); f.push_front(3);
  for (int x : f) cout << x << " ";
  cout << endl;
  f.pop_front();
  cout << f.front() << " " << (f.empty() ? 1 : 0) << endl;
}

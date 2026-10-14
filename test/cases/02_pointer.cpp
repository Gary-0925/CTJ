#include <iostream>
int main() {
  int x = 10;
  int* p = &x;
  *p = 20;
  std::cout << (x) << "\n";
  std::cout << (*p) << "\n";
  int a[4] = {1, 2, 3, 4};
  int* q = a;
  std::cout << (*q) << "\n";
  q++;
  std::cout << (*q) << "\n";
  q += 2;
  std::cout << (*q) << "\n";
  std::cout << (q - a) << "\n";
  std::cout << (*(a + 2)) << "\n";
  std::cout << (q > a ? 1 : 0) << "\n";
  std::cout << ((q == a + 3) ? 1 : 0) << "\n";
  int* n = 0;
  std::cout << ((n == 0) ? 1 : 0) << "\n";
  std::cout << ((p == 0) ? 1 : 0) << "\n";
  int* h = new int(99);
  std::cout << (*h) << "\n";
  delete h;
  int* arr = new int[3]();
  arr[0] = 7;
  arr[2] = 9;
  std::cout << (arr[0] + arr[1] + arr[2]) << "\n";
  delete[] arr;
  int** pp = &p;
  **pp = 30;
  std::cout << (x) << "\n";
  return 0;
}

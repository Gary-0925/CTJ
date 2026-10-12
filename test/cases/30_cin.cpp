#include <iostream>
#include <string>
int main() {
  int a, b;
  double d;
  std::string w;
  char c;
  std::cin >> a >> b;
  std::cout << a + b << std::endl;
  std::cin >> d;
  std::cout << d * 2 << std::endl;
  std::cin >> w;
  std::cout << "[" << w << "]" << std::endl;
  std::cin >> c;
  std::cout << "c=" << c << std::endl;
  std::string line;
  std::getline(std::cin, line);
  std::cout << "rest=[" << line << "]" << std::endl;
  std::getline(std::cin, line);
  std::cout << "line2=[" << line << "]" << std::endl;
  int z;
  std::cout << (std::cin >> z ? 1 : 0) << std::endl;
  std::cout << std::cin.eof() << std::endl;
  return 0;
}

#include <iostream>
#include <iomanip>
#include <string>
int main() {
  std::cout << 42 << ' ' << -17 << ' ' << true << ' ' << false << std::endl;
  std::cout << 3.25 << " " << 1.0 << " " << 1e20 << " " << 0.0001 << " " << -2.5 << " " << 123456789.0 << std::endl;
  std::cout << 1.0f / 3 << " " << 2.0 / 3 << std::endl;
  std::cout << std::hex << 255 << " " << -1 << " " << std::dec << 255 << std::endl;
  std::cout << std::oct << 8 << std::dec << " " << 9 << std::endl;
  std::cout << std::setw(6) << 42 << "|" << std::setw(4) << "ab" << "|" << std::endl;
  std::cout << std::setfill('*') << std::setw(5) << 7 << std::setfill(' ') << "|" << std::endl;
  std::cout << std::setprecision(3) << 3.14159 << " " << std::setprecision(10) << 3.14159 << std::endl;
  std::cout << std::boolalpha << true << " " << false << std::noboolalpha << " " << true << std::endl;
  std::cout << std::left << std::setw(5) << 1 << "|" << std::right << std::setw(5) << 2 << "|" << std::endl;
  unsigned int u = 4294967295u; unsigned long ul = 18446744073709551615ul; long l = -5;
  std::cout << u << " " << l << " " << std::hex << l << std::dec << std::endl;
  std::cout << 'A' << (char)66 << (unsigned char)67 << std::endl;
  std::string s = "str";
  std::cout << s << " " << std::setw(5) << s << "|" << std::endl;
  std::cout << "a" << std::flush << "b" << std::endl;
  std::cout << std::setbase(16) << 4096 << std::endl;
  std::cout.width(4);
  std::cout << 5 << std::endl;
  return 0;
}

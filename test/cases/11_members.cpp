#include <iostream>
#include <cstring>

template <typename T> struct Traits {
  typedef T value_type;
  typedef long size_type;
};

template <typename C, typename Tr = Traits<C> > class Str {
public:
  typedef typename Tr::value_type value_type;
  typedef typename Tr::size_type size_type;
  static const size_type npos = (size_type)-1;

  struct Rep : Tr {
    size_type len;
    Rep() : len(0) {}
  };

  Str() {}

  void set(const value_type* s) {
    rep.len = (size_type)std::strlen(s);
    for (size_type i = 0; i < rep.len; i++) buf[i] = s[i];
  }

  size_type size() const { return rep.len; }

  value_type at(size_type i) const { return buf[i]; }

  static size_type compare(const value_type* a, const value_type* b);

private:
  value_type buf[32];
  Rep rep;
};

template <typename C, typename Tr>
typename Str<C, Tr>::size_type Str<C, Tr>::compare(const value_type* a, const value_type* b) {
  while (*a && *a == *b) { a++; b++; }
  return (size_type)(*a - *b);
}

template <typename T> struct Node {
  template <typename U> struct Rebind { typedef Node<U> other; };
  typedef typename Rebind<int>::other IntNode;
  IntNode* next;
  Node() : next(0) {}
};

struct Buf {
  int d[4];
  Buf() { d[0] = 5; }
  ~Buf() {}
  int operator[](int i) { return d[i]; }
  int front() { return operator[](0); }
};

int main() {
  Str<char> s;
  s.set("hello");
  std::cout << ((int)s.size()) << "\n";
  int c = (int)Str<char>::compare("abc", "abd");
  std::cout << (c < 0) << "\n";
  std::cout << ((int)Str<char>::npos == -1) << "\n";
  std::cout << ((char)s.at(1)) << "\n";
  Node<double> n;
  std::cout << (n.next == 0) << "\n";
  Buf b;
  std::cout << (b.front()) << "\n";
  return 0;
}

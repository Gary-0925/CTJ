#include <cstdio>
extern "C" {
int isalnum(int); int isalpha(int); int iscntrl(int); int isdigit(int); int islower(int);
int isgraph(int); int isprint(int); int ispunct(int); int isspace(int); int isupper(int);
int isxdigit(int); int tolower(int); int toupper(int); int isblank(int);
}
int main() {
  for (int c = -1; c < 256; c++) {
    printf("%d:%d%d%d%d%d%d%d%d%d%d%d%d %d %d\n", c, isalnum(c) != 0, isalpha(c) != 0, iscntrl(c) != 0,
           isdigit(c) != 0, islower(c) != 0, isgraph(c) != 0, isprint(c) != 0, ispunct(c) != 0,
           isspace(c) != 0, isupper(c) != 0, isxdigit(c) != 0, isblank(c) != 0, tolower(c), toupper(c));
  }
  return 0;
}

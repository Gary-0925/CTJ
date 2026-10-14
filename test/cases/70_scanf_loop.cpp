#include <cstdio>

int main() {
  int x, sum = 0, count = 0;
  while (scanf("%d", &x) == 1) {
    sum += x;
    count++;
  }
  printf("count=%d sum=%d\n", count, sum);

  char ch;
  int r = fscanf(stdin, " %c", &ch);
  printf("r=%d ch=%c\n", r, ch);

  char rest[64];
  r = fscanf(stdin, "%63[^\n]", rest);
  printf("r=%d rest=[%s]\n", r, rest);

  char after;
  r = scanf("%c", &after);
  printf("r=%d after=%d\n", r, after);

  int p, q;
  r = scanf("%d %d", &p, &q);
  printf("eof r=%d\n", r);

  char buf[8];
  int used = -1;
  r = sscanf("abcdefgh", "%3c%n", buf, &used);
  printf("r=%d used=%d buf=%.3s\n", r, used, buf);

  double d1, d2;
  r = sscanf("1.5e3 -2.5E-1", "%le %lg", &d1, &d2);
  printf("r=%d %g %g\n", r, d1, d2);

  unsigned oct, hex;
  r = sscanf("777 FF", "%o %x", &oct, &hex);
  printf("r=%d %u %u\n", r, oct, hex);

  long lv;
  int neg;
  r = sscanf("  -123456 7", " %ld %d", &lv, &neg);
  printf("r=%d %ld %d\n", r, lv, neg);
  return 0;
}

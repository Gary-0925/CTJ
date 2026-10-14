#include <cstdio>
#include <iostream>
using namespace std;

int main() {
  int n;
  int r = scanf("%d", &n);
  printf("r=%d n=%d\n", r, n);

  long long big;
  unsigned u;
  short sh;
  char c;
  r = scanf("%lld %u %hd %c", &big, &u, &sh, &c);
  printf("r=%d %lld %u %d %c\n", r, big, u, sh, c);

  char word[16];
  double d;
  float f;
  r = scanf(" %15s %lf %f", word, &d, &f);
  printf("r=%d [%s] %.3f %.2f\n", r, word, d, f);

  int a, b;
  r = scanf("%d %*d %d", &a, &b);
  printf("r=%d a=%d b=%d\n", r, a, b);

  int x, y, z;
  r = sscanf("12-34", "%d-%d", &x, &y);
  printf("sscanf r=%d x=%d y=%d\n", r, x, y);
  r = sscanf("0x1F 017 42", "%i %i %d", &x, &y, &z);
  printf("sscanf r=%d %d %d %d\n", r, x, y, z);

  char key[32];
  int cnt = -5;
  r = sscanf("key=value;", "%[^=]=%[^;];%n", key, word, &cnt);
  printf("r=%d key=%s word=%s cnt=%d\n", r, key, word, cnt);
  r = sscanf("", "%d", &x);
  printf("empty r=%d\n", r);
  r = sscanf("abc", "%d", &x);
  printf("mismatch r=%d\n", r);

  int ch = getchar();
  printf("next char %d\n", ch);
  cin >> x;
  cout << "cin got " << x << endl;
  r = scanf("%d", &x);
  printf("tail r=%d x=%d\n", r, x);
  return 0;
}

// Copyright 2026 (C) Gary0
// All rights reserved
#define debug
#include <bits/stdc++.h>
#define inf 0x3f3f3f3f
typedef long long LL;
using namespace std;

int n;
LL a[200005], b[200005];
pair<LL, LL> h[200005];

bool cmp(pair<LL, LL> x, pair<LL, LL> y) { return x.first * y.second < y.first * x.second; };

pair<LL, LL> calc()
{
	int hl = 0;
	LL sm = 0;
	for (int i = 1; i <= n; i++)
		if (b[i])
		{
			LL x = a[i], y = b[i];
			if (y < 0) x = -x, y = -y;
			h[++hl] = { x, y }, sm += y;
		}
	sort(h + 1, h + hl + 1, cmp);
	LL x = 0, y = 1, s = 0;
	for (int i = 1; i <= hl; i++)
	{
		s += h[i].second;
		if (s * 2 >= sm) { x = h[i].first, y = h[i].second; break; }
	}
	if (x < -y) x = -1, y = 1;
	if (x > y) x = 1, y = 1;
	LL ans = 0;
	for (int i = 1; i <= n; i++) ans += abs(a[i] * y - b[i] * x);
	LL g = __gcd(ans, y);
	return { ans / g, y / g };
}

int main()
{
	ios::sync_with_stdio(0), cin.tie(0), cout.tie(0);
	cin >> n;
	for (int i = 1; i <= n; i++) cin >> a[i];
	for (int i = 1; i <= n; i++) cin >> b[i];
	pair<LL, LL> x = calc();
	for (int i = 1; i <= n; i++) swap(a[i], b[i]);
	pair<LL, LL> y = calc();
	if (x.first * y.second > y.first * x.second) cout << y.first << " " << y.second;
	else cout << x.first << " " << x.second;
	return 0;
}

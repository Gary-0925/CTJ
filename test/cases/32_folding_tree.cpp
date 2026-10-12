// Copyright 2026 (C) Gary0
// All rights reserved
#define debug
#include <bits/stdc++.h>
#define inf 0x3f3f3f3f
typedef long long LL;
using namespace std;

struct ft // Folding Tree designed by Gary0
{
private:
	int tl, rt;
	struct node { int x, c, sz, ct, l, r; } p[1100006];
	inline void pushup(int u)
	{
		p[u].sz = p[u].c + p[p[u].l].sz + p[p[u].r].sz;
		p[u].ct = 1 + p[p[u].l].ct + p[p[u].r].ct;
	}
	inline int setnode(int x, int c)
	{
		int u = ++tl;
		p[u].x = x, p[u].c = p[u].sz = c, p[u].ct = 1;
		return u;
	}
	int buildat(const vector<pair<int, int>>& x, int l, int r)
	{
		if (l >= r) return 0;
		int u = setnode(x[l].first, x[l].second);
		if (l + 1 < r)
		{
			p[u].l = buildat(x, l + 1, l + r >> 1);
			p[u].r = buildat(x, l + r >> 1, r);
			pushup(u);
		}
		return u;
	}
	void insertnd(int& u, int v)
	{
		if (!v) return;
		if (!u) { u = v; return; }
		if (!p[u].r) p[u].r = v;
		else insertnd(p[u].r, v);
		pushup(u), fold(u);
	}
	void erasend(int& u)
	{
		if (!p[u].l) { u = p[u].r; return; }
		if (!p[u].r) { u = p[u].l; return; }
		p[u].x = p[p[u].l].x, p[u].c = p[p[u].l].c, erasend(p[u].l);
		pushup(u), fold(u);
	}
	void insertat(int& u, int x, int c)
	{
		if (!u) { u = setnode(x, c); return; }
		if (x == p[u].x) { p[u].c += c, p[u].sz += c; return; }
		if (x < p[u].x) swap(x, p[u].x), swap(c, p[u].c);
		if (p[u].r && x >= p[p[u].r].x) insertat(p[u].r, x, c);
		else insertat(p[u].l, x, c);
		pushup(u), fold(u);
	}
	void eraseat(int& u, int x)
	{
		if (!u) return;
		if (x == p[u].x && p[u].c > 1) { p[u].c--, p[u].sz--; return; }
		if (x == p[u].x) { erasend(u); return; }
		if (p[u].r && x >= p[p[u].r].x) eraseat(p[u].r, x);
		else eraseat(p[u].l, x);
		pushup(u), fold(u);
	}
	int countlat(int u, int x)
	{
		int c = 0;
		while (u)
			if (x > p[u].x)
			{
				c += p[u].c;
				if (!p[u].r || x < p[p[u].r].x) u = p[u].l;
				else c += p[p[u].l].sz, u = p[u].r;
			}
			else return c;
		return c;
	}
	int getkthat(int u, int k)
	{
		while (u)
			if (k > p[u].c)
			{
				k -= p[u].c;
				if (k <= p[p[u].l].sz) u = p[u].l;
				else k -= p[p[u].l].sz, u = p[u].r;
			}
			else return p[u].x;
		return -1;
	}
	void fold(int& u)
	{
		if (!u) return;
		if (p[p[u].r].ct > (p[p[u].l].ct << 1) + 1 && (p[p[u].r].l || p[p[u].r].r))
		{
			int v = p[u].r;
			if (p[v].l && !p[v].r) swap(p[v].l, p[v].r);
			int w = p[v].r;
			if (p[p[v].l].ct >= 2)
			{
				int vl = p[v].l;
				if (p[vl].l && !p[vl].r) swap(p[vl].l, p[vl].r);
				int tp = p[vl].r;
				p[vl].r = 0; pushup(vl), p[v].r = tp; pushup(v);
			}
			else p[v].r = 0; pushup(v);
			insertnd(p[u].l, v), p[u].r = w; pushup(u);
			return;
		}
		if (p[p[u].l].ct > (p[p[u].r].ct << 1) + 1 && (p[p[u].l].l || p[p[u].l].r))
		{
			int v = p[u].l;
			if (p[v].l && !p[v].r) swap(p[v].l, p[v].r);
			int w = p[v].r;
			if (p[p[v].l].ct >= 2)
			{
				int vl = p[v].l;
				if (p[vl].l && !p[vl].r) swap(p[vl].l, p[vl].r);
				int tp = p[vl].r;
				p[vl].r = 0; pushup(vl), p[v].r = tp; pushup(v);
			}
			else p[v].r = 0, pushup(v);
			insertnd(w, p[u].r), p[u].r = w; pushup(u);
			return;
		}
	}
public:
	inline void build(const vector<pair<int, int>>& x) { rt = buildat(x, 0, x.size()); }
	inline void insert(int x) { insertat(rt, x, 1); }
	inline void erase(int x) { eraseat(rt, x); }
	inline int kth(int k) { return getkthat(rt, k); }
	inline int rnk(int x) { return countlat(rt, x) + 1; }
	inline int prv(int x) { return getkthat(rt, countlat(rt, x)); }
	inline int nxt(int x) { return getkthat(rt, countlat(rt, x + 1) + 1); }
} tr;

int n, m;
int a[100005];

int main()
{
	ios::sync_with_stdio(0), cin.tie(0), cout.tie(0);
	cin >> n >> m;
	for (int i = 1; i <= n; i++) cin >> a[i];
	sort(a + 1, a + n + 1);
	vector<pair<int, int>> b;
	for (int i = 1; i <= n; i++)
		if (!b.empty() && a[i] == b.back().first) b.back().second++;
		else b.push_back({ a[i], 1 });
	tr.build(b);
	int lst = 0;
	LL ans = 0;
	while (m--)
	{
		int op, x;
		cin >> op >> x, x ^= lst;
		if (op == 1) tr.insert(x);
		if (op == 2) tr.erase(x);
		if (op == 3) lst = tr.rnk(x), ans ^= lst;
		if (op == 4) lst = tr.kth(x), ans ^= lst;
		if (op == 5) lst = tr.prv(x), ans ^= lst;
		if (op == 6) lst = tr.nxt(x), ans ^= lst;
	}
	cout << ans;
	return 0;
}

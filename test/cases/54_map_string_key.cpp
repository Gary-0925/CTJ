#include <iostream>
#include <map>
#include <string>
using namespace std;

int q;
map<string, int> mp;

int main()
{
	cin >> q;
	while (q--)
	{
		string s;
		cin >> s;
		mp[s]++;
		cout << mp[s] << "\n";
	}
	cout << mp.size() << " " << mp.count("abc") << " " << mp.count("zzz") << "\n";
	string key = "x";
	int& ref = mp[key];
	ref += 10;
	map<string, int>::iterator it = mp.find(key);
	cout << it->second << "\n";
	for (map<string, int>::iterator i = mp.begin(); i != mp.end(); ++i)
		cout << i->first << "=" << i->second << "\n";
	return 0;
}

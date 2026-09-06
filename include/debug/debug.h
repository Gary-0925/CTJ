// Debug mode support -*- C++ -*- (CTJ: assertion checking is always disabled)

#ifndef _GLIBCXX_DEBUG_MACRO
#define _GLIBCXX_DEBUG_MACRO 1

#include <bits/c++config.h>

#define __glibcxx_assert(_Condition)
#define __glibcxx_function_requires(...)
#define __glibcxx_class_requires(_a, _b, _c)
#define __glibcxx_class_requires2(_a, _b, _c)
#define __glibcxx_class_requires3(_a, _b, _c, _d)
#define __glibcxx_class_requires4(_a, _b, _c, _d, _e)

#define __glibcxx_requires_cond(_Cond, _Msg)
#define __glibcxx_requires_heap(_First, _Last)
#define __glibcxx_requires_heap_pred(_First, _Last, _Pred)
#define __glibcxx_requires_non_empty_range(_First, _Last)
#define __glibcxx_requires_nonempty()
#define __glibcxx_requires_partitioned_lower(_First, _Last, _Value)
#define __glibcxx_requires_partitioned_lower_pred(_First, _Last, _Value, _Pred)
#define __glibcxx_requires_partitioned_upper(_First, _Last, _Value)
#define __glibcxx_requires_partitioned_upper_pred(_First, _Last, _Value, _Pred)
#define __glibcxx_requires_sorted(_First, _Last)
#define __glibcxx_requires_sorted_pred(_First, _Last, _Pred)
#define __glibcxx_requires_sorted_set(_First1, _Last1, _First2)
#define __glibcxx_requires_sorted_set_pred(_First1, _Last1, _First2, _Pred)
#define __glibcxx_requires_string(_String)
#define __glibcxx_requires_string_len(_String, _Len)
#define __glibcxx_requires_subscript(_N)
#define __glibcxx_requires_valid_range(_First, _Last)

#define _GLIBCXX_DEBUG_VERIFY(_Condition)

#endif

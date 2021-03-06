// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.7-6-a-57
description: >
    Object.defineProperties - both desc.[[Get]] and P.[[Get]] are two
    objects which refer to the same object (8.12.9 step 6)
includes: [propertyHelper.js]
---*/


var obj = {};

function get_Func() {
    return 10;
}

Object.defineProperty(obj, "foo", {
    get: get_Func
});

Object.defineProperties(obj, {
    foo: {
        get: get_Func
    }
});

verifyNotEnumerable(obj, "foo");
assert.sameValue(obj.foo, 10);

verifyNotConfigurable(obj, "foo")


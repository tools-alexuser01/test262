// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-3-154
description: >
    Object.defineProperty - 'writable' property in 'Attributes' is own
    data property  (8.10.5 step 6.a)
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = { };

        var attr = {
            writable: true
        };

        Object.defineProperty(obj, "property", attr);

        var beforeWrite = obj.hasOwnProperty("property");

        obj.property = "isWritable";

        var afterWrite = (obj.property === "isWritable");

        return beforeWrite === true && afterWrite === true;
    }
runTestCase(testcase);

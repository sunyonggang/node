// Copyright 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Flags: --allow-natives-syntax

function f() {}
%FunctionBindArguments(f, {}, undefined, 1);

f();
f();
%OptimizeFunctionOnNextCall(f);
f();

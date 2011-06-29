// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.8.5_A1.5_T6;
 * @section: 7.8.5;
 * @assertion: RegularExpressionFirstChar :: BackslashSequence :: \LineTerminator is incorrect;  
 * @description: Paragraph separator, with eval;
*/

//CHECK#1
try {
   eval("/\\\u2029/").source;
   $ERROR('#1.1: RegularExpressionFirstChar :: BackslashSequence :: \\Paragraph separator is incorrect. Actual: ' + (eval("/\\\u2029/").source)); 
}
catch (e) {
  if ((e instanceof SyntaxError) !== true) {
     $ERROR('#1.2: RegularExpressionFirstChar :: BackslashSequence :: \\Paragraph separator is incorrect. Actual: ' + (e));
  }
}     
/*
 * Generated by PEG.js 0.10.0.
 *
 * http://pegjs.org/
 */

"use strict";

function peg$subclass(child, parent) {
  function ctor() { this.constructor = child; }
  ctor.prototype = parent.prototype;
  child.prototype = new ctor();
}

function peg$SyntaxError(message, expected, found, location) {
  this.message  = message;
  this.expected = expected;
  this.found    = found;
  this.location = location;
  this.name     = "SyntaxError";

  if (typeof Error.captureStackTrace === "function") {
    Error.captureStackTrace(this, peg$SyntaxError);
  }
}

peg$subclass(peg$SyntaxError, Error);

peg$SyntaxError.buildMessage = function(expected, found) {
  var DESCRIBE_EXPECTATION_FNS = {
        literal: function(expectation) {
          return "\"" + literalEscape(expectation.text) + "\"";
        },

        "class": function(expectation) {
          var escapedParts = "",
              i;

          for (i = 0; i < expectation.parts.length; i++) {
            escapedParts += expectation.parts[i] instanceof Array
              ? classEscape(expectation.parts[i][0]) + "-" + classEscape(expectation.parts[i][1])
              : classEscape(expectation.parts[i]);
          }

          return "[" + (expectation.inverted ? "^" : "") + escapedParts + "]";
        },

        any: function(expectation) {
          return "any character";
        },

        end: function(expectation) {
          return "end of input";
        },

        other: function(expectation) {
          return expectation.description;
        }
      };

  function hex(ch) {
    return ch.charCodeAt(0).toString(16).toUpperCase();
  }

  function literalEscape(s) {
    return s
      .replace(/\\/g, '\\\\')
      .replace(/"/g,  '\\"')
      .replace(/\0/g, '\\0')
      .replace(/\t/g, '\\t')
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '\\r')
      .replace(/[\x00-\x0F]/g,          function(ch) { return '\\x0' + hex(ch); })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return '\\x'  + hex(ch); });
  }

  function classEscape(s) {
    return s
      .replace(/\\/g, '\\\\')
      .replace(/\]/g, '\\]')
      .replace(/\^/g, '\\^')
      .replace(/-/g,  '\\-')
      .replace(/\0/g, '\\0')
      .replace(/\t/g, '\\t')
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '\\r')
      .replace(/[\x00-\x0F]/g,          function(ch) { return '\\x0' + hex(ch); })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return '\\x'  + hex(ch); });
  }

  function describeExpectation(expectation) {
    return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);
  }

  function describeExpected(expected) {
    var descriptions = new Array(expected.length),
        i, j;

    for (i = 0; i < expected.length; i++) {
      descriptions[i] = describeExpectation(expected[i]);
    }

    descriptions.sort();

    if (descriptions.length > 0) {
      for (i = 1, j = 1; i < descriptions.length; i++) {
        if (descriptions[i - 1] !== descriptions[i]) {
          descriptions[j] = descriptions[i];
          j++;
        }
      }
      descriptions.length = j;
    }

    switch (descriptions.length) {
      case 1:
        return descriptions[0];

      case 2:
        return descriptions[0] + " or " + descriptions[1];

      default:
        return descriptions.slice(0, -1).join(", ")
          + ", or "
          + descriptions[descriptions.length - 1];
    }
  }

  function describeFound(found) {
    return found ? "\"" + literalEscape(found) + "\"" : "end of input";
  }

  return "Expected " + describeExpected(expected) + " but " + describeFound(found) + " found.";
};

function peg$parse(input, options) {
  options = options !== void 0 ? options : {};

  var peg$FAILED = {},

      peg$startRuleFunctions = { line: peg$parseline },
      peg$startRuleFunction  = peg$parseline,

      peg$c0 = function(obj) { return obj },
      peg$c1 = function(head, m) { return m; },
      peg$c2 = function(head, tail) {
              var result = {};
              [head].concat(tail).forEach(function(element) {
                result[element.name] = element.value;
              });

              return result;
            },
      peg$c3 = function(members) { return members[0]; },
      peg$c4 = ":",
      peg$c5 = peg$literalExpectation(":", false),
      peg$c6 = function(key, value) { return { name:key, value:value } },
      peg$c7 = function(head, v) { return v; },
      peg$c8 = function(head, tail) { return [head].concat(tail); },
      peg$c9 = function(values) { return values !== null ? values : []; },
      peg$c10 = "[",
      peg$c11 = peg$literalExpectation("[", false),
      peg$c12 = "]",
      peg$c13 = peg$literalExpectation("]", false),
      peg$c14 = ",",
      peg$c15 = peg$literalExpectation(",", false),
      peg$c16 = /^[a-z0-9_.\-]/i,
      peg$c17 = peg$classExpectation([["a", "z"], ["0", "9"], "_", ".", "-"], false, true),
      peg$c18 = function(chars) { 
          const val = chars.join("")
          const float = parseFloat(val)
       	if (!isNaN(float) && JSON.stringify(float) === val) return float
          else return val
         },
      peg$c19 = function(chars) { return chars.join(""); },
      peg$c20 = /^[^\0-\x1F"\\]/,
      peg$c21 = peg$classExpectation([["\0", "\x1F"], "\"", "\\"], true, false),
      peg$c22 = "\"",
      peg$c23 = peg$literalExpectation("\"", false),
      peg$c24 = "\\",
      peg$c25 = peg$literalExpectation("\\", false),
      peg$c26 = "/",
      peg$c27 = peg$literalExpectation("/", false),
      peg$c28 = "b",
      peg$c29 = peg$literalExpectation("b", false),
      peg$c30 = function() { return "\b"; },
      peg$c31 = "f",
      peg$c32 = peg$literalExpectation("f", false),
      peg$c33 = function() { return "\f"; },
      peg$c34 = "n",
      peg$c35 = peg$literalExpectation("n", false),
      peg$c36 = function() { return "\n"; },
      peg$c37 = "r",
      peg$c38 = peg$literalExpectation("r", false),
      peg$c39 = function() { return "\r"; },
      peg$c40 = "t",
      peg$c41 = peg$literalExpectation("t", false),
      peg$c42 = function() { return "\t"; },
      peg$c43 = "u",
      peg$c44 = peg$literalExpectation("u", false),
      peg$c45 = function(digits) {
                return String.fromCharCode(parseInt(digits, 16));
              },
      peg$c46 = function(sequence) { return sequence; },
      peg$c47 = peg$otherExpectation("whitespace"),
      peg$c48 = /^[ \t]/,
      peg$c49 = peg$classExpectation([" ", "\t"], false, false),
      peg$c50 = /^[0-9a-f]/i,
      peg$c51 = peg$classExpectation([["0", "9"], ["a", "f"]], false, true),

      peg$currPos          = 0,
      peg$savedPos         = 0,
      peg$posDetailsCache  = [{ line: 1, column: 1 }],
      peg$maxFailPos       = 0,
      peg$maxFailExpected  = [],
      peg$silentFails      = 0,

      peg$result;

  if ("startRule" in options) {
    if (!(options.startRule in peg$startRuleFunctions)) {
      throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
    }

    peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
  }

  function text() {
    return input.substring(peg$savedPos, peg$currPos);
  }

  function location() {
    return peg$computeLocation(peg$savedPos, peg$currPos);
  }

  function expected(description, location) {
    location = location !== void 0 ? location : peg$computeLocation(peg$savedPos, peg$currPos)

    throw peg$buildStructuredError(
      [peg$otherExpectation(description)],
      input.substring(peg$savedPos, peg$currPos),
      location
    );
  }

  function error(message, location) {
    location = location !== void 0 ? location : peg$computeLocation(peg$savedPos, peg$currPos)

    throw peg$buildSimpleError(message, location);
  }

  function peg$literalExpectation(text, ignoreCase) {
    return { type: "literal", text: text, ignoreCase: ignoreCase };
  }

  function peg$classExpectation(parts, inverted, ignoreCase) {
    return { type: "class", parts: parts, inverted: inverted, ignoreCase: ignoreCase };
  }

  function peg$anyExpectation() {
    return { type: "any" };
  }

  function peg$endExpectation() {
    return { type: "end" };
  }

  function peg$otherExpectation(description) {
    return { type: "other", description: description };
  }

  function peg$computePosDetails(pos) {
    var details = peg$posDetailsCache[pos], p;

    if (details) {
      return details;
    } else {
      p = pos - 1;
      while (!peg$posDetailsCache[p]) {
        p--;
      }

      details = peg$posDetailsCache[p];
      details = {
        line:   details.line,
        column: details.column
      };

      while (p < pos) {
        if (input.charCodeAt(p) === 10) {
          details.line++;
          details.column = 1;
        } else {
          details.column++;
        }

        p++;
      }

      peg$posDetailsCache[pos] = details;
      return details;
    }
  }

  function peg$computeLocation(startPos, endPos) {
    var startPosDetails = peg$computePosDetails(startPos),
        endPosDetails   = peg$computePosDetails(endPos);

    return {
      start: {
        offset: startPos,
        line:   startPosDetails.line,
        column: startPosDetails.column
      },
      end: {
        offset: endPos,
        line:   endPosDetails.line,
        column: endPosDetails.column
      }
    };
  }

  function peg$fail(expected) {
    if (peg$currPos < peg$maxFailPos) { return; }

    if (peg$currPos > peg$maxFailPos) {
      peg$maxFailPos = peg$currPos;
      peg$maxFailExpected = [];
    }

    peg$maxFailExpected.push(expected);
  }

  function peg$buildSimpleError(message, location) {
    return new peg$SyntaxError(message, null, null, location);
  }

  function peg$buildStructuredError(expected, found, location) {
    return new peg$SyntaxError(
      peg$SyntaxError.buildMessage(expected, found),
      expected,
      found,
      location
    );
  }

  function peg$parseline() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    s1 = peg$parsews();
    if (s1 === peg$FAILED) {
      s1 = null;
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parseentries();
      if (s2 !== peg$FAILED) {
        s3 = peg$parsews();
        if (s3 === peg$FAILED) {
          s3 = null;
        }
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c0(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$parsearray();
    }

    return s0;
  }

  function peg$parseentries() {
    var s0, s1, s2, s3, s4, s5, s6, s7;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$currPos;
    s3 = peg$parseentry();
    if (s3 !== peg$FAILED) {
      s4 = [];
      s5 = peg$currPos;
      s6 = peg$parsews();
      if (s6 !== peg$FAILED) {
        s7 = peg$parseentry();
        if (s7 !== peg$FAILED) {
          peg$savedPos = s5;
          s6 = peg$c1(s3, s7);
          s5 = s6;
        } else {
          peg$currPos = s5;
          s5 = peg$FAILED;
        }
      } else {
        peg$currPos = s5;
        s5 = peg$FAILED;
      }
      while (s5 !== peg$FAILED) {
        s4.push(s5);
        s5 = peg$currPos;
        s6 = peg$parsews();
        if (s6 !== peg$FAILED) {
          s7 = peg$parseentry();
          if (s7 !== peg$FAILED) {
            peg$savedPos = s5;
            s6 = peg$c1(s3, s7);
            s5 = s6;
          } else {
            peg$currPos = s5;
            s5 = peg$FAILED;
          }
        } else {
          peg$currPos = s5;
          s5 = peg$FAILED;
        }
      }
      if (s4 !== peg$FAILED) {
        peg$savedPos = s2;
        s3 = peg$c2(s3, s4);
        s2 = s3;
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }
    } else {
      peg$currPos = s2;
      s2 = peg$FAILED;
    }
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$currPos;
        s3 = peg$parseentry();
        if (s3 !== peg$FAILED) {
          s4 = [];
          s5 = peg$currPos;
          s6 = peg$parsews();
          if (s6 !== peg$FAILED) {
            s7 = peg$parseentry();
            if (s7 !== peg$FAILED) {
              peg$savedPos = s5;
              s6 = peg$c1(s3, s7);
              s5 = s6;
            } else {
              peg$currPos = s5;
              s5 = peg$FAILED;
            }
          } else {
            peg$currPos = s5;
            s5 = peg$FAILED;
          }
          while (s5 !== peg$FAILED) {
            s4.push(s5);
            s5 = peg$currPos;
            s6 = peg$parsews();
            if (s6 !== peg$FAILED) {
              s7 = peg$parseentry();
              if (s7 !== peg$FAILED) {
                peg$savedPos = s5;
                s6 = peg$c1(s3, s7);
                s5 = s6;
              } else {
                peg$currPos = s5;
                s5 = peg$FAILED;
              }
            } else {
              peg$currPos = s5;
              s5 = peg$FAILED;
            }
          }
          if (s4 !== peg$FAILED) {
            peg$savedPos = s2;
            s3 = peg$c2(s3, s4);
            s2 = s3;
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c3(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parseentry() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    s1 = peg$parsestring();
    if (s1 !== peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 58) {
        s2 = peg$c4;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c5); }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parsevalue();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c6(s1, s3);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsevalue() {
    var s0;

    s0 = peg$parsearray();
    if (s0 === peg$FAILED) {
      s0 = peg$parsestring();
    }

    return s0;
  }

  function peg$parsevalue_or_entries() {
    var s0;

    s0 = peg$parseentries();
    if (s0 === peg$FAILED) {
      s0 = peg$parsevalue();
    }

    return s0;
  }

  function peg$parsearray() {
    var s0, s1, s2, s3, s4, s5, s6, s7;

    s0 = peg$currPos;
    s1 = peg$parsebegin_array();
    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      s3 = peg$parsevalue_or_entries();
      if (s3 !== peg$FAILED) {
        s4 = [];
        s5 = peg$currPos;
        s6 = peg$parsevalue_separator();
        if (s6 !== peg$FAILED) {
          s7 = peg$parsevalue_or_entries();
          if (s7 !== peg$FAILED) {
            peg$savedPos = s5;
            s6 = peg$c7(s3, s7);
            s5 = s6;
          } else {
            peg$currPos = s5;
            s5 = peg$FAILED;
          }
        } else {
          peg$currPos = s5;
          s5 = peg$FAILED;
        }
        while (s5 !== peg$FAILED) {
          s4.push(s5);
          s5 = peg$currPos;
          s6 = peg$parsevalue_separator();
          if (s6 !== peg$FAILED) {
            s7 = peg$parsevalue_or_entries();
            if (s7 !== peg$FAILED) {
              peg$savedPos = s5;
              s6 = peg$c7(s3, s7);
              s5 = s6;
            } else {
              peg$currPos = s5;
              s5 = peg$FAILED;
            }
          } else {
            peg$currPos = s5;
            s5 = peg$FAILED;
          }
        }
        if (s4 !== peg$FAILED) {
          peg$savedPos = s2;
          s3 = peg$c8(s3, s4);
          s2 = s3;
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }
      if (s2 === peg$FAILED) {
        s2 = null;
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parseend_array();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c9(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsebegin_array() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    s1 = peg$parsews();
    if (s1 !== peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 91) {
        s2 = peg$c10;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c11); }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parsews();
        if (s3 !== peg$FAILED) {
          s1 = [s1, s2, s3];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseend_array() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    s1 = peg$parsews();
    if (s1 !== peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 93) {
        s2 = peg$c12;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c13); }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parsews();
        if (s3 !== peg$FAILED) {
          s1 = [s1, s2, s3];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsevalue_separator() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    s1 = peg$parsews();
    if (s1 !== peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 44) {
        s2 = peg$c14;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c15); }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parsews();
        if (s3 !== peg$FAILED) {
          s1 = [s1, s2, s3];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsestring() {
    var s0;

    s0 = peg$parsequoted_string();
    if (s0 === peg$FAILED) {
      s0 = peg$parseunquoted_string();
    }

    return s0;
  }

  function peg$parseunquoted_string() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = [];
    if (peg$c16.test(input.charAt(peg$currPos))) {
      s2 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c17); }
    }
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        if (peg$c16.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c17); }
        }
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c18(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parsequoted_string() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    s1 = peg$parsequotation_mark();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parsechar();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parsechar();
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parsequotation_mark();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c19(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseunescaped() {
    var s0;

    if (peg$c20.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c21); }
    }

    return s0;
  }

  function peg$parsechar() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9;

    s0 = peg$parseunescaped();
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$parseescape();
      if (s1 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 34) {
          s2 = peg$c22;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c23); }
        }
        if (s2 === peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 92) {
            s2 = peg$c24;
            peg$currPos++;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c25); }
          }
          if (s2 === peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 47) {
              s2 = peg$c26;
              peg$currPos++;
            } else {
              s2 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c27); }
            }
            if (s2 === peg$FAILED) {
              s2 = peg$currPos;
              if (input.charCodeAt(peg$currPos) === 98) {
                s3 = peg$c28;
                peg$currPos++;
              } else {
                s3 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c29); }
              }
              if (s3 !== peg$FAILED) {
                peg$savedPos = s2;
                s3 = peg$c30();
              }
              s2 = s3;
              if (s2 === peg$FAILED) {
                s2 = peg$currPos;
                if (input.charCodeAt(peg$currPos) === 102) {
                  s3 = peg$c31;
                  peg$currPos++;
                } else {
                  s3 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c32); }
                }
                if (s3 !== peg$FAILED) {
                  peg$savedPos = s2;
                  s3 = peg$c33();
                }
                s2 = s3;
                if (s2 === peg$FAILED) {
                  s2 = peg$currPos;
                  if (input.charCodeAt(peg$currPos) === 110) {
                    s3 = peg$c34;
                    peg$currPos++;
                  } else {
                    s3 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c35); }
                  }
                  if (s3 !== peg$FAILED) {
                    peg$savedPos = s2;
                    s3 = peg$c36();
                  }
                  s2 = s3;
                  if (s2 === peg$FAILED) {
                    s2 = peg$currPos;
                    if (input.charCodeAt(peg$currPos) === 114) {
                      s3 = peg$c37;
                      peg$currPos++;
                    } else {
                      s3 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c38); }
                    }
                    if (s3 !== peg$FAILED) {
                      peg$savedPos = s2;
                      s3 = peg$c39();
                    }
                    s2 = s3;
                    if (s2 === peg$FAILED) {
                      s2 = peg$currPos;
                      if (input.charCodeAt(peg$currPos) === 116) {
                        s3 = peg$c40;
                        peg$currPos++;
                      } else {
                        s3 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$c41); }
                      }
                      if (s3 !== peg$FAILED) {
                        peg$savedPos = s2;
                        s3 = peg$c42();
                      }
                      s2 = s3;
                      if (s2 === peg$FAILED) {
                        s2 = peg$currPos;
                        if (input.charCodeAt(peg$currPos) === 117) {
                          s3 = peg$c43;
                          peg$currPos++;
                        } else {
                          s3 = peg$FAILED;
                          if (peg$silentFails === 0) { peg$fail(peg$c44); }
                        }
                        if (s3 !== peg$FAILED) {
                          s4 = peg$currPos;
                          s5 = peg$currPos;
                          s6 = peg$parseHEXDIG();
                          if (s6 !== peg$FAILED) {
                            s7 = peg$parseHEXDIG();
                            if (s7 !== peg$FAILED) {
                              s8 = peg$parseHEXDIG();
                              if (s8 !== peg$FAILED) {
                                s9 = peg$parseHEXDIG();
                                if (s9 !== peg$FAILED) {
                                  s6 = [s6, s7, s8, s9];
                                  s5 = s6;
                                } else {
                                  peg$currPos = s5;
                                  s5 = peg$FAILED;
                                }
                              } else {
                                peg$currPos = s5;
                                s5 = peg$FAILED;
                              }
                            } else {
                              peg$currPos = s5;
                              s5 = peg$FAILED;
                            }
                          } else {
                            peg$currPos = s5;
                            s5 = peg$FAILED;
                          }
                          if (s5 !== peg$FAILED) {
                            s4 = input.substring(s4, peg$currPos);
                          } else {
                            s4 = s5;
                          }
                          if (s4 !== peg$FAILED) {
                            peg$savedPos = s2;
                            s3 = peg$c45(s4);
                            s2 = s3;
                          } else {
                            peg$currPos = s2;
                            s2 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s2;
                          s2 = peg$FAILED;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c46(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    }

    return s0;
  }

  function peg$parseescape() {
    var s0;

    if (input.charCodeAt(peg$currPos) === 92) {
      s0 = peg$c24;
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c25); }
    }

    return s0;
  }

  function peg$parsequotation_mark() {
    var s0;

    if (input.charCodeAt(peg$currPos) === 34) {
      s0 = peg$c22;
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c23); }
    }

    return s0;
  }

  function peg$parsews() {
    var s0, s1;

    peg$silentFails++;
    s0 = [];
    if (peg$c48.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c49); }
    }
    while (s1 !== peg$FAILED) {
      s0.push(s1);
      if (peg$c48.test(input.charAt(peg$currPos))) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c49); }
      }
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c47); }
    }

    return s0;
  }

  function peg$parseHEXDIG() {
    var s0;

    if (peg$c50.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c51); }
    }

    return s0;
  }

  peg$result = peg$startRuleFunction();

  if (peg$result !== peg$FAILED && peg$currPos === input.length) {
    return peg$result;
  } else {
    if (peg$result !== peg$FAILED && peg$currPos < input.length) {
      peg$fail(peg$endExpectation());
    }

    throw peg$buildStructuredError(
      peg$maxFailExpected,
      peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null,
      peg$maxFailPos < input.length
        ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1)
        : peg$computeLocation(peg$maxFailPos, peg$maxFailPos)
    );
  }
}

module.exports = {
  SyntaxError: peg$SyntaxError,
  parse:       peg$parse
};

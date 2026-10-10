/**
 * Category C: Obfuscated Patterns - Evasive Execution Sinks
 * EXPECTED SCANNER VERDICT: MUST_FLAG
 *
 * Attackers or dangerous scripts often hide eval() and child_process
 * calls using dynamic property lookups or constructor traversal.
 */

// 1. Obfuscated eval invocation via computed property name
function indirectEval(payload) {
  const methodName = "ev" + "al";
  return globalThis[methodName](payload);
}

// 2. Prototype / Constructor traversal to acquire Function constructor
function prototypeExecution(payload) {
  const ctor = "".constructor.constructor;
  return ctor("return " + payload)();
}

// 3. Dynamic module requirement with string assembly
function dynamicProcessExec(command) {
  const mod = "child_" + "process";
  const proc = require(mod);
  return proc["ex" + "ec"](command);
}

module.exports = {
  indirectEval,
  prototypeExecution,
  dynamicProcessExec
};




const __nil__  = "__nil__"
const __num__  = "__num__"
const __str__  = "__str__"
const __bool__ = "__bool__"
const __list__ = "__list__"
const __dict__ = "__dict__"


const types = { }

function type(a) {
  for (const [__t__, t] of Object.entries(types))
    if (t.__is__ && t.__is__(a))
      return __t__;
  throw new Error(`[type] Cannot determine type of ${a}`);
}

const nil = types[__nil__] = function (..._) {
  if (_.length > 1) throw new Error(`[nil] Expected 0 or 1 arguments, received ${_.length} instead`);
  return null;
}

nil.__assert__ = function(a) {
  if (!nil.__is__(a)) throw new Error(`[nil] Expected nil, received ${a} instead`);
}

nil.__is__   = function(a) {
  return a === null;
}

nil.__num__  = function(a) {
  return 0;
}

nil.__str__  = function(a) {
  return "nil";
}

nil.__bool__ = function(a) {
  return false;
}

const num = types[__num__] = function (a, ..._) {
  if (_.length > 0) throw new Error(`[num] Expected 0 or 1 arguments, received ${_.length + 1} instead`);
  const t = types[type(a)];
  if (!t || !t.__num__) throw new Error(`[num] Cannot coerce ${a} to num`);
  return t.__num__(a);
}

num.__assert__ = function(a) {
  if (!num.__is__(a)) throw new Error(`[num] Expected num, received ${a} instead`);
}

num.__is__   = function(a) {
  return typeof a === "number";
}

num.__num__  = function(a) {
  return a;
}

num.__str__  = function(a) {
  return a.toString();
}

num.__bool__ = function(a) {
  return a !== 0;
}

const str = types[__str__] = function (a, ..._) {
  if (_.length > 0) throw new Error(`[str] Expected 0 or 1 arguments, received ${_.length + 1} instead`);
  const t = types[type(a)];
  if (!t || !t.__str__) throw new Error(`[str] Cannot coerce ${a} to str`);
  return t.__str__(a);
}

str.__assert__ = function(a) {
  if (!str.__is__(a)) throw new Error(`[str] Expected str, received ${a} instead`)
}

str.__is__   = function(a) {
  return typeof a === "string";
}

str.__num__  = function(a) {
  return Number(a);
}

str.__str__  = function(a) {
  return a;
}

str.__bool__ = function(a) {
  return a !== "";
}

const bool = types[__bool__] = function (a, ..._) {
  if (_.length > 0) throw new Error(`[bool] Expected 0 or 1 arguments, received ${_.length + 1} instead`);
  const t = types[type(a)];
  if (!t || !t.__bool__) throw new Error(`[bool] Cannot coerce ${a} to bool`);
  return t.__bool__(a);
}

bool.__assert__ = function(a) {
  if (!bool.__is__(a)) throw new Error(`[bool] Expected bool, received ${a} instead`)
}

bool.__is__   = function(a) {
  return typeof a === "boolean";
}

bool.__num__  = function(a) {
  if (a) return 1;
  else   return 0;
}

bool.__str__  = function(a) {
  return a.toString();
}

bool.__bool__ = function(a) {
  return a;
}

const list = types[__list__] = function (...a) {
  //TODO
  return 
}

const dict = types[__dict__] = function (...a) {
  //TODO
  return
}
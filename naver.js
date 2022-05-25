"use strict";
function error(message) {
    throw new Error(message);
}
function fail() {
    return error('failed');
}
function infinitLoop() {
    while (true) { }
}
if (typeof a !== 'string') {
    a;
}

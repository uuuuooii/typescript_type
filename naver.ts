function error(message: string): never {
    throw new Error(message);


}

function fail() {
    return error('failed');
}

function infinitLoop(): never {
    while (true) {}
}

declare const a: string | number;
if (typeof a !== 'string') {
    a;
}




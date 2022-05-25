function returnAny(message): any {
    console.log(message);
}

const any1 = returnAny('리턴은 아무거나');

let looselyTyped: any = {};

const d = looselyTyped.a
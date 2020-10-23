function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

const result: number = multiplicaArgs(6, 2, 3);

console.log(result);

//Array<T> || T[]

if (false || true) {
    console.log("OIII");
}

let x;

if (typeof x === 'undefined') x = 20;

console.log(x * 20);

function createPerson(
  firtsName: string,
  lastName?: string,
): {
  firtsName: string;
  lastName: string;
} {
  return {
    firtsName,
    lastName
  };
}

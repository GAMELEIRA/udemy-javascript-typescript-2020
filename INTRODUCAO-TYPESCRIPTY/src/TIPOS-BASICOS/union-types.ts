function teste(x: string | number) {
  if (typeof x === 'number') console.log(x + 10);
  else console.log(x + 10);
}

teste('10');

teste(10);

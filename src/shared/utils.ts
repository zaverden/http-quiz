import seedRandom from "seedrandom";

export function getData(seed: string) {
  const random = seedRandom(seed);
  return [
    random.int32(),
    random.int32(),
    random.int32(),
    random.int32(),
    random.int32(),
  ];
}

export function getDate() {
  return new Date();
}

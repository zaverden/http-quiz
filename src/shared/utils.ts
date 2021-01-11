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

const RND_LIMIT = 2 ** 32;
export function getId(): string {
  const datePart = Date.now().toString(16);
  const rnd = Math.floor(Math.random() * RND_LIMIT);
  const rndPart = rnd.toString(16).padStart(8, "0");
  return datePart + rndPart;
}

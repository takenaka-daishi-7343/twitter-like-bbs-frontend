import { animal_names, person_adjectives } from "./usernameArray";

export function GetRandomName() {
  const len = 50;
  return (
    person_adjectives[Math.floor(Math.random() * len)] +
    animal_names[Math.floor(Math.random() * len)]
  );
}

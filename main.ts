// Alien Field Notes: The Two Day Earth Review
// One-line alien tourist review of Earth, written to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Earth: four stars. The sunsets are free, the water is drinkable, and a small box beeps when the food is ready. Docked one star — the humans ignore the beep for twenty minutes.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log(line);

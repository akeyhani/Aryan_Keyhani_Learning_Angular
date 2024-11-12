export interface Games {
  id: number;
  title: string;          // Corresponds to "name" in smiteTwoGod
  genre: string;          // Corresponds to "pantheon" in smiteTwoGod
  developer: string;      // Corresponds to "class" in smiteTwoGod
  releaseDate: string;    // Same field as in smiteTwoGod
  rating: string;         // New field specific to Games
  URL: string;            // Corresponds to "image" in smiteTwoGod
}

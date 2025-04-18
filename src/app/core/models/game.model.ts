 export interface Game {
    id: number;
    name: string;
    genres: { name: string }[];
    description: string;
    released: string;
    background_image: string; // ✅ Agregamos esta propiedad
    platforms: { platform: { name: string } }[];  // ← Corrección aquí
    rating : number;
    website?: string;
  }
  
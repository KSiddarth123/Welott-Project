export interface IAlbum {
  src: string;        // Full-size image source
  thumb: string;      // Thumbnail image source (should not be undefined)
  caption?: string;   // Optional caption
}
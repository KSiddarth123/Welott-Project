// image.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Image {
  src: string;
  thumb?: string;
  caption?: string;
}

export interface IAlbum {
  src: string;
  thumb: string;
  caption?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private apiUrl = 'http://localhost:3001/api/images';

  constructor(private http: HttpClient) {}

  // Accept gallery name as parameter
  getImages(galleryName: string): Observable<IAlbum[]> {
    return this.http.get<Image[]>(`${this.apiUrl}?gallery=${galleryName}`).pipe(
      map(images => images.map(image => ({
        src: image.src,
        thumb: image.thumb || '',
        caption: image.caption
      })))
    );
  }
}

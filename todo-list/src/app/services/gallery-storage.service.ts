import { Injectable } from '@angular/core';
import { Photo } from '../interfaces/photo';

@Injectable({
  providedIn: 'root'
})
export class GalleryStorageService {
  private photos: Photo = { url: "../img/dogSitter.jpg",description:""};


  constructor() {
    this.setData("photosArray", this.photos);
   }

   getData(key: string): any {
    return JSON.parse(localStorage.getItem(key));
  }

   setData(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }
}

import { Injectable } from '@angular/core';
//import { Photo } from '../interfaces/photo';
import { GalleryStorageService } from './gallery-storage.service';



@Injectable({
  providedIn: 'root'
})
export class PhotoService {
 
  constructor(private storageService: GalleryStorageService) {
    
   }

  getPhoto() {
    return this.storageService.getData("photosArray");
  }

}

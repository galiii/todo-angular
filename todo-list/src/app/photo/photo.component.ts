import { Component, OnInit, Input } from '@angular/core';
import { Photo } from '../interfaces/photo';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {
  
 photo:Photo;

  constructor(private listService: PhotoService) { }
  

  ngOnInit(): void {
    this.updateList() ;
  }


  
  private updateList() {
    this.photo = this.listService.getPhoto();
    console.log(this.photo);
  }
}

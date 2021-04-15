import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
authenticate(){
  
}

 execute(){
    let url = 'https://www.youtube.com/watch?v=R1-71hNPBUE';
    console.log(url)

 }

}

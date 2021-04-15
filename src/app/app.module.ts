import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from  '@angular/router';  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { cou } from './course.services';
import { VideoListComponent } from './video-list/video-list.component';
import { ListTableComponent } from './list-table/list-table.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LiveEventsComponent } from './live-events/live-events.component';
import { HttpClientModule } from '@angular/common/http';
import { EnquiryComponent } from './enquiry/enquiry.component';



@NgModule({
  declarations: [
    AppComponent,
    VideoListComponent,
    ListTableComponent,
    NavbarComponent,
    LiveEventsComponent,
    EnquiryComponent
  ],
  imports: [
    BrowserModule,  
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([

      { path: 'App-root', component: AppComponent},
      { path: 'Video-List', component: VideoListComponent},
      { path: 'list-table', component: ListTableComponent},
      { path: 'live-events', component: LiveEventsComponent},
      { path: 'enquiry', component: EnquiryComponent}
    ])
    
    
  ],
  providers: [cou],
  bootstrap: [AppComponent]
})
export class AppModule { }

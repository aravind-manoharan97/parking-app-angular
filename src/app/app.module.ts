import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';  
import { AppComponent } from './app.component';
import { AvailabilityComponent } from './availability/availability.component';
import { GetslotComponent } from './getslot/getslot.component';
import { SlotdetailsComponent } from './slotdetails/slotdetails.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { EditPageComponent } from './edit-page/edit-page.component';
import { AllotedListComponent } from './alloted-list/alloted-list.component';


const appRoutes: Routes = [
  {path: 'alloted-list', component: AllotedListComponent},
  {path: 'edit-page', component: EditPageComponent},
  {path: 'slotdetails', component: SlotdetailsComponent},
  {path: 'getslot', component: GetslotComponent},
  {path: 'availability', component: AvailabilityComponent},
  ];

@NgModule({
  declarations: [
    AppComponent,
    AvailabilityComponent,
    GetslotComponent,
    SlotdetailsComponent,
    EditPageComponent,
    AllotedListComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
      HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

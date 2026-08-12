import {Component, inject, ChangeDetectorRef} from '@angular/core';
import { HousingLocation } from '../housing-location/housing-location';
import {HousingLocationInfo} from '../housinglocation';
import {HousingService} from '../housing.service';

@Component({
  selector: 'app-home',
  imports: [HousingLocation],
  template: `
    <section>
      <form (submit)="filterResults(filter.value); false">
        <input type="text" placeholder="Filter by city" #filter />
        <button class="primary" type="submit" >Search </button>
      </form>
    </section>
    <section class="results">
      @for (housingLocation of filteredLocationList; track $index) {
       <app-housing-location [housingLocation]="housingLocation" />
      }
    </section> `,

  styleUrls: ['./home.css']
})
export class Home {
  private changeDetectorRef = inject(ChangeDetectorRef)
   housingLocationList: HousingLocationInfo[] = [];
   housingService: HousingService = inject(HousingService);
   filteredLocationList: HousingLocationInfo[] = [];
   

  constructor() {
    this.housingService
      .getAllHousingLocations()
      .then((housingLocationList: HousingLocationInfo[])=> {
        this.housingLocationList = housingLocationList;
        this.filteredLocationList = housingLocationList;
        this.changeDetectorRef.markForCheck();
      }
    )
}

filterResults(text: string) {
    
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }

      this.filteredLocationList = this.housingLocationList.filter(
      (housingLocation: HousingLocationInfo)=>
        housingLocation.city.toLowerCase().includes(text.toLowerCase())
    );
  }
  }



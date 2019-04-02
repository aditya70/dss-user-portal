import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/models/country';
import { State } from 'src/app/models/state';
import { SelectService } from 'src/app/services/select.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  selectedCountry: Country = new Country(2, 'Brazil');
  countries: Country[];
  states: State[];

  constructor(private selectService: SelectService) { }

  ngOnInit() {
    this.countries = this.selectService.getCountries();
    this.onSelect(this.selectedCountry.id);
  }

  onSelect(countryid) {
    this.states = this.selectService.getStates().filter((item) => item.countryid == countryid);
  }
}

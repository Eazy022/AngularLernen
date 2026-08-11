import {Component, input} from '@angular/core';

export interface HousingLocationInfo {
id: number;
name: string;
city: string;
state: string;
photo: string;
availableUnits: Number;
wifi: boolean; 
laundry: boolean;
}

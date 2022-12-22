import {Component, OnInit} from '@angular/core';
import {Pet} from "../pet";

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit{
  pet : Pet = {
    name: 'Mạnh',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM-Ax2aCN-pQpDUiBtHtG10pERZKOkyrGgag&usqp=CAU'
  };
  imgSize = 400;

  ngOnInit() {
  }

}

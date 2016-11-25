import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fa-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent{
  stringInterpolation = 'this is string interpolation';
  numberInterpolation = 2;

  onTest(){
   return true;
  }
}

import { Component } from "@angular/core";

@Component({
  selector: 'success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlert{}


/* have a many ways to do the component selector:

Here, it's a TAG selector:
  ...
  selector: 'warning-alert',
  ...

  On HTML file:
  <warning-alert></warning-alert>


Here, it's a CLASS selector:
  ...
  selector: '.warning-alert',
  ...

  On HTML file:
  <div class="warning-alert"></div>


Here, it's a ID selector:
  ...
  selector: '#warning-alert',
  ...

    On HTML file:
  <div id="warning-alert"></div>


Here, it's a ATRIBUTE selector:
  ...
  selector: '[warning-alert]',
  ...

  On HTML file:
  <div warning-alert></div>

*/

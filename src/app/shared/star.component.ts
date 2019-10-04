import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
  }
)
export class StarComponent {
  @Input() rating: number;
  starWidth: number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnChanges(): void {
    this.starWidth = this.rating * 75 / 5;
  }
  onClick(): void {
    console.log(`The rating ${this.rating} was clicked`);
  }
}

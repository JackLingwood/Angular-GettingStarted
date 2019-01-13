import { Component, OnChanges, SimpleChanges, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector : 'pm-star',
  templateUrl : './star.component.html',
  styleUrls : [ './star.component.css']
})
export class StarComponent {
    @Input() rating: number;
    starWidth: number;
    t2 : number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    @Output() notify: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(changes: SimpleChanges): void{
      // Only fires on changes to input properties.
     this.starWidth = this.rating * 75/5;
    }

    onClick(){
      this.notify.emit(`The rating ${this.rating} was clicked!`);
      this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }
}

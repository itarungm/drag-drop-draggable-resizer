import {
  Directive,
  ElementRef,
  Output,
  EventEmitter,
  OnInit,
  Input
} from '@angular/core';
import * as jquery from 'jquery';
import 'jquery-ui/ui/widgets/draggable';
import 'jquery-ui/ui/widgets/resizable';

const $ = jquery;
@Directive({
  selector: '[dSizer]'
})
export class DsizerDirective {

  @Input() public draggableOnly: boolean=false;

  @Input() public resizableOnly: boolean=false;

  @Output() public sizeChanged: EventEmitter<Size> = new EventEmitter();
  @Output() public positionChange: EventEmitter<Position> = new EventEmitter();

  constructor(private _elemRef: ElementRef) { }

  ngOnInit() {

    const thisElement = <any>$(this._elemRef.nativeElement);
    console.log(thisElement);

    if (!this.draggableOnly) {

      thisElement.resizable({
        stop: (event: any, ui: any) => {
          this.sizeChanged.emit(ui.size);
        }
      });
    }


    if (!this.resizableOnly) {
      // var ox = $("#container img").parent().offset().left;
      // var oy = $("#container img").parent().offset().top;
      
      // $("img").draggable({
      //     containment: [-99+ox, -119+oy, ox, oy],
      //     scroll: false
      // });

      thisElement.draggable({
        containment:'parent',
        scroll:false,
        stop: (event: any, ui: any) => {
          this.positionChange.emit({
            top: $(this._elemRef.nativeElement).css('top'),
            left: $(this._elemRef.nativeElement).css('left')
          });
        }
      });
    }

  }
}

export interface Position {
  top: string;
  left: string;
}

export interface Size {
  height: number;
  width: number;
}

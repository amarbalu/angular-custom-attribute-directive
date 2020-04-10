import { Directive,ElementRef,OnInit } from '@angular/core';

@Directive({
  selector: '[appColorChange]'
})
export class ColorChangeDirective implements OnInit {

  constructor(private elRef:ElementRef ) { }
  ngOnInit():void{
   
   this.elRef.nativeElement.style.backgroundColor="red"
  }

}
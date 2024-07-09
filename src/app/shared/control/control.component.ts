import { AfterContentInit, afterNextRender, afterRender, Component, contentChild, ContentChild, ElementRef, HostBinding, HostListener, inject, input, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()'
  }
})
export class ControlComponent implements OnInit, AfterContentInit {
  // @HostBinding('class') className = 'control';
  // @HostListener('click') onClick() {
  //   console.log('Clicked');
  // }
  label = input.required<string>();
  private el = inject(ElementRef);
  // @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;
  private control = contentChild.required<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  constructor() {
    afterRender(() => {
      console.log('afterRender');
    });

    afterNextRender(() => {
      console.log('afterNextRender');
    });
  }

  ngOnInit(): void {
    console.log('ON INIT');
    // console.log(this.control?.nativeElement); // will be undefined when access it in onInit
    console.log(this.control().nativeElement);
  }

  ngAfterContentInit(): void {
    console.log('AFTER CONTENT INIT');
    // console.log(this.control?.nativeElement);
    console.log(this.control().nativeElement);
  }

  onClick() {
    console.log('Clicked');
    console.log(this.el);
    console.log(this.control());
  }
}

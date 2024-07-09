import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, output, Output, viewChild, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";

@Component({
    selector: 'app-new-ticket',
    standalone: true,
    templateUrl: './new-ticket.component.html',
    styleUrl: './new-ticket.component.css',
    imports: [ButtonComponent, ControlComponent, FormsModule]
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  // @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  // @Output() add = new EventEmitter<{title: string; text: string}>();
  enteredTitle = '';
  enteredText = '';
  add = output<{title: string; text: string}>();

  ngOnInit(): void {
    console.log('ON INIT');
    // console.log(this.form?.nativeElement); // will be undefined with ViewChild decorator
    console.log(this.form().nativeElement);
  }

  ngAfterViewInit(): void {
    console.log('AFTER VIEW INIT');
    // console.log(this.form?.nativeElement); // not undefined with ViewChild decorator
    console.log(this.form().nativeElement);
  }

  onSubmit() {
    this.add.emit({ title: this.enteredTitle, text: this.enteredText });
    // this.form().nativeElement.reset();
    this.enteredTitle = '';
    this.enteredText = '';
  }
}

import { Component, ElementRef, ViewChild } from '@angular/core';
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
export class NewTicketComponent {
  @ViewChild('form') form?: ElementRef<HTMLFormElement>;

  onSubmit(title: string, ticketText: string) {
    console.log(title);
    console.log(ticketText);
    this.form?.nativeElement.reset();
  }
}

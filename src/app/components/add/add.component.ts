import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss',
})
export class AddComponent {

  input1: number = 1;
  input2: number = 2;

  result: number = 0;

  add(a: number, b: number) {
    return a + b;
  }

  onAdd(a: number, b: number) {
    this.result = this.add(a, b);
  }

}

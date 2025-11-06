import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-about-component',
  imports: [FormsModule, CommonModule],
  templateUrl: './about-component.html',
  styleUrl: './about-component.css',
  standalone: true
})
export class AboutComponent {

}


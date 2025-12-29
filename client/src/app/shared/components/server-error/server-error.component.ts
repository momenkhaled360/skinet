import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-server-error',
  imports: [MatCard],
  templateUrl: './server-error.component.html',
  styleUrl: './server-error.component.scss',
})
export class ServerErrorComponent {
  error?:any;

constructor(private router: Router) {
  if (history.state && history.state.error) {
    this.error = history.state.error;
  } else
  {
    this.router.navigateByUrl('/');
  }
  }
}
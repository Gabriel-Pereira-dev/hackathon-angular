import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'hackathon-angular';
  items: MenuItem[];

  constructor(private router: Router, private primengConfig: PrimeNGConfig){}

  ngOnInit(): void {
    this.router.navigate(['users'])
    this.primengConfig.ripple = true;
  }
}

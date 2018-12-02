import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.css']
})
export class Dashboard2Component implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.auth.cookieAuth().subscribe(data => {      /* ดักBug ถ้ายังไม่ log in ให้กลับไปหน้าแรก */
      if (data === null) {
        this.router.navigate(['/']);
      }
    });
  }

}

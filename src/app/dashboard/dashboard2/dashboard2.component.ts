import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.css']
})
export class Dashboard2Component implements OnInit {
user:any;
routerPage:any = [
  {
    id:0,
    path: '/dashboard_store'
  },{
    id:1,
    path: '/beefgrading'
  },{
    id:2,
    path: '/simulation-t1-import1'
  }
  ,{
    id:3,
    path: '/simulation-t2'
  }
  ,{
    id:4,
    path: 'none'
  }
  ,{
    id:5,
    path: 'none'
  }
]
  constructor(private auth: AuthService, private router: Router, private afAuth: AngularFireAuth) { }

  ngOnInit() {
    this.auth.cookieAuth().subscribe(data => {      /* ดักBug ถ้ายังไม่ log in ให้กลับไปหน้าแรก */
      if (data === null) {
        this.router.navigate(['/']);
      } else {
        this.afAuth.authState.subscribe(data => {

          this.auth.showData(data.email).subscribe(s => {
            const value = Object.keys(s).map(key => s[key]);

            this.user = value[0];
            
          })
        })
      }
    });
  }

  clicktoPage(id){
    console.log(this.user.privilege_id);
    if(this.user.privilege_id == 1){
      if(this.routerPage[id].path == 'none'){
        this.warningAlert();
      }else {
        this.router.navigate([(this.routerPage[id].path)]);
      }
   
    }else if(this.user.privilege_id == 2){
      if(id==0){
        this.router.navigate([(this.routerPage[id].path)]);      
      } else {
        if(this.routerPage[id].path == 'none'){
          this.warningAlert();
        }else {
          this.errorAlert();
      }
      }
    }
    else if(this.user.privilege_id == 3){
      if(id==1){
        this.router.navigate([(this.routerPage[id].path)]);      
      } else {
        if(this.routerPage[id].path == 'none'){
          this.warningAlert();
        }else {
          this.errorAlert();
      }
      }
    }
    else if(this.user.privilege_id == 4){
      if(id==2){
        this.router.navigate([(this.routerPage[id].path)]);      
      } else {
        if(this.routerPage[id].path == 'none'){
          this.warningAlert();
        }else {
          this.errorAlert();
      }
      }
    } else if(this.user.privilege_id == 5){
      if(id==3){
        this.router.navigate([(this.routerPage[id].path)]);      
      } else {
        if(this.routerPage[id].path == 'none'){
          this.warningAlert();
        }else {
          this.errorAlert();
      }
      }
    }
    
  
  }

  warningAlert(){
    swal({
      title: 'ขออภัย!',
      text: 'ระบบนี้ยังไม่เปิดใช้งาน',
      type: 'warning',
      confirmButtonText: 'ปิด'
    });
  }

  errorAlert(){
    swal({
      title: 'ผิดพลาด!',
      text: 'คุณไม่ได้รับสิทธิ์เข้าใช้งานระบบนี้',
      type: 'error',
      confirmButtonText: 'ปิด'
    });
  }
}

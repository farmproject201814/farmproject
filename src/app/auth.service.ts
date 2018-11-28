import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: Observable<firebase.User>;
  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.user = afAuth.authState;
   }

  login(email, password) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password).then(
    (data) => {
      // this.router.navigate(['menu2/d1-type1']);
     const toast = swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000
    });
    toast({
      type: 'success',
      title: 'เข้าสู่ระบบสำเร็จ!'
    });

    }, err => {
      console.log('error!');
    }
    );
  }

  logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(['/home']);
  }

  cookieAuth(): Observable<boolean> {
    return this.user.pipe(map(user => user && user.uid !== undefined));
  }

  register(email, password) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(data => {
      console.log('Register Success');
    }, err => {
      console.log('Regisrter Failed');
    });
  }

  getEmail() {
    return this.afAuth.auth.currentUser.email;
  }
}

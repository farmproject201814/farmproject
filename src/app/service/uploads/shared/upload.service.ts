import { Injectable } from '@angular/core';
import { Upload } from './upload';
import * as firebase from 'firebase';
import { AngularFireList } from 'angularfire2/database';
@Injectable()
export class UploadService {

  constructor() { }

  private basePath = '/uploads';
  uploads: AngularFireList<Upload[]>;

  pushUpload(upload: Upload) {
    console.log(upload.file);
    const storageRef = firebase.storage().ref();
    storageRef.child(this.basePath + '/' + upload.file.name).put(upload.file);
  }

  pushImageByBase64(namepic, images, name) {

    const storageRef = firebase.storage().ref();
    storageRef.child(this.basePath + '/' + namepic + '/' + name).putString(images, 'data_url').then(function(snapshot) {
      console.log('Uploaded a data_url string!');
    });
  }


}

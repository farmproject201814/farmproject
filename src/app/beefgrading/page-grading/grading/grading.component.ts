import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { ActivatedRoute, Router } from '@angular/router';
import { Upload } from 'src/app/service/uploads/shared/upload';
import { UploadService } from 'src/app/service/uploads/shared/upload.service';
import { AboutcattleService } from './../../../service/API/beefgrading/aboutcattle.service';
import { NgForm } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { GradingService } from './../../../service/API/beefgrading/grading.service';
import swal from 'sweetalert2';
import { LyResizingCroppingImages, ImgCropperConfig, ImgCropperEvent} from '@alyle/ui/resizing-cropping-images';
import { LyTheme2, ThemeVariables} from '@alyle/ui';

const styles = (theme: ThemeVariables) => ({
  actions: {
    display: 'flex'
  },
  cropping: {
    maxWidth: 'auto',
    height: '400px'
  },
  flex: {
    flex: 1
  },
  range: {
    textAlign: 'center',
    maxWidth: '600px'
  },
  rangeInput: {
    maxWidth: '400px',
    margin: '1em 0',

    // http://brennaobrien.com/blog/2014/05/style-input-type-range-in-every-browser.html
    // removes default webkit styles
    '-webkit-appearance': 'none',

    // fix for FF unable to apply focus style bug
    border: `solid 6px ${theme.background.tertiary}`,

    // required for proper track sizing in FF
    width: '100%',
    '&::-webkit-slider-runnable-track': {
        width: '300px',
        height: '3px',
        background: '#ddd',
        border: 'none',
        borderRadius: '3px'
    },
    '&::-webkit-slider-thumb': {
        '-webkit-appearance': 'none',
        border: 'none',
        height: '16px',
        width: '16px',
        borderRadius: '50%',
        background: theme.primary.default,
        marginTop: '-6px'
    },
    '&:focus': {
        outline: 'none'
    },
    '&:focus::-webkit-slider-runnable-track': {
        background: '#ccc'
    },

    '&::-moz-range-track': {
        width: '300px',
        height: '3px',
        background: '#ddd',
        border: 'none',
        borderRadius: '3px'
    },
    '&::-moz-range-thumb': {
        border: 'none',
        height: '16px',
        width: '16px',
        borderRadius: '50%',
        background: theme.primary.default
    },

    // hide the outline behind the border
    '&:-moz-focusring': {
        outline: '1px solid white',
        outlineOffset: '-1px',
    },

    '&::-ms-track': {
        width: '300px',
        height: '3px',

        // remove bg colour from the track, we'll use ms-fill-lower and ms-fill-upper instead
        background: 'transparent',

        // leave room for the larger thumb to overflow with a transparent border
        borderColor: 'transparent',
        borderWidth: '6px 0',

        // remove default tick marks
        color: 'transparent'
    },
    '&::-ms-fill-lower': {
        background: '#777',
        borderRadius: '10px'
    },
    '&::-ms-fill-': {
        background: '#ddd',
        borderRadius: '10px',
    },
    '&::-ms-thumb': {
        border: 'none',
        height: '16px',
        width: '16px',
        borderRadius: '50%',
        background: theme.primary.default,
    },
    '&:focus::-ms-fill-lower': {
        background: '#888'
    },
    '&:focus::-ms-fill-upper': {
        background: '#ccc'
    }
  }
});

@Component({
  selector: 'app-grading',
  templateUrl: './grading.component.html',
  styleUrls: ['./grading.component.css']
})
export class GradingComponent implements OnInit {
  checkProcess = true;
  switch_cap = true;
  i;
  picName = 'เลือกไฟล์รูปภาพ';
  file;
  grade = '3';
  key;
  datecuted;
  selectedFiles: FileList;
  currentUpload: Upload;
  data: any;
  datas: any;
  public userfirst;
  public userlast;
  detail;
  items = {
    $key: '',
    id: '',
    left: '',
    right: '',
    datekill: '',
    datedry: '',
    dateready: '',
    wleft: '',
    wright: '',
    roomdry: '',
    firstown: '',
    lastown: '',
    status: '',
    picture: '',
    datecuted: '',
    grade_sys: ''
  };
  event;
  count = 0;
  private basePath = '/uploads';

  classes = this.theme.addStyleSheet(styles);
  croppedImage = [];

  result: string;
  scale: number;
  myConfig: ImgCropperConfig = {
    width: 250, // Default `250`
    height: 250, // Default `200`,
    output: {
      width: 200,
      height: 200
    }
  };
  name_pic;
  originalPic;
  LinkOrginal: any;
  LinkCrop = [];

  constructor(
    private db: AngularFireDatabase,
    private upload: UploadService,
    private _route: ActivatedRoute,
    private api: AboutcattleService,
    private afAuth: AngularFireAuth,
    private apigrade: GradingService,
    private router: Router,
    private theme: LyTheme2
  ) {
    this._route.params.subscribe(params => {
      this.key = params['key'];
    });
    console.log(this.key);
  }

  test() {
    console.log('asdasd');
    this.croppedImage = [];
    this.count = 0;
    this.picName = '';
  }

  onCropped(e: ImgCropperEvent) {

    this.croppedImage[this.count] = e.dataURL;
    this.count++;
    this.picName = e.dataURL;

  }
  onloaded(e: ImgCropperEvent) {
    console.log('img loaded', e);
    this.name_pic = e.name;
    this.originalPic = e.originalDataURL;
  }
  onerror(e: ImgCropperEvent) {
    console.warn(`'${e.name}' is not a valid image`, e);
  }

  ngOnInit() {
    this.api.getDataByKey(this.key).subscribe(data => {
      this.data = Object.values(data);
      for (let i = 0; i < Object.values(data).length; i++) {
        this.data[i].key = Object.keys(data)[i];
      }
    });

    this.afAuth.authState.subscribe(data => {
      this.detail = this.db
        .list('/users', ref => ref.orderByChild('email').equalTo(data.email))
        .valueChanges();
      console.log(data.email);
      this.detail.subscribe(snap => {
        snap.forEach(element => {
          this.userfirst = element.fname;
          this.userlast = element.lname;
        });
      });
    });
    this.datecuted = new Date();
  }

  onFileChanged(event) {
    this.event = event;
    this.file = event.target.files[0];
    this.picName = this.file.name;
  }

  greaded(_data: NgForm) {
    this.upload.pushImageByBase64(this.name_pic, this.originalPic, 'Original');
    for (let i = 0; i < this.croppedImage.length; i++) {
      this.upload.pushImageByBase64(this.name_pic, this.croppedImage[i], 'crop' + i);
    }

    const storageRef = firebase.storage().ref();
    swal({
      title: 'กำลังบันทึกผลเกรด!',
      timer: 10000,
      onOpen: () => {
        swal.showLoading();
        setTimeout(() => {
            let picture: String;
            let picCrop1: String;
            let picCrop2: String;
            let picCrop3: String;
            let picCrop4: String;
            let picCrop5: String;
            storageRef
              .child('uploads/' + this.name_pic + '/Original')
              .getDownloadURL()
              .then(datas => {
               picture = datas;
              });
              storageRef
              .child('uploads/' + this.name_pic + ('/crop0'))
              .getDownloadURL()
              .then(datas => {
                  picCrop1 = datas;
              });
              storageRef
              .child('uploads/' + this.name_pic + ('/crop1'))
              .getDownloadURL()
              .then(datas => {
                picCrop2 = datas;
              });
              storageRef
              .child('uploads/' + this.name_pic + ('/crop2'))
              .getDownloadURL()
              .then(datas => {
                picCrop3 = datas;
              });
              storageRef
              .child('uploads/' + this.name_pic + ('/crop3'))
              .getDownloadURL()
              .then(datas => {
                picCrop4 = datas;
              });
              storageRef
              .child('uploads/' + this.name_pic + ('/crop4'))
              .getDownloadURL()
              .then(datas => {
                picCrop5 = datas;
                //     this.api
                // .editData(this.key, {
                //   status: this.grade,
                //   grade_sys: this.grade,
                //   datecuted: String(this.datecuted),
                //   picCrop5: datas,
                // })
                // .subscribe();
              });
            setTimeout(() => {
              const dataSave = {picture: picture,
                picCrop1: picCrop1,
                picCrop2: picCrop2,
                picCrop3: picCrop3,
                picCrop4: picCrop4,
                picCrop5: picCrop5,
                status: this.grade,
                grade_sys: this.grade,
                datecuted: String(this.datecuted),
              };
              console.log(dataSave);
              this.api.editData(this.key, dataSave).subscribe(d => {
                console.log(d);
                if (d.status === 'OK') {
                  storageRef
                  .child('uploads/' + this.name_pic + '/Original')
                  .getDownloadURL()
                  .then(datas => {
                    this.api.getDataByKey(this.key).subscribe(data1 => {
                      const value = Object.keys(data1).map(key => data1[key]);
                      value[0].picture = datas;
                      value[0].status = 'ไม่ได้สรุปเกรด';
                      value[0].date_sum = '';
                      value[0].grade_sys = this.grade;
                      value[0].datecuted = String(this.datecuted);
                      value[0].sys_grage_cut_fn = this.userfirst;
                      value[0].sys_grage_cut_ln = this.userlast;
                      console.log(value[0]);
                      this.apigrade.addData(value[0]).subscribe(d1 => {
                        console.log(d1);
                        if (d1.status === 'OK') {
                          this.router.navigate(['/listcattle']);
                        }
                      });
                    });
                  });
                }
              });
          }, 5000);
        }, 5000);
      },
    }).then(result => {
      if (
        // Read more about handling dismissals
        result.dismiss === swal.DismissReason.timer
      ) {
        console.log('I was closed by the timer');
      }
    });
  }

  switch(c) {
    console.log('page: ', c);
    if (c === false) {
      swal({
        title: 'กำลังประมวณผลเกรด!',
        timer: 5000,
        onOpen: () => {
          swal.showLoading();

        },
        onClose: () => {
          this.checkProcess = c;
        }
      }).then(result => {
        if (
          // Read more about handling dismissals
          result.dismiss === swal.DismissReason.timer
        ) {
        }
      });
    } else {
      this.checkProcess = c;
    }
  }
  chang_cap(chang) {
    this.switch_cap = chang;
  }
}

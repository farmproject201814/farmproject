import { Component, OnInit } from '@angular/core';
import { Menu6Service } from '../../menu6.service';

@Component({
  selector: 'app-notification-t5',
  templateUrl: './notification-t5.component.html',
  styleUrls: ['./notification-t5.component.css']
})
export class NotificationT5Component implements OnInit {
  num = 0;
  count;
  datas: any = [];
  show: any = [];
  n = {
    n1: 0, n2: 0, n3 : 0, n4 : 0, n5 : 0, n6 : 0, n7 : 0, n8 : 0, n9 : 0, n10 : 0,
    n11 : 0, n12 : 0, n13 : 0, n14 : 0, n15 : 0, n16 : 0, n17 : 0, n18 : 0, n19 : 0, n20 : 0,
    n21 : 0, n22 : 0, n23 : 0, n24 : 0, n25 : 0, n26 : 0, n27 : 0, n28 : 0, n29 : 0, n30 : 0, n31 : 0,
  };

  w = {
    w1: 0, w2: 0, w3 : 0, w4 : 0, w5 : 0, w6 : 0, w7 : 0, w8 : 0, w9 : 0, w10 : 0,
    w11 : 0, w12 : 0, w13 : 0, w14 : 0, w15 : 0, w16 : 0, w17 : 0, w18 : 0, w19 : 0, w20 : 0,
    w21 : 0, w22 : 0, w23 : 0, w24 : 0, w25 : 0, w26 : 0, w27 : 0, w28 : 0, w29 : 0, w30 : 0, w31 : 0
  };
  constructor(private api: Menu6Service) { }

  ngOnInit() {
    this.w.w1 = 0, this.w.w2 = 0, this.w.w3 = 0, this.w.w4 = 0, this.w.w5 = 0, this.w.w6 = 0,
    this.w.w7 = 0, this.w.w8 = 0, this.w.w9 = 0, this.w.w10 = 0, this.w.w11 = 0, this.w.w12 = 0,
    this.w.w13 = 0, this.w.w14 = 0, this.w.w15 = 0, this.w.w16 = 0, this.w.w17 = 0, this.w.w18 = 0,
    this.w.w19 = 0, this.w.w20 = 0, this.w.w21 = 0, this.w.w22 = 0, this.w.w23 = 0, this.w.w24 = 0,
    this.w.w25 = 0, this.w.w26 = 0, this.w.w27 = 0, this.w.w28 = 0, this.w.w29 = 0, this.w.w30 = 0;
    this.datas = [];
    this.api.showNotificationT5().subscribe(data => {
      console.log(data);
      const a = Object.keys(data);
      console.log(a);
      for ( let i = 0 ; i < a.length ; i++) {
        if(data[i] != null){
        const e = Object.keys(data[a[i]]).map(k => data[a[i]][k]);
        console.log(e);
        e.forEach(b => {
          if (b.type === 'ซากซ้าย') {
            this.n.n1 ++ ;
            this.w.w1 += Number(b.weight);
            document.getElementById('w1').innerHTML =
            this.w.w1.toFixed(2);
          } else if (b.type === 'ซากขวา') {
            this.n.n2 ++ ;
            this.w.w2 += Number(b.weight);
            document.getElementById('w2').innerHTML =
            this.w.w2.toFixed(2);
          } else if (b.type === 'ซากซ้ายบน') {
            this.n.n3 ++ ;
            this.w.w3 += Number(b.weight);
            document.getElementById('w3').innerHTML =
            this.w.w3.toFixed(2);
          } else if (b.type === 'ซากซ้ายล่าง') {
            this.n.n4 ++ ;
            this.w.w4 += Number(b.weight);
            document.getElementById('w4').innerHTML =
            this.w.w4.toFixed(2);
          } else if (b.type === 'ซากขวาบน') {
            this.n.n5 ++ ;
            this.w.w5 += Number(b.weight);
            document.getElementById('w5').innerHTML =
            this.w.w5.toFixed(2);
          } else if (b.type === 'ซากขวาล่าง') {
            this.n.n6 ++ ;
            this.w.w6 += Number(b.weight);
            document.getElementById('w6').innerHTML =
            this.w.w6.toFixed(2);
          } else if (b.type === 'เนื้อน่อง') {
            this.n.n7 ++ ;
            this.w.w7 += Number(b.weight);
            document.getElementById('w7').innerHTML =
            this.w.w7.toFixed(2);
          } else if (b.type === 'เนื้อสะโพกนอก') {
            this.n.n8 ++ ;
            this.w.w8 += Number(b.weight);
            document.getElementById('w8').innerHTML =
            this.w.w8.toFixed(2);
          } else if (b.type === 'เนื้อลูกมะพร้าว') {
            this.n.n9 ++ ;
            this.w.w9 += Number(b.weight);
            document.getElementById('w9').innerHTML =
            this.w.w9.toFixed(2);
          } else if (b.type === 'เนื้อทีโบน') {
            this.n.n10 ++ ;
            this.w.w10 += Number(b.weight);
            document.getElementById('w10').innerHTML =
            this.w.w10.toFixed(2);
          } else if (b.type === 'เนื้อสันสะโพก') {
            this.n.n11 ++ ;
            this.w.w11 += Number(b.weight);
            document.getElementById('w11').innerHTML =
            this.w.w11.toFixed(2);
          } else if (b.type === 'เนื้อหางสันสะโพก') {
            this.n.n12 ++ ;
            this.w.w12 += Number(b.weight);
            document.getElementById('w12').innerHTML =
            this.w.w12.toFixed(2);
          } else if (b.type === 'เนื้อสันนอก') {
            this.n.n13 ++ ;
            this.w.w13 += Number(b.weight);
            document.getElementById('w13').innerHTML =
            this.w.w13.toFixed(2);
          } else if (b.type === 'เนื้อใบบัวสเต๊ก') {
            this.n.n14 ++ ;
            this.w.w14 += Number(b.weight);
            document.getElementById('w14').innerHTML =
            this.w.w14.toFixed(2);
          } else if (b.type === 'เนื้อสะโพกใน') {
            this.n.n15 ++ ;
            this.w.w15 += Number(b.weight);
            document.getElementById('w15').innerHTML =
            this.w.w15.toFixed(2);
          } else if (b.type === 'เนื้อสันใน') {
            this.n.n16 ++ ;
            this.w.w16 += Number(b.weight);
            document.getElementById('w16').innerHTML =
            this.w.w16.toFixed(2);
          } else if (b.type === 'เนื้อสันกลางถอดกระดูก') {
            this.n.n17 ++ ;
            this.w.w17 += Number(b.weight);
            document.getElementById('w17').innerHTML =
            this.w.w17.toFixed(2);
          } else if (b.type === 'เนื้อซี่โครงติดกระดูก') {
            this.n.n18 ++ ;
            this.w.w18 += Number(b.weight);
            document.getElementById('w18').innerHTML =
            this.w.w18.toFixed(2);
          } else if (b.type === 'เนื้อใบพาย') {
            this.n.n19 ++ ;
            this.w.w19 += Number(b.weight);
            document.getElementById('w19').innerHTML =
            this.w.w19.toFixed(2);
          } else if (b.type === 'เนื้อปลาช่อน') {
            this.n.n20 ++ ;
            this.w.w20 += Number(b.weight);
            document.getElementById('w20').innerHTML =
            this.w.w20.toFixed(2);
          } else if (b.type === 'เนื้อเสือร้องไห้') {
            this.n.n21 ++ ;
            this.w.w21 += Number(b.weight);
            document.getElementById('w21').innerHTML =
            this.w.w21.toFixed(2);
          } else if (b.type === 'เนื้อรักบี้') {
            this.n.n22 ++ ;
            this.w.w22 += Number(b.weight);
            document.getElementById('w22').innerHTML =
            this.w.w22.toFixed(2);
          } else if (b.type === 'เนื้อสันไหล่') {
            this.n.n23 ++ ;
            this.w.w23 += Number(b.weight);
            document.getElementById('w23').innerHTML =
            this.w.w23.toFixed(2);
          } else if (b.type === 'เครื่องใน') {
            this.n.n24 ++ ;
            this.w.w24 += Number(b.weight);
            document.getElementById('w24').innerHTML =
            this.w.w24.toFixed(2);
          } else if (b.type === 'หัว') {
            this.n.n25 ++ ;
            this.w.w25 += Number(b.weight);
            document.getElementById('w25').innerHTML =
            this.w.w25.toFixed(2);
          } else if (b.type === 'หาง') {
            this.n.n26 ++ ;
            this.w.w26 += Number(b.weight);
            document.getElementById('w26').innerHTML =
            this.w.w26.toFixed(2);
          } else if (b.type === 'หนัง') {
            this.n.n27 ++ ;
            this.w.w27 += Number(b.weight);
            document.getElementById('w27').innerHTML =
            this.w.w27.toFixed(2);
          } else if (b.type === 'ขา') {
            this.n.n28 ++ ;
            this.w.w28 += Number(b.weight);
            document.getElementById('w28').innerHTML =
            this.w.w28.toFixed(2);
          } else if (b.type === 'ไขมัน') {
            this.n.n29 ++ ;
            this.w.w29 += Number(b.weight);
            document.getElementById('w29').innerHTML =
            this.w.w29.toFixed(2);
          } else if (b.type === 'อองเร') {
            this.n.n30 ++ ;
            this.w.w30 += Number(b.weight);
            document.getElementById('w30').innerHTML =
            this.w.w30.toFixed(2);
          }
        });
        
        e[0].num = a[i];
        e[0].length = e.length;
        this.datas.push(e[0]);
      }
      }
    });

  }

  test(n) {
    this.api.showNotificationT5().subscribe(data => {
      const a = Object.keys(data);
      for ( let i = 0 ; i < a.length ; i++) {
        if (n === a[i]) {
          this.show = Object.keys(data[a[i]]).map(k => data[a[i]][k]);
        }
      }
    });
  }
}

import { Component, OnInit } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-storehouse',
  templateUrl: './storehouse.component.html',
  styleUrls: ['./storehouse.component.css']
})
export class StorehouseComponent implements OnInit {

  constructor() {
    pdfMake.fonts = {
      THNiramitAS: {
        normal: 'TH Niramit AS.ttf',
        bold: 'TH Niramit AS Bold.ttf',
        italics: 'TH Niramit AS Italic.ttf',
        bolditalics: 'TH Niramit AS Bold Italic.ttf'
      },
      Roboto: {
        normal: 'Roboto-Regular.ttf',
        bold: 'Roboto-Medium.ttf',
        italics: 'Roboto-Italic.ttf',
        bolditalics: 'Roboto-MediumItalic.ttf'
      }
    };
  }

  ngOnInit() {
  }

  test2() {
    const docDefinition = {

      content: [
        { text: 'This is a header', style: 'header' },
        { text: 'This is a table header', margin: [ 0, 0, 0, 3 ] },
        {
          // layout: 'lightHorizontalLines',
            table: {
            headerRow: 1,
            widths: [ '*', '*', '*', '*' ],

            body: [
              [ { text: 'First', style: 'thead' }, { text: 'Second', style: 'thead' },
              { text: 'Third', style: 'thead' }, { text: 'Fourth', style: 'thead' } ],
              [ 'Value 1', 'Value 2', 'Value 3', 'Value 4' ],
              [ 'Val 1', 'Val 2', 'Val 3', 'Val 4' ]
            ],
          },
        }
      ],
      defaultStyle: {
        font: 'THNiramitAS'
      },
      styles: {
        header: {
          fontSize: 22,
          bold: true,
          alignment: 'center',
          margin: [ 0, 0, 0, 20 ]
        },
        thead: {
          fontSize: 18,
          margin: [ 3, 3, 3, 3 ],
          bold: true
        },
      }
    };
    pdfMake.createPdf(docDefinition).open();
  }
}

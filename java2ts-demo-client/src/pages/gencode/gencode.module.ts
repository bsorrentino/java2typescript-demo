import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GencodePage } from './gencode';

@NgModule({
  declarations: [
    GencodePage,
  ],
  imports: [
    IonicPageModule.forChild(GencodePage),
  ],
})
export class GencodePageModule {}

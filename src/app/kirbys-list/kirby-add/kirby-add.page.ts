import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { KirbyService } from 'src/app/kirby.service';
import { Kirby } from 'src/app/models/kirby.model';

@Component({
  selector: 'app-kirby-add',
  templateUrl: './Kirby-add.page.html',
  styleUrls: ['./Kirby-add.page.scss'],
})
export class KirbyAddPage implements OnInit {

  public kirb!: Kirby;

  constructor(
    private kirbys: KirbyService,
    private toastCtrl: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
    this.kirb = new Kirby();
  }

  async presentToast(){
    const toast = this.toastCtrl.create({
      message: 'Nouveau Kirby ajouté',
      duration: 3000
    });
    (await toast).present().then(() => {
      setTimeout(() => {
        this.router.navigate(['/tab/kirbys']);
      });
    });
  }

  addKirby(){
    this.kirbys.saveNewKirby(this.kirb).subscribe(() => {
      this.kirb = new Kirby();
      this.presentToast();
    });

  }

}

import { Component, OnInit  } from '@angular/core';
import { KirbyService } from 'src/app/kirby.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';



@Component({
  selector: 'app-kirby',
  templateUrl: './kirby.page.html',
  styleUrls: ['./kirby.page.scss'],
})
export class KirbyPage implements OnInit {

  kirby!: any;
  id!: any;
  update!: boolean;

  constructor(
    private kirbys: KirbyService,
    private route: ActivatedRoute,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private router: Router

  ) { }

  ngOnInit() {
    this.update = false;
    const kirbyId = this.route.snapshot.paramMap.get('id');
    this.kirbys.get(kirbyId).subscribe((value: any) => {
      this.kirby = value;
    });
    this.id = kirbyId;
  }


  async setUpdate(){
    if(!this.update) {
      const alert = await this.alertCtrl.create({
        header: 'Voulez vous passer en mode édition ?',
        subHeader: 'Vous allez rendre possible la modification du kirby.',
        buttons: [
          {
            text: 'Annuler',
            role: 'Cancel'
          },
          {
            text: 'Confirmer',
            handler: () => {this.update = !this.update;}
          },
        ]
      });

      await alert.present();
    }else{
      this.update = !this.update;
    }
  }

  async presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Vos modifications sont enregistrées',
      duration: 2000
    });
    (await toast).present();
  }

  async presentToastDelete() {
    const toast = this.toastCtrl.create({
      message: 'Le kirby a été supprimé.',
      duration: 2000
    });
    (await toast).present();
  }

  updateKirby() {
    this.kirbys.update(this.kirby).subscribe(() => {
      this.presentToast();
      this.update = false;
    });
  }

  goDelete(id: any) {
    this.kirbys.deleteKirby(id);
    this.presentToastDelete();
    this.router.navigate(['/tab/kirbys']);
  }




}

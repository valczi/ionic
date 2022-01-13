export class Kirby {
    id?: string;
    developper: string;
    imgLink: string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    nom_jeu: string;
    producter: string;
    resume: string;
    year: number;

    constructor( ){
        this.developper='';
        this.imgLink='';
        this.nom_jeu='';
        this.producter='';
        this.resume='';
        this.year=0;
    }

}

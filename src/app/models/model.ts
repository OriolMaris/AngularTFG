export class User {
    
    id: number;
    name: string;
    email: string;
    token?: string;

    //info extra
    info?: UserExtraInfo;
}

export class UserExtraInfo {
    //parametres per recomanar

}



export class AnimalExtraInfo {
    //parametres necessaris per la pagina del animal
    raza: string;
    description: string;
    photos?: Array<string>;

    //parametres per recomanar
    juganer_docil?: number
}

export class Animal {
    //parametres que es veuen a la card
    id: string;
    name: string;
    photoPorfile: string;
    sexe: string;
    age: number;
    especie: string;
    owner: User;
    race: string;

    //info extra
    info?: AnimalExtraInfo
}
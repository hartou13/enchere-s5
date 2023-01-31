export  interface Enchere{
    id:number,
    refEnchere:string,
    debut:string,
    duree:interval,
    prixDeMisEnEnchere:number,
    idLot:number,
    Commission:number,
    maxmise:number,
    idUtilisateur:number
};
export interface interval{
    years?: number,
                    months?: number,
                    days?: number,
                    hours?: number,
                    minutes?: number,
                    wholeSeconds?: number,
                    microSeconds?: number,
                    isNull?: string,
}
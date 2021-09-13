export interface Personal {
    idpersonal?: number;
    appaterno?: string;
    apmaterno?: string;
    nombre1?: string;
    nombre2?: string;
    nombrecompleto?: string;
    fchnac?: Date;
    fchingreso?: Date;
}
export interface PersonalEliminar {
    idpersonal?: number;
}
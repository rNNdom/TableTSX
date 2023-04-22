
export enum HeaderNames {
    ID = "id",
    Nombre = "name",
    Usuario = "username",
    Correo = "email",
    Direccion = "address",
    Telefono = "phone",
    SitioWeb = "website",
    Compañia = "company",
}
const mappedHeaderNames = {
    [HeaderNames.ID]: "ID",
    [HeaderNames.Nombre]: "Nombre",
    [HeaderNames.Usuario]: "Usuario",
    [HeaderNames.Correo]: "Correo",
    [HeaderNames.Direccion]: "Dirección",
    [HeaderNames.Telefono]: "Telefono",
    [HeaderNames.SitioWeb]: "Sitio Web",
    [HeaderNames.Compañia]: "Compañía",
};
export const translatedColumns = (columns: HeaderNames): string => mappedHeaderNames[columns];
export const columns = [
    { name: HeaderNames.ID, style: "100px" },
    { name: HeaderNames.Nombre, style: "200px" },
    { name: HeaderNames.Usuario, style: "200px" },
    { name: HeaderNames.Correo, style: "200px" },
    { name: HeaderNames.Direccion, style: "200px" },
    { name: HeaderNames.Telefono, style: "200px" },
    { name: HeaderNames.SitioWeb, style: "200px" },
    { name: HeaderNames.Compañia, style: "200px" },
];


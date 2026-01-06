export type User = {
    firstName:string,
    lastName:string,
    email:string,
    address:string
}

export type Address = {
    Line1:string;
    Line2?:string;
    city:string;
    state:string;
    postalCode:string;
    country:string;
}
export type date = [Date, Date]
export type open = {
  open: boolean;
};
export type location = {
    lat:number,
    lng:number,
};
export type host = {
    name: string,
    slug: string,
    id: number,
   image:string
}
export interface Property {
    _id: number;
  title: string;
  location: location;
  country: string;
  city: string;
  propertyType: string;
  mainImage: string;
  images: string[];
  pricePerNight: number;
  beds: number;
  bedRooms: number;
  maxNights: number;
  numberOfGuests:number;
  slug: string;
  id: number;
  description: string;
  dateArrive: Date;
  dateDepart: Date;
  host: host;
  reviews: string[];
}
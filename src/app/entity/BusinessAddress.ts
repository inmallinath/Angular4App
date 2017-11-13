export class BusinessAddress {
    street: string;
    city: string;
    latitude: number;
    longitude: number;

    constructor(Street: string, City: string, Latitude: number = null, Longitude: number = null) {
        this.street = Street,
        this.city = City,
        this.latitude = Latitude,
        this.longitude = Longitude
    }
}
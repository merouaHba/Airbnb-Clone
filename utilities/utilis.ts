export const isMultiple = (value: number) => (value === 0 || value > 1 ? "s" : "");
export const day = (value: string) => {
    const date = new Date(value);
   return date.getDate();
}
export const month = (value: string) => {
    const months =['Jan', 'Feb', 'Mar', 'Apr', 'May','Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const date = new Date(value);
   return months[date.getMonth()];
}
export const year = (value: string) => {
    const date = new Date(value);
   return date.getFullYear();
}

export const getLocation = async ({ lat, log }: any) => {
       let country = "";
       let city = "";
    const response = await fetch(
        "https://nominatim.openstreetmap.org/search.php?q=" + lat + "," + log + "&polygon_geojson=1&format=json"
    );
    const data = await response.json();
    console.log(data[0]?.display_name.split(","));
    const location = data[0]?.display_name.split(",");
 
    if (location) {
      country = location[4];
      city = location[2];
      console.log(country);
        console.log(city); 
        console.log(location);
    }
    return await `${city} , ${country}`;

    
}
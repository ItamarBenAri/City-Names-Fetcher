import axios from 'axios';
import fs from 'fs';
import path from 'path';

// API link to fetch city data
const apiLink = 'https://data.gov.il/api/3/action/datastore_search?resource_id=8f714b6f-c35c-4b40-a0e7-547b675eee0e&fields=city_name_he,city_name_en,_id';

const downloadPath = path.resolve('C:/Programming for Job Hunt/06 - AI - Real Estate/02 - AI Model/01 - data collections/01 - cities names');
const fileName = 'cities_names_data.json';
const filePath = path.join(downloadPath, fileName);

(async () => {
    try {
        // Fetch data from API
        const response = await axios.get(apiLink);

        // Map cities to a cleaner structure and remove the first element
        const mappedCities = mapCities(response.data);
        mappedCities.shift();        

        // Write the formatted data to a JSON file
        fs.writeFileSync(filePath, JSON.stringify(mappedCities, null, 2), 'utf-8');
        console.log('File saved successfully to: ', filePath);
    } catch (error) {
        console.error('Failed to download cities: ', error);
    }
})();

// Maps API response into a structured array
function mapCities(cities: any): any[] {
    return cities.result.records.map((city: any) => ({
        id: city._id,
        heName: city.city_name_he.trim(),       // Trim spaces from Hebrew city name
        enName: city.city_name_en.trim().toLowerCase() // Lowercase and trim English city name
    }));
};
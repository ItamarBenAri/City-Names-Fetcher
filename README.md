# City Names Fetcher

This project fetches and stores city names from an API provided by [data.gov.il](https://data.gov.il) and formats the data into a structured JSON file. The data is processed to clean up the city names in both Hebrew and English for further use in other applications or analyses.

This project is part of a larger **AI initiative** aimed at analyzing the rise in housing prices across different regions in Israel over the past decade. Ultimately, the model will predict future property values for the next 1, 2, or even up to 10 years, providing insights into real estate trends and price forecasts based on specific cities.

## Project Overview

The goal of this project is to fetch city names in Hebrew and English from an external API, clean up the data by trimming unnecessary spaces and formatting the English names to lowercase. The cleaned data is then stored as a JSON file in a specified directory.

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/ItamarBenAri/City-Names-Fetcher.git
   ```

2. Navigate to the project folder:

   ```bash
   cd city-names-fetcher
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

## Usage

To run the project and download the cities' names data:

```bash
npm start
```

The formatted JSON file will be saved to the following path:

```
C:/Programming for Job Hunt/06 - AI - Real Estate/02 - AI Model/01 - data collections/01 - cities names/cities_names_data.json
```

## Folder Structure

- `app.ts`: The main script for fetching, formatting, and saving the city names data.
- `data`: Folder where the resulting `cities_names_data.json` file is saved.

## Technologies Used

- **TypeScript**: The project is written in TypeScript to ensure type safety and cleaner code structure.
- **Axios**: Used for making HTTP requests to the external API.
- **Node.js (fs and path modules)**: Used for handling file system operations and path resolution.

## API

This project uses the following API:

- **Data Source**: [data.gov.il City Names API](https://data.gov.il/api/3/action/datastore_search)
- **API Link**: `https://data.gov.il/api/3/action/datastore_search?resource_id=8f714b6f-c35c-4b40-a0e7-547b675eee0e&fields=city_name_he,city_name_en,_id`
- **Fields Used**:
  - `city_name_he`: The name of the city in Hebrew.
  - `city_name_en`: The name of the city in English.
  - `_id`: Unique ID for each city record.

## Author

**Itamar Ben Ari**
- GitHub: [Itamar Ben Ari](https://github.com/ItamarBenAri)
- LinkedIn: [Itamar Ben Ari](https://www.linkedin.com/in/itamar-ben-ari-69678b28b/)

Feel free to explore the projects and contact me at [etamar234@gmail.com](mailto:etamar234@gmail.com) if you have any questions or collaboration ideas!
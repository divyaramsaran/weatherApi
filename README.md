# Weather Report API

A simple Node.js script to fetch and display the current weather for a specific location using the Open-Meteo API.

## Project Overview

This project demonstrates how to retrieve real-time weather data from a public API, interpret weather codes, and display user-friendly weather descriptions along with corresponding emojis in the console.

## Features

- Fetches current weather data for a fixed location (latitude: 35, longitude: 139)
- Maps weather codes to human-readable descriptions
- Associates weather conditions with relevant emojis for better visualization
- Implements a fetch timeout and automatic retry mechanism for reliability

## Technologies Used

- **Node.js** (JavaScript runtime)
- **Fetch API** (for HTTP requests)
- **Open-Meteo API** (for weather data)

## How It Works

1. The script sends a request to the Open-Meteo API for the current weather at the specified coordinates.
2. It interprets the returned weather code into a descriptive string.
3. It matches the description to an emoji for easy recognition.
4. If the request fails or times out, it retries up to 3 times before giving up.

## Usage

1. Make sure you have Node.js installed.
2. Run the script using:
   ```sh
   node weatherApi.js
   ```
3. The current weather and its emoji will be printed to the console.

## Customization

- To change the location, modify the latitude and longitude in the API URL inside `weatherApi.js`.

## License

This project is open source and available under the [MIT License](LICENSE).

# weather-api

## Here is a step-by-step breakdown of the code:

### 1. First, we create a function called getWeatherData that takes in a city name as an argument.
### 2. Inside the function, we declare a variable called API_KEY and assign it to a string value that represents our API key. This is necessary for authenticating our API request.
### 3. Next, we declare a variable called url and assign it to a string that represents the URL of the API endpoint we want to send a request to. We also include a placeholder for the city name and the API key in the string.
### 4. We then use the fetch function to send a GET request to the API endpoint with the URL we created.
### 5. Inside the fetch function, we chain a then method and pass in a callback function. This callback function receives a response object as an argument.
### 6. Inside the callback function, we return the response object and chain another then method. This time, we pass in a function that receives the data in the response as an argument.
### 7. Inside this second callback function, we declare a variable called weatherData and assign it to the data in the response.
### 8. Next, we access the weatherData object and extract the relevant data we want to display on the page, such as the temperature and the weather description.
### 9. Finally, we use JavaScript to update the text content of the appropriate elements on the page with the data we extracted.
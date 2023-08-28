# Antariksh-Mein-Bidaai
A Full stack application made using NodeJS, ReactJS, MongoDB


## Screenshorts

Schedule your launches 
![image](https://github.com/whynesspower/Antariksh-Mein-Bidaai/assets/77494053/de5d712e-edc4-465e-b13b-79a33ee60fef)


See your the launches you have scheduled, abort or continue your expedition!
![image](https://github.com/whynesspower/Antariksh-Mein-Bidaai/assets/77494053/e412b2fb-b01d-4e90-8078-835feeeb10a5)




# Running the Project

## Part 1

1. Ensure you have Node.js installed.
2. Create a free [Mongo Atlas](https://www.mongodb.com/atlas/database) database online or start a local MongoDB database.
3. Create a `server/.env` file with a `MONGO_URL` property set to your MongoDB connection string.
4. In the terminal, run: `npm install`

## Part 2

1. In the terminal, run: `npm run deploy`
2. Browse to the mission control frontend at [localhost:8000](http://localhost:8000) and schedule an interstellar launch!

## Docker

1. Ensure you have the latest version of Docker installed
2. Run `docker build -t Antariksh-Mein-Bidaai .`
3. Run `docker run -it -p 8000:8000 Antariksh-Mein-Bidaai`

## Running the Tests

To run any automated tests, run `npm test`. This will:

- Run all the client-side tests: `npm test --prefix client`
- Run all the server-side tests: `npm test --prefix server`

## Demo Video 


https://github.com/whynesspower/Antariksh-Yatri/assets/77494053/8863c440-eaad-4835-8a10-9589d2f7ddf3



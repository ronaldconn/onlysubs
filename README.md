# Only Subarus - the versatile pm app for any team

![gif of app in action](https://raw.githubusercontent.com/ronaldconn/onlysubs/main/onlysubs.gif)

hosted on render:<br>
https://onlysubs.onrender.com<br>

# Introduction

The OnlySubarus app is an app built using the MVC Architecture. 

The app searches all junkyards within the immediate area (50 miles of user location) for 90's subarus. There app is not bulky and there are no ads. This allows the user to find the car they wish to pull parts from.

The idea for the app came to be as I was standing in a junkyard looking for a car in 100 degree weather. My phone screen was obscured by the sun's glare and the junkyards browser based web-search took a long, long time to load. Their site is extermely heavy, and the ads make finding the info I wanted very frustrating.

Sweating and tired, I decided I needed a way to find cars quickly. 

OnlySubarus was born. 

The current version is specifically for 90's subarus.

I plan on making this app have mulitple versions. There will be a basic app that can search any car make as well. Perfect for anyone that has an old car and needs to find parts.

# How It's Made:
**Tech used:** HTML, CSS, JavaScript, EJS, Node.js, MongoDB, and Mongoose.

This app utilizes a secure Mongo.DB database to hold user info as well as action items or task.

The logic is written in JavaScript and thanks to Node.js the backend code documents are also written with JS.

Make sure to uses all the dependecies below to ensure proper function and security.


# Packages/Dependencies used 

axios
bcrypt
cheerio
cloudinary
connect-mongo
dotenv
ejs
express-flash
express-session
express
method-override
mongodbd
mongoose
morgan
multer
nodemon
passport-local
passport
run
validator

---

# Install

`npm install`

--- 

# Things to add

- Create a `.env` file in config folder and add the following as `key = value`
  - PORT = 2121 (can be any port example: 3000)
  - DB_STRING = `your database URI`
  - CLOUD_NAME = `your cloudinary cloud name`
  - API_KEY = `your cloudinary api key`
  - API_SECRET = `your cloudinary api secret`

---

# Run

`npm start`
 
# Lessons Learned


We hope you enjoy our app. :)


# Future optimizations

coming soon!
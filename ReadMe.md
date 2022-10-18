#Welcome to Jo's Special Needs Cat Forstering Referrals

This is a referral service to pair persons with the need to (re)home a cat with special need(s) with a foster family.  

There are several pages including...
    Care Providers
    Contact
    AdminLogin(click on the cat in the footer to access)
    AdminPage(give the login(Jo) password(7399) on the login page to access) 

## Installation

Open the commandLine with control(using the control button) tilda(~) on your mac
CD into the project, once there CD into your client folder
Now that you're in run npm init to initialize
After initialization you'll need to install your dependencies for the client

- **Client**
- * "axios": "^0.24.0"
- * "bootstrap": "^5.1.3"
- * "coa": "^2.0.2"
- * "react": "^17.0.2"
- * "react-bootstrap": "^2.0.3"
- * "react-dom": "^17.0.2"
- * "react-router-dom": "^6.0.2"
- * "react-scripts": "^4.0.3"
**the coa dependency may not be required on your computer**

Once you've installed your dependencies CD .. back to the main folder of your project

Now you need to open a new node widow by clicking on the + in the upper right of the command line
Once this window is open CD into your server folder
Once in the server folder you'll need to do an npm init to initialize
After initialization you'll need to install your dependencies for the server

- **Server**
- * "body-parser": "^1.19.1"
- * "cors": "^2.8.5"
- * "express": "^4.17.2"
- * "mongoose": "^6.1.2"
- * "nodemon": "^2.0.15"

Once you've gotten things set up with the server and client you'll need to open a terminal to get monggod running.
First you'll need to enter this into the terminal...  [ ! -d ~/.mongo ] && mkdir ~/.mongo
Then enter this... /usr/local/mongodb/bin/mongod --dbpath ~/.mongo

Now that you have monggod running return to the command line in you project and open a third node window using the + in the command line.
Just type mongo here, this will all you to access your database

2. You will need to have proper "scripts" in your package.json files

- **Server**
- * "test": "echo \"Error: no test specified\" && exit 1"
- * "start": "nodemon index.js"

- **Client**
- * "server": "nodemon index.js"
- * "start": "PORT=7399 react-scripts start"
- * "build": "react-scripts build"
- * "test": "react-scripts test"

## Usage

When you enter the site you will be given a short intro to the site telling you what the site is for.

On the home page you will be instructed to sign in or login. Once you've signed in you will be able to navigate through the site. 

The Navbar will change if you are logged in. Also the home page will welcome you letting you know that you are in fact logged in and able to continue.

By entering your information on the contact page you will be entered into a database.

The provider page has a listing of providers that are available to be a foster family to any special needs cat. These providers will also be in the database.

On the footer you will see a small cat on the right side. This is a link to the AdminLogin page. There will be a modal pop up when you click on the cat that will allow only the person knowing the admin information(login:Jo,password:7399) to access it. Once you get to the admin page you will be able to see all persons wanting to be paired as well as ones that are availble to be paired. The admin will be able to delete any of these.

Once one has given their information they will be informed that they are on a waiting list

## Struggles

There were many things I wanted to do in my thesis that just didn't happen due to time and my not understanding things well. I really struggled with the authentication process. I spent alot of time looking at the movies app we had and used alot of the code from it to help me with mine. I am hoping this is good enough. I truly am not happy with this but I know that I can make it better.

## In the future

I am looking forward to building on this app even more. I want to bring things together with the porviders and clients as well as add a donations and reviews pages.

## Essay

I am going to tell you the research I chose to use in my thesis project. I am going to tell you why I chose what I chose. I am also going to explain to you how what I chose works and why it is or is not beneficial to my project.

As I was going through the LMS I was trying to decide what I was going to research and use for my thesis project. I read a little about and looked at some of the code for Handlebars. I understood that it was much like HTML but I was not sure I would know how to implement it in my thesis project. I read some on the advanced devtools and do not see where I would use them in my project either. While watching the videos for Authentication I thought it would work well in my project because I want a user to have certain privileges than someone who is just looking at my site. Another reason I chose Authentication is because the difficulty level is high and I wanted to challenge myself to make it work for me. I really struggled with understanding how to separate the user signup from the client and provider signup. I was trying to combine them and they needed to be separate from each other. I was confusing the computer hence the 500 error. After several failures and with Tere's assistance I got it. Finally after too many days, I got Authentication to work for me.

With Authentication my site is able to give the user different privileges than a person that is just looking through my site. When the user enters my site the only access they have is to the home, signup and login pages. Once they have signed up or logged in they are able to view the client and provider pages. Then on the respective pages the user is able to register to be a client or sign up to be a provider. I was unable to take this further because it took me so long to understand Authentication. I was not able to give either the client or the provider options to update or delete their information. I want to show options only to the user logged in. All others will not have the options available. At this point only the Admin has the privilege of updating or deleting using different logic than Authentication.

At this point Authentication does not have a significant advantage other than to show that I understand the concept and that I was able to implement it in my thesis project. I am working on building this project to reflect Authentication in a more beneficial way. By doing this my site will be more user friendly.

I am disappointed that I was unable to get done what I had planned and truly wanted to do. I will get it done now that I understand Authentication better.

I have expressed to you what I chose and why. I have told you how it works and why it was and/or was not beneficial for my project. I have also relayed what I intend to do with this project and hope to get it where I want it.
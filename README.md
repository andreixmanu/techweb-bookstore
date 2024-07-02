# TECH WEB PROJECT

Made by @andreixmanu, @K4mp47 and Pietro (scusa)

## Assignment

This year’s project involves developing a web application, including a server with REST-style APIs and a SPA front-end, that allows students to buy and sell used university textbooks by creating and bidding on auctions.

The application must handle two types of users: students and moderators. Students can access the app to sell or buy books. Moderators can forcefully take action on the active student’s auctions, like editing or deleting the content.

The application workflow should resemble an “[eBay](https://ebay.com)-style”auction site. Any user can log in to see the list of books currently for sale, even if not registered. The search can be narrowed down according to various parameters, including the book’s title, the course in which it is used (and in which university), the geographical area of the seller, and the current auction price.  
After registering and authenticating to the system, a student can bid at one or more auctions in progress. At the end of the auction, the student who has offered the highest price (as long as it exceeds the reserve price) is the winner and can proceed with the purchase by contacting the student seller.
A student can create new listings, specifying the book's details, the duration of the auction, the starting price, and the reserve price1. Once the auction has been started, it can only be removed by a moderator or when it expires.

Buyers can communicate, even in real-time, with sellers by leaving messages. Messages are associated with each book for sale. A message thread can be private, i.e. visible only to the sender and recipient, or public, i.e. visible to all students who observe an auction in progress.

---

A Single Page Application (SPA) is a type of web application or website that interacts with the user by dynamically rewriting the current page rather than loading entire new pages from a server

---

## P.O.C (Proof of Concept)

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const Home = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Contact = () => <h2>Contact</h2>;

const App = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
```

As we can see from the code above, the components are dinamycally loaded inside the main page, without surfing to other pages, faking the path in the url. ( we will use Angular by the way)

---

Other example of SPA could be Gmail, Twitter, Spotify Web Player.

## Project Structure

 - **Entities**

    - Students
    - Moderators 
    - Books
    - Sales
 - Required authentication system, divided in **students** and **moderators**
    
    - **Moderators** cannot register themselves but must be registered by another moderator who sets a **temporary** **name** and **password**
    - **Deletion** of existing students (moderator only)

    > Note: Login is required for all the system function available to moderators

 - Required a system to make **auction** for the books
 - Required that a student can create **new listings**, specifying the book's details, the duration of the auction, the starting price, and the reserve price1. **Once the auction has been started, it can only be removed by a moderator or when it expires.**
    
    - The **reserve price** (i.e. the minimum amount that a seller will accept as the winning bid) is only visible to the advertiser. Other students watching the ad may only know about it once the auction is complete. 
    - **Placing a new listing** to start the auction. (students only); 
    - **Display of active auctions** (all users); 
    - **Ability to filter active listings** on different parameters, such as book’s title, degree course, user, price, etc. (all users); 
    - **Ability to bid on a listing**. To be valid, the bid must exceed the current auction price. (students only); 
    - Sending messages to a seller. A message can be private or public. The seller can reply to the message, and the visibility of the reply will be the same as the first message sent by the potential buyer. Messages are associated with a specific auction. (students only); 
    - **Editing** the auction’s information (moderator only); 
    - **Deleting** an auction before it expires (moderator only);
 - **Buyers can communicate**, even in real-time, with sellers by leaving messages. Messages are associated with each book for sale. A message thread can be private, i.e. visible only to the sender and recipient, or public, i.e. visible to all students who observe an auction in progress.
  - Sales
    
    - At the end of the auction, **the student who has bid the highest price (as long as it exceeds the reserve price) is the winner**. The system must notify the winning student and the advertiser of the auction's outcome. 

 - Statistics

    - **The system must provide** each **student** with the **listings** they have made, the **auctions** they have participated in, and the ones in which they have been the **winner**. 
    -** The system must provide** each **moderator** with the number of (i) **active auctions successfully concluded** and (ii) **auctions closed without reaching the reserve price**.

The system must comprise: 
 - A **REST-style** backend webservice, implemented in TypeScript and running on Node.js. The service must also use: 
    - **MongoDB DBMS** for data persistence 
    - **Express.js for routing**
 - A web front-end implemented as a Single Page Application (SPA) using the Angular framework. Note: **Each component (Backend, MongoDB, Front-end) must run in a separate Docker container**.
 
*Note: When the backend starts, it must preload a small number of students and moderators into the database to simplify application testing during the exam.*

### MEAN STACK

Qua dovrà essere descritta la struttura del progetto secondo lo stack utilizzato.

---
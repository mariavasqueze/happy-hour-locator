# Happy Hour Locator

[This is an external link to HappyHourLocator.ca](https://www.happyhourlocator.ca/)

This is a React Web App team project. The app let's all users find the happy hours of restaurants and bars in Metro Vancouver using the Google maps API.  Users can join as a member to get special discounts and access to special discounts at the locations. Restaurants and Bars' administrators can edit the location's information and add new events so user's can assist, and then read the QR codes for each person when the customer is at the location. 

Techs used: React, Firebase, Bootstrap, HTML, CSS




https://user-images.githubusercontent.com/87947324/209494701-1d82a955-125c-4368-bf43-0870848f1510.mp4

*Video quality is low, to show complete walkthrough here.


### The user: 
- Can see the happy hours of all locations and special events set by the restaurants and bars and register to get a QR code for the event
- They can can see all QR codes for events on the My QR Codes tab below photo id, and all profile information in My Profile page.
- Users can sign in with email or with Google account

### The Location Administrator:
- Can add the location information so it appears as a point on the user's map. They can change this information at any time.
- They can create events and see list of existing events.
- When a user is in the location they can read their QR code which will be saved as read so it can't be used twice.
- To secure user's information, the location only gets the QR code id, as it is saved on the database, no personal information.

### The backend:
- This react web application is using firebase as the backend. Saving all the information to show the user's profile and locations' information. This also let's it pass the data to the Google maps API, so it creates the point in the map when the location adminsitrator adds it as the coordinates on their profile. 
- Authorization is also being handled with firebase, letting us auhtorize users with a registered email or with a Google account to sign in the app. 




## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.



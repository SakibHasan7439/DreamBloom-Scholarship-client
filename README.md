 # DreamBloom Scholarship

 website live link:
 https://final-ass-task.web.app/
 
 Website description:
 This is a role based full stack Educational Scholarship website, that provide services based on user role.
 There are total 3 role , Admin, Moderator, normal user, Admin and moderator can add, modifiy scholarships, and the normal 
 users can apply for the application, cancel the applied application and also can see the applications that they have applied for.
 Payment system implemented using stripe for the users who wants to apply in a scholarship.
 

 Key features:
 Role based system
 Role for multiple user like admin, moderator and normal user .
 Admin can manage all users to all scholarship and also application.
 User can add and modify there own applications
 Payment system using stripe for the normal users to apply a scholarship

Technologies used in this Project:
  1. ReactJS.
  2. ExpressJS.
  3. MongoDB.
  4. Tailwind CSS.
  5. Firebase.
  6. TanstackQuery. 

npm package:
axios
toast
sweetAlert

To run this project locally you will need to follow this steps:
  install all the dependencies (npm i).
  Need to connect it to mongodb database
  Create a new project in firebas
  Need to ensure all the environment variables are added to the .env.local file
  from both firebase and also from mongodb. 
  Example:
      FIREBASE_API_KEY=your_firebase_api_key
      FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
      MONGODB_URI=your_mongodb_connection_string
      
  Now just run it with the command  "npm run dev".

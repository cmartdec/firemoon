# Firemoon
Firemoon is a social media platform that connect the Financial Independence/Retire Early community. Firemoon is inspired by indiehackers.com, firemoon project
could be used as a template.

Tech stack:
----
React.js
Node.js
Express.js
MongoDB

Auth system is an in house system, authorization is based on cookie send. The backend sends a httpOnly cookie that later recieves on the headers for each request from the client-side with the user Id to be authorized. Look at middlewares, verifyToken.
Users are be able to change their profile picture, in order to implement this feature, I used s3 bucket from AWS services.
The site is live on > https://firemoon.app
The backend is deployed on railway.app, with CI/CD managed with github controllers
Also the client side is deployed on netlify
Domain is registered on namecheap.com and SSL is covered by Netlify and Railway by themselves
TailwindCSS is used to create all the style of Firemoon, I chose this library because it is the best way to iterate on design as fast as possible.
I used React Query library to fetch data from the client-side. It works perfectly fine to manage state (loading state, or error state).

At the beginning, I used Redux async thunk, but thinking about the project's scope at the time, Redux was delete from the project to reduce boilerplate. Also was considering to use zustand or any state management, but none of these was required at the time. React Query was the perfect fit to stay tuned with
server state

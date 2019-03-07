# Notification Feed

## Overview

You are tasked with writing a small application that takes a feed of notifications, aggregates, and displays them. 

The algorithm should be packaged in a web server that exposes appropriate endpoints. 

An web interface to view the resultant feed and any interaction capability should also be provided, this does not have to be elaborate or very time consuming.
 
The notification feed is from a hypothetical social website that allows users to write posts, like posts and comment on posts. 

The notifications can be of two types: Like and Comment. Like indicates that one user liked a user's post and Comment indicates that one user commented on a user's post.

The notifications should at minimum be aggregated per type and post. You'll be provided with a file containing a JSON of the notifications feed and another file showing an example of how the notifications could be aggregated.

Please note that the order in which the notifications are served or aggregated is irrelevant and functionality/display options are open to your interpretation if you wish.

We are looking for a response that is as close to production ready as possible, properly packaged, and supplied with deployment instructions.

Ideally this will be delivered as a link to a git repository but a zip file is also acceptable.

## Running instructions
1. `cd service`
2. `yarn install`
3. `yarn start`. Service will be running on `localhost:5000`
4. On a different session `cd ../webapp`
5. `yarn install`
6. `yarn start`. Webapp will be running on `localhost:3000`
7. Wait the web app to compile and go to `localhost:3000` in your browser

## Commands

For `webapp`,

* `yarn install` - install all dependencies
* `yarn build` - build the code
* `yarn start` - start a developer web server
* `yarn test` - run all unit tests
* `yarn lint` - lint your code

For `server`,

* `yarn install` - install all dependencies
* `yarn start` - start the web server (if you get a port conflict, then use the `PORT` environment variable to change it, ie `PORT=3001 yarn start`)
* `yarn test` - run all unit tests
* `yarn lint` - lint your code

## Notes

1. For the proposed solution I assume that the notifications are for a specific user from interactions with their content. The user would be the person looking at the notifications page.
2. The aggregation I decided to support for notifications are the ones most commonly seen in social media: likes to a post and comments to a post.
3. The service was built using Koa for web server and Mocha/Chai for testing. The web app was built using create-react-app command and react-bootstrap for the visual components.
4. The notifications don't have any type of datetime to help sorting them, that's part of the reason you see listed the likes first and then the comments. I thought about shuffling them to give them a more realistic look but that's not useful in terms of functionality.

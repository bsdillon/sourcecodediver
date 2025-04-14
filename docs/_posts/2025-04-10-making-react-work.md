---
layout: post
title:  "Making React Work"
date:   2025-04-10
categories: journal
---
So on the agenda for today is getting my own version of a react app working. First, I'm going to form the right structure in its own folder that I can run 'npm run build' against and extract into its own server with a Dockerfile. This is intentional so that each folder in the project can hold part of what we are building.

I put together some basic files in this structure. I'm going to use the react_Dockerfile to compose everything.
.\imgs\scd_logo.png \
.\react_Dockerfile \
.\react-front\ \
├── public \
│   └── index.html \
├── src \
│   ├── imgs \
│   │   └── EMPTY \
│   ├── Clock.js \
│   ├── common.css \
│   ├── index.js \
│   └── Welcome.js

* I had to improve the dockerfile to pull everyhting in and build it correctly.
* Missing react-scripts in the dependencies and the build definition using react-scripts build. Got that fixed.
* Had a problem with importing an image from /img instead of ./img. Such small differences.
* For some reason my package.json has a homepage referencing my github location. https://github.com/bsdillon/sourcecodediver#readme. No idea why, but that didn't work well with react.
* Lots of help from Chip on all this. A bit of google.
* I'm running the container -it so I can see the output.
* I have an empty common.css. I didn't think that was critical, but Chip says that can make the page blank. That's what I'm getting.
Forgot to add import ReactDOM from 'react-dom/client' to index.js. I need an eye roll emoji.

And there it is! Okay. The logo is there, the text is there, the link to the homepage is there, and the clock app is working. Nice. I needed more than Chip could give me, but with his help the rest went really smooth.

Normally I would document my process for others (and myself) to follow, but working on my own means just committing the code. ... Hmm. Maybe I should also document what I found. As a showcase of my training chops.
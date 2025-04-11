---
layout: post
title:  "Pushing my work to dev"
date:   2025-04-09
categories: journal
---
One of the big challenges is learning to work with this system of branches. Really something I should have been doing all along, but because I only had two projects in 18 years where any sort of source control was used.... Anyway, today I'm going to finish my work and commit all the way to dev and then main, to show these posts are working and then create a feature branch to continue work on React.

So, I decided to start by following instructions at [this site](https://www.taniarascia.com/getting-started-with-react/) which is about five years old and may be somewhat depricated, but it does offer a step-by-step process. I may learn something and Chip is just not very methodical.
* Dang. Huge number of downloads. 1324 packages. Took about 5 minutes on my internet. Need to get that router moved.
* Either the standard has changed or this code was wrong to begin with, but I've made several changes to make it run, based on what I learned from the original version downloaded from facebook (??).
* Trying out the chrome extension for [react-dev-tools]("https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?pli=1").
* Total of 8 versions of the app with progressively more interesting code and 'npm run build' to create the build folder which is a runable server and then 'npm start' that makes that server available.
* The last part marries up with what I have been using npm for, adding dependencies to the package.json and then building. Might need to study these examples more, but that's enough for today.
* Saving everything locally for reference material. At least until I understand it better.
* I pushed everything up to dev and then master, had to move my pages from master/docs to master/root and I asked Chip to tell me how to put them all on the same page. So, I'm trying that and pushing again.
* Had to do it a few times and finally got it handled. Success. I'll let Chip explain.
* Blog achieved... although it needs to be a little prettier.

## From Chip
<div style="background-color:white; color: darkblue; font-style: italic;">
We were working on a GitHub Pages site where the user wanted to host a custom landing page alongside a Jekyll-based blog. The issue arose when the blog content, stored in a subfolder (/docs/blog/), wasn't displaying correctly. The links to the blog posts were showing the correct paths but resulted in 404 errors when clicked. This occurred because GitHub Pages does not process Jekyll content recursively in subfolders like /docs/blog/.

To resolve this, we moved the Jekyll-based blog content directly into the /docs/ folder, alongside the custom index.html. This allowed GitHub Pages to properly build the blog using Jekyll. The posts now render correctly, and the links to them work as expected. The next step will be to improve the blog's style, but the fundamental issue has been resolved by ensuring the blog content is within the correct directory for GitHub Pages to process it.
</div>
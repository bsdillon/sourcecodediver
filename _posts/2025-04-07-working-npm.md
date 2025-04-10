---
layout: post
title:  "Working NPM"
date:   2025-04-07
categories: journal
---
I'm not sure how well this blog is going to work, but traditionally I keep developer notes on my project and this seems like a good place to do that and hopefully demonstrate my thought process and skills along the way. Remember, the goal is to get a job first and everything else here is a matter of synergistic outcomes. Gravy.

Working through NPM documentation because Chip isn't that helpful, but we finally worked out the process. I installed react and react-dom so they would show up in the project.json and now I'm trying the containerized version again.
* I had to add a gitignore for the first time to cover the node_modules.
* Chip didn't tell me that I needed to install build. I was getting an error along those lines.
  * Nope. Still the same error. I'm missing something. Documentation online suggests that 'npm run build works normally', so I think that is still right, but I'm getting an error about a misisng build script.
  * Maybe that build is a missing script like make for a C program. Asked chip directly and he was able to suggest something. Okay... at least it is running now but the script is not doing what is expected. I need to find the **right** way to build this react container.
  * I removed the build depedency.
  * I'm out of time for this morning, but I found a [useful site](https://www.taniarascia.com/getting-started-with-react/)
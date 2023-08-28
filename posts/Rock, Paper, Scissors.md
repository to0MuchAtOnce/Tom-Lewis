---
title: 'Rock, Paper, Scissors'
date: '2023-08-28'
---

I've decided recently to take things back basics as I feel like there are many holes in my knowledge when it comes to web development. I think this will inspire confidence and solidify the knowledge I've already gained. So I turned to [The Odin Project] (TOP). A fantastic open source resource for full stack web development, which also teaches how to think when solving problems, not just how to write code.

This is my version of the popular game rock, paper, scissors; a challenge from TOP Foundations course.  

When I first started to program, I wasn't sure how to approach a project like this, where do you begin? The best way to approach such a problem is to break it down into smaller problems. Ask yourself some questions:

- What do you want to achieve?
- Why do you want to achieve it?
- How are you going to approach the problem?

I found it helpful to try to understand what it is I need to achieve before hand, rather than diving to writing code and becoming frustrated when I loose track of what i’m doing, simply because I don’t have a plan. 

I wrote out my answers in pseudocode like so:

```
1. The user chooses an option (rock, paper, scissors)
2. Computer chooses an option (random selection)
3. If the result of both users is equal then is a draw for that round - 0 points scored
4. If the result is rock vs scissors then rock wins and the player gets a point
5. If the result is scissors vs paper then scissors wins and the player gets a point 
6. If the result is paper vs rock then paper wins and the player gets a point
7. Game will run for 5 rounds, the first person to 5 points wins the game
```
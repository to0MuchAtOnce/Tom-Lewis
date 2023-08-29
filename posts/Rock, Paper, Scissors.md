---
title: 'Rock, Paper, Scissors'
date: '2023-08-28'
---

I've decided recently to take things back basics as I feel like there are many holes in my knowledge when it comes to web development. I think this will inspire confidence and solidify the knowledge I've already gained. So I turned to [The Odin Project](https://www.theodinproject.com/). A fantastic open source resource for full stack web development, which also teaches how to think when solving problems, not just how to write code. This is my version of the popular game rock, paper, scissors, a challenge from TOP Foundations course.  

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
This is a new approach for me taking the code out of the way. This helped me to visualise what I needed to achieve.

## The Computer’s Choice

I began with the computers choice. First I needed to make the computer return a random value. I used an array to store the values that can be returned:

```js
const choice = ['rock', 'paper', 'scissors']
```

I assigned the array to a variable called  <code class=inline-code>choice</code>. Next I needed a function that would <code class=inline-code>return</code> a random choice.

```js
function getComputerChoice() {
  const random = Math.floor(Math.random() * choice.length);
  const computerSelection = choice[random];
  return computerSelection;
}
```

The above function called <code class=inline-code>getComputerChoice</code> contains 2 variables. The first is <code class=inline-code>random</code> which randomly chooses an index from the choice array using the <code class=inline-code> Math</code> functions <code class=inline-code>Math.floor()</code> and <code class=inline-code>Math.random()</code>. The second is <code class=inline-code>computerSelection</code> which stores the random index from the choice array. This value is then returned by the function. 

```js
function playRound(playerSelection, computerSelection) {
	// Insert logic here...
}
```

## Play a Round

I made a function called <code class=inline-code>playRound</code> which takes two parameters, <code class=inline-code>playerSelection</code> and <code class=inline-code>computerSelection</code>. First, I made it possible for the user to input words with both uppercase and lowercase letters by setting the playerSelection parameter equal to a new variable called <code class=inline-code>lowerCasePlayerSelection</code>:

## The Main Logic

Next I wrote out this long series of <code class="inline-code">if</code> and <code class=inline-code>if else</code> statements covering all the relevant scenarios that can occur while playing the game. This helped me to visualise exactly what I was doing. When I finished writing all this out, I felt like there had to be a more concise way of doing things, the code is not very readable and it’s quite long:

```js
if (lowerCasePlayerSelection === computerSelection) {
return "It's a draw";
} else if (
lowerCasePlayerSelection === 'rock' &&
computerSelection === 'scissors'
) {
return 'You win, Rock beats scissors';
} else if (
lowerCasePlayerSelection === 'rock' &&
computerSelection === 'paper'
) {
return 'You loose, paper beats rock';
} else if (
lowerCasePlayerSelection === 'paper' &&
computerSelection === 'rock'
) {
return 'You win, paper beats rock';
} else if (
lowerCasePlayerSelection === 'paper' &&
computerSelection === 'scissors'
) {
return 'You loose, scissors beats paper';
} else if (
lowerCasePlayerSelection === 'scissors' &&
computerSelection === 'rock'
) {
return 'You loose, rock beats scissors';
} else if (
lowerCasePlayerSelection === 'scissors' &&
computerSelection === 'paper'
) {
return 'You win, scissors beats paper';
}
```

So after some research I was able greatly minimise the <code class=inline-code>if</code> statements by using string concatenation to create the returned strings:

```js
function playRound(playerSelection, computerSelection) {
const lowerCasePlayerSelection = playerSelection.toLowerCase();
if (lowerCasePlayerSelection === computerSelection) {
    return "It's a draw";
  } else if (
    (lowerCasePlayerSelection === 'rock' && computerSelection === 'scissors') ||
    (lowerCasePlayerSelection === 'paper' && computerSelection === 'rock') ||
    (lowerCasePlayerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    return (
      'You win, ' + lowerCasePlayerSelection + 'beats ' + computerSelection
    );
  } else {
    return (
      'You loose, ' + computerSelection + 'beats ' + lowerCasePlayerSelection
    );
  }
}
```

## The Game

Next I made a function called <code class=inline-code>game</code> which handles scoring, and the amount of rounds the game will run for. It also consists of a message prompt for the user to input a choice, which is stored in a variable and one for storing the computers choice too. I then set the play round function equal to a variable called <code class=inline-code>roundResult</code> push those results into the results array. Then there is score allocation 

```js
function game() {
    // variables for keeping scoring
    let playerScore = 0;
    let computerScore = 0;

		// Results array
    const results = [];

for (let i = 0; i < 5; i++) {
// User prompt
const playerSelection = prompt('Rock, Paper or Scissors?');
const computerSelection = getComputerChoice();
const roundResult = playRound(playerSelection, computerSelection);
results.push(roundResult);
    
// Allocates scores to relevant players
    if (roundResult.includes('win')) {
        playerScore++;
        results.push('Player score:', playerScore);
    } else if (roundResult.includes('loose')) {
        computerScore++;
        results.push('Computer score:', playerScore);
    }

    if (playerScore === 5 || computerScore === 5) {
        break;
    }
}

game();

```

## <span class=inline-code>for</span> or <span class=inline-code>while</span> ?

Initially I used a <code class=inline-code>for</code> loop, and an if statement that would break the loop if the conditions are not met. Although this works, I would have more control over keeping score if I used a <code class=inline-code> while</code> loop instead. I can program a <code class=inline-code>while</code> loop to stop when a certain condition is met, like so:

Initially I used a <code class=inline-code>for</code> loop, and an if statement that would break the loop if the conditions are not met. Although this works, I would have more control over keeping score if I used a <code class=inline-code>while</code> loop instead. I can program a <code class=inline-code>while</code> loop to stop when a certain condition is met, like so:

```js
while (playerScore < 5 && computerScore < 5) 
```

If either the player or the computer scores 5 points the game ends because one of the conditions would no longer be true. Of course I could still achieve a similar result with a <code class=inline-code>for</code> loop, but I would have to modify it a bit:

```js
for (let i = 0; i < 100; i++) {
// rest of function logic
if (playerScore === 5 || computerScore === 5) {
        break;
}
```

This would loop up to 100 times if the condition in the <code class=inline-code>if</code> statement is not met. Allowing enough loops for the score to actually reach 5 for one of the players. This was my first approach but I dislike it because it leaves an element of doubt. There is a chance, if only a small one, that the game would draw 96 times and the loop would end without a player winning the game. Meaning the code would break. Using a <code class=inline-code>while</code> loop this eliminates this possibility as the code will not stop running until one of the players reaches 5 points. The code is now shorter and more reliable, without the possibility for unnecessary error.

For now this game has no user interface but it will be added over the next few lessons of The Odin Project, and I’ll update this post after i’ve made it.

If you notice any inaccuracies in my code which can be found on GitHub; or see something that I could do better don’t hesitate to contact me on twitter, I’m always interested in connecting with new people.  Please see my social links below.
# Chess Time Management Tool

An application that will give recommendations on how to manage your time during a chess match, given a particular time control. This application installs a service worker so it should work offline.

## Tech stack

1. JavaScript

## Logic for the computation

### First 15 moves

The time recommended to spend for the first 15 moves is based on Botvinnik's rule, which states that you should use about 20% of your total time for the first 15 moves. For example, in 30+30 time control, 20% of 30 minutes is 6 minutes.

### Average time per move

Average time per move is computed by dividing the total time by 40 moves. 40 moves is the assumed number of moves in a chess game. For example, in 30+30 time control, 30 minutes / 40 moves = 0.75 minutes or 45 seconds. Add the 30 second increment, and the average time per move is 1 minute and 15 seconds.

### Average time per non-critical move

In a chess game, it is not advisable to spend the average time per move on every move because you may need the extra time later on to tackle critical positions. For non-critical moves, the computation is done by getting about 80% of the average time per move. For example, in 30+30 time control, 80% of 1 minute and 15 seconds is 1 minute.

### Exceptions

As with everything else in life, feel free to not follow the recommendations if it does not resonate with you. They are recommendations for a reason. Adjust according to how you want to play.

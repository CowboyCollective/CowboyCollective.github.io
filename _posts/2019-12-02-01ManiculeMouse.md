---
layout: default
title: "Making a Manicule Mouse"
cowboy: "Owen Earl"
type: "Makin"
photo: "https://raw.githubusercontent.com/CowboyCollective/media/master/manicule.gif"
date: 2019-12-02
---
![Manicule Mouse](https://raw.githubusercontent.com/CowboyCollective/media/master/manicule.gif)

If you've been using the site on desktop, you may have noticed our lovely Manicule Mouse. Here's a little info on what that is and how this effect is achieved.

1. **About Manicules**<br>
Manicules are the name given to the punctuation mark that looks like a finger pointing. The tradition of drawing little fingers pointing to things dates back to the 12th
century.  That's back when books were all written by hand. They've been phased out in recant, people these days just use bullet points or arrows, but they were alive and well during the cowboy era!

2. **Making the Manicules**<br>
I wanted to give the site a little extra touch of cowboy and whimsy by turning the mouse cursor into a manicule when links are hovered over. Luckily, there is a manicule in the [WANTED Poster Resource Pack](https://cowboycollective.cc/2019/12/01/WANTEDPosters.html), which includes a set of actual historical WANTED posters. [This one right here](https://raw.githubusercontent.com/CowboyCollective/Wanted-Posters/master/Refrences/John%20Wilkes%20Booth.jpg) has the manicule in question.
![Manicule Mouse](https://raw.githubusercontent.com/CowboyCollective/media/master/manicule.png)
I used an image editor to crop and rotate it before playing with the "levels" to get the black and white effect. Then I opened it up in [Inkscape](https://inkscape.org/) and used the "trace bitmap" feature (Ctrl+Shift+B), and before using the pen tool to trace over the areas I wanted to be white.

2. **Implementing the Code**<br>
Now that I have the image I want, I can write the css to implement it. That looks like this:<br><br>
**`a:hover{ cursor: url("https://cowboycollective.cc/welcome%20site/assets/point.svg") 12 0, auto;}`**<br><br>
This will make the cursor that manicule picture whenever it hovers over a link (a). The numbers at the end are instructions on centering the mouse. Feel free to use this code in your own websites! You can replace the url with any image file you like.

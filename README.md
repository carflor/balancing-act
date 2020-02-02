# balancing-act

Week 1
Steps 0-3 need to be completed by Friday morning at 9am. Once these steps are completed, we will eventually add more functionality!

Step 0 - Make a Plan
Contrary to popular opinion, developers don’t spend all their time coding! A significant amount of time should be put into planning (both the visual layout of a page and the logic that makes it function).

DO NOT skip this step! It’s placed here very intentionally, and we will ask you about it in your evaluation.

Spend a couple minutes really looking at every little detail of the comp. Consider:

What HTML element do you think you’ll use for the title? For the “Accounts” sub-title?
Where do you think the CSS property border was used? border-radius?
Will padding, margin, or both be used for the three boxes that have income/expenses/credit score info?


Map it out. Either print out the comp (there is a printer available in the vault), or sketch it out in your notebook.

Label each part of the page with the HTML element you think is most appropriate to display it.
For parts of that page that are repetitive (account cards, and more!), decide on a class name that you will use to refer to those in CSS.
Think about, and possibly research, how will you make sure that the nav bar stays on the left and the recent transactions box stays on the right?
Step 1 - General Layout
Now that you have a vision and a plan for how to work towards it, it is time to start writing some code.

Write the HTML and CSS necessary to get the general layout of the comp re-created. This step should NOT include worries about fonts, colors, borders, or other small details. It may look somewhat like craigslist right now - kind of boring, but the content is still there for anyone who needs it.

Once you’re happy with your general layout, commit this chunk of work. Make sure you are navigated to this project in your terminal, then run the following commands:

git add index.html
git commit -m "Build skeleton of dashboard page"

git add styles.css
git commit -m "Style general layout of dashboard page"

git push origin master
Now, check your project on GitHub. If you click into a file, you should see your recently updated code!

Step 2 - Details, Details, Details
Now that we have the layout in place, it’s time to start getting into the nitty-gritty and getting this pixel perfect.

Write the CSS necessary to re-create every little detail of the comp. Keep an eye on font sizes in relation to other pieces of text, padding and margin around content and boxes.

Don’t forget to commit your work! If you don’t commit until you finish this iteration, that’s ok. Ideally, you’d made several commits throughout this iteration. Below is an example of a series of commit messages that someone may write while working on this.

- Add fonts and size fonts
- Style left-side nav bar
- Add padding the cards on middle of page
- Center content vertically on account cards
- Style recent transactions list
- Add final details - hover states to buttons and box shadow to white containers
Once you’ve pushed your work up to GitHub, check your GitHub pages link. A very common issue is that images look the way you’d expect when running the project locally, but not on GitHub Pages. If you have that problem, it has to do with a file path. As your cohort mates or rock if you’re not sure what to do with this info!

Step 3 - A Little Functionality
It’s time to write some JavaScript. Implement the functionality for this user story:

As a user,
- When I click the "x" icon in the top right corner of the banner that says "Welcome, Username!"
- The entire banner disappears
- and the content below it now fills the space the banner previously took up
- so that I have fewer distractions and can view more accounts (if I had more than 3!)
NOTE: We do not expect that you have a fancy animation for this.

Colors, Font & Assets
Colors:

Font color: #363636
Light grey background: #F5F5F5
Grey line between each transaction: #CCCCCC
Turquoise buttons: #1CA3BA
Welcome banner gradient: #8ED1DC to #E3F4F6
Box shadow on all elements sitting over the grey background: rgba(0,0,0,0.05)
Icons:

All icons can be found in this Google Drive. You should download them and store them in the assets directory you created in the Set Up section.

Font:

The only font used is Biryani. For now, you only need Regular 400. This should be pulled into the project with a <link> tag in the head of your HTML.

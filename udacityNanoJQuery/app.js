/*
 For this quiz, use articleList and DOM navigation methods to collect articleList's
 sibling <h1> (var h1), children (var kids), and parent <div>s (var parents).

 You must use articleList to navigate to the element(s)!
 */

// Start with these variable!
var articleList, h1, kids, parents;

articleList = $('.article-list');

h1 = articleList.siblings('h1');

kids = articleList.find('*');

parents = articleList.parents('div');

console.log("h1" + h1.toString());

var article2, article3;

// your code goes here!
article2 = $('.featured').toggleClass('featured');
article3 = article2.next();
console.log(article3);
article3.toggleClass('featured');

/*
 For this quiz, set the href of the <a> in the first nav item to "#1".

 You must use jQuery's attr() method!
 */

// Start with this variable!
var navList;
navList = $('.nav-list');
navItems = navList.children();
firstItem = navItems.first();
var firstItemA = firstItem.find('a');
firstItemA.attr('href','#1');

/*
 For this quiz, change the font-size of all the article-items to 20px!

 You must use jQuery's css() method!
 */

// Start with this variable!
var articleItems;

articleItems = $('.article-item').css("font-size","20px");


/*
 For this quiz, use jQuery's val method to make live changes to the 'Cool Articles' <h1>!

 The starter code below creates an event listener that will run any time the input changes.
 For more on events, check the instructor notes.
 */


$('#input').on('change', function() {
 $('#input').next().text(this.value);
});

/*
 For this quiz, remove the <ul> from the first article item!

 You must use jQuery's remove() method.
 */

// Start with this variable!
var articleItems;

articleItems = $('.article-item').first().children('ul').remove();

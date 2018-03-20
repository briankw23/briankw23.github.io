var blogs =[{id:"Blog Post 1",title:"Back to School",date:"2/27/2018",post:"Hey I’m Brian, welcome to my blog. Here I will detail my journey as I experience Nashville Software School. We are about two weeks deep in the program and I can safely admit I made the right decision to join. We are off to a good start. It has been a challenging process of adjusting of the schedule from a work/life/school balance perspective. But week two felt much more natural. I am still finding my footing in this area but hopefully I can develop a cadence thats optimal for all fronts. On the second day of class we jumped right in covering HTML and CSS. It was mostly review from pre-work assignments. We then recreated a super chill website call CSS Zen Gardens. Following the CSS and HTML exercises we were introduced to the command line and GIT. Before class the command line was the application I would and immediately close. I knew it was a useful tool but I had zero comfort or need to use it. Now I am fairly comfortable navigating around and creating folders, I mean directories. GIT was entirely new to me. My best attempt at a description would be sharepoint, dropbox, and reddit all morphed into one application. Kinda- but not really. Logically the process of using git and github along with the command line made sense but it took a few days and practice to really sink in. That’s it for this week.. Looking forward to next week. We will tackle JavaScript."},{id:"Blog Post 2",title:"Loops",date:"3/6/2018",post:"This week we found ourselves working with JavaScript. We covered mainly strings, arrays and array methods, and for loops. For loops are by the most interesting thing we covered yet. I cannot imagine the vast applications of it even with my limited perspective. This doesn’t mean I immediately understood it. We went over a few loop examples in class and I felt fairly comfortable working through the examples. Then I started the homework exercises... I spent an entire study group working on a single challenge and still didn’t finish. Jeffrey got the closest out of all of us but I couldn’t read his code or follow his logic. The long day of work then study group frustrated me. That night I didn’t get a good night’s rest. I woke many times with for loops on the brain. It was as if I were still working on the problem while asleep. The next morning I guess it clicked and I solved that exercise and a few more exercises.  There were so many ideas considered at the meetup I wasn’t able to commit to an approach to solve the problem. It was a learning experience. My approach since has been figure something out that works for you then you can always make the code better. NSS has been an adjustment time and schedule wise. I am getting use to the flow of things and hoping to make better use of my time in the weeks to come. The one thing that is easy to forget is sometimes you don’t get or learn things immediately. It takes time and i will take that with me continue to more challenging subjects."},{id:"Blog Post 3",title:"GitHub for Teams: Fatal Error",date:"3/13/2018",post:"I can’t count how many times I said or heard “Should I git something something something” this week. We dove a little bit deeper in the GitHub processes. GitHub seemed simple enough when you were working on a project alone but that is not realistic.  We introduced the team aspect to the equation and all git confidence was lost, at least initially. GitHub project and wireframes for teams were demo in the form of a Dinosaur dating website. We also touched on advanced array methods and learned you can solve the same problem thousands of different ways. The “for each” method is a new tool in the toolbox but I think I still prefer the “for loop” at this point. At meetup we dove into the language translator exercise and put to test our GitHub project planning knowledge. The Language translator exercise was a real challenge for me and I am still working to complete. "}
];

function createBlogPost(){
  var blogstring =[];
  for (var j = 0; j <blogs.length; j++) {
    blogstring.push(
      "<div>" + blogs[j].id + "</div>"+
      "<h2>" + blogs[j].title + "</h2>" +
      "<div>" + blogs[j].date +"</div>" +
      "<p>" + blogs[j].post + "</p>");
  }
  printToDom(blogstring, 'blogs');
};
createBlogPost();
function printToDom(string, divID){
  var myDiv = document.getElementById(divID);
  console.log("myDiv:", myDiv);
  myDiv.innerHTML += string;
}

createProjectCards();


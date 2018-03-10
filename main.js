var blogs= ["Hey I’m Brian, welcome to my blog. Here I will detail my journey as I experience Nashville Software School. We are about two weeks deep in the program and I can safely admit I made the right decision to join. We are off to a good start. It has been a challenging process of adjusting of the schedule from a work/life/school balance perspective. But week two felt much more natural. I am still finding my footing in this area but hopefully I can develop a cadence thats optimal for all fronts. On the second day of class we jumped right in covering HTML and CSS. It was mostly review from pre-work assignments. We then recreated a super chill website call CSS Zen Gardens. Following the CSS and HTML exercises we were introduced to the command line and GIT. Before class the command line was the application I would and immediately close. I knew it was a useful tool but I had zero comfort or need to use it. Now I am fairly comfortable navigating around and creating folders, I mean directories. GIT was entirely new to me. My best attempt at a description would be sharepoint, dropbox, and reddit all morphed into one application. Kinda- but not really. Logically the process of using git and github along with the command line made sense but it took a few days and practice to really sink in. That’s it for this week.. Looking forward to next week. We will tackle JavaScript.", "Blog TWO kwfhkwefbnkwbnfwnbr","blog THREE" ];


console.log(blogs);


function BlogStringBuilder(array){
    blogs.forEach(function(blogs){
      var string = "";
      string += "<div class=''>";
      string += "<h1>" + blogs + "</h1>";
      string += "</div>";
      printToDom(string, 'blogs')
    })
  }

function printToDom(string, divID){
   var myDiv = document.getElementById(divID);
   console.log("myDiv:", myDiv);
   myDiv.innerHTML += string;
}

BlogStringBuilder(blogs);
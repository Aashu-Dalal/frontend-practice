let title = document.querySelector("title");
let views = document.querySelector("views");
let duration = document.querySelector("duration");
let cName = document.querySelector("cName");
let timeAgo = document.querySelector("timeAgo");
function thumbnail(title , views, duration, cName, timeAgo){
    title.innerText = title;
    views.innerText = views;
    duration.innerText = duration;
    cName.innerText = cName;
    timeAgo.innerText = timeAgo;
}
setData(
    "CSS Exercise 5 - Design Layout",
    "283K views",
    "7:16",
    "Sigma Web Dev",
    "2 years ago"
);
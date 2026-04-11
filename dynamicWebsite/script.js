let title = document.querySelector(".title");
let views = document.querySelector(".views");
let duration = document.querySelector(".duration");
let cName = document.querySelector(".cName");
let timeAgo = document.querySelector(".timeAgo");
function thumbnail(t , v, d, channel, time){
    title.innerText = t;
    views.innerText = v;
    duration.innerText = d;
    cName.innerText = channel;
    timeAgo.innerText = time;
}
thumbnail(
    "CSS Exercise 5 - Design Layout",
    "283K views",
    "7:16",
    "Sigma Web Dev",
    "2 years ago"
);
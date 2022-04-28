function scroll_home(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function scroll_aboutMe(){
    document.getElementById("About-me").scrollIntoView({behavior:'smooth'});
}

function scroll_projects(){
    document.getElementById("Projects").scrollIntoView({behavior:'smooth'});
}

function scroll_contacts(){
    document.getElementById("Footer").scrollIntoView({behavior:'smooth'});
}


function go_to_insta(){
    location.href = "https://www.instagram.com/q.douglas_/";
}

function go_to_git(){
    location.href = "https://github.com/qdpie";
}

function go_to_twitter(){
    location.href = "https://twitter.com/QuentinhatesRed";
}

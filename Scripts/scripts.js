function scroll_home(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function scroll_aboutMe(){
    document.getElementById("About-me").scrollIntoView({behavior:'smooth'})
}

function scroll_projects(){
    document.getElementById("Projects").scrollIntoView({behavior:'smooth'})
}

function scroll_contacts(){
    document.getElementById("Footer").scrollIntoView({behavior:'smooth'})
}

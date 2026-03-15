function pageHome() {
    var sections = ["home", "friends", "projects"];
    var buttons = ["buttonHome", "buttonFriends", "buttonProjects"];

    sections.forEach((id, index) => {
        var section = document.getElementById(id);
        var button = document.getElementById(buttons[index]);

        if (id === "home") {
            section.style.display = 'block';
            button.setAttribute('class', 'pageButton-active');
        } 
        else {
            section.style.display = 'none';
            button.setAttribute('class', 'pageButton');
        }
    });
}

function pageFriends() {
    var sections = ["home", "friends", "projects"];
    var buttons = ["buttonHome", "buttonFriends", "buttonProjects"];

    sections.forEach((id, index) => {
        var section = document.getElementById(id);
        var button = document.getElementById(buttons[index]);

        if (id === "friends") {
            section.style.display = 'block';
            button.setAttribute('class', 'pageButton-active');
        } else {
            section.style.display = 'none';
            button.setAttribute('class', 'pageButton');
        }
    });
}

function pageProjects() {
    var sections = ["home", "friends", "projects"];
    var buttons = ["buttonHome", "buttonFriends", "buttonProjects"];

    sections.forEach((id, index) => {
        var section = document.getElementById(id);
        var button = document.getElementById(buttons[index]);

        if (id === "projects") {
            section.style.display = 'block';
            button.setAttribute('class', 'pageButton-active');
        } else {
            section.style.display = 'none';
            button.setAttribute('class', 'pageButton');
        }
    });
}
function pageHome() {
    var sections = ["home", "friends", "projects"];
    var buttons = ["buttonHome", "buttonFriends", "buttonProjects"];

    sections.forEach((id, index) => {
        var section = document.getElementById(id);
        var button = document.getElementById(buttons[index]);

        if (id === "home") {
            button.setAttribute('class', 'pageButton-active');
        } else {
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
            button.setAttribute('class', 'pageButton-active');
        } else {
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
            button.setAttribute('class', 'pageButton-active');
        } else {
            button.setAttribute('class', 'pageButton');
        }
    });
}
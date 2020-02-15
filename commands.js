var commands = {
    "ls": (words) => "a.txt\tb.txt\tc.txt",
    "help": (words) => Object.keys(commands).map(function(cmd) {
        return `<a onclick='writer("`+cmd+`", true)'>`+cmd+`</a>`;
    } ).join("\t"),
};

commands.clear = function(words) {
    document.getElementsByClassName("console")[0].innerHTML = '';
};

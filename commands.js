var commands = {
    "help": function(words) { 
        return Object.keys(commands).map(function(cmd) {
            return "<a onclick='writer(\""+cmd+"\", true)'>"+cmd+"</a>";
        } ).join("\t");
    },
    "portfolio": function(words) { return biographyText; }
};

commands.clear = function(words) {
    document.getElementsByClassName("console")[0].innerHTML = '';
};

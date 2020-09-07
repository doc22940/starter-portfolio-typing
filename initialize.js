var writer = initializeConsole(document.body, function(line) {
    if (!commands) {
        return; // Dict not initialized yet
    }
    var words = line.split(" ");
    
    var command = words[0].toLowerCase();
    if (commands[command]) {
        var result = commands[command](words);
        if (result) {
            writer(result + "\n");
        }
    }
});
writer("whoami", true);
setTimeout(() => {
    writer("help", true);
}, 1000);

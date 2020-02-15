var currentWait = -100000; // TODO Change to 0

function put(text, delay) {
    if (delay) {
        currentWait += delay;
    }
    setTimeout(function(){
        writer(text);
    }, currentWait);
}

put("<h2>Michael Smith</h2>");
put("<a href='mailto:michael.smith.ok@gmail.com' target='_blank'>michael.smith.ok@gmail.com</a>", 500);
put("\nOklahoma City, OK, United States", 1300);

put("\n\n");

put("<h4>Skills</h4>", 1000);
var skills = [
    "PHP - 10 years<ul><li>Zend Framework</li></ul>",
    "Relational Databases <ul><li>MySQL - 10 years</li><li>PostgreSQL</li></ul>",
];
skills.forEach(function(skill){
    put("<ul><li>" + skill + "</li></ul>\n");
});
put("\n")

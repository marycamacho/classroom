/*
	Below is a small script which generates random adventures. There are two
	problems which are marked below with "TODO". Your assignment is to solve
	those TODOs and get this script really up to snuff.
*/

/*var monsters = [
	"dragon",
	"troll",
	"alien mothership",
	"illithid"
];

var weapons = [
	"deadly dagger",
	"artful axe",
	"skillful swordplay",
	"menacing mace"
];

var actions = [
	"defeated",
	"attacked",
	"ran from",
	"talked to"
];

var heroGender = Math.random() > 0.5 ? "hero" : "heroine";

/!*
	TODO: The following three lines of code have a lot of repetition and are
	ripe for turning into a function! Create a function to handle choosing
	a random element from an array instead of doing the math each time.
*!/
var chosenMonster = monsters[Math.floor(Math.random() * monsters.length)];
var chosenWeapon = weapons[Math.floor(Math.random() * weapons.length)];
var chosenAction = actions[Math.floor(Math.random() * actions.length)];

var output = "Armed with only their " +
	chosenWeapon +
	" our " +
	heroGender +
	" " +
	chosenAction +
	" the evil " +
	chosenMonster +
	"!";

document.getElementById("adventure").innerText = output;*/
/*var output;
var actionChosen;*/

function createAdventure(weaponOverride, actionsOverride){
    var monsters = [
        "dragon",
        "troll",
        "alien mothership",
        "illithid"
    ];

    var weapons = [
        "a deadly dagger",
        "an artful axe",
        "skillful swordplay",
        "menacing mace"
    ];

    var actions = [
        "defeated",
        "attacked",
        "ran from",
        "poured boiling water on",
        "talked to"
    ];

    var heroGender = Math.random() > 0.7 ? "hero" : "heroine";


    /*
     TODO: The following three lines of code have a lot of repetition and are
     ripe for turning into a function! Create a function to handle choosing
     a random element from an array instead of doing the math each time.
     */
    /*var chosenMonster = monsters[Math.floor(Math.random() * monsters.length)];
    var chosenWeapon = weapons[Math.floor(Math.random() * weapons.length)];
    var chosenAction = actions[Math.floor(Math.random() * actions.length)];*/

    function randomChooser (arrayName) {
        return arrayName[Math.floor(Math.random() * arrayName.length)];
    }

    var output = "Armed only with " +
        (weaponOverride || randomChooser(weapons)) +
        " our " +
        heroGender +
        " " +
        (actionsOverride || randomChooser(actions)) +
        " the evil " +
        randomChooser(monsters) +
        "!";

    document.getElementById("adventure").innerText = output;
}

/*
	TODO: Right now the "new adventure!" button doesn't work. Create a function
	to bind to that button so that the user can create a new adventure without
	refreshing the page.
*/

var newAdventureButton = document.getElementById("newAdventure");
newAdventureButton.onclick = function() {
    createAdventure();
}

// Calling Overrides - didn't have time to do as arrays with options - so put strings in for now. :)
var changeActionButton = document.getElementById("changeAction");
changeActionButton.onclick = function() {
    createAdventure("a wondrous wand", "stupified");
};

createAdventure();

/*
	Optional: Create several more types of adventures, weapons, actions, etc.

	Optional: Allow the user to interact with the story more than just clicking
	the "new adventure!" button. You'll need to create variables to keep track
	of state.

	Optional (advanced): Use document.location.hash in a way which allows the
	user to bookmark a specific story that they like and return to it later.
*/

var express = require("express");
var ejs = require("ejs");

var app = express();

var zoo = {
  elephant: {
    name: 'Dumbo',
    type: 'Mammal',
    genus: 'Elepha',
    legs: 4
  },
  alligator: {
    name: 'Freddy',
    type: 'Reptile',
    genus: 'Alligator',
    legs: 4
  },
  panda: {
    name: 'Benji',
    type: 'Mammal',
    genus: 'Ailuropoda',
    legs: 4
  },
  lion: {
    name: 'Maxim',
    type: 'Mammal',
    genus: 'Panthera',
    legs: 4
  },
  monkey: {
    name: 'Marco',
    type: 'Mammal',
    genus: 'Homo',
    legs: 2
  },
  koala: {
    name: 'Kai',
    type: 'Mammal',
    genus: 'Phascolarctos',
    legs: 4
  },
  tiger: {
    name: 'George',
    type: 'Mammal',
    genus: 'Panthera',
    legs: 4
  },
  t_rex: {
    name: 'Milton',
    type: 'Dinosaur',
    genus: 'Tyrannosaurus',
    legs: 4
  },
  brown_bear: {
    name: 'Ted',
    type: 'Mammal',
    genus: 'Ursidae',
    legs: 4
  },
  dodo: {
    name: 'Gertrude',
    type: 'Bird',
    genus: 'Raphus',
    legs: 2
  },
  penguin: {
    name: 'Frankie',
    type: 'Bird',
    genus: 'Spheniscidae',
    legs: 2
  }
}

var keys = Object.keys(zoo);

app.get("/animals", function(req,res) {
  res.json(zoo);
})

app.get("/random", function(req,res) {
  var random = Math.floor(Math.random()*(keys.length-1)+1);
  res.json({animal: keys[random]});
})

app.get("/show_random", function(req,res) {
  var random = Math.floor(Math.random()*(keys.length-1)+1);
  res.render("index.ejs", {animal: keys[random]} );
})

app.get("/:type", function(req,res) {
  var request = req.params.type
  var counter = 0;
  var matches = [];
  keys.forEach(function(animal) {
    if (zoo[animal].type === request) {
      matches.push(keys[counter]);
    }
    counter++
  })
  res.json({type: request, matches: matches})
})

app.listen(3000);

console.log("Listening on port 3000!");

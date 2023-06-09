const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? ", (name) => {
  // console.log(`Thank you for your valuable feedback: ${answer}`);
  rl.question('What are you from? ', (place) => {
    rl.question('What music do you like to play on repeat? ', (music) => {
      rl.question('Do you enjoy playing any sports? ', (sports) => {
        rl.question('What is your superpower? In a few words, tell us what you are amazing at!? ', (superpower) => {
          rl.close();
          console.log(`My name is ${name}, I am from ${place} and I love ${sports}, specially when I can do it whilst listening to ${music} on repeat. What sets me apart is that I can ${superpower}!!`);
        })
      
      })
    })
  })  
});

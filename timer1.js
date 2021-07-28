const args = process.argv.splice(2);

const setTimer = (time) => {
  if (!isNaN(Number(time)) && (Number(time) >= 0)) {
    setTimeout(() => {
      process.stdout.write('\x07');
      process.stdout.write('beep at ' + time + ". ")
    }, time * 1000);
    lastNum = Number(time);
  } else {
    process.stdout.write(time + ' is not a postive number\n');
  }
};

let lastNum = 0;

args.forEach((timer) => {
  setTimer((timer));
});

setTimeout(() => {
  process.stdout.write('\n');
},lastNum * 1000);
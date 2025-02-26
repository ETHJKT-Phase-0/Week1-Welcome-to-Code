let input = 5;

for (let i = 0; i < input; i++) {
  for (let j = 0; j <= i; j++) {
    process.stdout.write(`*`);
  }
  process.stdout.write(`\n`);
}

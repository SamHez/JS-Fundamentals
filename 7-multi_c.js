const x = parseInt(process.argv[2]);

if (isNaN(x)) {
  console.log('Missing number of occurrences');
} else {
  let i = 0;
  let output = '';

  while (i < x) {
    output += 'C is fun\n';
    i++;
  }

  // This is the second and final console.log
  console.log(output.trim());
}
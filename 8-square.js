const size = parseInt(process.argv[2]);

if (isNaN(size)) {
  console.log('Missing size');
} else if (size > 0) {
  let i = 0;
  const line = 'X'.repeat(size);

  while (i < size) {
    console.log(line);
    i++;
  }
}

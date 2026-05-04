if (process.argv[2] === '--version') {
  // Keep in sync with the root package.json version.
  console.log('0.0.10')
  process.exit(0)
}

require('./server').run()

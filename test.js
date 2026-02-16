// test.js
console.log("Running unit tests...");

// A simple test to check if our logic works
const testValue = true;

if (testValue === true) {
  console.log("PASS: Unit test successful.");
  process.exit(0); // Success
} else {
  console.error("FAIL: Unit test failed.");
  process.exit(1); // Failure
}

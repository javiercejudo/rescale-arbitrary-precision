#!/bin/bash

STATUS=0

uninstallDecimal() {
  npm uninstall -s big.js bignumber.js decimal.js
}

prepare() {
  uninstallDecimal
  npm i $DECIMAL
}

runTests() {
  prepare
  echo "Testing with $DECIMAL";
  gulp test || STATUS=1
}

teardown() {
  uninstallDecimal
  npm i && exit $STATUS
}

DECIMAL=big.js runTests
DECIMAL=bignumber.js runTests
DECIMAL=decimal.js runTests

teardown

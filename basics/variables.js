// Rule #1 - You can't define a variable more than once.
let petName = 'River'
let petName = 'Ash' // bad
petName = 'Ash'

// Rule #2 - There are rules related to variable names.
// // Can start with A-Z, a-z, $, or _
// // Numbers, $, and _ allowed after first character
let test! = 3 // bad
let !test = 3 // bad
let test1 = 3 // good
let 1test = 3 // bad

// Rule #3 - Variable names cannot be reserved keywords.
let let = 12 // bad
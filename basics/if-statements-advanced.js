let isAccountLocked = false
let userRole = 'admin'

// If - Else
if (isAccountLocked) {
  console.log('Account is locked')
} else {
  console.log('Account is not locked')
}

// If - Else If
if (isAccountLocked) {
  console.log('Account is locked')
} else if (userRole === 'admin') {
  console.log('Welcome admin')
} else {
  console.log('Welcome non-admin')
}

// Challenge
let temp = 45

if (temp <= 32) {
  console.log('It is freezing outside!')
} else if (temp >= 90) {
  console.log('It is too hot outside!')
} else {
  console.log('Go for it. It feels pretty nice out.')
}
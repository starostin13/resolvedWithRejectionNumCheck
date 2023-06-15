describe('Component.cy.js', () => {
  it('playground', () => {
    // cy.mount()
  })

  function delay(ms) {
    console.log('delay start')
    return new Promise(function (resolve) {
      setTimeout(function () {
        console.log('delay stop')
        resolve(42)
      }, ms)
    })
  }
  
  it('delays by 2 seconds', function () {
    cy.visit('/')
      .then(function () {
        // create the promise only after the visit
        // has finished. Promises are eager
        // so this promise starts running right away
        // By returning it from the Cypress .then command
        // you make Cypress wait for the promise to resolve
        return delay(2000)
      })
      // the resolved value of the promise is passed
      // to the assertion here
      .should('eq', 42)
  })
})
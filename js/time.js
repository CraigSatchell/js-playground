'use strict'

let d = new Date()
d.getTime()

async function timer(name) {
   let state
   let action
   if (name === undefined) {
      name = 'Timer'
   }
   while (action != 'stop') {
      action = prompt( name + ' (start, pause, stop): ')
      switch (action) {
         case 'start':
            state = 'started...'
            break
         case 'stop':
            state = 'stopped...'
            break
         case 'pause':
            state = 'paused...'
            break
         default:
            state = ''
      }
      if (state != '') {
         console.log(state)
      }
   }
}


timer()
timer('Timer 2')
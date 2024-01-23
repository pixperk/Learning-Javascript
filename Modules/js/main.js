/* import playGuitar from "./guitars";
import { shredding as shred, plucking as fingerpicking } from "./guitars";
 */

import * as Guitars from "./guitars.js"
import User from "./user.js"
/* console.log(playGuitar())
console.log(shred())
console.log(fingerpicking()) */
const me = new User("email@email.com", "Ravi Topley")
console.log(Guitars.playGuitar())
console.log(Guitars.shredding())
console.log(Guitars.plucking())
console.log(me);
console.log(me.greeting())

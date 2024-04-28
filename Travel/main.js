
// Render selectTag
import {optionTags} from './handleDatabase.js'
let tour = document.querySelector('.tour')
tour.innerHTML = optionTags


//Add event va Render ticketDescription
let infor = {}
export {infor}
import { handleInfor } from './handleTicketDesc.js'
document.querySelectorAll('input').forEach(tag => {tag.onchange = handleInfor})
document.querySelector('textarea').onchange = handleInfor
document.querySelector('select').onchange = handleInfor


//Render ticketRegisted
import { handldeOnsubmit } from './handleTicketRegisted.js'
document.querySelector('form').onsubmit = handldeOnsubmit




















const divs = document.querySelectorAll('div');
const lastDiv = divs[divs.length - 1]
const ps = lastDiv.querySelectorAll('p')
const lastPs = ps[ps.length - 1]
lastPs.style = 'background: green'


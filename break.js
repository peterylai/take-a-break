var subtitle = document.createElement('h2');
var currentTime = new Date();
var tenMinutesLater = new Date(Date.now() + 600000);
var instructions = "Step away until " + tenMinutesLater.toLocaleTimeString().replace(/:\d+ /, ' ');
subtitle.textContent = instructions;
document.body.appendChild(subtitle);
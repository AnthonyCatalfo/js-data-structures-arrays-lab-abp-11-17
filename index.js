// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];
//drivers.push('Milo', 'Otis', 'Garfield');
function destructivelyAppendDriver(name) {
  drivers.push(name);
  return
}
function destructivelyPrependDriver(name) {
  drivers.unshift(name);
  return
}
function destructivelyRemoveLastDriver(name) {
  drivers.pop(name);
  return
}

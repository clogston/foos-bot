const events = require('@slack/client').RTM_EVENTS;

exports.matcher = /^\!start$/i;
exports.callback = function (route, message, response) {
  if (message.channel in this.currentGames) {
    return response('A game has already been started! Use `!stop` to end the game.');
  }
  this.currentGames[message.channel] = {
    players: {
      123: 'Bob',
      1234: 'Will',
      1235: 'Bill'}
  };
  response('<!here> Game Started! Respond with `!in` to join.');

  this.emit(events.MESSAGE, Object.assign({}, message, { text: '!in' }));
};

exports.description = '`!stop` - stop a game';
exports.matcher = /^!stop$/i;
exports.callback = function (route, message, response) {
  delete this.currentGames[message.channel];
  response('Game stopped.');
};

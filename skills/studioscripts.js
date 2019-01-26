module.exports = function(controller) {
    controller.on('message_received', function(bot, message) {
        controller.studio.runTrigger(bot, message.text, message.user, message.channel).catch(function(err) {
               bot.reply(message, {text: 'Sorry, I don\'t understand.'});
            });
          });
    };
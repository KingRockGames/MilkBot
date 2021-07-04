const Discord = require("discord.js");
const Command = require("../../base/Command.js");
function ts() {
        var date = new Date();
        return date.getTime();
}
class Pat extends Command {
	constructor(client) {
		super(client, {
			name: "pat",
			description: "pats someone",
			usage: ".pat @user",
			dirname: __dirname,
			enabled: true,
			guildOnly: false,
			aliases: ["pat", "pet"],
			memberPermissions: [],
			botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
			nsfw: false,
			devOnly: false
		});
	}

	async run(message, args, client) {
    const gif = [
      "https://thumbs.gfycat.com/FlimsyDeafeningGrassspider-small.gif",
      "https://i.imgur.com/WyMHuyL.gif",
      "https://i.gifer.com/fybn.gif",
      "https://i.gifer.com/TSw8.gif",
      "https://66.media.tumblr.com/a72dd82535f3e7accd827c202dacc09a/tumblr_pfyiqz0pFL1th206io1_640.gif",
      "https://64.media.tumblr.com/6289c42ea805f475698f02207da0a377/tumblr_p14hcsxPsb1tm1dgio1_400.gifv",
      "https://i.pinimg.com/originals/a0/6d/65/a06d65ad49f019aaae3f30fb872df619.gif",
      "https://64.media.tumblr.com/1e92c03121c0bd6688d17eef8d275ea7/tumblr_pjgkb7Q1oi1ubu1ls_500.gifv",
      "https://thumbs.gfycat.com/ImpurePleasantArthropods-small.gif",
      "https://64.media.tumblr.com/33116fc3063dcc9fcfaad7de458314b5/tumblr_nyk3xfCrTE1s488tpo2_500.gifv",
      "https://media4.giphy.com/media/L2z7dnOduqEow/giphy.gif",
      "https://thumbs.gfycat.com/ParchedBlueIberianmole-size_restricted.gif",
      "https://64.media.tumblr.com/584a3894e3483eed23d1afaf1f6f9347/tumblr_ok1oplyzSF1r0tp5lo1_400.gifv",
      "https://media.giphy.com/media/5tmRHwTlHAA9WkVxTU/giphy.gif",
      "https://64.media.tumblr.com/f94eb1143883554a0c7825f75d593756/tumblr_pjr04jWu3x1tm1dgio2_500.gifv",
      "https://64.media.tumblr.com/7cb1e325559b682ca822340411e888cc/tumblr_ozfjmipJC71tm1dgio1_500.gifv",
      "https://64.media.tumblr.com/71d93048022df065a1d2af96ab71afa3/tumblr_olykrec0DB1qbvovho1_500.gifv",
      "https://64.media.tumblr.com/540bd810149ef1408cd56efbe7ecce90/tumblr_ph864nT3VP1tx45yjo1_500.gifv",
      "https://64.media.tumblr.com/1c433aeea03d0fcee34c22696ba1307b/tumblr_osl1kmMWL91qbvovho1_500.gifv",
      "https://64.media.tumblr.com/6bc4805da052bdeb34785a3acd59e69f/tumblr_olyfq6PNw01qbvovho1_500.gifv",
      "https://64.media.tumblr.com/6289c42ea805f475698f02207da0a377/tumblr_p14hcsxPsb1tm1dgio1_500.gif",
      "https://64.media.tumblr.com/59074e59e5563e15623216e3e33cd259/tumblr_ojt62uIuDB1vztiw8o1_500.gifv",
      "https://64.media.tumblr.com/f6de2a801b2cad66f672fc7faca60410/tumblr_pfyit1ofSu1th206io2_500.gif",
      "https://64.media.tumblr.com/e1dfc1496b6c26b5718fce37abfd3908/tumblr_p01t5asioN1tm1dgio2_r1_500.gif",
      "https://64.media.tumblr.com/ea0a3110ef50e46336f9a996eb416ece/tumblr_p2kzogLOZU1vajq0ro4_500.gif",
      "https://64.media.tumblr.com/522cf3f1c755fb8dd72e3ef7e78f27d2/tumblr_oyjx7xdcLa1v7y7yxo1_500.gif",
      "https://64.media.tumblr.com/0709dff20f91b67c88db06ce1998af02/tumblr_p5azbkdBRy1tx45yjo1_500.gif",
      "https://64.media.tumblr.com/107157fe627defd6d8174252d69ac239/tumblr_oqhex6l4PU1tm1dgio1_500.gif",
      "https://64.media.tumblr.com/d2d19b6374165e43900ebe3740823541/feb80a43f810aec0-ef/s400x600/eca32c600f14cd6228ebe04be9cccb8e6791ac3e.gif",
      "https://64.media.tumblr.com/bf513b5e82a13ffb643741790130799d/tumblr_p5nrreB8Pq1w8qokno1_400.gif",
      "https://64.media.tumblr.com/9d5ca3b0594ebe0183f4541d70bf1f50/tumblr_p8a9cwLIlV1th206io2_500.gif",
      "https://64.media.tumblr.com/0fcebc0c7b7b1306d829db7e429bb52d/e551b27b78beeccf-ee/s500x750/6cd51d5921093ca46a2ea8d27e3234b797fc5f0e.gif",
      "https://64.media.tumblr.com/93f93f7c06dc5e524864ce28afcbe03d/dfbcb9f9905c5e78-bd/s400x600/dab7a397c43632f69fe69e841f37647f84db5922.gif",
      "https://64.media.tumblr.com/0fcebc0c7b7b1306d829db7e429bb52d/e551b27b78beeccf-ee/s500x750/6cd51d5921093ca46a2ea8d27e3234b797fc5f0e.gif",
      "https://64.media.tumblr.com/a72dd82535f3e7accd827c202dacc09a/tumblr_pfyiqz0pFL1th206io1_500.gif",
      "https://64.media.tumblr.com/fd596097be00225be004ee0779b49090/3c6e4d2fcb98d1b6-91/s400x600/8e28589eb395d7e16f2b56762f004152a5189bc3.gif",
      "https://64.media.tumblr.com/0ce0596ac1760ae9d3ff032972074a8d/tumblr_peb6js73li1sk6fb9_400.gif",
      "https://64.media.tumblr.com/31aa2b876acd20d3925ba51688c088a4/d9cad6b4b5d6506c-40/s400x600/5b77a30bb8c1564530d1d3173b4e1fb62ce12c43.gif",
    ];
    const result = Math.floor(Math.random() * gif.length);
    let mention = message.mentions.members.first();
    if (!mention) {
      message.reply("You need to mention someone!");
    }
    const embed = {
      footer: {
        text: `@${message.guild.member(message.author).displayName} pats @${
          message.guild.member(mention.user).displayName
        }...`,
      },
      image: {
        url: `${gif[result]}`,
      },
    };
    message.channel.send({ embed });
	}
};

module.exports = Pat;
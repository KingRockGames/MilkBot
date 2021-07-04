const Discord = require("discord.js");
const Command = require("../../base/Command.js");
function ts() {
        var date = new Date();
        return date.getTime();
}
class Hug extends Command {
	constructor(client) {
		super(client, {
			name: "hug",
			description: "give someone a hug",
			usage: ".hug @someone",
			dirname: __dirname,
			enabled: true,
			guildOnly: false,
			aliases: ["hug"],
			memberPermissions: [],
			botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
			nsfw: false,
			devOnly: false
		});
	}

	async run(message, args, client) {
    const gif = [
      "https://acegif.com/wp-content/uploads/anime-hug.gif",
      "https://i.pinimg.com/originals/02/7e/0a/027e0ab608f8b84a25b2d2b1d223edec.gif",
      "https://64.media.tumblr.com/18fdf4adcb5ad89f5469a91e860f80ba/tumblr_oltayyHynP1sy5k7wo1_400.gifv",
      "https://33.media.tumblr.com/680b69563aceba3df48b4483d007bce3/tumblr_mxre7hEX4h1sc1kfto1_500.gif",
      "https://25.media.tumblr.com/2a3ec53a742008eb61979af6b7148e8d/tumblr_mt1cllxlBr1s2tbc6o1_500.gif",
      "https://i.imgur.com/Ye1N4YC.gif?noredirect",
      "https://cdn.lowgif.com/full/6b0a88162a4b836c-.gif",
      "https://cdn.lowgif.com/full/d26c65f2d66be540-merriberri-graphic-arts-services-requests.gif",
      "https://i.imgur.com/8XpOYQm.gif",
      "https://i.imgur.com/TB8f0vZ.gif",
      "https://i.kym-cdn.com/photos/images/original/001/230/145/957.gif",
      "https://cdn.lowgif.com/small/b7d9ddb0bd5e8e2a-.gif",
      "https://64.media.tumblr.com/16195b94d366cd3c4cb46de35b7c7d6b/tumblr_okuxnlEfV11slt45io3_500.gifv",
      "https://64.media.tumblr.com/ba22623344dd5584d60c56a8433e0736/tumblr_p649k3VGw81qzxv73o1_500.gifv",
      "https://64.media.tumblr.com/4283666af4ff02af4006568c6a33dba1/tumblr_nxzat6n3aV1rw7ngmo1_500.gif",
      "https://64.media.tumblr.com/322ddd3183a8d393888f6d2ab1be2560/tumblr_inline_ph2cbkWgp91ucmb6h_400.gif",
      "https://64.media.tumblr.com/2e7086bcb525642130567ddd49c10023/tumblr_ope0yuNGgC1vikcwho1_500.gif",
      "https://64.media.tumblr.com/5b290b82bea54919dae30f61632a6755/tumblr_okz8vkqpDl1vztiw8o1_500.gif",
      "https://64.media.tumblr.com/b0746a53b6276682e77207a2b1a00f7a/tumblr_p7tkcpIrvP1qzxv73o1_500.gif",
      "https://64.media.tumblr.com/443c4235cae34242d014e2bb1276810d/tumblr_orldmdZJ2x1vb10byo1_500.gif",
      "https://64.media.tumblr.com/66d391d120dc735a342843bc06aa87ce/tumblr_o30ir8HJkY1uapp8co1_400.gif",
      "https://64.media.tumblr.com/b8ce553824c59700049256fbc825390b/tumblr_ojf72iRAty1v312ebo1_500.gif",
      "https://64.media.tumblr.com/0466ba4d78bc5c45cf7316547cf95854/tumblr_oz5n1z0SXX1tpvtc4o3_r1_500.gif",
      "https://64.media.tumblr.com/cfffcecc340e1c03daf901813cc5429b/tumblr_oxfcbt23qO1wzt7kso1_400.gif",
      "https://64.media.tumblr.com/d9ae409c3dd9ebb59156f0b2525ac9aa/tumblr_oyarn1EmoF1u7esouo1_500.gif",
      "https://64.media.tumblr.com/427a5f56702ae26efd967fa4987d324d/tumblr_oxnsw8Mk6H1tydz8to1_500.gif",
      "https://64.media.tumblr.com/93d3f217a45ce14b3baed456e9db0987/tumblr_ovgfwqI4mn1vl7oxxo3_500.gif",
      "https://64.media.tumblr.com/291c8b98b219283f9e21927e7ef6c3f2/tumblr_mzscklfLYx1tptsy9o1_500.gif",
      "https://64.media.tumblr.com/7f5a683d1f86b7c01cc54ddf08149d5b/tumblr_onpsw2tDsa1uvnzuto1_400.gif",
      "https://64.media.tumblr.com/88b9b721e47c33272a3cafd0fdb916b5/tumblr_oqkfe3BbYM1vb10byo1_500.gif",
      "https://64.media.tumblr.com/27dcbaf095486e1b9cd64a2f91b0bdf2/tumblr_nx6rhlbvYA1uf4gs9o1_400.gif",
      "https://64.media.tumblr.com/77e8d9300862ee694060b353dffdf688/tumblr_p5k578GAKd1sxfvy5o1_500.gif",
    ];
    const result = Math.floor(Math.random() * gif.length);
    let mention = message.mentions.members.first();
    if (!mention) {
      message.reply("You need to mention someone!");
    }
    const embed = {
      footer: {
        text: `@${message.guild.member(message.author).displayName} hugs @${
          message.guild.member(mention.user).displayName
        } tightly...`,
      },
      image: {
        url: `${gif[result]}`,
      },
    };
    message.channel.send({ embed });
	}
};

module.exports = Hug;
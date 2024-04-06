const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("linkler")
        .setDescription("Botun davet linklerini gösterir."),

    run: async (client, interaction) => {

        const embed = new EmbedBuilder()
            .setTitle("Arnold - Linkler!")
            .setDescription(`> **Merhaba bütün sosyal linklerimizi alttaki butonlara basarak görebilirsiniz.**`)
            .setImage("https://media.discordapp.net/attachments/1226151638889271327/1226154944625774673/trent-alexander-arnold-kneeling-ground-dgz3rrv54du4k85m.jpg?ex=6623bcc7&is=661147c7&hm=774daa8bca015b0f13ba26286b1dc45e59ff6e50220250f64af43579557756d4&=&format=webp&width=759&height=427")
        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setLabel("Davet Et")
                    .setStyle(ButtonStyle.Link)
                    .setURL("https://discord.com/oauth2/authorize?client_id=921422541535477781&scope=bot&permissions=8"),
                new ButtonBuilder()
                    .setLabel("Destek Sunucusu")
                    .setStyle(ButtonStyle.Link)
                    .setURL("https://discord.gg/viesta"),
                     new ButtonBuilder()
                    .setLabel("Instagram")
                    .setStyle(ButtonStyle.Link)
                    .setURL("https://www.instagram.com/trent_taha/")

            )
        interaction.reply({ embeds: [embed], components: [row] })

    },
};

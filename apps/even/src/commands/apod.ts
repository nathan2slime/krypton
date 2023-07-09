import {
  ApplicationCommandOptionType,
  CommandInteraction,
  EmbedBuilder,
} from 'discord.js';
import {
  Discord,
  SimpleCommand,
  SimpleCommandMessage,
  SimpleCommandOption,
  SimpleCommandOptionType,
  Slash,
  SlashOption,
} from 'discordx';
import { format, parse } from 'date-fns';

import { getTodayApod } from '../services/apod';

@Discord()
export class Apod {
  async command(
    value: string,
    simple?: SimpleCommandMessage,
    slash?: CommandInteraction
  ) {
    const getDate = () => new Date(parse(value, 'dd/MM/yyyy', new Date()));

    if (value) {
      try {
        format(getDate(), 'yyyy-MM-dd');
      } catch (error) {
        const reply =
          'Choose dates from June 16, 1995 and in the format 08/03/2003';
        return slash ? slash.reply(reply) : simple?.message.reply(reply);
      }
    }

    const data = await getTodayApod(
      format(value ? getDate() : new Date(), 'yyyy-MM-dd')
    );

    if (data) {
      const embed = new EmbedBuilder({
        title: data.title,
        description: `${data.explanation}\n\nDate: ${format(
          new Date(data.date),
          'dd/MM/yyyy'
        )}`,
        image: {
          url: data.url,
        },
      });

      slash
        ? slash.reply({
            embeds: [embed],
          })
        : simple?.message.reply({
            embeds: [embed],
          });
    } else {
      const reply = "I couldn't find an apod for that day";
      slash ? slash.reply(reply) : simple?.message.reply(reply);
    }
  }

  @Slash({ description: 'Returns astronomy picture day', name: 'apod' })
  async slashCommandApod(
    @SlashOption({
      description: 'Photo date (03/08/2003)',
      name: 'date',
      required: false,
      type: ApplicationCommandOptionType.String,
    })
    value: string,
    interaction: CommandInteraction
  ) {
    await this.command(value, undefined, interaction);
  }

  @SimpleCommand({ description: 'Returns astronomy picture day', name: 'apod' })
  async simpleCommandApod(
    @SimpleCommandOption({ name: 'name', type: SimpleCommandOptionType.String })
    value: string,
    interaction: SimpleCommandMessage
  ) {
    await this.command(value, interaction);
  }
}

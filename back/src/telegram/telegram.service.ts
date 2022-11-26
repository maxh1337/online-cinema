import { Injectable } from '@nestjs/common'
import { Telegraf, Telegram } from 'telegraf'

@Injectable()
export class TelegramService {
	bot: Telegraf
	options: Telegram

	constructor() {
		// this.options = new Telegraf(this.options.token)
	}
}

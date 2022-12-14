import { prop } from '@typegoose/typegoose'
import { TimeStamps, Base } from '@typegoose/typegoose/lib/defaultClasses'
import { IsString } from 'class-validator'

export interface GenreModel extends Base {}

export class GenreModel extends TimeStamps {
	@prop()
	name: string

	@prop({ unique: true })
	slug: string

	@prop()
	description: string

	@prop()
	icon: string
}

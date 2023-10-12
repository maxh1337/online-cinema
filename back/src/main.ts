import { NestFactory } from '@nestjs/core'

import { AppModule } from './app.module'

async function bootstrap() {
	const app = await NestFactory.create(AppModule, { cors: true })
	app.setGlobalPrefix('api')
	await app.listen(process.env.PORT, '0.0.0.0') //was 4200 only
}

bootstrap()

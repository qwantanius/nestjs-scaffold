import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ApiTokenGuard } from '@/core/guards/api-token.guard';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env',
        }),
    ],
    controllers: [],
    providers: [ApiTokenGuard],
})
export class AppModule {}


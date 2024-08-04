import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { ApiTokenGuard } from '@/core/guards/api-token.guard';
import { NumberGeneratorModule } from '@/module/number-generator.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env',
        }),
        NumberGeneratorModule,
    ],
    controllers: [],
    providers: [ApiTokenGuard],
})
export class AppModule {}

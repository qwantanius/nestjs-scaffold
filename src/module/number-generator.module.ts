import { Module } from '@nestjs/common';

import { NumberGeneratorController } from '@/controller/number-generator.controller';
import { NumberGeneratorService } from '@/service/number-generator.service';

@Module({
    controllers: [NumberGeneratorController],
    providers: [NumberGeneratorService],
    imports: [],
})
export class NumberGeneratorModule {}

import { Controller, Get, NotFoundException, Query } from '@nestjs/common';

import { NumberOrderType } from '@/dto/number-pagination.dto';
import { NumberGeneratorService } from '@/service/number-generator.service';

@Controller('numbers')
export class NumberGeneratorController {
    constructor(private readonly numberGeneratorService: NumberGeneratorService) {}

    @Get('generate')
    generate(
        @Query('from') from: number,
        @Query('to') to: number,
        @Query('order') order: NumberOrderType,
        @Query('limit') limit: number,
    ) {
        try {
            return this.numberGeneratorService.generate({
                from,
                to,
                order,
                limit,
            });
        } catch (err) {
            return new NotFoundException(`Something went wrong: ${err}`);
        }
    }
}

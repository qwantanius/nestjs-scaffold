import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsOptional, Max, Min } from 'class-validator';

export type NumberOrderType = 'ASC' | 'DESC' | 'RAND';

export class NumberPaginationDto {
    @ApiProperty({
        name: 'to',
        example: 'ASC',
        description:
            'sets order for the resulting array of integers to be returned, can be ASC, DESC, RAND',
    })
    order!: NumberOrderType;

    @ApiProperty({
        name: 'to',
        example: '100',
        type: Number,
        description:
            "sets minimum value for integer generation, no integer will be in resulting array with value less than 'from'",
    })
    @IsNumber()
    @Min(Number.MIN_SAFE_INTEGER)
    @Max(Number.MAX_SAFE_INTEGER)
    from!: number;

    @ApiProperty({
        name: 'to',
        example: '100',
        type: Number,
        description:
            "sets maximum value for integer generation, no integer will be in resulting array with value more than 'to'",
    })
    @IsNumber()
    @Min(Number.MIN_SAFE_INTEGER)
    @Max(Number.MAX_SAFE_INTEGER)
    to!: number;

    @ApiPropertyOptional({
        name: 'limit',
        example: '5',
        type: Number,
        description: 'limits amount of integers to be generated from the given range',
    })
    @IsOptional()
    @IsNumber()
    @Min(Number.MIN_SAFE_INTEGER)
    @Max(Number.MAX_SAFE_INTEGER)
    limit?: number;
}

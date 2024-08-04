import { ApiProperty } from '@nestjs/swagger';

export class TestDto {
    @ApiProperty({ example: 'test', type: String })
    test: string;
}

import { Injectable, Logger } from '@nestjs/common';

import { NumberPaginationDto } from '@/dto/number-pagination.dto';
import { getRandomInt } from '@/system/gen-random-number.sys';

export type NumberOrderType = 'ASC' | 'DESC' | 'RAND';

@Injectable()
export class NumberGeneratorService {
    private size: number;

    generate(dto: NumberPaginationDto): number[] {
        this.size = this.calculateSizeOrFail(dto);

        const generator = this.getGenerator(dto);
        if (!generator || typeof generator !== 'function') {
            throw new Error(`Wrong parameters, could not find right generator!`);
        }

        return generator();
    }

    protected getGenerator(dto: NumberPaginationDto) {
        return {
            ASC: this.getAscRandomArray.bind(this, dto),
            DESC: this.getDescRandomArray.bind(this, dto),
            RAND: this.getRandRandomArray.bind(this, dto),
        }?.[dto.order];
    }

    protected getAscRandomArray(dto: NumberPaginationDto): number[] {
        return Array.from({ length: dto.limit || this.size }).map(
            (value, index) => index + Number(dto.from),
        );
    }

    protected getDescRandomArray(dto: NumberPaginationDto): number[] {
        return Array.from({ length: dto.limit || this.size }).map(
            (value, index) => Number(dto.to) - index,
        );
    }

    protected getRandRandomArray(dto: NumberPaginationDto): number[] {
        return Array.from({ length: dto.limit || this.size }).map(() =>
            getRandomInt(Number(dto.from), Number(dto.to)),
        );
    }

    protected calculateSizeOrFail(dto: NumberPaginationDto): number {
        const size: number = dto.to - dto.from;
        if (size < 0) {
            throw new Error(`Parameter to (${dto.to}) must be <= parameter to ${dto.to}`);
        }

        return size;
    }
}

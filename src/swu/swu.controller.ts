import {Controller, Get, Param, StreamableFile} from '@nestjs/common';
import {SwuService} from './swu.service';
import {ContentType} from '../utils/decorators';

@Controller('swu')
export class SwuController {
    constructor(private readonly swuService: SwuService) {
    }

    @Get('symbolSvg/:symbol')
    @ContentType('image/svg+xml')
    async symbolSvg(@Param() params) {
        return this.swuService.symbolSvg(params.symbol);
    }

    @Get('symbolPng/:symbol')
    @ContentType('image/png')
    async symbolPng(@Param() params) {
        return new StreamableFile(await this.swuService.symbolPng(params.symbol) as Uint8Array);
    }

    @Get('symbolPngDataUrl/:symbol')
    //@ContentType('')
    async symbolPngDataUrl(@Param() params) {
        return this.swuService.symbolPngDataUrl(params.symbol);
    }

    @Get('symbolNormalize/:symbol')
    @ContentType('text/plain')
    async symbolNormalize(@Param() params) {
        return this.swuService.symbolNormalize(params.symbol);
    }

    @Get('signSvg/:sign')
    @ContentType('image/svg+xml')
    async signSvg(@Param() params) {
        return this.swuService.signSvg(params.sign);
    }

    @Get('signPng/:sign')
    @ContentType('image/png')
    async signPng(@Param() params) {
        return new StreamableFile(await this.swuService.signPng(params.sign) as Uint8Array);
    }

    @Get('signPngDataUrl/:sign')
    //@ContentType('data:image/png;base64,')
    async signPngDataUrl(@Param() params) {
        return this.swuService.signPngDataUrl(params.sign);
    }

    @Get('signNormalize/:sign')
    @ContentType('text/plain')
    async signNormalize(@Param() params) {
        return this.swuService.signNormalize(params.sign);
    }
}

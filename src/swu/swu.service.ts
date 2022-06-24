import {Injectable} from '@nestjs/common';
import swu from '../font-db/swu';

@Injectable()
export class SwuService {
    async symbolSvg(swuSymbol: string): Promise<string> {
        return await swu.symbolSvg(swuSymbol);
    }

    async symbolPng(swuSymbol: string): Promise<ArrayBuffer> {
        return await swu.symbolPng(swuSymbol);
    }

    async symbolPngDataUrl(swuSymbol: string): Promise<string> {
        return await swu.symbolPngDataUrl(swuSymbol);
    }

    async symbolNormalize(swuSymbol: string): Promise<string> {
        return await swu.symbolNormalize(swuSymbol);
    }

    async signSvg(swuSign: string): Promise<string> {
        return await swu.signSvg(swuSign);
    }

    async signPng(swuSign: string): Promise<ArrayBuffer> {
        return await swu.signPng(swuSign);
    }

    async signPngDataUrl(swuSign: string): Promise<string> {
        return await swu.signPngDataUrl(swuSign);
    }

    async signNormalize(swuSign: string): Promise<string> {
        return await swu.signNormalize(swuSign);
    }
}

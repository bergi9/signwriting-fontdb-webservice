import {promisify} from 'util';
import {swu} from '@sutton-signwriting/font-db';

export default {
    symbolSvg: promisify(swu.symbolSvg),
    symbolPng: promisify(swu.symbolPng),
    symbolPngDataUrl: promisify(swu.symbolPngDataUrl),
    symbolNormalize: promisify(swu.symbolNormalize),
    signSvg: promisify(swu.signSvg),
    signPng: promisify(swu.signPng),
    signPngDataUrl: promisify(swu.signPngDataUrl),
    signNormalize: promisify(swu.signNormalize)
};
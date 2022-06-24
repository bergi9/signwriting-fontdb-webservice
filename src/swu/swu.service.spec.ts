import {Test, TestingModule} from '@nestjs/testing';
import {SwuService} from './swu.service';

describe('SwuService', () => {
    let service: SwuService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [SwuService],
        }).compile();

        service = module.get<SwuService>(SwuService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('symbolSvgBody', async () => {
        expect(await service.symbolSvg('񀀁-C')).toBe(
            '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="15" height="30" viewBox="500 500 15 30">\n' +
            '  <text font-size="0">񀀁-C</text>\n' +
            '  <svg x="500" y="500"><g transform="translate(0.0,30.0) scale(0.01,-0.01)"><path class="sym-fill" fill="#ffffff" d="M200 750 l0 -550 550 0 550 0 0 550 0 550 -550 0 -550 0 0 -550z"/><path class="sym-line" fill="#0000CC" d="M1300 2250 l0 -750 -650 0 -650 0 0 -750 0 -750 750 0 750 0 0 1500 0 1500 -100 0 -100 0 0 -750z m0 -1500 l0 -550 -550 0 -550 0 0 550 0 550 550 0 550 0 0 -550z"/></g></svg>\n' +
            '</svg>');
    })
});

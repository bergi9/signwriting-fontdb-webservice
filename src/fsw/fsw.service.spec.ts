import {Test, TestingModule} from '@nestjs/testing';
import {FswService} from './fsw.service';

describe('FswService', () => {
    let service: FswService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [FswService],
        }).compile();

        service = module.get<FswService>(FswService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});

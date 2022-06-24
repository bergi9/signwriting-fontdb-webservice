import {Test, TestingModule} from '@nestjs/testing';
import {FswController} from './fsw.controller';

describe('FswController', () => {
    let controller: FswController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [FswController],
        }).compile();

        controller = module.get<FswController>(FswController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});

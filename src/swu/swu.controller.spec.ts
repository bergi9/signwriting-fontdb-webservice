import {Test, TestingModule} from '@nestjs/testing';
import {SwuController} from './swu.controller';
import {SwuService} from './swu.service';

describe('SwuController', () => {
    let controller: SwuController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [SwuController],
            providers: [SwuService],
        }).compile();

        controller = module.get<SwuController>(SwuController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});

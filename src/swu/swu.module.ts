import {Module} from '@nestjs/common';
import {SwuService} from './swu.service';
import {SwuController} from './swu.controller';

@Module({
    providers: [SwuService],
    controllers: [SwuController]
})
export class SwuModule {
}

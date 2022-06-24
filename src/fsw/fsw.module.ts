import {Module} from '@nestjs/common';
import {FswService} from './fsw.service';
import {FswController} from './fsw.controller';

@Module({
    providers: [FswService],
    controllers: [FswController]
})
export class FswModule {
}

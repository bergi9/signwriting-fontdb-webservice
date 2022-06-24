import {Module} from '@nestjs/common';
import {SwuModule} from './swu/swu.module';
import {FswModule} from './fsw/fsw.module';

@Module({
    imports: [SwuModule, FswModule],
})
export class AppModule {
}

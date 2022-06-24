import {Header} from '@nestjs/common';

export function ContentType(contentType: string): MethodDecorator {
    return Header('content-type', contentType);
}
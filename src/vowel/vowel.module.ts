import { Module } from '@nestjs/common';
import { VowelController } from './vowel.controller';
import { VowelService } from './vowel.service';

@Module({
  controllers: [VowelController],
  providers: [VowelService],
})
export class VowelCounterModule {}

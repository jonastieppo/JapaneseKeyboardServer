import { Module } from '@nestjs/common';
import { JmdictsearchController } from './jmdictsearch.controller';
import { JmdictsearchService } from './jmdictsearch.service';

@Module({
  controllers: [JmdictsearchController],
  providers: [JmdictsearchService]
})
export class JmdictsearchModule {}

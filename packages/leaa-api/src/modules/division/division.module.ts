import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Division } from '@leaa/common/src/entrys';
import { DivisionResolver } from '@leaa/api/src/modules/division/division.resolver';
import { DivisionService } from '@leaa/api/src/modules/division/division.service';

@Module({
  imports: [TypeOrmModule.forFeature([Division])],
  providers: [DivisionResolver, DivisionService],
  exports: [DivisionService],
})
export class DivisionModule {}

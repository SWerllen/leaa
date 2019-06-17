import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';

import { GraphqlService } from '@leaa/api/modules/graphql/graphql.service';
import { TypeormService } from '@leaa/api/modules/typeorm/typeorm.service';

import { ConfigModule } from '@leaa/api/modules/config/config.module';
import { UserModule } from '@leaa/api/modules/user/user.module';
import { AuthModule } from '@leaa/api/modules/auth/auth.module';
import { PermissionModule } from '@leaa/api/modules/permission/permission.module';
import { RoleModule } from '@leaa/api/modules/role/role.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: TypeormService,
    }),
    GraphQLModule.forRootAsync({
      imports: [AuthModule],
      useClass: GraphqlService,
    }),
    ConfigModule,
    //
    AuthModule,
    UserModule,
    PermissionModule,
    RoleModule,
  ],
  providers: [ConfigModule, AuthModule, UserModule],
  controllers: [],
})
export class AppModule {}

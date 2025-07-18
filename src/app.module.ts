// app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'JoseNavarro',
      password: '123456',
      database: 'db_mefasa_tickets',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      //synchronize: true, // ¡Solo para desarrollo!
    }),
  ],
})
export class AppModule {}

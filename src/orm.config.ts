import { TypeOrmModuleOptions } from "@nestjs/typeorm";
export const config: TypeOrmModuleOptions =  {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '20031207',
    database: 'mserviceTarea',
    synchronize: true,
    entities: ['dist/**/**/*.entity.js'],
}
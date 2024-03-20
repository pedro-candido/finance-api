import 'dotenv/config';
import {DataSource} from "typeorm"

const AppDatasource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'root',
    password: '12345',
    entities: [`${__dirname}/**/Entities/*.{ts,js}`],
    synchronize: true
})

export default AppDatasource
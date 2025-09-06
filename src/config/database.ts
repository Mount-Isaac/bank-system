import mysql from 'mysql2/promise'
import dotenv from 'dotenv'
import { DatabaseConfig } from '../types/database.js'
import { Sequelize } from 'sequelize'

dotenv.config()

const dbConfig:DatabaseConfig = {
    username: process.env.DB_USER || 'user',
    password: process.env.DB_PASSWORD || 'userpassword',
    host: process.env.DB_HOST || '127.0.0.1',
    port: parseInt(process.env.DB_PORT || '3306'),
    database: process.env.DB_NAME || 'banking',
    pool_max: parseInt(process.env.DB_POOL_MAX || '20'),
    pool_min: parseInt(process.env.DB_POOL_MIN || '1'),
    pool_acquireTiemout: parseInt(process.env.DB_POOL_ACQUIRE_TIMEOUT || '30000'),
    pool_idleTiemout: parseInt(process.env.DB_POOL_IDLE_TIMEOUT || '10000'),
}

export const sequelize = new Sequelize( 
    // uri user:password@host:port/db
    `mysql://${dbConfig.username}:${dbConfig.password}@${dbConfig.host}:${dbConfig.port}/${dbConfig.database}`,
    {
        pool: {
            max: dbConfig.pool_max,
            min: dbConfig.pool_min,
            acquire: dbConfig.pool_acquireTiemout,
            idle: dbConfig.pool_idleTiemout,
            
        },
        logging: false,
        define: {
            underscored: true,
            freezeTableName: true
        }
    }
    
)
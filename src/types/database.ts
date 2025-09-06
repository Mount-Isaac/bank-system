export interface DatabaseConfig {
    username: string;
    password: string;
    host: string;
    port: number;
    database: string;
    pool_max?: number;
    pool_min?: number;
    pool_acquireTiemout?: number;
    pool_idleTiemout?: number;
}
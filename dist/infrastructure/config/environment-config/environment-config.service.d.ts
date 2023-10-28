import { ConfigService } from '@nestjs/config';
import { DatabaseConfig } from 'src/domain/config/database.config';
export declare class EnvironmentConfigService implements DatabaseConfig {
    private configService;
    constructor(configService: ConfigService);
    getDatabaseHost(): string;
    getDatabasePort(): number;
    getDatabaseUser(): string;
    getDatabasePassword(): string;
    getDatabaseName(): string;
    getDatabaseSchema(): string;
    getDatabaseSync(): boolean;
}

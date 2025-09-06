import { BaseEntity } from "./Base.ts";

export interface Session extends BaseEntity {
    userId: string;
    accesstoken: string;
    refreshtoken: string;
    expiresAt: Date;
    ipAddress: string;
    userAgent: string;
    isActive: boolean;
    lastActivityAt: Date;
}
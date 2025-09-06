import { BaseEntity } from "./Base.js";

export interface AuditLong extends BaseEntity {
    userId?: string;
    action: string;
    entityType: string;
    entityId: string;
    oldValues?: Record<string, any>;
    newValues?: Record<string, any>;
    ipAddress: string;
    userAgent: string;
    sessionId?: string;
}
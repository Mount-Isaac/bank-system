import { BaseEntity } from "./Base.ts";

export interface Notification extends BaseEntity {
    userId: string;
    type: string;
    title: string;
    message: string;
    channel: 'email' | 'sms' | 'push' | 'in_app',
    status: 'pending' | 'sent' | 'failed' | 'read';
    sentAt?: Date;
    readAt?: Date;
    metadata?: Record<string, any>;
}
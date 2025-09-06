import { Currency, TransactionStatus, TransactionType } from "../types/enums.js";
import { BaseEntity } from "./Base.js";

export interface Transaction extends BaseEntity {
    fromAccountId: string;
    toAccountId: string;
    transactionType: TransactionType;
    amount: string;
    currency: Currency;
    description: string;
    referenceNumber: string;
    status: TransactionStatus;
    processedAt?: Date;
    failureReason?: string;
    metadata?: Record<string, any>;
    balanceAfter?: string;
}
import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";
import { Currency, TransactionStatus, TransactionType } from "../types/enums";
import { BaseEntity } from "./Base";

export interface TransactionAttributes extends BaseEntity {
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

export const Transaction = sequelize.define<Model<TransactionAttributes>>("transactions", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    fromAccountId: {
        type: DataTypes.STRING,
        allowNull: false
    },
    toAccountId: {
        type: DataTypes.STRING
    },
    transactionType: {
        type: DataTypes.STRING
    },
    amount: {
        type: DataTypes.STRING
    },
    currency: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    referenceNumber: {
        type: DataTypes.STRING
    },
    status: {
        type: DataTypes.STRING
    },
    processedAt: {
        type: DataTypes.STRING
    },
    failureReason: {
        type: DataTypes.STRING
    },
    metadata: {
        type: DataTypes.STRING
    },
    balanceAfter: {
        type: DataTypes.STRING
    },
    createdAt: {
        type: DataTypes.DATE
    },
    updatedAt: {
        type: DataTypes.DATE
    },
    
})
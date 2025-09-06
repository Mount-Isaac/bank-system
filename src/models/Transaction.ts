import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";
import { Currency, TransactionStatus, TransactionType } from "../types/enums";
import { BaseEntity } from "./Base";
import { Users } from "./User";

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

export const Transactions = sequelize.define<Model<TransactionAttributes>>("transactions", {
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
        type: DataTypes.STRING,
        allowNull: false,
    },
    transactionType: {
        type: DataTypes.ENUM(...Object.values(TransactionType)),
        allowNull: false
    },
    amount: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    currency: {
        type: DataTypes.ENUM(...Object.values(Currency)),
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    referenceNumber: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM(...Object.values(TransactionStatus)),
        allowNull: false,
    },
    processedAt: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    failureReason: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    metadata: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    balanceAfter: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: true
});

Transactions.belongsTo(Users, { foreignKey: "userId" });
Users.hasMany(Transactions, { foreignKey: "userId" });
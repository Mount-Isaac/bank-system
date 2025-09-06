import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";
import { AccountStatus, Accounttype, Currency } from "../types/enums";
import { BaseEntity } from "./Base";

export interface AccountAttributes extends BaseEntity{
    userId: string;
    accountNumber: string;
    accountType: Accounttype;
    balance: string;
    currency: Currency;
    status: AccountStatus;
    overdraftLimit?: string;
    interestRate?: string;
    minimumBalance?: string;
    dailyTransactionLimit?: string;
    monthlyTransactionLimit?: string;
}

export const Account = sequelize.define<Model<AccountAttributes>>("accounts", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    userId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    accountNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    accountType: {
        type: DataTypes.ENUM(...Object.values(Accounttype)),
        allowNull: false,
    },
    balance: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    currency: {
        type: DataTypes.ENUM(...Object.values(Currency)),
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM(...Object.values(AccountStatus)),
        allowNull: false,
    },
    overdraftLimit: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    interestRate: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    minimumBalance: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    dailyTransactionLimit: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    monthlyTransactionLimit: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
});

// Account.init({...}), { sequelize, modelName: "Account"}
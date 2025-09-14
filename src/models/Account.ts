import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";
import { Users } from "./User";
import { accountAttributes } from "../types/types";
import { AccountStatus, Accounttype, Currency } from "../types/enums";

export const Accounts = sequelize.define<Model<accountAttributes>>("accounts", {
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
}, {
    timestamps: true
});

Accounts.belongsTo(Users, { foreignKey: "user_id" });
Users.hasMany(Accounts, { foreignKey: "user_id" });
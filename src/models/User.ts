import { DataTypes, Model, UUID } from "sequelize";
import { sequelize } from "../config/database";
import { UserRole } from "../types/enums";
import { accountUser, accountUserCreationAttributes } from "../types/types";

export const Users  = sequelize.define<Model<accountUser, accountUserCreationAttributes>>("users", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull:false
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
    },
    passwordHash: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    firstName: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    phoneNumber: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    dateOfBirth: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null,
    },
    address: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    role: {
        type: DataTypes.ENUM(...Object.values(UserRole)),
        defaultValue: UserRole.CUSTOMER
    },
    isVerified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    lastLoginAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null,
    },
    failedLoginAttempts: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    lockedUntil: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null,
    },
    twoFactorSecret: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    twoFactorEnabled: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    timestamps: true,
    indexes: [
        { fields: ["email"] },
        { fields: ["first_name"] },
        { fields: ["phone_number"] },
        { fields: ["role"] },
        { name: "idx_user_composite", fields: [ 
            { name: "email", length:100 },
            { name: "first_name", length:50 },
            { name: "phone_number", length:30 },
            { name: "role", length:20 }]
        },
    ],
});
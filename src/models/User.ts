import { DataTypes, Model, UUID } from "sequelize";
import { sequelize } from "../config/database";
import { UserRole } from "../types/enums";
import { BaseEntity } from "./Base";

export interface User extends BaseEntity {
    email: string;
    passwordHash: string;
    firstName: string; 
    lastName: string;
    phoneNumber: string;
    dateOfBirth?: Date;
    address?: string;
    role: UserRole,
    isVerified: boolean;
    isActive: boolean;
    lastLoginAt?: Date;
    failedLoginAttempts: number;
    lockedUntil?: Date;
    twoFactorSecret?: string;
    twoFactorEnabled: boolean
}


export const Users  = sequelize.define<Model<User>>("users", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    passwordHash: {
        type: DataTypes.STRING,
        allowNull: false
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dateOfBirth: {
        type: DataTypes.DATE,
        allowNull: true
    },
    address: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    role: {
        type: DataTypes.STRING,
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
        type: DataTypes.STRING,
        allowNull: true,
    },
    failedLoginAttempts: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    lockedUntil: {
        type: DataTypes.STRING,
        allowNull: true
    },
    twoFactorSecret: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    twoFactorEnabled: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null,
        onUpdate: sequelize.literal('CURRENT_TIMESTAMP') as unknown as string
    }
})
import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";
import { BaseEntity } from "./Base";
import { Users } from "./User";

export interface AuditLongAttributes extends BaseEntity {
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

export const AuditLogs = sequelize.define<Model<AuditLongAttributes>>("audit_logs", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    userId: {
        type: DataTypes.STRING,
        allowNull: false
    },
    action: {
        type: DataTypes.STRING,
        allowNull: false
    },
    entityType: {
        type: DataTypes.STRING,
        allowNull: false
    },
    entityId: {
        type: DataTypes.STRING,
        allowNull: false
    },
    oldValues: {
        type: DataTypes.STRING,
    },
    newValues: {
        type: DataTypes.STRING,
    },
    ipAddress: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userAgent: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    sessionId: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
}, {
    timestamps: true,
});

AuditLogs.belongsTo(Users, { foreignKey: "user_id" });
Users.hasMany(AuditLogs, { foreignKey: "user_id" });
import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";
import { Users } from "./User";
import { auditLongAttributes } from "../types/types";

export const AuditLogs = sequelize.define<Model<auditLongAttributes>>("audit_logs", {
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
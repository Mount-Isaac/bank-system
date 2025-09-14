import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";
import { Users } from "./User";
import { sessionAttributes } from "../types/types";

export const Sessions = sequelize.define<Model<sessionAttributes>>("sessions", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    userId: {
        type: DataTypes.STRING,
        allowNull: false
    },
    accesstoken: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    refreshtoken: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    expiresAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
    isActive: {
        type: DataTypes.BOOLEAN,
    },
    lastActivityAt: {
        type: DataTypes.DATE,
    },
    ipAddress: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userAgent: {
        type: DataTypes.TEXT,
        allowNull: false
    },
}, {
    timestamps: true,
});

Sessions.belongsTo(Users, { foreignKey: "user_id" });
Users.hasMany(Sessions, { foreignKey: "user_id" })
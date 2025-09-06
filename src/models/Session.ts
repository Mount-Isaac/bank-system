import { BaseEntity } from "./Base";
import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";
import { Users } from "./User";

export interface SessionAttributes extends BaseEntity {
    userId: string;
    accesstoken: string;
    refreshtoken: string;
    expiresAt: Date;
    ipAddress: string;
    userAgent: string;
    isActive: boolean;
    lastActivityAt: Date;
}


export const Sessions = sequelize.define<Model<SessionAttributes>>("sessions", {
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
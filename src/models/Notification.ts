import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";
import { Channel, Status } from "../types/enums";
import { Users } from "./User";
import { notificationAttributes } from "../types/types";

export const Notifications = sequelize.define<Model<notificationAttributes>>("notifications", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    userId: {
        type: DataTypes.STRING,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    message: {
        type: DataTypes.STRING,
        allowNull: false
    },
    channel: {
        type: DataTypes.ENUM(...Object.values(Channel)),
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM(...Object.values(Status)),
        allowNull: false
    },
    sentAt: {
        type: DataTypes.STRING,
        allowNull: false
    },
    readAt: {
        type: DataTypes.STRING,
        allowNull: false
    },
    metadata: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    timestamps: true
});

Notifications.belongsTo(Users, { foreignKey: "user_id" });
Users.hasMany(Notifications, { foreignKey: "user_id" })
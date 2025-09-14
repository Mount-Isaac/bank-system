import { UserRole, AccountStatus, Accounttype, Currency, Channel, Status, TransactionStatus, TransactionType } from "./enums";

export interface HttpError extends Error{
    status?: number
}

export interface BaseEntity {
    id: string,
    createdAt?: Date;
    updatedAt?: Date
}

// models interfaces
// USER
export interface accountUser extends BaseEntity {
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
    twoFactorEnabled: boolean;
}
// ACCOUNT
export interface accountAttributes extends BaseEntity{
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
// AUDIT LOGS
export interface auditLongAttributes extends BaseEntity {
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
// NOTIFICATIONS
export interface notificationAttributes extends BaseEntity {
    userId: string;
    type: string;
    title: string;
    message: string;
    channel: Channel;
    status:  Status;
    sentAt?: Date;
    readAt?: Date;
    metadata?: Record<string, any>;
}
// SESSION
export interface sessionAttributes extends BaseEntity {
    userId: string;
    accesstoken: string;
    refreshtoken: string;
    expiresAt: Date;
    ipAddress: string;
    userAgent: string;
    isActive: boolean;
    lastActivityAt: Date;
}
// TRANSACTIONS
export interface transactionAttributes extends BaseEntity {
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


// authentication requests
// register 
export interface registerUser {
    email: string;
    password: string;
    firstName: string; 
    lastName: string;
    phoneNumber: string;
    dateOfBirth?: Date;
    address?: string;
    role?: string
}
//login
export interface loginUser {
    email: string;
    password: string;
}
// OTP/2FA
export interface OTPVerification {
    otp: number;
}
// account verification
export interface activateAccount {
    token: string;
}

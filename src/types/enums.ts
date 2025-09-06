export enum UserRole {
    CUSTOMER = 'customer',
    ADMIN = 'admin',
    MANAGER = 'manager',
    SUPPORT = 'support'
}

export enum Accounttype {
    SAVVING = 'savings',
    CHECKING = 'checking',
    BUSINESS = 'business',
    INVESTMENT = 'investment'
}

export enum AccountStatus {
    ACTINVE = 'active',
    FROZEN = 'frozen',
    SUSPEND = 'suspended',
    CLOSED =  'closed'
}

export enum TransactionType {
    DEPOSIT = 'deposit',
    WITHDRAWAL = 'withdrawal',
    TRANSFER = 'transfer',
    FEE = 'fee',
    INTEREST = 'interest'
}

export enum TransactionStatus {
    PENDING = 'pending',
    COMPLETED = 'completed',
    FAILED = 'failed',
    CANCELLED = 'cancelled',
    PROCESSING = 'processing'
}

export enum Currency {
    KES = 'KES',
    USD = 'USD',
    GBP = 'GBP',
    EUR = 'EUR'
}

export enum Channel {
    EMAIL = 'email',
    SMS = 'sms',
    PUSH = 'push',
    IN_APP = 'in_app',
}

export enum Status {
    PENDING = 'pending',
    SENT = 'sent',
    FAILED = 'failed',
    READ = 'read',
}
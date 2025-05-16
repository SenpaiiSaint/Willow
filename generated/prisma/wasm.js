
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.OrganizationScalarFieldEnum = {
  id: 'id',
  name: 'name',
  currency: 'currency',
  timezone: 'timezone',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  email: 'email',
  name: 'name',
  password: 'password',
  locale: 'locale',
  phone: 'phone',
  image: 'image',
  organizationId: 'organizationId',
  roleId: 'roleId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  address: 'address',
  isVerified: 'isVerified',
  lastLogin: 'lastLogin',
  preferences: 'preferences'
};

exports.Prisma.RoleScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.PermissionScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.RolePermissionScalarFieldEnum = {
  id: 'id',
  roleId: 'roleId',
  permissionId: 'permissionId'
};

exports.Prisma.UserPermissionScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  permissionId: 'permissionId'
};

exports.Prisma.PropertyScalarFieldEnum = {
  id: 'id',
  organizationId: 'organizationId',
  ownerId: 'ownerId',
  address: 'address',
  unit: 'unit',
  city: 'city',
  state: 'state',
  zip: 'zip',
  country: 'country',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.PropertyManagerScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  propertyId: 'propertyId'
};

exports.Prisma.TenantScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  userId: 'userId',
  propertyId: 'propertyId',
  leaseId: 'leaseId'
};

exports.Prisma.LeaseScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  propertyId: 'propertyId',
  tenantId: 'tenantId',
  status: 'status',
  rentAmount: 'rentAmount',
  currency: 'currency',
  startDate: 'startDate',
  endDate: 'endDate',
  deposit: 'deposit',
  addendums: 'addendums'
};

exports.Prisma.LeaseTermScalarFieldEnum = {
  id: 'id',
  leaseId: 'leaseId',
  startDate: 'startDate',
  endDate: 'endDate',
  rentAmount: 'rentAmount',
  notes: 'notes'
};

exports.Prisma.PaymentScalarFieldEnum = {
  id: 'id',
  leaseId: 'leaseId',
  propertyId: 'propertyId',
  tenantId: 'tenantId',
  amount: 'amount',
  status: 'status',
  method: 'method',
  dueDate: 'dueDate',
  paidAt: 'paidAt',
  receiptUrl: 'receiptUrl',
  autoPay: 'autoPay',
  lateFee: 'lateFee',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.TransactionScalarFieldEnum = {
  id: 'id',
  type: 'type',
  amount: 'amount',
  userId: 'userId',
  propertyId: 'propertyId',
  paymentId: 'paymentId',
  createdAt: 'createdAt'
};

exports.Prisma.MaintenanceRequestScalarFieldEnum = {
  id: 'id',
  propertyId: 'propertyId',
  tenantId: 'tenantId',
  assignedTo: 'assignedTo',
  vendorId: 'vendorId',
  type: 'type',
  status: 'status',
  description: 'description',
  imageUrl: 'imageUrl',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.VendorScalarFieldEnum = {
  id: 'id',
  name: 'name',
  contact: 'contact',
  rating: 'rating'
};

exports.Prisma.DocumentScalarFieldEnum = {
  id: 'id',
  uploadedBy: 'uploadedBy',
  propertyId: 'propertyId',
  leaseId: 'leaseId',
  type: 'type',
  fileUrl: 'fileUrl',
  fileName: 'fileName',
  status: 'status',
  uploadedAt: 'uploadedAt'
};

exports.Prisma.ChatMessageScalarFieldEnum = {
  id: 'id',
  fromUserId: 'fromUserId',
  toUserId: 'toUserId',
  leaseId: 'leaseId',
  propertyId: 'propertyId',
  message: 'message',
  attachmentUrl: 'attachmentUrl',
  createdAt: 'createdAt'
};

exports.Prisma.AuditLogScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  action: 'action',
  targetId: 'targetId',
  meta: 'meta',
  timestamp: 'timestamp'
};

exports.Prisma.ChangeHistoryScalarFieldEnum = {
  id: 'id',
  model: 'model',
  modelId: 'modelId',
  field: 'field',
  oldValue: 'oldValue',
  newValue: 'newValue',
  changedBy: 'changedBy',
  changedAt: 'changedAt'
};

exports.Prisma.NotificationScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  type: 'type',
  title: 'title',
  body: 'body',
  isRead: 'isRead',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  leaseId: 'leaseId'
};

exports.Prisma.FeedEventScalarFieldEnum = {
  id: 'id',
  type: 'type',
  userId: 'userId',
  relatedId: 'relatedId',
  payload: 'payload',
  createdAt: 'createdAt'
};

exports.Prisma.ReviewScalarFieldEnum = {
  id: 'id',
  reviewerId: 'reviewerId',
  targetType: 'targetType',
  targetId: 'targetId',
  rating: 'rating',
  comment: 'comment',
  createdAt: 'createdAt'
};

exports.Prisma.WebhookSubscriptionScalarFieldEnum = {
  id: 'id',
  url: 'url',
  eventTypes: 'eventTypes',
  userId: 'userId',
  isActive: 'isActive'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};
exports.Currency = exports.$Enums.Currency = {
  USD: 'USD',
  EUR: 'EUR',
  GBP: 'GBP'
};

exports.RoleType = exports.$Enums.RoleType = {
  OWNER: 'OWNER',
  PROPERTY_MANAGER: 'PROPERTY_MANAGER',
  TENANT: 'TENANT',
  MAINTENANCE_STAFF: 'MAINTENANCE_STAFF',
  ADMIN: 'ADMIN'
};

exports.PermissionType = exports.$Enums.PermissionType = {
  MANAGE_PROPERTIES: 'MANAGE_PROPERTIES',
  MANAGE_TENANTS: 'MANAGE_TENANTS',
  MANAGE_LEASES: 'MANAGE_LEASES',
  MANAGE_PAYMENTS: 'MANAGE_PAYMENTS',
  MANAGE_MAINTENANCE: 'MANAGE_MAINTENANCE',
  VIEW_FINANCIALS: 'VIEW_FINANCIALS',
  MANAGE_ORG: 'MANAGE_ORG',
  VIEW_AUDIT_LOG: 'VIEW_AUDIT_LOG',
  COMMUNICATE: 'COMMUNICATE',
  MANAGE_SITE: 'MANAGE_SITE'
};

exports.PaymentStatus = exports.$Enums.PaymentStatus = {
  PENDING: 'PENDING',
  PAID: 'PAID',
  OVERDUE: 'OVERDUE',
  FAILED: 'FAILED',
  CANCELLED: 'CANCELLED'
};

exports.PaymentMethod = exports.$Enums.PaymentMethod = {
  CARD: 'CARD',
  BANK_TRANSFER: 'BANK_TRANSFER',
  CASH: 'CASH',
  CHECK: 'CHECK',
  OTHER: 'OTHER'
};

exports.MaintenanceStatus = exports.$Enums.MaintenanceStatus = {
  PENDING: 'PENDING',
  IN_PROGRESS: 'IN_PROGRESS',
  RESOLVED: 'RESOLVED',
  CANCELLED: 'CANCELLED'
};

exports.DocumentType = exports.$Enums.DocumentType = {
  LEASE_AGREEMENT: 'LEASE_AGREEMENT',
  ID: 'ID',
  PROOF_OF_INSURANCE: 'PROOF_OF_INSURANCE',
  RECEIPT: 'RECEIPT',
  OTHER: 'OTHER'
};

exports.NotificationType = exports.$Enums.NotificationType = {
  PAYMENT_DUE: 'PAYMENT_DUE',
  PAYMENT_RECEIVED: 'PAYMENT_RECEIVED',
  LEASE_SIGNED: 'LEASE_SIGNED',
  MAINTENANCE_UPDATE: 'MAINTENANCE_UPDATE',
  GENERAL: 'GENERAL'
};

exports.FeedEventType = exports.$Enums.FeedEventType = {
  PAYMENT: 'PAYMENT',
  MAINTENANCE: 'MAINTENANCE',
  LEASE: 'LEASE',
  SYSTEM: 'SYSTEM',
  GENERAL: 'GENERAL'
};

exports.Prisma.ModelName = {
  Organization: 'Organization',
  User: 'User',
  Role: 'Role',
  Permission: 'Permission',
  RolePermission: 'RolePermission',
  UserPermission: 'UserPermission',
  Property: 'Property',
  PropertyManager: 'PropertyManager',
  Tenant: 'Tenant',
  Lease: 'Lease',
  LeaseTerm: 'LeaseTerm',
  Payment: 'Payment',
  Transaction: 'Transaction',
  MaintenanceRequest: 'MaintenanceRequest',
  Vendor: 'Vendor',
  Document: 'Document',
  ChatMessage: 'ChatMessage',
  AuditLog: 'AuditLog',
  ChangeHistory: 'ChangeHistory',
  Notification: 'Notification',
  FeedEvent: 'FeedEvent',
  Review: 'Review',
  WebhookSubscription: 'WebhookSubscription'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)

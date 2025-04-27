
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Tenant
 * 
 */
export type Tenant = $Result.DefaultSelection<Prisma.$TenantPayload>
/**
 * Model Property
 * 
 */
export type Property = $Result.DefaultSelection<Prisma.$PropertyPayload>
/**
 * Model Invoice
 * 
 */
export type Invoice = $Result.DefaultSelection<Prisma.$InvoicePayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model LeaseAgreement
 * 
 */
export type LeaseAgreement = $Result.DefaultSelection<Prisma.$LeaseAgreementPayload>
/**
 * Model MaintenanceRequest
 * 
 */
export type MaintenanceRequest = $Result.DefaultSelection<Prisma.$MaintenanceRequestPayload>
/**
 * Model Document
 * 
 */
export type Document = $Result.DefaultSelection<Prisma.$DocumentPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Tenants
 * const tenants = await prisma.tenant.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Tenants
   * const tenants = await prisma.tenant.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.tenant`: Exposes CRUD operations for the **Tenant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tenants
    * const tenants = await prisma.tenant.findMany()
    * ```
    */
  get tenant(): Prisma.TenantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.property`: Exposes CRUD operations for the **Property** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Properties
    * const properties = await prisma.property.findMany()
    * ```
    */
  get property(): Prisma.PropertyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invoice`: Exposes CRUD operations for the **Invoice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invoices
    * const invoices = await prisma.invoice.findMany()
    * ```
    */
  get invoice(): Prisma.InvoiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.leaseAgreement`: Exposes CRUD operations for the **LeaseAgreement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LeaseAgreements
    * const leaseAgreements = await prisma.leaseAgreement.findMany()
    * ```
    */
  get leaseAgreement(): Prisma.LeaseAgreementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.maintenanceRequest`: Exposes CRUD operations for the **MaintenanceRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MaintenanceRequests
    * const maintenanceRequests = await prisma.maintenanceRequest.findMany()
    * ```
    */
  get maintenanceRequest(): Prisma.MaintenanceRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.document`: Exposes CRUD operations for the **Document** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Documents
    * const documents = await prisma.document.findMany()
    * ```
    */
  get document(): Prisma.DocumentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Tenant: 'Tenant',
    Property: 'Property',
    Invoice: 'Invoice',
    Payment: 'Payment',
    LeaseAgreement: 'LeaseAgreement',
    MaintenanceRequest: 'MaintenanceRequest',
    Document: 'Document',
    Notification: 'Notification'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "tenant" | "property" | "invoice" | "payment" | "leaseAgreement" | "maintenanceRequest" | "document" | "notification"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Tenant: {
        payload: Prisma.$TenantPayload<ExtArgs>
        fields: Prisma.TenantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TenantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TenantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          findFirst: {
            args: Prisma.TenantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TenantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          findMany: {
            args: Prisma.TenantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          create: {
            args: Prisma.TenantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          createMany: {
            args: Prisma.TenantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TenantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          delete: {
            args: Prisma.TenantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          update: {
            args: Prisma.TenantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          deleteMany: {
            args: Prisma.TenantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TenantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TenantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          upsert: {
            args: Prisma.TenantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          aggregate: {
            args: Prisma.TenantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTenant>
          }
          groupBy: {
            args: Prisma.TenantGroupByArgs<ExtArgs>
            result: $Utils.Optional<TenantGroupByOutputType>[]
          }
          count: {
            args: Prisma.TenantCountArgs<ExtArgs>
            result: $Utils.Optional<TenantCountAggregateOutputType> | number
          }
        }
      }
      Property: {
        payload: Prisma.$PropertyPayload<ExtArgs>
        fields: Prisma.PropertyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PropertyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PropertyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          findFirst: {
            args: Prisma.PropertyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PropertyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          findMany: {
            args: Prisma.PropertyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>[]
          }
          create: {
            args: Prisma.PropertyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          createMany: {
            args: Prisma.PropertyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PropertyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>[]
          }
          delete: {
            args: Prisma.PropertyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          update: {
            args: Prisma.PropertyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          deleteMany: {
            args: Prisma.PropertyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PropertyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PropertyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>[]
          }
          upsert: {
            args: Prisma.PropertyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          aggregate: {
            args: Prisma.PropertyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProperty>
          }
          groupBy: {
            args: Prisma.PropertyGroupByArgs<ExtArgs>
            result: $Utils.Optional<PropertyGroupByOutputType>[]
          }
          count: {
            args: Prisma.PropertyCountArgs<ExtArgs>
            result: $Utils.Optional<PropertyCountAggregateOutputType> | number
          }
        }
      }
      Invoice: {
        payload: Prisma.$InvoicePayload<ExtArgs>
        fields: Prisma.InvoiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvoiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvoiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          findFirst: {
            args: Prisma.InvoiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvoiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          findMany: {
            args: Prisma.InvoiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          create: {
            args: Prisma.InvoiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          createMany: {
            args: Prisma.InvoiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvoiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          delete: {
            args: Prisma.InvoiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          update: {
            args: Prisma.InvoiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          deleteMany: {
            args: Prisma.InvoiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvoiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InvoiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          upsert: {
            args: Prisma.InvoiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          aggregate: {
            args: Prisma.InvoiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvoice>
          }
          groupBy: {
            args: Prisma.InvoiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvoiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvoiceCountArgs<ExtArgs>
            result: $Utils.Optional<InvoiceCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      LeaseAgreement: {
        payload: Prisma.$LeaseAgreementPayload<ExtArgs>
        fields: Prisma.LeaseAgreementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeaseAgreementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaseAgreementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeaseAgreementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaseAgreementPayload>
          }
          findFirst: {
            args: Prisma.LeaseAgreementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaseAgreementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeaseAgreementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaseAgreementPayload>
          }
          findMany: {
            args: Prisma.LeaseAgreementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaseAgreementPayload>[]
          }
          create: {
            args: Prisma.LeaseAgreementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaseAgreementPayload>
          }
          createMany: {
            args: Prisma.LeaseAgreementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LeaseAgreementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaseAgreementPayload>[]
          }
          delete: {
            args: Prisma.LeaseAgreementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaseAgreementPayload>
          }
          update: {
            args: Prisma.LeaseAgreementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaseAgreementPayload>
          }
          deleteMany: {
            args: Prisma.LeaseAgreementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeaseAgreementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LeaseAgreementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaseAgreementPayload>[]
          }
          upsert: {
            args: Prisma.LeaseAgreementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaseAgreementPayload>
          }
          aggregate: {
            args: Prisma.LeaseAgreementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLeaseAgreement>
          }
          groupBy: {
            args: Prisma.LeaseAgreementGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeaseAgreementGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeaseAgreementCountArgs<ExtArgs>
            result: $Utils.Optional<LeaseAgreementCountAggregateOutputType> | number
          }
        }
      }
      MaintenanceRequest: {
        payload: Prisma.$MaintenanceRequestPayload<ExtArgs>
        fields: Prisma.MaintenanceRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MaintenanceRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MaintenanceRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceRequestPayload>
          }
          findFirst: {
            args: Prisma.MaintenanceRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MaintenanceRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceRequestPayload>
          }
          findMany: {
            args: Prisma.MaintenanceRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceRequestPayload>[]
          }
          create: {
            args: Prisma.MaintenanceRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceRequestPayload>
          }
          createMany: {
            args: Prisma.MaintenanceRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MaintenanceRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceRequestPayload>[]
          }
          delete: {
            args: Prisma.MaintenanceRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceRequestPayload>
          }
          update: {
            args: Prisma.MaintenanceRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceRequestPayload>
          }
          deleteMany: {
            args: Prisma.MaintenanceRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MaintenanceRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MaintenanceRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceRequestPayload>[]
          }
          upsert: {
            args: Prisma.MaintenanceRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceRequestPayload>
          }
          aggregate: {
            args: Prisma.MaintenanceRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaintenanceRequest>
          }
          groupBy: {
            args: Prisma.MaintenanceRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<MaintenanceRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.MaintenanceRequestCountArgs<ExtArgs>
            result: $Utils.Optional<MaintenanceRequestCountAggregateOutputType> | number
          }
        }
      }
      Document: {
        payload: Prisma.$DocumentPayload<ExtArgs>
        fields: Prisma.DocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findFirst: {
            args: Prisma.DocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findMany: {
            args: Prisma.DocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          create: {
            args: Prisma.DocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          createMany: {
            args: Prisma.DocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          delete: {
            args: Prisma.DocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          update: {
            args: Prisma.DocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          deleteMany: {
            args: Prisma.DocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DocumentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          upsert: {
            args: Prisma.DocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          aggregate: {
            args: Prisma.DocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocument>
          }
          groupBy: {
            args: Prisma.DocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    tenant?: TenantOmit
    property?: PropertyOmit
    invoice?: InvoiceOmit
    payment?: PaymentOmit
    leaseAgreement?: LeaseAgreementOmit
    maintenanceRequest?: MaintenanceRequestOmit
    document?: DocumentOmit
    notification?: NotificationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type TenantCountOutputType
   */

  export type TenantCountOutputType = {
    invoices: number
    payments: number
    properties: number
    leaseAgreements: number
    maintenanceRequests: number
    documents: number
    notifications: number
  }

  export type TenantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoices?: boolean | TenantCountOutputTypeCountInvoicesArgs
    payments?: boolean | TenantCountOutputTypeCountPaymentsArgs
    properties?: boolean | TenantCountOutputTypeCountPropertiesArgs
    leaseAgreements?: boolean | TenantCountOutputTypeCountLeaseAgreementsArgs
    maintenanceRequests?: boolean | TenantCountOutputTypeCountMaintenanceRequestsArgs
    documents?: boolean | TenantCountOutputTypeCountDocumentsArgs
    notifications?: boolean | TenantCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes
  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantCountOutputType
     */
    select?: TenantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountInvoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountPropertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountLeaseAgreementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaseAgreementWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountMaintenanceRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaintenanceRequestWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }


  /**
   * Count Type PropertyCountOutputType
   */

  export type PropertyCountOutputType = {
    tenants: number
    invoices: number
    maintenanceRequests: number
    documents: number
    leaseAgreements: number
    notifications: number
  }

  export type PropertyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenants?: boolean | PropertyCountOutputTypeCountTenantsArgs
    invoices?: boolean | PropertyCountOutputTypeCountInvoicesArgs
    maintenanceRequests?: boolean | PropertyCountOutputTypeCountMaintenanceRequestsArgs
    documents?: boolean | PropertyCountOutputTypeCountDocumentsArgs
    leaseAgreements?: boolean | PropertyCountOutputTypeCountLeaseAgreementsArgs
    notifications?: boolean | PropertyCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes
  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCountOutputType
     */
    select?: PropertyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeCountTenantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TenantWhereInput
  }

  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeCountInvoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
  }

  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeCountMaintenanceRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaintenanceRequestWhereInput
  }

  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
  }

  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeCountLeaseAgreementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaseAgreementWhereInput
  }

  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }


  /**
   * Count Type InvoiceCountOutputType
   */

  export type InvoiceCountOutputType = {
    payments: number
  }

  export type InvoiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | InvoiceCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * InvoiceCountOutputType without action
   */
  export type InvoiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceCountOutputType
     */
    select?: InvoiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InvoiceCountOutputType without action
   */
  export type InvoiceCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Tenant
   */

  export type AggregateTenant = {
    _count: TenantCountAggregateOutputType | null
    _min: TenantMinAggregateOutputType | null
    _max: TenantMaxAggregateOutputType | null
  }

  export type TenantMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TenantMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TenantCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    address: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TenantMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TenantMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TenantCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TenantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tenant to aggregate.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tenants
    **/
    _count?: true | TenantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TenantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TenantMaxAggregateInputType
  }

  export type GetTenantAggregateType<T extends TenantAggregateArgs> = {
        [P in keyof T & keyof AggregateTenant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTenant[P]>
      : GetScalarType<T[P], AggregateTenant[P]>
  }




  export type TenantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TenantWhereInput
    orderBy?: TenantOrderByWithAggregationInput | TenantOrderByWithAggregationInput[]
    by: TenantScalarFieldEnum[] | TenantScalarFieldEnum
    having?: TenantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TenantCountAggregateInputType | true
    _min?: TenantMinAggregateInputType
    _max?: TenantMaxAggregateInputType
  }

  export type TenantGroupByOutputType = {
    id: string
    name: string
    email: string
    phone: string | null
    address: string | null
    createdAt: Date
    updatedAt: Date
    _count: TenantCountAggregateOutputType | null
    _min: TenantMinAggregateOutputType | null
    _max: TenantMaxAggregateOutputType | null
  }

  type GetTenantGroupByPayload<T extends TenantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TenantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TenantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TenantGroupByOutputType[P]>
            : GetScalarType<T[P], TenantGroupByOutputType[P]>
        }
      >
    >


  export type TenantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    invoices?: boolean | Tenant$invoicesArgs<ExtArgs>
    payments?: boolean | Tenant$paymentsArgs<ExtArgs>
    properties?: boolean | Tenant$propertiesArgs<ExtArgs>
    leaseAgreements?: boolean | Tenant$leaseAgreementsArgs<ExtArgs>
    maintenanceRequests?: boolean | Tenant$maintenanceRequestsArgs<ExtArgs>
    documents?: boolean | Tenant$documentsArgs<ExtArgs>
    notifications?: boolean | Tenant$notificationsArgs<ExtArgs>
    _count?: boolean | TenantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TenantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "address" | "createdAt" | "updatedAt", ExtArgs["result"]["tenant"]>
  export type TenantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoices?: boolean | Tenant$invoicesArgs<ExtArgs>
    payments?: boolean | Tenant$paymentsArgs<ExtArgs>
    properties?: boolean | Tenant$propertiesArgs<ExtArgs>
    leaseAgreements?: boolean | Tenant$leaseAgreementsArgs<ExtArgs>
    maintenanceRequests?: boolean | Tenant$maintenanceRequestsArgs<ExtArgs>
    documents?: boolean | Tenant$documentsArgs<ExtArgs>
    notifications?: boolean | Tenant$notificationsArgs<ExtArgs>
    _count?: boolean | TenantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TenantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TenantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TenantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tenant"
    objects: {
      invoices: Prisma.$InvoicePayload<ExtArgs>[]
      payments: Prisma.$PaymentPayload<ExtArgs>[]
      properties: Prisma.$PropertyPayload<ExtArgs>[]
      leaseAgreements: Prisma.$LeaseAgreementPayload<ExtArgs>[]
      maintenanceRequests: Prisma.$MaintenanceRequestPayload<ExtArgs>[]
      documents: Prisma.$DocumentPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      phone: string | null
      address: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tenant"]>
    composites: {}
  }

  type TenantGetPayload<S extends boolean | null | undefined | TenantDefaultArgs> = $Result.GetResult<Prisma.$TenantPayload, S>

  type TenantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TenantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TenantCountAggregateInputType | true
    }

  export interface TenantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tenant'], meta: { name: 'Tenant' } }
    /**
     * Find zero or one Tenant that matches the filter.
     * @param {TenantFindUniqueArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TenantFindUniqueArgs>(args: SelectSubset<T, TenantFindUniqueArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tenant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TenantFindUniqueOrThrowArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TenantFindUniqueOrThrowArgs>(args: SelectSubset<T, TenantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tenant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindFirstArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TenantFindFirstArgs>(args?: SelectSubset<T, TenantFindFirstArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tenant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindFirstOrThrowArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TenantFindFirstOrThrowArgs>(args?: SelectSubset<T, TenantFindFirstOrThrowArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tenants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tenants
     * const tenants = await prisma.tenant.findMany()
     * 
     * // Get first 10 Tenants
     * const tenants = await prisma.tenant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tenantWithIdOnly = await prisma.tenant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TenantFindManyArgs>(args?: SelectSubset<T, TenantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tenant.
     * @param {TenantCreateArgs} args - Arguments to create a Tenant.
     * @example
     * // Create one Tenant
     * const Tenant = await prisma.tenant.create({
     *   data: {
     *     // ... data to create a Tenant
     *   }
     * })
     * 
     */
    create<T extends TenantCreateArgs>(args: SelectSubset<T, TenantCreateArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tenants.
     * @param {TenantCreateManyArgs} args - Arguments to create many Tenants.
     * @example
     * // Create many Tenants
     * const tenant = await prisma.tenant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TenantCreateManyArgs>(args?: SelectSubset<T, TenantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tenants and returns the data saved in the database.
     * @param {TenantCreateManyAndReturnArgs} args - Arguments to create many Tenants.
     * @example
     * // Create many Tenants
     * const tenant = await prisma.tenant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tenants and only return the `id`
     * const tenantWithIdOnly = await prisma.tenant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TenantCreateManyAndReturnArgs>(args?: SelectSubset<T, TenantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tenant.
     * @param {TenantDeleteArgs} args - Arguments to delete one Tenant.
     * @example
     * // Delete one Tenant
     * const Tenant = await prisma.tenant.delete({
     *   where: {
     *     // ... filter to delete one Tenant
     *   }
     * })
     * 
     */
    delete<T extends TenantDeleteArgs>(args: SelectSubset<T, TenantDeleteArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tenant.
     * @param {TenantUpdateArgs} args - Arguments to update one Tenant.
     * @example
     * // Update one Tenant
     * const tenant = await prisma.tenant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TenantUpdateArgs>(args: SelectSubset<T, TenantUpdateArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tenants.
     * @param {TenantDeleteManyArgs} args - Arguments to filter Tenants to delete.
     * @example
     * // Delete a few Tenants
     * const { count } = await prisma.tenant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TenantDeleteManyArgs>(args?: SelectSubset<T, TenantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tenants
     * const tenant = await prisma.tenant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TenantUpdateManyArgs>(args: SelectSubset<T, TenantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tenants and returns the data updated in the database.
     * @param {TenantUpdateManyAndReturnArgs} args - Arguments to update many Tenants.
     * @example
     * // Update many Tenants
     * const tenant = await prisma.tenant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tenants and only return the `id`
     * const tenantWithIdOnly = await prisma.tenant.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TenantUpdateManyAndReturnArgs>(args: SelectSubset<T, TenantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tenant.
     * @param {TenantUpsertArgs} args - Arguments to update or create a Tenant.
     * @example
     * // Update or create a Tenant
     * const tenant = await prisma.tenant.upsert({
     *   create: {
     *     // ... data to create a Tenant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tenant we want to update
     *   }
     * })
     */
    upsert<T extends TenantUpsertArgs>(args: SelectSubset<T, TenantUpsertArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantCountArgs} args - Arguments to filter Tenants to count.
     * @example
     * // Count the number of Tenants
     * const count = await prisma.tenant.count({
     *   where: {
     *     // ... the filter for the Tenants we want to count
     *   }
     * })
    **/
    count<T extends TenantCountArgs>(
      args?: Subset<T, TenantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TenantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tenant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TenantAggregateArgs>(args: Subset<T, TenantAggregateArgs>): Prisma.PrismaPromise<GetTenantAggregateType<T>>

    /**
     * Group by Tenant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TenantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TenantGroupByArgs['orderBy'] }
        : { orderBy?: TenantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TenantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTenantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tenant model
   */
  readonly fields: TenantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tenant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TenantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    invoices<T extends Tenant$invoicesArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$invoicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payments<T extends Tenant$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    properties<T extends Tenant$propertiesArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$propertiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    leaseAgreements<T extends Tenant$leaseAgreementsArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$leaseAgreementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaseAgreementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    maintenanceRequests<T extends Tenant$maintenanceRequestsArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$maintenanceRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenanceRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    documents<T extends Tenant$documentsArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends Tenant$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tenant model
   */
  interface TenantFieldRefs {
    readonly id: FieldRef<"Tenant", 'String'>
    readonly name: FieldRef<"Tenant", 'String'>
    readonly email: FieldRef<"Tenant", 'String'>
    readonly phone: FieldRef<"Tenant", 'String'>
    readonly address: FieldRef<"Tenant", 'String'>
    readonly createdAt: FieldRef<"Tenant", 'DateTime'>
    readonly updatedAt: FieldRef<"Tenant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tenant findUnique
   */
  export type TenantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant findUniqueOrThrow
   */
  export type TenantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant findFirst
   */
  export type TenantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tenants.
     */
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant findFirstOrThrow
   */
  export type TenantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tenants.
     */
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant findMany
   */
  export type TenantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenants to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant create
   */
  export type TenantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The data needed to create a Tenant.
     */
    data: XOR<TenantCreateInput, TenantUncheckedCreateInput>
  }

  /**
   * Tenant createMany
   */
  export type TenantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tenants.
     */
    data: TenantCreateManyInput | TenantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tenant createManyAndReturn
   */
  export type TenantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * The data used to create many Tenants.
     */
    data: TenantCreateManyInput | TenantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tenant update
   */
  export type TenantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The data needed to update a Tenant.
     */
    data: XOR<TenantUpdateInput, TenantUncheckedUpdateInput>
    /**
     * Choose, which Tenant to update.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant updateMany
   */
  export type TenantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tenants.
     */
    data: XOR<TenantUpdateManyMutationInput, TenantUncheckedUpdateManyInput>
    /**
     * Filter which Tenants to update
     */
    where?: TenantWhereInput
    /**
     * Limit how many Tenants to update.
     */
    limit?: number
  }

  /**
   * Tenant updateManyAndReturn
   */
  export type TenantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * The data used to update Tenants.
     */
    data: XOR<TenantUpdateManyMutationInput, TenantUncheckedUpdateManyInput>
    /**
     * Filter which Tenants to update
     */
    where?: TenantWhereInput
    /**
     * Limit how many Tenants to update.
     */
    limit?: number
  }

  /**
   * Tenant upsert
   */
  export type TenantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The filter to search for the Tenant to update in case it exists.
     */
    where: TenantWhereUniqueInput
    /**
     * In case the Tenant found by the `where` argument doesn't exist, create a new Tenant with this data.
     */
    create: XOR<TenantCreateInput, TenantUncheckedCreateInput>
    /**
     * In case the Tenant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TenantUpdateInput, TenantUncheckedUpdateInput>
  }

  /**
   * Tenant delete
   */
  export type TenantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter which Tenant to delete.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant deleteMany
   */
  export type TenantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tenants to delete
     */
    where?: TenantWhereInput
    /**
     * Limit how many Tenants to delete.
     */
    limit?: number
  }

  /**
   * Tenant.invoices
   */
  export type Tenant$invoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    cursor?: InvoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Tenant.payments
   */
  export type Tenant$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Tenant.properties
   */
  export type Tenant$propertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    where?: PropertyWhereInput
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    cursor?: PropertyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Tenant.leaseAgreements
   */
  export type Tenant$leaseAgreementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaseAgreement
     */
    select?: LeaseAgreementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaseAgreement
     */
    omit?: LeaseAgreementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseAgreementInclude<ExtArgs> | null
    where?: LeaseAgreementWhereInput
    orderBy?: LeaseAgreementOrderByWithRelationInput | LeaseAgreementOrderByWithRelationInput[]
    cursor?: LeaseAgreementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeaseAgreementScalarFieldEnum | LeaseAgreementScalarFieldEnum[]
  }

  /**
   * Tenant.maintenanceRequests
   */
  export type Tenant$maintenanceRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRequest
     */
    select?: MaintenanceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRequest
     */
    omit?: MaintenanceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRequestInclude<ExtArgs> | null
    where?: MaintenanceRequestWhereInput
    orderBy?: MaintenanceRequestOrderByWithRelationInput | MaintenanceRequestOrderByWithRelationInput[]
    cursor?: MaintenanceRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaintenanceRequestScalarFieldEnum | MaintenanceRequestScalarFieldEnum[]
  }

  /**
   * Tenant.documents
   */
  export type Tenant$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    cursor?: DocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Tenant.notifications
   */
  export type Tenant$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Tenant without action
   */
  export type TenantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
  }


  /**
   * Model Property
   */

  export type AggregateProperty = {
    _count: PropertyCountAggregateOutputType | null
    _avg: PropertyAvgAggregateOutputType | null
    _sum: PropertySumAggregateOutputType | null
    _min: PropertyMinAggregateOutputType | null
    _max: PropertyMaxAggregateOutputType | null
  }

  export type PropertyAvgAggregateOutputType = {
    size: number | null
    bedrooms: number | null
    bathrooms: number | null
  }

  export type PropertySumAggregateOutputType = {
    size: number | null
    bedrooms: number | null
    bathrooms: number | null
  }

  export type PropertyMinAggregateOutputType = {
    id: string | null
    address: string | null
    type: string | null
    size: number | null
    bedrooms: number | null
    bathrooms: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PropertyMaxAggregateOutputType = {
    id: string | null
    address: string | null
    type: string | null
    size: number | null
    bedrooms: number | null
    bathrooms: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PropertyCountAggregateOutputType = {
    id: number
    address: number
    type: number
    size: number
    bedrooms: number
    bathrooms: number
    amenities: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PropertyAvgAggregateInputType = {
    size?: true
    bedrooms?: true
    bathrooms?: true
  }

  export type PropertySumAggregateInputType = {
    size?: true
    bedrooms?: true
    bathrooms?: true
  }

  export type PropertyMinAggregateInputType = {
    id?: true
    address?: true
    type?: true
    size?: true
    bedrooms?: true
    bathrooms?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PropertyMaxAggregateInputType = {
    id?: true
    address?: true
    type?: true
    size?: true
    bedrooms?: true
    bathrooms?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PropertyCountAggregateInputType = {
    id?: true
    address?: true
    type?: true
    size?: true
    bedrooms?: true
    bathrooms?: true
    amenities?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PropertyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Property to aggregate.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Properties
    **/
    _count?: true | PropertyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PropertyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PropertySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropertyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropertyMaxAggregateInputType
  }

  export type GetPropertyAggregateType<T extends PropertyAggregateArgs> = {
        [P in keyof T & keyof AggregateProperty]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProperty[P]>
      : GetScalarType<T[P], AggregateProperty[P]>
  }




  export type PropertyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyWhereInput
    orderBy?: PropertyOrderByWithAggregationInput | PropertyOrderByWithAggregationInput[]
    by: PropertyScalarFieldEnum[] | PropertyScalarFieldEnum
    having?: PropertyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropertyCountAggregateInputType | true
    _avg?: PropertyAvgAggregateInputType
    _sum?: PropertySumAggregateInputType
    _min?: PropertyMinAggregateInputType
    _max?: PropertyMaxAggregateInputType
  }

  export type PropertyGroupByOutputType = {
    id: string
    address: string
    type: string
    size: number | null
    bedrooms: number | null
    bathrooms: number | null
    amenities: string[]
    status: string
    createdAt: Date
    updatedAt: Date
    _count: PropertyCountAggregateOutputType | null
    _avg: PropertyAvgAggregateOutputType | null
    _sum: PropertySumAggregateOutputType | null
    _min: PropertyMinAggregateOutputType | null
    _max: PropertyMaxAggregateOutputType | null
  }

  type GetPropertyGroupByPayload<T extends PropertyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropertyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropertyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropertyGroupByOutputType[P]>
            : GetScalarType<T[P], PropertyGroupByOutputType[P]>
        }
      >
    >


  export type PropertySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    type?: boolean
    size?: boolean
    bedrooms?: boolean
    bathrooms?: boolean
    amenities?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenants?: boolean | Property$tenantsArgs<ExtArgs>
    invoices?: boolean | Property$invoicesArgs<ExtArgs>
    maintenanceRequests?: boolean | Property$maintenanceRequestsArgs<ExtArgs>
    documents?: boolean | Property$documentsArgs<ExtArgs>
    leaseAgreements?: boolean | Property$leaseAgreementsArgs<ExtArgs>
    notifications?: boolean | Property$notificationsArgs<ExtArgs>
    _count?: boolean | PropertyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["property"]>

  export type PropertySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    type?: boolean
    size?: boolean
    bedrooms?: boolean
    bathrooms?: boolean
    amenities?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["property"]>

  export type PropertySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    type?: boolean
    size?: boolean
    bedrooms?: boolean
    bathrooms?: boolean
    amenities?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["property"]>

  export type PropertySelectScalar = {
    id?: boolean
    address?: boolean
    type?: boolean
    size?: boolean
    bedrooms?: boolean
    bathrooms?: boolean
    amenities?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PropertyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "address" | "type" | "size" | "bedrooms" | "bathrooms" | "amenities" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["property"]>
  export type PropertyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenants?: boolean | Property$tenantsArgs<ExtArgs>
    invoices?: boolean | Property$invoicesArgs<ExtArgs>
    maintenanceRequests?: boolean | Property$maintenanceRequestsArgs<ExtArgs>
    documents?: boolean | Property$documentsArgs<ExtArgs>
    leaseAgreements?: boolean | Property$leaseAgreementsArgs<ExtArgs>
    notifications?: boolean | Property$notificationsArgs<ExtArgs>
    _count?: boolean | PropertyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PropertyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PropertyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PropertyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Property"
    objects: {
      tenants: Prisma.$TenantPayload<ExtArgs>[]
      invoices: Prisma.$InvoicePayload<ExtArgs>[]
      maintenanceRequests: Prisma.$MaintenanceRequestPayload<ExtArgs>[]
      documents: Prisma.$DocumentPayload<ExtArgs>[]
      leaseAgreements: Prisma.$LeaseAgreementPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      address: string
      type: string
      size: number | null
      bedrooms: number | null
      bathrooms: number | null
      amenities: string[]
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["property"]>
    composites: {}
  }

  type PropertyGetPayload<S extends boolean | null | undefined | PropertyDefaultArgs> = $Result.GetResult<Prisma.$PropertyPayload, S>

  type PropertyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PropertyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PropertyCountAggregateInputType | true
    }

  export interface PropertyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Property'], meta: { name: 'Property' } }
    /**
     * Find zero or one Property that matches the filter.
     * @param {PropertyFindUniqueArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PropertyFindUniqueArgs>(args: SelectSubset<T, PropertyFindUniqueArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Property that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PropertyFindUniqueOrThrowArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PropertyFindUniqueOrThrowArgs>(args: SelectSubset<T, PropertyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Property that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindFirstArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PropertyFindFirstArgs>(args?: SelectSubset<T, PropertyFindFirstArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Property that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindFirstOrThrowArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PropertyFindFirstOrThrowArgs>(args?: SelectSubset<T, PropertyFindFirstOrThrowArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Properties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Properties
     * const properties = await prisma.property.findMany()
     * 
     * // Get first 10 Properties
     * const properties = await prisma.property.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const propertyWithIdOnly = await prisma.property.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PropertyFindManyArgs>(args?: SelectSubset<T, PropertyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Property.
     * @param {PropertyCreateArgs} args - Arguments to create a Property.
     * @example
     * // Create one Property
     * const Property = await prisma.property.create({
     *   data: {
     *     // ... data to create a Property
     *   }
     * })
     * 
     */
    create<T extends PropertyCreateArgs>(args: SelectSubset<T, PropertyCreateArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Properties.
     * @param {PropertyCreateManyArgs} args - Arguments to create many Properties.
     * @example
     * // Create many Properties
     * const property = await prisma.property.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PropertyCreateManyArgs>(args?: SelectSubset<T, PropertyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Properties and returns the data saved in the database.
     * @param {PropertyCreateManyAndReturnArgs} args - Arguments to create many Properties.
     * @example
     * // Create many Properties
     * const property = await prisma.property.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Properties and only return the `id`
     * const propertyWithIdOnly = await prisma.property.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PropertyCreateManyAndReturnArgs>(args?: SelectSubset<T, PropertyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Property.
     * @param {PropertyDeleteArgs} args - Arguments to delete one Property.
     * @example
     * // Delete one Property
     * const Property = await prisma.property.delete({
     *   where: {
     *     // ... filter to delete one Property
     *   }
     * })
     * 
     */
    delete<T extends PropertyDeleteArgs>(args: SelectSubset<T, PropertyDeleteArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Property.
     * @param {PropertyUpdateArgs} args - Arguments to update one Property.
     * @example
     * // Update one Property
     * const property = await prisma.property.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PropertyUpdateArgs>(args: SelectSubset<T, PropertyUpdateArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Properties.
     * @param {PropertyDeleteManyArgs} args - Arguments to filter Properties to delete.
     * @example
     * // Delete a few Properties
     * const { count } = await prisma.property.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PropertyDeleteManyArgs>(args?: SelectSubset<T, PropertyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Properties
     * const property = await prisma.property.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PropertyUpdateManyArgs>(args: SelectSubset<T, PropertyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Properties and returns the data updated in the database.
     * @param {PropertyUpdateManyAndReturnArgs} args - Arguments to update many Properties.
     * @example
     * // Update many Properties
     * const property = await prisma.property.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Properties and only return the `id`
     * const propertyWithIdOnly = await prisma.property.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PropertyUpdateManyAndReturnArgs>(args: SelectSubset<T, PropertyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Property.
     * @param {PropertyUpsertArgs} args - Arguments to update or create a Property.
     * @example
     * // Update or create a Property
     * const property = await prisma.property.upsert({
     *   create: {
     *     // ... data to create a Property
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Property we want to update
     *   }
     * })
     */
    upsert<T extends PropertyUpsertArgs>(args: SelectSubset<T, PropertyUpsertArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyCountArgs} args - Arguments to filter Properties to count.
     * @example
     * // Count the number of Properties
     * const count = await prisma.property.count({
     *   where: {
     *     // ... the filter for the Properties we want to count
     *   }
     * })
    **/
    count<T extends PropertyCountArgs>(
      args?: Subset<T, PropertyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropertyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Property.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PropertyAggregateArgs>(args: Subset<T, PropertyAggregateArgs>): Prisma.PrismaPromise<GetPropertyAggregateType<T>>

    /**
     * Group by Property.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PropertyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PropertyGroupByArgs['orderBy'] }
        : { orderBy?: PropertyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PropertyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropertyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Property model
   */
  readonly fields: PropertyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Property.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PropertyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenants<T extends Property$tenantsArgs<ExtArgs> = {}>(args?: Subset<T, Property$tenantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    invoices<T extends Property$invoicesArgs<ExtArgs> = {}>(args?: Subset<T, Property$invoicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    maintenanceRequests<T extends Property$maintenanceRequestsArgs<ExtArgs> = {}>(args?: Subset<T, Property$maintenanceRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenanceRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    documents<T extends Property$documentsArgs<ExtArgs> = {}>(args?: Subset<T, Property$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    leaseAgreements<T extends Property$leaseAgreementsArgs<ExtArgs> = {}>(args?: Subset<T, Property$leaseAgreementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaseAgreementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends Property$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, Property$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Property model
   */
  interface PropertyFieldRefs {
    readonly id: FieldRef<"Property", 'String'>
    readonly address: FieldRef<"Property", 'String'>
    readonly type: FieldRef<"Property", 'String'>
    readonly size: FieldRef<"Property", 'Float'>
    readonly bedrooms: FieldRef<"Property", 'Int'>
    readonly bathrooms: FieldRef<"Property", 'Float'>
    readonly amenities: FieldRef<"Property", 'String[]'>
    readonly status: FieldRef<"Property", 'String'>
    readonly createdAt: FieldRef<"Property", 'DateTime'>
    readonly updatedAt: FieldRef<"Property", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Property findUnique
   */
  export type PropertyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property findUniqueOrThrow
   */
  export type PropertyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property findFirst
   */
  export type PropertyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Properties.
     */
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property findFirstOrThrow
   */
  export type PropertyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Properties.
     */
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property findMany
   */
  export type PropertyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Properties to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property create
   */
  export type PropertyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The data needed to create a Property.
     */
    data: XOR<PropertyCreateInput, PropertyUncheckedCreateInput>
  }

  /**
   * Property createMany
   */
  export type PropertyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Properties.
     */
    data: PropertyCreateManyInput | PropertyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Property createManyAndReturn
   */
  export type PropertyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * The data used to create many Properties.
     */
    data: PropertyCreateManyInput | PropertyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Property update
   */
  export type PropertyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The data needed to update a Property.
     */
    data: XOR<PropertyUpdateInput, PropertyUncheckedUpdateInput>
    /**
     * Choose, which Property to update.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property updateMany
   */
  export type PropertyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Properties.
     */
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyInput>
    /**
     * Filter which Properties to update
     */
    where?: PropertyWhereInput
    /**
     * Limit how many Properties to update.
     */
    limit?: number
  }

  /**
   * Property updateManyAndReturn
   */
  export type PropertyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * The data used to update Properties.
     */
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyInput>
    /**
     * Filter which Properties to update
     */
    where?: PropertyWhereInput
    /**
     * Limit how many Properties to update.
     */
    limit?: number
  }

  /**
   * Property upsert
   */
  export type PropertyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The filter to search for the Property to update in case it exists.
     */
    where: PropertyWhereUniqueInput
    /**
     * In case the Property found by the `where` argument doesn't exist, create a new Property with this data.
     */
    create: XOR<PropertyCreateInput, PropertyUncheckedCreateInput>
    /**
     * In case the Property was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PropertyUpdateInput, PropertyUncheckedUpdateInput>
  }

  /**
   * Property delete
   */
  export type PropertyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter which Property to delete.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property deleteMany
   */
  export type PropertyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Properties to delete
     */
    where?: PropertyWhereInput
    /**
     * Limit how many Properties to delete.
     */
    limit?: number
  }

  /**
   * Property.tenants
   */
  export type Property$tenantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    where?: TenantWhereInput
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    cursor?: TenantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Property.invoices
   */
  export type Property$invoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    cursor?: InvoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Property.maintenanceRequests
   */
  export type Property$maintenanceRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRequest
     */
    select?: MaintenanceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRequest
     */
    omit?: MaintenanceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRequestInclude<ExtArgs> | null
    where?: MaintenanceRequestWhereInput
    orderBy?: MaintenanceRequestOrderByWithRelationInput | MaintenanceRequestOrderByWithRelationInput[]
    cursor?: MaintenanceRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaintenanceRequestScalarFieldEnum | MaintenanceRequestScalarFieldEnum[]
  }

  /**
   * Property.documents
   */
  export type Property$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    cursor?: DocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Property.leaseAgreements
   */
  export type Property$leaseAgreementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaseAgreement
     */
    select?: LeaseAgreementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaseAgreement
     */
    omit?: LeaseAgreementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseAgreementInclude<ExtArgs> | null
    where?: LeaseAgreementWhereInput
    orderBy?: LeaseAgreementOrderByWithRelationInput | LeaseAgreementOrderByWithRelationInput[]
    cursor?: LeaseAgreementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeaseAgreementScalarFieldEnum | LeaseAgreementScalarFieldEnum[]
  }

  /**
   * Property.notifications
   */
  export type Property$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Property without action
   */
  export type PropertyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
  }


  /**
   * Model Invoice
   */

  export type AggregateInvoice = {
    _count: InvoiceCountAggregateOutputType | null
    _avg: InvoiceAvgAggregateOutputType | null
    _sum: InvoiceSumAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  export type InvoiceAvgAggregateOutputType = {
    amount: number | null
    paidAmount: number | null
  }

  export type InvoiceSumAggregateOutputType = {
    amount: number | null
    paidAmount: number | null
  }

  export type InvoiceMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    propertyId: string | null
    amount: number | null
    paidAmount: number | null
    dueDate: Date | null
    status: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvoiceMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    propertyId: string | null
    amount: number | null
    paidAmount: number | null
    dueDate: Date | null
    status: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvoiceCountAggregateOutputType = {
    id: number
    tenantId: number
    propertyId: number
    amount: number
    paidAmount: number
    dueDate: number
    status: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InvoiceAvgAggregateInputType = {
    amount?: true
    paidAmount?: true
  }

  export type InvoiceSumAggregateInputType = {
    amount?: true
    paidAmount?: true
  }

  export type InvoiceMinAggregateInputType = {
    id?: true
    tenantId?: true
    propertyId?: true
    amount?: true
    paidAmount?: true
    dueDate?: true
    status?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvoiceMaxAggregateInputType = {
    id?: true
    tenantId?: true
    propertyId?: true
    amount?: true
    paidAmount?: true
    dueDate?: true
    status?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvoiceCountAggregateInputType = {
    id?: true
    tenantId?: true
    propertyId?: true
    amount?: true
    paidAmount?: true
    dueDate?: true
    status?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InvoiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoice to aggregate.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Invoices
    **/
    _count?: true | InvoiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvoiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvoiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvoiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvoiceMaxAggregateInputType
  }

  export type GetInvoiceAggregateType<T extends InvoiceAggregateArgs> = {
        [P in keyof T & keyof AggregateInvoice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoice[P]>
      : GetScalarType<T[P], AggregateInvoice[P]>
  }




  export type InvoiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithAggregationInput | InvoiceOrderByWithAggregationInput[]
    by: InvoiceScalarFieldEnum[] | InvoiceScalarFieldEnum
    having?: InvoiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvoiceCountAggregateInputType | true
    _avg?: InvoiceAvgAggregateInputType
    _sum?: InvoiceSumAggregateInputType
    _min?: InvoiceMinAggregateInputType
    _max?: InvoiceMaxAggregateInputType
  }

  export type InvoiceGroupByOutputType = {
    id: string
    tenantId: string
    propertyId: string
    amount: number
    paidAmount: number
    dueDate: Date
    status: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: InvoiceCountAggregateOutputType | null
    _avg: InvoiceAvgAggregateOutputType | null
    _sum: InvoiceSumAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  type GetInvoiceGroupByPayload<T extends InvoiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvoiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvoiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
            : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
        }
      >
    >


  export type InvoiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    propertyId?: boolean
    amount?: boolean
    paidAmount?: boolean
    dueDate?: boolean
    status?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    payments?: boolean | Invoice$paymentsArgs<ExtArgs>
    _count?: boolean | InvoiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    propertyId?: boolean
    amount?: boolean
    paidAmount?: boolean
    dueDate?: boolean
    status?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    propertyId?: boolean
    amount?: boolean
    paidAmount?: boolean
    dueDate?: boolean
    status?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectScalar = {
    id?: boolean
    tenantId?: boolean
    propertyId?: boolean
    amount?: boolean
    paidAmount?: boolean
    dueDate?: boolean
    status?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InvoiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenantId" | "propertyId" | "amount" | "paidAmount" | "dueDate" | "status" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["invoice"]>
  export type InvoiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    payments?: boolean | Invoice$paymentsArgs<ExtArgs>
    _count?: boolean | InvoiceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InvoiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }
  export type InvoiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }

  export type $InvoicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Invoice"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
      property: Prisma.$PropertyPayload<ExtArgs>
      payments: Prisma.$PaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      propertyId: string
      amount: number
      paidAmount: number
      dueDate: Date
      status: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["invoice"]>
    composites: {}
  }

  type InvoiceGetPayload<S extends boolean | null | undefined | InvoiceDefaultArgs> = $Result.GetResult<Prisma.$InvoicePayload, S>

  type InvoiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvoiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvoiceCountAggregateInputType | true
    }

  export interface InvoiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Invoice'], meta: { name: 'Invoice' } }
    /**
     * Find zero or one Invoice that matches the filter.
     * @param {InvoiceFindUniqueArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvoiceFindUniqueArgs>(args: SelectSubset<T, InvoiceFindUniqueArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Invoice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvoiceFindUniqueOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvoiceFindUniqueOrThrowArgs>(args: SelectSubset<T, InvoiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvoiceFindFirstArgs>(args?: SelectSubset<T, InvoiceFindFirstArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvoiceFindFirstOrThrowArgs>(args?: SelectSubset<T, InvoiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Invoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invoices
     * const invoices = await prisma.invoice.findMany()
     * 
     * // Get first 10 Invoices
     * const invoices = await prisma.invoice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invoiceWithIdOnly = await prisma.invoice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvoiceFindManyArgs>(args?: SelectSubset<T, InvoiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Invoice.
     * @param {InvoiceCreateArgs} args - Arguments to create a Invoice.
     * @example
     * // Create one Invoice
     * const Invoice = await prisma.invoice.create({
     *   data: {
     *     // ... data to create a Invoice
     *   }
     * })
     * 
     */
    create<T extends InvoiceCreateArgs>(args: SelectSubset<T, InvoiceCreateArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Invoices.
     * @param {InvoiceCreateManyArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoice = await prisma.invoice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvoiceCreateManyArgs>(args?: SelectSubset<T, InvoiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Invoices and returns the data saved in the database.
     * @param {InvoiceCreateManyAndReturnArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoice = await prisma.invoice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Invoices and only return the `id`
     * const invoiceWithIdOnly = await prisma.invoice.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvoiceCreateManyAndReturnArgs>(args?: SelectSubset<T, InvoiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Invoice.
     * @param {InvoiceDeleteArgs} args - Arguments to delete one Invoice.
     * @example
     * // Delete one Invoice
     * const Invoice = await prisma.invoice.delete({
     *   where: {
     *     // ... filter to delete one Invoice
     *   }
     * })
     * 
     */
    delete<T extends InvoiceDeleteArgs>(args: SelectSubset<T, InvoiceDeleteArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Invoice.
     * @param {InvoiceUpdateArgs} args - Arguments to update one Invoice.
     * @example
     * // Update one Invoice
     * const invoice = await prisma.invoice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvoiceUpdateArgs>(args: SelectSubset<T, InvoiceUpdateArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Invoices.
     * @param {InvoiceDeleteManyArgs} args - Arguments to filter Invoices to delete.
     * @example
     * // Delete a few Invoices
     * const { count } = await prisma.invoice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvoiceDeleteManyArgs>(args?: SelectSubset<T, InvoiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invoices
     * const invoice = await prisma.invoice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvoiceUpdateManyArgs>(args: SelectSubset<T, InvoiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices and returns the data updated in the database.
     * @param {InvoiceUpdateManyAndReturnArgs} args - Arguments to update many Invoices.
     * @example
     * // Update many Invoices
     * const invoice = await prisma.invoice.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Invoices and only return the `id`
     * const invoiceWithIdOnly = await prisma.invoice.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InvoiceUpdateManyAndReturnArgs>(args: SelectSubset<T, InvoiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Invoice.
     * @param {InvoiceUpsertArgs} args - Arguments to update or create a Invoice.
     * @example
     * // Update or create a Invoice
     * const invoice = await prisma.invoice.upsert({
     *   create: {
     *     // ... data to create a Invoice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invoice we want to update
     *   }
     * })
     */
    upsert<T extends InvoiceUpsertArgs>(args: SelectSubset<T, InvoiceUpsertArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceCountArgs} args - Arguments to filter Invoices to count.
     * @example
     * // Count the number of Invoices
     * const count = await prisma.invoice.count({
     *   where: {
     *     // ... the filter for the Invoices we want to count
     *   }
     * })
    **/
    count<T extends InvoiceCountArgs>(
      args?: Subset<T, InvoiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvoiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InvoiceAggregateArgs>(args: Subset<T, InvoiceAggregateArgs>): Prisma.PrismaPromise<GetInvoiceAggregateType<T>>

    /**
     * Group by Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InvoiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvoiceGroupByArgs['orderBy'] }
        : { orderBy?: InvoiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InvoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Invoice model
   */
  readonly fields: InvoiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Invoice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvoiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    property<T extends PropertyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropertyDefaultArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    payments<T extends Invoice$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Invoice$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Invoice model
   */
  interface InvoiceFieldRefs {
    readonly id: FieldRef<"Invoice", 'String'>
    readonly tenantId: FieldRef<"Invoice", 'String'>
    readonly propertyId: FieldRef<"Invoice", 'String'>
    readonly amount: FieldRef<"Invoice", 'Float'>
    readonly paidAmount: FieldRef<"Invoice", 'Float'>
    readonly dueDate: FieldRef<"Invoice", 'DateTime'>
    readonly status: FieldRef<"Invoice", 'String'>
    readonly description: FieldRef<"Invoice", 'String'>
    readonly createdAt: FieldRef<"Invoice", 'DateTime'>
    readonly updatedAt: FieldRef<"Invoice", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Invoice findUnique
   */
  export type InvoiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice findUniqueOrThrow
   */
  export type InvoiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice findFirst
   */
  export type InvoiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice findFirstOrThrow
   */
  export type InvoiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice findMany
   */
  export type InvoiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoices to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice create
   */
  export type InvoiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Invoice.
     */
    data: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
  }

  /**
   * Invoice createMany
   */
  export type InvoiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Invoices.
     */
    data: InvoiceCreateManyInput | InvoiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Invoice createManyAndReturn
   */
  export type InvoiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * The data used to create many Invoices.
     */
    data: InvoiceCreateManyInput | InvoiceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invoice update
   */
  export type InvoiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Invoice.
     */
    data: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
    /**
     * Choose, which Invoice to update.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice updateMany
   */
  export type InvoiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Invoices.
     */
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyInput>
    /**
     * Filter which Invoices to update
     */
    where?: InvoiceWhereInput
    /**
     * Limit how many Invoices to update.
     */
    limit?: number
  }

  /**
   * Invoice updateManyAndReturn
   */
  export type InvoiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * The data used to update Invoices.
     */
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyInput>
    /**
     * Filter which Invoices to update
     */
    where?: InvoiceWhereInput
    /**
     * Limit how many Invoices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invoice upsert
   */
  export type InvoiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Invoice to update in case it exists.
     */
    where: InvoiceWhereUniqueInput
    /**
     * In case the Invoice found by the `where` argument doesn't exist, create a new Invoice with this data.
     */
    create: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
    /**
     * In case the Invoice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
  }

  /**
   * Invoice delete
   */
  export type InvoiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter which Invoice to delete.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice deleteMany
   */
  export type InvoiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoices to delete
     */
    where?: InvoiceWhereInput
    /**
     * Limit how many Invoices to delete.
     */
    limit?: number
  }

  /**
   * Invoice.payments
   */
  export type Invoice$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Invoice without action
   */
  export type InvoiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    amount: number | null
  }

  export type PaymentSumAggregateOutputType = {
    amount: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    invoiceId: string | null
    tenantId: string | null
    amount: number | null
    status: string | null
    paymentDate: Date | null
    method: string | null
    reference: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    invoiceId: string | null
    tenantId: string | null
    amount: number | null
    status: string | null
    paymentDate: Date | null
    method: string | null
    reference: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    invoiceId: number
    tenantId: number
    amount: number
    status: number
    paymentDate: number
    method: number
    reference: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    invoiceId?: true
    tenantId?: true
    amount?: true
    status?: true
    paymentDate?: true
    method?: true
    reference?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    invoiceId?: true
    tenantId?: true
    amount?: true
    status?: true
    paymentDate?: true
    method?: true
    reference?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    invoiceId?: true
    tenantId?: true
    amount?: true
    status?: true
    paymentDate?: true
    method?: true
    reference?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    invoiceId: string
    tenantId: string
    amount: number
    status: string
    paymentDate: Date
    method: string
    reference: string | null
    createdAt: Date
    updatedAt: Date
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceId?: boolean
    tenantId?: boolean
    amount?: boolean
    status?: boolean
    paymentDate?: boolean
    method?: boolean
    reference?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceId?: boolean
    tenantId?: boolean
    amount?: boolean
    status?: boolean
    paymentDate?: boolean
    method?: boolean
    reference?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceId?: boolean
    tenantId?: boolean
    amount?: boolean
    status?: boolean
    paymentDate?: boolean
    method?: boolean
    reference?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    invoiceId?: boolean
    tenantId?: boolean
    amount?: boolean
    status?: boolean
    paymentDate?: boolean
    method?: boolean
    reference?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "invoiceId" | "tenantId" | "amount" | "status" | "paymentDate" | "method" | "reference" | "createdAt" | "updatedAt", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      invoice: Prisma.$InvoicePayload<ExtArgs>
      tenant: Prisma.$TenantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      invoiceId: string
      tenantId: string
      amount: number
      status: string
      paymentDate: Date
      method: string
      reference: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    invoice<T extends InvoiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InvoiceDefaultArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly invoiceId: FieldRef<"Payment", 'String'>
    readonly tenantId: FieldRef<"Payment", 'String'>
    readonly amount: FieldRef<"Payment", 'Float'>
    readonly status: FieldRef<"Payment", 'String'>
    readonly paymentDate: FieldRef<"Payment", 'DateTime'>
    readonly method: FieldRef<"Payment", 'String'>
    readonly reference: FieldRef<"Payment", 'String'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
    readonly updatedAt: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model LeaseAgreement
   */

  export type AggregateLeaseAgreement = {
    _count: LeaseAgreementCountAggregateOutputType | null
    _avg: LeaseAgreementAvgAggregateOutputType | null
    _sum: LeaseAgreementSumAggregateOutputType | null
    _min: LeaseAgreementMinAggregateOutputType | null
    _max: LeaseAgreementMaxAggregateOutputType | null
  }

  export type LeaseAgreementAvgAggregateOutputType = {
    rentAmount: number | null
    securityDeposit: number | null
  }

  export type LeaseAgreementSumAggregateOutputType = {
    rentAmount: number | null
    securityDeposit: number | null
  }

  export type LeaseAgreementMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    propertyId: string | null
    startDate: Date | null
    endDate: Date | null
    rentAmount: number | null
    securityDeposit: number | null
    terms: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LeaseAgreementMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    propertyId: string | null
    startDate: Date | null
    endDate: Date | null
    rentAmount: number | null
    securityDeposit: number | null
    terms: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LeaseAgreementCountAggregateOutputType = {
    id: number
    tenantId: number
    propertyId: number
    startDate: number
    endDate: number
    rentAmount: number
    securityDeposit: number
    terms: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LeaseAgreementAvgAggregateInputType = {
    rentAmount?: true
    securityDeposit?: true
  }

  export type LeaseAgreementSumAggregateInputType = {
    rentAmount?: true
    securityDeposit?: true
  }

  export type LeaseAgreementMinAggregateInputType = {
    id?: true
    tenantId?: true
    propertyId?: true
    startDate?: true
    endDate?: true
    rentAmount?: true
    securityDeposit?: true
    terms?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LeaseAgreementMaxAggregateInputType = {
    id?: true
    tenantId?: true
    propertyId?: true
    startDate?: true
    endDate?: true
    rentAmount?: true
    securityDeposit?: true
    terms?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LeaseAgreementCountAggregateInputType = {
    id?: true
    tenantId?: true
    propertyId?: true
    startDate?: true
    endDate?: true
    rentAmount?: true
    securityDeposit?: true
    terms?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LeaseAgreementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeaseAgreement to aggregate.
     */
    where?: LeaseAgreementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaseAgreements to fetch.
     */
    orderBy?: LeaseAgreementOrderByWithRelationInput | LeaseAgreementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeaseAgreementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaseAgreements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaseAgreements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LeaseAgreements
    **/
    _count?: true | LeaseAgreementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LeaseAgreementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LeaseAgreementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeaseAgreementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeaseAgreementMaxAggregateInputType
  }

  export type GetLeaseAgreementAggregateType<T extends LeaseAgreementAggregateArgs> = {
        [P in keyof T & keyof AggregateLeaseAgreement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeaseAgreement[P]>
      : GetScalarType<T[P], AggregateLeaseAgreement[P]>
  }




  export type LeaseAgreementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaseAgreementWhereInput
    orderBy?: LeaseAgreementOrderByWithAggregationInput | LeaseAgreementOrderByWithAggregationInput[]
    by: LeaseAgreementScalarFieldEnum[] | LeaseAgreementScalarFieldEnum
    having?: LeaseAgreementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeaseAgreementCountAggregateInputType | true
    _avg?: LeaseAgreementAvgAggregateInputType
    _sum?: LeaseAgreementSumAggregateInputType
    _min?: LeaseAgreementMinAggregateInputType
    _max?: LeaseAgreementMaxAggregateInputType
  }

  export type LeaseAgreementGroupByOutputType = {
    id: string
    tenantId: string
    propertyId: string
    startDate: Date
    endDate: Date
    rentAmount: number
    securityDeposit: number
    terms: string | null
    status: string
    createdAt: Date
    updatedAt: Date
    _count: LeaseAgreementCountAggregateOutputType | null
    _avg: LeaseAgreementAvgAggregateOutputType | null
    _sum: LeaseAgreementSumAggregateOutputType | null
    _min: LeaseAgreementMinAggregateOutputType | null
    _max: LeaseAgreementMaxAggregateOutputType | null
  }

  type GetLeaseAgreementGroupByPayload<T extends LeaseAgreementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeaseAgreementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeaseAgreementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeaseAgreementGroupByOutputType[P]>
            : GetScalarType<T[P], LeaseAgreementGroupByOutputType[P]>
        }
      >
    >


  export type LeaseAgreementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    propertyId?: boolean
    startDate?: boolean
    endDate?: boolean
    rentAmount?: boolean
    securityDeposit?: boolean
    terms?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leaseAgreement"]>

  export type LeaseAgreementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    propertyId?: boolean
    startDate?: boolean
    endDate?: boolean
    rentAmount?: boolean
    securityDeposit?: boolean
    terms?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leaseAgreement"]>

  export type LeaseAgreementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    propertyId?: boolean
    startDate?: boolean
    endDate?: boolean
    rentAmount?: boolean
    securityDeposit?: boolean
    terms?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leaseAgreement"]>

  export type LeaseAgreementSelectScalar = {
    id?: boolean
    tenantId?: boolean
    propertyId?: boolean
    startDate?: boolean
    endDate?: boolean
    rentAmount?: boolean
    securityDeposit?: boolean
    terms?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LeaseAgreementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenantId" | "propertyId" | "startDate" | "endDate" | "rentAmount" | "securityDeposit" | "terms" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["leaseAgreement"]>
  export type LeaseAgreementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }
  export type LeaseAgreementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }
  export type LeaseAgreementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }

  export type $LeaseAgreementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LeaseAgreement"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
      property: Prisma.$PropertyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      propertyId: string
      startDate: Date
      endDate: Date
      rentAmount: number
      securityDeposit: number
      terms: string | null
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["leaseAgreement"]>
    composites: {}
  }

  type LeaseAgreementGetPayload<S extends boolean | null | undefined | LeaseAgreementDefaultArgs> = $Result.GetResult<Prisma.$LeaseAgreementPayload, S>

  type LeaseAgreementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LeaseAgreementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeaseAgreementCountAggregateInputType | true
    }

  export interface LeaseAgreementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LeaseAgreement'], meta: { name: 'LeaseAgreement' } }
    /**
     * Find zero or one LeaseAgreement that matches the filter.
     * @param {LeaseAgreementFindUniqueArgs} args - Arguments to find a LeaseAgreement
     * @example
     * // Get one LeaseAgreement
     * const leaseAgreement = await prisma.leaseAgreement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeaseAgreementFindUniqueArgs>(args: SelectSubset<T, LeaseAgreementFindUniqueArgs<ExtArgs>>): Prisma__LeaseAgreementClient<$Result.GetResult<Prisma.$LeaseAgreementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LeaseAgreement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeaseAgreementFindUniqueOrThrowArgs} args - Arguments to find a LeaseAgreement
     * @example
     * // Get one LeaseAgreement
     * const leaseAgreement = await prisma.leaseAgreement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeaseAgreementFindUniqueOrThrowArgs>(args: SelectSubset<T, LeaseAgreementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeaseAgreementClient<$Result.GetResult<Prisma.$LeaseAgreementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LeaseAgreement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaseAgreementFindFirstArgs} args - Arguments to find a LeaseAgreement
     * @example
     * // Get one LeaseAgreement
     * const leaseAgreement = await prisma.leaseAgreement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeaseAgreementFindFirstArgs>(args?: SelectSubset<T, LeaseAgreementFindFirstArgs<ExtArgs>>): Prisma__LeaseAgreementClient<$Result.GetResult<Prisma.$LeaseAgreementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LeaseAgreement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaseAgreementFindFirstOrThrowArgs} args - Arguments to find a LeaseAgreement
     * @example
     * // Get one LeaseAgreement
     * const leaseAgreement = await prisma.leaseAgreement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeaseAgreementFindFirstOrThrowArgs>(args?: SelectSubset<T, LeaseAgreementFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeaseAgreementClient<$Result.GetResult<Prisma.$LeaseAgreementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LeaseAgreements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaseAgreementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LeaseAgreements
     * const leaseAgreements = await prisma.leaseAgreement.findMany()
     * 
     * // Get first 10 LeaseAgreements
     * const leaseAgreements = await prisma.leaseAgreement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leaseAgreementWithIdOnly = await prisma.leaseAgreement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LeaseAgreementFindManyArgs>(args?: SelectSubset<T, LeaseAgreementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaseAgreementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LeaseAgreement.
     * @param {LeaseAgreementCreateArgs} args - Arguments to create a LeaseAgreement.
     * @example
     * // Create one LeaseAgreement
     * const LeaseAgreement = await prisma.leaseAgreement.create({
     *   data: {
     *     // ... data to create a LeaseAgreement
     *   }
     * })
     * 
     */
    create<T extends LeaseAgreementCreateArgs>(args: SelectSubset<T, LeaseAgreementCreateArgs<ExtArgs>>): Prisma__LeaseAgreementClient<$Result.GetResult<Prisma.$LeaseAgreementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LeaseAgreements.
     * @param {LeaseAgreementCreateManyArgs} args - Arguments to create many LeaseAgreements.
     * @example
     * // Create many LeaseAgreements
     * const leaseAgreement = await prisma.leaseAgreement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeaseAgreementCreateManyArgs>(args?: SelectSubset<T, LeaseAgreementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LeaseAgreements and returns the data saved in the database.
     * @param {LeaseAgreementCreateManyAndReturnArgs} args - Arguments to create many LeaseAgreements.
     * @example
     * // Create many LeaseAgreements
     * const leaseAgreement = await prisma.leaseAgreement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LeaseAgreements and only return the `id`
     * const leaseAgreementWithIdOnly = await prisma.leaseAgreement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LeaseAgreementCreateManyAndReturnArgs>(args?: SelectSubset<T, LeaseAgreementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaseAgreementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LeaseAgreement.
     * @param {LeaseAgreementDeleteArgs} args - Arguments to delete one LeaseAgreement.
     * @example
     * // Delete one LeaseAgreement
     * const LeaseAgreement = await prisma.leaseAgreement.delete({
     *   where: {
     *     // ... filter to delete one LeaseAgreement
     *   }
     * })
     * 
     */
    delete<T extends LeaseAgreementDeleteArgs>(args: SelectSubset<T, LeaseAgreementDeleteArgs<ExtArgs>>): Prisma__LeaseAgreementClient<$Result.GetResult<Prisma.$LeaseAgreementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LeaseAgreement.
     * @param {LeaseAgreementUpdateArgs} args - Arguments to update one LeaseAgreement.
     * @example
     * // Update one LeaseAgreement
     * const leaseAgreement = await prisma.leaseAgreement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeaseAgreementUpdateArgs>(args: SelectSubset<T, LeaseAgreementUpdateArgs<ExtArgs>>): Prisma__LeaseAgreementClient<$Result.GetResult<Prisma.$LeaseAgreementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LeaseAgreements.
     * @param {LeaseAgreementDeleteManyArgs} args - Arguments to filter LeaseAgreements to delete.
     * @example
     * // Delete a few LeaseAgreements
     * const { count } = await prisma.leaseAgreement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeaseAgreementDeleteManyArgs>(args?: SelectSubset<T, LeaseAgreementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LeaseAgreements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaseAgreementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LeaseAgreements
     * const leaseAgreement = await prisma.leaseAgreement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeaseAgreementUpdateManyArgs>(args: SelectSubset<T, LeaseAgreementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LeaseAgreements and returns the data updated in the database.
     * @param {LeaseAgreementUpdateManyAndReturnArgs} args - Arguments to update many LeaseAgreements.
     * @example
     * // Update many LeaseAgreements
     * const leaseAgreement = await prisma.leaseAgreement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LeaseAgreements and only return the `id`
     * const leaseAgreementWithIdOnly = await prisma.leaseAgreement.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LeaseAgreementUpdateManyAndReturnArgs>(args: SelectSubset<T, LeaseAgreementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaseAgreementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LeaseAgreement.
     * @param {LeaseAgreementUpsertArgs} args - Arguments to update or create a LeaseAgreement.
     * @example
     * // Update or create a LeaseAgreement
     * const leaseAgreement = await prisma.leaseAgreement.upsert({
     *   create: {
     *     // ... data to create a LeaseAgreement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LeaseAgreement we want to update
     *   }
     * })
     */
    upsert<T extends LeaseAgreementUpsertArgs>(args: SelectSubset<T, LeaseAgreementUpsertArgs<ExtArgs>>): Prisma__LeaseAgreementClient<$Result.GetResult<Prisma.$LeaseAgreementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LeaseAgreements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaseAgreementCountArgs} args - Arguments to filter LeaseAgreements to count.
     * @example
     * // Count the number of LeaseAgreements
     * const count = await prisma.leaseAgreement.count({
     *   where: {
     *     // ... the filter for the LeaseAgreements we want to count
     *   }
     * })
    **/
    count<T extends LeaseAgreementCountArgs>(
      args?: Subset<T, LeaseAgreementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeaseAgreementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LeaseAgreement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaseAgreementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LeaseAgreementAggregateArgs>(args: Subset<T, LeaseAgreementAggregateArgs>): Prisma.PrismaPromise<GetLeaseAgreementAggregateType<T>>

    /**
     * Group by LeaseAgreement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaseAgreementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LeaseAgreementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeaseAgreementGroupByArgs['orderBy'] }
        : { orderBy?: LeaseAgreementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LeaseAgreementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeaseAgreementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LeaseAgreement model
   */
  readonly fields: LeaseAgreementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LeaseAgreement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeaseAgreementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    property<T extends PropertyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropertyDefaultArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LeaseAgreement model
   */
  interface LeaseAgreementFieldRefs {
    readonly id: FieldRef<"LeaseAgreement", 'String'>
    readonly tenantId: FieldRef<"LeaseAgreement", 'String'>
    readonly propertyId: FieldRef<"LeaseAgreement", 'String'>
    readonly startDate: FieldRef<"LeaseAgreement", 'DateTime'>
    readonly endDate: FieldRef<"LeaseAgreement", 'DateTime'>
    readonly rentAmount: FieldRef<"LeaseAgreement", 'Float'>
    readonly securityDeposit: FieldRef<"LeaseAgreement", 'Float'>
    readonly terms: FieldRef<"LeaseAgreement", 'String'>
    readonly status: FieldRef<"LeaseAgreement", 'String'>
    readonly createdAt: FieldRef<"LeaseAgreement", 'DateTime'>
    readonly updatedAt: FieldRef<"LeaseAgreement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LeaseAgreement findUnique
   */
  export type LeaseAgreementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaseAgreement
     */
    select?: LeaseAgreementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaseAgreement
     */
    omit?: LeaseAgreementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseAgreementInclude<ExtArgs> | null
    /**
     * Filter, which LeaseAgreement to fetch.
     */
    where: LeaseAgreementWhereUniqueInput
  }

  /**
   * LeaseAgreement findUniqueOrThrow
   */
  export type LeaseAgreementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaseAgreement
     */
    select?: LeaseAgreementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaseAgreement
     */
    omit?: LeaseAgreementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseAgreementInclude<ExtArgs> | null
    /**
     * Filter, which LeaseAgreement to fetch.
     */
    where: LeaseAgreementWhereUniqueInput
  }

  /**
   * LeaseAgreement findFirst
   */
  export type LeaseAgreementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaseAgreement
     */
    select?: LeaseAgreementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaseAgreement
     */
    omit?: LeaseAgreementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseAgreementInclude<ExtArgs> | null
    /**
     * Filter, which LeaseAgreement to fetch.
     */
    where?: LeaseAgreementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaseAgreements to fetch.
     */
    orderBy?: LeaseAgreementOrderByWithRelationInput | LeaseAgreementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeaseAgreements.
     */
    cursor?: LeaseAgreementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaseAgreements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaseAgreements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeaseAgreements.
     */
    distinct?: LeaseAgreementScalarFieldEnum | LeaseAgreementScalarFieldEnum[]
  }

  /**
   * LeaseAgreement findFirstOrThrow
   */
  export type LeaseAgreementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaseAgreement
     */
    select?: LeaseAgreementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaseAgreement
     */
    omit?: LeaseAgreementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseAgreementInclude<ExtArgs> | null
    /**
     * Filter, which LeaseAgreement to fetch.
     */
    where?: LeaseAgreementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaseAgreements to fetch.
     */
    orderBy?: LeaseAgreementOrderByWithRelationInput | LeaseAgreementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeaseAgreements.
     */
    cursor?: LeaseAgreementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaseAgreements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaseAgreements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeaseAgreements.
     */
    distinct?: LeaseAgreementScalarFieldEnum | LeaseAgreementScalarFieldEnum[]
  }

  /**
   * LeaseAgreement findMany
   */
  export type LeaseAgreementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaseAgreement
     */
    select?: LeaseAgreementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaseAgreement
     */
    omit?: LeaseAgreementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseAgreementInclude<ExtArgs> | null
    /**
     * Filter, which LeaseAgreements to fetch.
     */
    where?: LeaseAgreementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaseAgreements to fetch.
     */
    orderBy?: LeaseAgreementOrderByWithRelationInput | LeaseAgreementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LeaseAgreements.
     */
    cursor?: LeaseAgreementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaseAgreements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaseAgreements.
     */
    skip?: number
    distinct?: LeaseAgreementScalarFieldEnum | LeaseAgreementScalarFieldEnum[]
  }

  /**
   * LeaseAgreement create
   */
  export type LeaseAgreementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaseAgreement
     */
    select?: LeaseAgreementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaseAgreement
     */
    omit?: LeaseAgreementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseAgreementInclude<ExtArgs> | null
    /**
     * The data needed to create a LeaseAgreement.
     */
    data: XOR<LeaseAgreementCreateInput, LeaseAgreementUncheckedCreateInput>
  }

  /**
   * LeaseAgreement createMany
   */
  export type LeaseAgreementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LeaseAgreements.
     */
    data: LeaseAgreementCreateManyInput | LeaseAgreementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LeaseAgreement createManyAndReturn
   */
  export type LeaseAgreementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaseAgreement
     */
    select?: LeaseAgreementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LeaseAgreement
     */
    omit?: LeaseAgreementOmit<ExtArgs> | null
    /**
     * The data used to create many LeaseAgreements.
     */
    data: LeaseAgreementCreateManyInput | LeaseAgreementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseAgreementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LeaseAgreement update
   */
  export type LeaseAgreementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaseAgreement
     */
    select?: LeaseAgreementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaseAgreement
     */
    omit?: LeaseAgreementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseAgreementInclude<ExtArgs> | null
    /**
     * The data needed to update a LeaseAgreement.
     */
    data: XOR<LeaseAgreementUpdateInput, LeaseAgreementUncheckedUpdateInput>
    /**
     * Choose, which LeaseAgreement to update.
     */
    where: LeaseAgreementWhereUniqueInput
  }

  /**
   * LeaseAgreement updateMany
   */
  export type LeaseAgreementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LeaseAgreements.
     */
    data: XOR<LeaseAgreementUpdateManyMutationInput, LeaseAgreementUncheckedUpdateManyInput>
    /**
     * Filter which LeaseAgreements to update
     */
    where?: LeaseAgreementWhereInput
    /**
     * Limit how many LeaseAgreements to update.
     */
    limit?: number
  }

  /**
   * LeaseAgreement updateManyAndReturn
   */
  export type LeaseAgreementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaseAgreement
     */
    select?: LeaseAgreementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LeaseAgreement
     */
    omit?: LeaseAgreementOmit<ExtArgs> | null
    /**
     * The data used to update LeaseAgreements.
     */
    data: XOR<LeaseAgreementUpdateManyMutationInput, LeaseAgreementUncheckedUpdateManyInput>
    /**
     * Filter which LeaseAgreements to update
     */
    where?: LeaseAgreementWhereInput
    /**
     * Limit how many LeaseAgreements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseAgreementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LeaseAgreement upsert
   */
  export type LeaseAgreementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaseAgreement
     */
    select?: LeaseAgreementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaseAgreement
     */
    omit?: LeaseAgreementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseAgreementInclude<ExtArgs> | null
    /**
     * The filter to search for the LeaseAgreement to update in case it exists.
     */
    where: LeaseAgreementWhereUniqueInput
    /**
     * In case the LeaseAgreement found by the `where` argument doesn't exist, create a new LeaseAgreement with this data.
     */
    create: XOR<LeaseAgreementCreateInput, LeaseAgreementUncheckedCreateInput>
    /**
     * In case the LeaseAgreement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeaseAgreementUpdateInput, LeaseAgreementUncheckedUpdateInput>
  }

  /**
   * LeaseAgreement delete
   */
  export type LeaseAgreementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaseAgreement
     */
    select?: LeaseAgreementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaseAgreement
     */
    omit?: LeaseAgreementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseAgreementInclude<ExtArgs> | null
    /**
     * Filter which LeaseAgreement to delete.
     */
    where: LeaseAgreementWhereUniqueInput
  }

  /**
   * LeaseAgreement deleteMany
   */
  export type LeaseAgreementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeaseAgreements to delete
     */
    where?: LeaseAgreementWhereInput
    /**
     * Limit how many LeaseAgreements to delete.
     */
    limit?: number
  }

  /**
   * LeaseAgreement without action
   */
  export type LeaseAgreementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaseAgreement
     */
    select?: LeaseAgreementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaseAgreement
     */
    omit?: LeaseAgreementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseAgreementInclude<ExtArgs> | null
  }


  /**
   * Model MaintenanceRequest
   */

  export type AggregateMaintenanceRequest = {
    _count: MaintenanceRequestCountAggregateOutputType | null
    _min: MaintenanceRequestMinAggregateOutputType | null
    _max: MaintenanceRequestMaxAggregateOutputType | null
  }

  export type MaintenanceRequestMinAggregateOutputType = {
    id: string | null
    propertyId: string | null
    tenantId: string | null
    type: string | null
    priority: string | null
    status: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MaintenanceRequestMaxAggregateOutputType = {
    id: string | null
    propertyId: string | null
    tenantId: string | null
    type: string | null
    priority: string | null
    status: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MaintenanceRequestCountAggregateOutputType = {
    id: number
    propertyId: number
    tenantId: number
    type: number
    priority: number
    status: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MaintenanceRequestMinAggregateInputType = {
    id?: true
    propertyId?: true
    tenantId?: true
    type?: true
    priority?: true
    status?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MaintenanceRequestMaxAggregateInputType = {
    id?: true
    propertyId?: true
    tenantId?: true
    type?: true
    priority?: true
    status?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MaintenanceRequestCountAggregateInputType = {
    id?: true
    propertyId?: true
    tenantId?: true
    type?: true
    priority?: true
    status?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MaintenanceRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MaintenanceRequest to aggregate.
     */
    where?: MaintenanceRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaintenanceRequests to fetch.
     */
    orderBy?: MaintenanceRequestOrderByWithRelationInput | MaintenanceRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MaintenanceRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaintenanceRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaintenanceRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MaintenanceRequests
    **/
    _count?: true | MaintenanceRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MaintenanceRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MaintenanceRequestMaxAggregateInputType
  }

  export type GetMaintenanceRequestAggregateType<T extends MaintenanceRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateMaintenanceRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaintenanceRequest[P]>
      : GetScalarType<T[P], AggregateMaintenanceRequest[P]>
  }




  export type MaintenanceRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaintenanceRequestWhereInput
    orderBy?: MaintenanceRequestOrderByWithAggregationInput | MaintenanceRequestOrderByWithAggregationInput[]
    by: MaintenanceRequestScalarFieldEnum[] | MaintenanceRequestScalarFieldEnum
    having?: MaintenanceRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MaintenanceRequestCountAggregateInputType | true
    _min?: MaintenanceRequestMinAggregateInputType
    _max?: MaintenanceRequestMaxAggregateInputType
  }

  export type MaintenanceRequestGroupByOutputType = {
    id: string
    propertyId: string
    tenantId: string
    type: string
    priority: string
    status: string
    description: string
    createdAt: Date
    updatedAt: Date
    _count: MaintenanceRequestCountAggregateOutputType | null
    _min: MaintenanceRequestMinAggregateOutputType | null
    _max: MaintenanceRequestMaxAggregateOutputType | null
  }

  type GetMaintenanceRequestGroupByPayload<T extends MaintenanceRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MaintenanceRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MaintenanceRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MaintenanceRequestGroupByOutputType[P]>
            : GetScalarType<T[P], MaintenanceRequestGroupByOutputType[P]>
        }
      >
    >


  export type MaintenanceRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    tenantId?: boolean
    type?: boolean
    priority?: boolean
    status?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["maintenanceRequest"]>

  export type MaintenanceRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    tenantId?: boolean
    type?: boolean
    priority?: boolean
    status?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["maintenanceRequest"]>

  export type MaintenanceRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    tenantId?: boolean
    type?: boolean
    priority?: boolean
    status?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["maintenanceRequest"]>

  export type MaintenanceRequestSelectScalar = {
    id?: boolean
    propertyId?: boolean
    tenantId?: boolean
    type?: boolean
    priority?: boolean
    status?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MaintenanceRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "propertyId" | "tenantId" | "type" | "priority" | "status" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["maintenanceRequest"]>
  export type MaintenanceRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type MaintenanceRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type MaintenanceRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }

  export type $MaintenanceRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MaintenanceRequest"
    objects: {
      property: Prisma.$PropertyPayload<ExtArgs>
      tenant: Prisma.$TenantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      propertyId: string
      tenantId: string
      type: string
      priority: string
      status: string
      description: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["maintenanceRequest"]>
    composites: {}
  }

  type MaintenanceRequestGetPayload<S extends boolean | null | undefined | MaintenanceRequestDefaultArgs> = $Result.GetResult<Prisma.$MaintenanceRequestPayload, S>

  type MaintenanceRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MaintenanceRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MaintenanceRequestCountAggregateInputType | true
    }

  export interface MaintenanceRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MaintenanceRequest'], meta: { name: 'MaintenanceRequest' } }
    /**
     * Find zero or one MaintenanceRequest that matches the filter.
     * @param {MaintenanceRequestFindUniqueArgs} args - Arguments to find a MaintenanceRequest
     * @example
     * // Get one MaintenanceRequest
     * const maintenanceRequest = await prisma.maintenanceRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MaintenanceRequestFindUniqueArgs>(args: SelectSubset<T, MaintenanceRequestFindUniqueArgs<ExtArgs>>): Prisma__MaintenanceRequestClient<$Result.GetResult<Prisma.$MaintenanceRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MaintenanceRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MaintenanceRequestFindUniqueOrThrowArgs} args - Arguments to find a MaintenanceRequest
     * @example
     * // Get one MaintenanceRequest
     * const maintenanceRequest = await prisma.maintenanceRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MaintenanceRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, MaintenanceRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MaintenanceRequestClient<$Result.GetResult<Prisma.$MaintenanceRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MaintenanceRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceRequestFindFirstArgs} args - Arguments to find a MaintenanceRequest
     * @example
     * // Get one MaintenanceRequest
     * const maintenanceRequest = await prisma.maintenanceRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MaintenanceRequestFindFirstArgs>(args?: SelectSubset<T, MaintenanceRequestFindFirstArgs<ExtArgs>>): Prisma__MaintenanceRequestClient<$Result.GetResult<Prisma.$MaintenanceRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MaintenanceRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceRequestFindFirstOrThrowArgs} args - Arguments to find a MaintenanceRequest
     * @example
     * // Get one MaintenanceRequest
     * const maintenanceRequest = await prisma.maintenanceRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MaintenanceRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, MaintenanceRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__MaintenanceRequestClient<$Result.GetResult<Prisma.$MaintenanceRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MaintenanceRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MaintenanceRequests
     * const maintenanceRequests = await prisma.maintenanceRequest.findMany()
     * 
     * // Get first 10 MaintenanceRequests
     * const maintenanceRequests = await prisma.maintenanceRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const maintenanceRequestWithIdOnly = await prisma.maintenanceRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MaintenanceRequestFindManyArgs>(args?: SelectSubset<T, MaintenanceRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenanceRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MaintenanceRequest.
     * @param {MaintenanceRequestCreateArgs} args - Arguments to create a MaintenanceRequest.
     * @example
     * // Create one MaintenanceRequest
     * const MaintenanceRequest = await prisma.maintenanceRequest.create({
     *   data: {
     *     // ... data to create a MaintenanceRequest
     *   }
     * })
     * 
     */
    create<T extends MaintenanceRequestCreateArgs>(args: SelectSubset<T, MaintenanceRequestCreateArgs<ExtArgs>>): Prisma__MaintenanceRequestClient<$Result.GetResult<Prisma.$MaintenanceRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MaintenanceRequests.
     * @param {MaintenanceRequestCreateManyArgs} args - Arguments to create many MaintenanceRequests.
     * @example
     * // Create many MaintenanceRequests
     * const maintenanceRequest = await prisma.maintenanceRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MaintenanceRequestCreateManyArgs>(args?: SelectSubset<T, MaintenanceRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MaintenanceRequests and returns the data saved in the database.
     * @param {MaintenanceRequestCreateManyAndReturnArgs} args - Arguments to create many MaintenanceRequests.
     * @example
     * // Create many MaintenanceRequests
     * const maintenanceRequest = await prisma.maintenanceRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MaintenanceRequests and only return the `id`
     * const maintenanceRequestWithIdOnly = await prisma.maintenanceRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MaintenanceRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, MaintenanceRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenanceRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MaintenanceRequest.
     * @param {MaintenanceRequestDeleteArgs} args - Arguments to delete one MaintenanceRequest.
     * @example
     * // Delete one MaintenanceRequest
     * const MaintenanceRequest = await prisma.maintenanceRequest.delete({
     *   where: {
     *     // ... filter to delete one MaintenanceRequest
     *   }
     * })
     * 
     */
    delete<T extends MaintenanceRequestDeleteArgs>(args: SelectSubset<T, MaintenanceRequestDeleteArgs<ExtArgs>>): Prisma__MaintenanceRequestClient<$Result.GetResult<Prisma.$MaintenanceRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MaintenanceRequest.
     * @param {MaintenanceRequestUpdateArgs} args - Arguments to update one MaintenanceRequest.
     * @example
     * // Update one MaintenanceRequest
     * const maintenanceRequest = await prisma.maintenanceRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MaintenanceRequestUpdateArgs>(args: SelectSubset<T, MaintenanceRequestUpdateArgs<ExtArgs>>): Prisma__MaintenanceRequestClient<$Result.GetResult<Prisma.$MaintenanceRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MaintenanceRequests.
     * @param {MaintenanceRequestDeleteManyArgs} args - Arguments to filter MaintenanceRequests to delete.
     * @example
     * // Delete a few MaintenanceRequests
     * const { count } = await prisma.maintenanceRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MaintenanceRequestDeleteManyArgs>(args?: SelectSubset<T, MaintenanceRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MaintenanceRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MaintenanceRequests
     * const maintenanceRequest = await prisma.maintenanceRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MaintenanceRequestUpdateManyArgs>(args: SelectSubset<T, MaintenanceRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MaintenanceRequests and returns the data updated in the database.
     * @param {MaintenanceRequestUpdateManyAndReturnArgs} args - Arguments to update many MaintenanceRequests.
     * @example
     * // Update many MaintenanceRequests
     * const maintenanceRequest = await prisma.maintenanceRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MaintenanceRequests and only return the `id`
     * const maintenanceRequestWithIdOnly = await prisma.maintenanceRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MaintenanceRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, MaintenanceRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenanceRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MaintenanceRequest.
     * @param {MaintenanceRequestUpsertArgs} args - Arguments to update or create a MaintenanceRequest.
     * @example
     * // Update or create a MaintenanceRequest
     * const maintenanceRequest = await prisma.maintenanceRequest.upsert({
     *   create: {
     *     // ... data to create a MaintenanceRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MaintenanceRequest we want to update
     *   }
     * })
     */
    upsert<T extends MaintenanceRequestUpsertArgs>(args: SelectSubset<T, MaintenanceRequestUpsertArgs<ExtArgs>>): Prisma__MaintenanceRequestClient<$Result.GetResult<Prisma.$MaintenanceRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MaintenanceRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceRequestCountArgs} args - Arguments to filter MaintenanceRequests to count.
     * @example
     * // Count the number of MaintenanceRequests
     * const count = await prisma.maintenanceRequest.count({
     *   where: {
     *     // ... the filter for the MaintenanceRequests we want to count
     *   }
     * })
    **/
    count<T extends MaintenanceRequestCountArgs>(
      args?: Subset<T, MaintenanceRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MaintenanceRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MaintenanceRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MaintenanceRequestAggregateArgs>(args: Subset<T, MaintenanceRequestAggregateArgs>): Prisma.PrismaPromise<GetMaintenanceRequestAggregateType<T>>

    /**
     * Group by MaintenanceRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MaintenanceRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MaintenanceRequestGroupByArgs['orderBy'] }
        : { orderBy?: MaintenanceRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MaintenanceRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaintenanceRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MaintenanceRequest model
   */
  readonly fields: MaintenanceRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MaintenanceRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MaintenanceRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    property<T extends PropertyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropertyDefaultArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MaintenanceRequest model
   */
  interface MaintenanceRequestFieldRefs {
    readonly id: FieldRef<"MaintenanceRequest", 'String'>
    readonly propertyId: FieldRef<"MaintenanceRequest", 'String'>
    readonly tenantId: FieldRef<"MaintenanceRequest", 'String'>
    readonly type: FieldRef<"MaintenanceRequest", 'String'>
    readonly priority: FieldRef<"MaintenanceRequest", 'String'>
    readonly status: FieldRef<"MaintenanceRequest", 'String'>
    readonly description: FieldRef<"MaintenanceRequest", 'String'>
    readonly createdAt: FieldRef<"MaintenanceRequest", 'DateTime'>
    readonly updatedAt: FieldRef<"MaintenanceRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MaintenanceRequest findUnique
   */
  export type MaintenanceRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRequest
     */
    select?: MaintenanceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRequest
     */
    omit?: MaintenanceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRequestInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceRequest to fetch.
     */
    where: MaintenanceRequestWhereUniqueInput
  }

  /**
   * MaintenanceRequest findUniqueOrThrow
   */
  export type MaintenanceRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRequest
     */
    select?: MaintenanceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRequest
     */
    omit?: MaintenanceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRequestInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceRequest to fetch.
     */
    where: MaintenanceRequestWhereUniqueInput
  }

  /**
   * MaintenanceRequest findFirst
   */
  export type MaintenanceRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRequest
     */
    select?: MaintenanceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRequest
     */
    omit?: MaintenanceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRequestInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceRequest to fetch.
     */
    where?: MaintenanceRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaintenanceRequests to fetch.
     */
    orderBy?: MaintenanceRequestOrderByWithRelationInput | MaintenanceRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MaintenanceRequests.
     */
    cursor?: MaintenanceRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaintenanceRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaintenanceRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MaintenanceRequests.
     */
    distinct?: MaintenanceRequestScalarFieldEnum | MaintenanceRequestScalarFieldEnum[]
  }

  /**
   * MaintenanceRequest findFirstOrThrow
   */
  export type MaintenanceRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRequest
     */
    select?: MaintenanceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRequest
     */
    omit?: MaintenanceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRequestInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceRequest to fetch.
     */
    where?: MaintenanceRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaintenanceRequests to fetch.
     */
    orderBy?: MaintenanceRequestOrderByWithRelationInput | MaintenanceRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MaintenanceRequests.
     */
    cursor?: MaintenanceRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaintenanceRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaintenanceRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MaintenanceRequests.
     */
    distinct?: MaintenanceRequestScalarFieldEnum | MaintenanceRequestScalarFieldEnum[]
  }

  /**
   * MaintenanceRequest findMany
   */
  export type MaintenanceRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRequest
     */
    select?: MaintenanceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRequest
     */
    omit?: MaintenanceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRequestInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceRequests to fetch.
     */
    where?: MaintenanceRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaintenanceRequests to fetch.
     */
    orderBy?: MaintenanceRequestOrderByWithRelationInput | MaintenanceRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MaintenanceRequests.
     */
    cursor?: MaintenanceRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaintenanceRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaintenanceRequests.
     */
    skip?: number
    distinct?: MaintenanceRequestScalarFieldEnum | MaintenanceRequestScalarFieldEnum[]
  }

  /**
   * MaintenanceRequest create
   */
  export type MaintenanceRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRequest
     */
    select?: MaintenanceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRequest
     */
    omit?: MaintenanceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a MaintenanceRequest.
     */
    data: XOR<MaintenanceRequestCreateInput, MaintenanceRequestUncheckedCreateInput>
  }

  /**
   * MaintenanceRequest createMany
   */
  export type MaintenanceRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MaintenanceRequests.
     */
    data: MaintenanceRequestCreateManyInput | MaintenanceRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MaintenanceRequest createManyAndReturn
   */
  export type MaintenanceRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRequest
     */
    select?: MaintenanceRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRequest
     */
    omit?: MaintenanceRequestOmit<ExtArgs> | null
    /**
     * The data used to create many MaintenanceRequests.
     */
    data: MaintenanceRequestCreateManyInput | MaintenanceRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MaintenanceRequest update
   */
  export type MaintenanceRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRequest
     */
    select?: MaintenanceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRequest
     */
    omit?: MaintenanceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a MaintenanceRequest.
     */
    data: XOR<MaintenanceRequestUpdateInput, MaintenanceRequestUncheckedUpdateInput>
    /**
     * Choose, which MaintenanceRequest to update.
     */
    where: MaintenanceRequestWhereUniqueInput
  }

  /**
   * MaintenanceRequest updateMany
   */
  export type MaintenanceRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MaintenanceRequests.
     */
    data: XOR<MaintenanceRequestUpdateManyMutationInput, MaintenanceRequestUncheckedUpdateManyInput>
    /**
     * Filter which MaintenanceRequests to update
     */
    where?: MaintenanceRequestWhereInput
    /**
     * Limit how many MaintenanceRequests to update.
     */
    limit?: number
  }

  /**
   * MaintenanceRequest updateManyAndReturn
   */
  export type MaintenanceRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRequest
     */
    select?: MaintenanceRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRequest
     */
    omit?: MaintenanceRequestOmit<ExtArgs> | null
    /**
     * The data used to update MaintenanceRequests.
     */
    data: XOR<MaintenanceRequestUpdateManyMutationInput, MaintenanceRequestUncheckedUpdateManyInput>
    /**
     * Filter which MaintenanceRequests to update
     */
    where?: MaintenanceRequestWhereInput
    /**
     * Limit how many MaintenanceRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MaintenanceRequest upsert
   */
  export type MaintenanceRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRequest
     */
    select?: MaintenanceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRequest
     */
    omit?: MaintenanceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the MaintenanceRequest to update in case it exists.
     */
    where: MaintenanceRequestWhereUniqueInput
    /**
     * In case the MaintenanceRequest found by the `where` argument doesn't exist, create a new MaintenanceRequest with this data.
     */
    create: XOR<MaintenanceRequestCreateInput, MaintenanceRequestUncheckedCreateInput>
    /**
     * In case the MaintenanceRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MaintenanceRequestUpdateInput, MaintenanceRequestUncheckedUpdateInput>
  }

  /**
   * MaintenanceRequest delete
   */
  export type MaintenanceRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRequest
     */
    select?: MaintenanceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRequest
     */
    omit?: MaintenanceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRequestInclude<ExtArgs> | null
    /**
     * Filter which MaintenanceRequest to delete.
     */
    where: MaintenanceRequestWhereUniqueInput
  }

  /**
   * MaintenanceRequest deleteMany
   */
  export type MaintenanceRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MaintenanceRequests to delete
     */
    where?: MaintenanceRequestWhereInput
    /**
     * Limit how many MaintenanceRequests to delete.
     */
    limit?: number
  }

  /**
   * MaintenanceRequest without action
   */
  export type MaintenanceRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRequest
     */
    select?: MaintenanceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRequest
     */
    omit?: MaintenanceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRequestInclude<ExtArgs> | null
  }


  /**
   * Model Document
   */

  export type AggregateDocument = {
    _count: DocumentCountAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  export type DocumentMinAggregateOutputType = {
    id: string | null
    type: string | null
    filePath: string | null
    fileName: string | null
    uploadDate: Date | null
    status: string | null
    tenantId: string | null
    propertyId: string | null
  }

  export type DocumentMaxAggregateOutputType = {
    id: string | null
    type: string | null
    filePath: string | null
    fileName: string | null
    uploadDate: Date | null
    status: string | null
    tenantId: string | null
    propertyId: string | null
  }

  export type DocumentCountAggregateOutputType = {
    id: number
    type: number
    filePath: number
    fileName: number
    uploadDate: number
    status: number
    tenantId: number
    propertyId: number
    _all: number
  }


  export type DocumentMinAggregateInputType = {
    id?: true
    type?: true
    filePath?: true
    fileName?: true
    uploadDate?: true
    status?: true
    tenantId?: true
    propertyId?: true
  }

  export type DocumentMaxAggregateInputType = {
    id?: true
    type?: true
    filePath?: true
    fileName?: true
    uploadDate?: true
    status?: true
    tenantId?: true
    propertyId?: true
  }

  export type DocumentCountAggregateInputType = {
    id?: true
    type?: true
    filePath?: true
    fileName?: true
    uploadDate?: true
    status?: true
    tenantId?: true
    propertyId?: true
    _all?: true
  }

  export type DocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Document to aggregate.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Documents
    **/
    _count?: true | DocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentMaxAggregateInputType
  }

  export type GetDocumentAggregateType<T extends DocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocument[P]>
      : GetScalarType<T[P], AggregateDocument[P]>
  }




  export type DocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithAggregationInput | DocumentOrderByWithAggregationInput[]
    by: DocumentScalarFieldEnum[] | DocumentScalarFieldEnum
    having?: DocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentCountAggregateInputType | true
    _min?: DocumentMinAggregateInputType
    _max?: DocumentMaxAggregateInputType
  }

  export type DocumentGroupByOutputType = {
    id: string
    type: string
    filePath: string
    fileName: string
    uploadDate: Date
    status: string
    tenantId: string | null
    propertyId: string | null
    _count: DocumentCountAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  type GetDocumentGroupByPayload<T extends DocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentGroupByOutputType[P]>
        }
      >
    >


  export type DocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    filePath?: boolean
    fileName?: boolean
    uploadDate?: boolean
    status?: boolean
    tenantId?: boolean
    propertyId?: boolean
    tenant?: boolean | Document$tenantArgs<ExtArgs>
    property?: boolean | Document$propertyArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    filePath?: boolean
    fileName?: boolean
    uploadDate?: boolean
    status?: boolean
    tenantId?: boolean
    propertyId?: boolean
    tenant?: boolean | Document$tenantArgs<ExtArgs>
    property?: boolean | Document$propertyArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    filePath?: boolean
    fileName?: boolean
    uploadDate?: boolean
    status?: boolean
    tenantId?: boolean
    propertyId?: boolean
    tenant?: boolean | Document$tenantArgs<ExtArgs>
    property?: boolean | Document$propertyArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectScalar = {
    id?: boolean
    type?: boolean
    filePath?: boolean
    fileName?: boolean
    uploadDate?: boolean
    status?: boolean
    tenantId?: boolean
    propertyId?: boolean
  }

  export type DocumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "filePath" | "fileName" | "uploadDate" | "status" | "tenantId" | "propertyId", ExtArgs["result"]["document"]>
  export type DocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | Document$tenantArgs<ExtArgs>
    property?: boolean | Document$propertyArgs<ExtArgs>
  }
  export type DocumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | Document$tenantArgs<ExtArgs>
    property?: boolean | Document$propertyArgs<ExtArgs>
  }
  export type DocumentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | Document$tenantArgs<ExtArgs>
    property?: boolean | Document$propertyArgs<ExtArgs>
  }

  export type $DocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Document"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs> | null
      property: Prisma.$PropertyPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: string
      filePath: string
      fileName: string
      uploadDate: Date
      status: string
      tenantId: string | null
      propertyId: string | null
    }, ExtArgs["result"]["document"]>
    composites: {}
  }

  type DocumentGetPayload<S extends boolean | null | undefined | DocumentDefaultArgs> = $Result.GetResult<Prisma.$DocumentPayload, S>

  type DocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentCountAggregateInputType | true
    }

  export interface DocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Document'], meta: { name: 'Document' } }
    /**
     * Find zero or one Document that matches the filter.
     * @param {DocumentFindUniqueArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentFindUniqueArgs>(args: SelectSubset<T, DocumentFindUniqueArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Document that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentFindUniqueOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentFindFirstArgs>(args?: SelectSubset<T, DocumentFindFirstArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Documents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Documents
     * const documents = await prisma.document.findMany()
     * 
     * // Get first 10 Documents
     * const documents = await prisma.document.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentWithIdOnly = await prisma.document.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocumentFindManyArgs>(args?: SelectSubset<T, DocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Document.
     * @param {DocumentCreateArgs} args - Arguments to create a Document.
     * @example
     * // Create one Document
     * const Document = await prisma.document.create({
     *   data: {
     *     // ... data to create a Document
     *   }
     * })
     * 
     */
    create<T extends DocumentCreateArgs>(args: SelectSubset<T, DocumentCreateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Documents.
     * @param {DocumentCreateManyArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentCreateManyArgs>(args?: SelectSubset<T, DocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Documents and returns the data saved in the database.
     * @param {DocumentCreateManyAndReturnArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Documents and only return the `id`
     * const documentWithIdOnly = await prisma.document.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocumentCreateManyAndReturnArgs>(args?: SelectSubset<T, DocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Document.
     * @param {DocumentDeleteArgs} args - Arguments to delete one Document.
     * @example
     * // Delete one Document
     * const Document = await prisma.document.delete({
     *   where: {
     *     // ... filter to delete one Document
     *   }
     * })
     * 
     */
    delete<T extends DocumentDeleteArgs>(args: SelectSubset<T, DocumentDeleteArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Document.
     * @param {DocumentUpdateArgs} args - Arguments to update one Document.
     * @example
     * // Update one Document
     * const document = await prisma.document.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentUpdateArgs>(args: SelectSubset<T, DocumentUpdateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Documents.
     * @param {DocumentDeleteManyArgs} args - Arguments to filter Documents to delete.
     * @example
     * // Delete a few Documents
     * const { count } = await prisma.document.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentDeleteManyArgs>(args?: SelectSubset<T, DocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentUpdateManyArgs>(args: SelectSubset<T, DocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents and returns the data updated in the database.
     * @param {DocumentUpdateManyAndReturnArgs} args - Arguments to update many Documents.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Documents and only return the `id`
     * const documentWithIdOnly = await prisma.document.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DocumentUpdateManyAndReturnArgs>(args: SelectSubset<T, DocumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Document.
     * @param {DocumentUpsertArgs} args - Arguments to update or create a Document.
     * @example
     * // Update or create a Document
     * const document = await prisma.document.upsert({
     *   create: {
     *     // ... data to create a Document
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Document we want to update
     *   }
     * })
     */
    upsert<T extends DocumentUpsertArgs>(args: SelectSubset<T, DocumentUpsertArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentCountArgs} args - Arguments to filter Documents to count.
     * @example
     * // Count the number of Documents
     * const count = await prisma.document.count({
     *   where: {
     *     // ... the filter for the Documents we want to count
     *   }
     * })
    **/
    count<T extends DocumentCountArgs>(
      args?: Subset<T, DocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DocumentAggregateArgs>(args: Subset<T, DocumentAggregateArgs>): Prisma.PrismaPromise<GetDocumentAggregateType<T>>

    /**
     * Group by Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentGroupByArgs['orderBy'] }
        : { orderBy?: DocumentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Document model
   */
  readonly fields: DocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Document.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends Document$tenantArgs<ExtArgs> = {}>(args?: Subset<T, Document$tenantArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    property<T extends Document$propertyArgs<ExtArgs> = {}>(args?: Subset<T, Document$propertyArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Document model
   */
  interface DocumentFieldRefs {
    readonly id: FieldRef<"Document", 'String'>
    readonly type: FieldRef<"Document", 'String'>
    readonly filePath: FieldRef<"Document", 'String'>
    readonly fileName: FieldRef<"Document", 'String'>
    readonly uploadDate: FieldRef<"Document", 'DateTime'>
    readonly status: FieldRef<"Document", 'String'>
    readonly tenantId: FieldRef<"Document", 'String'>
    readonly propertyId: FieldRef<"Document", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Document findUnique
   */
  export type DocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findUniqueOrThrow
   */
  export type DocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findFirst
   */
  export type DocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findFirstOrThrow
   */
  export type DocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findMany
   */
  export type DocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Documents to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document create
   */
  export type DocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a Document.
     */
    data: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
  }

  /**
   * Document createMany
   */
  export type DocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Documents.
     */
    data: DocumentCreateManyInput | DocumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Document createManyAndReturn
   */
  export type DocumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * The data used to create many Documents.
     */
    data: DocumentCreateManyInput | DocumentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Document update
   */
  export type DocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a Document.
     */
    data: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
    /**
     * Choose, which Document to update.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document updateMany
   */
  export type DocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to update.
     */
    limit?: number
  }

  /**
   * Document updateManyAndReturn
   */
  export type DocumentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Document upsert
   */
  export type DocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the Document to update in case it exists.
     */
    where: DocumentWhereUniqueInput
    /**
     * In case the Document found by the `where` argument doesn't exist, create a new Document with this data.
     */
    create: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
    /**
     * In case the Document was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
  }

  /**
   * Document delete
   */
  export type DocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter which Document to delete.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document deleteMany
   */
  export type DocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Documents to delete
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to delete.
     */
    limit?: number
  }

  /**
   * Document.tenant
   */
  export type Document$tenantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    where?: TenantWhereInput
  }

  /**
   * Document.property
   */
  export type Document$propertyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    where?: PropertyWhereInput
  }

  /**
   * Document without action
   */
  export type DocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    type: string | null
    message: string | null
    read: boolean | null
    priority: string | null
    createdAt: Date | null
    tenantId: string | null
    propertyId: string | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    type: string | null
    message: string | null
    read: boolean | null
    priority: string | null
    createdAt: Date | null
    tenantId: string | null
    propertyId: string | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    type: number
    message: number
    read: number
    priority: number
    createdAt: number
    tenantId: number
    propertyId: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    type?: true
    message?: true
    read?: true
    priority?: true
    createdAt?: true
    tenantId?: true
    propertyId?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    type?: true
    message?: true
    read?: true
    priority?: true
    createdAt?: true
    tenantId?: true
    propertyId?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    type?: true
    message?: true
    read?: true
    priority?: true
    createdAt?: true
    tenantId?: true
    propertyId?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    type: string
    message: string
    read: boolean
    priority: string
    createdAt: Date
    tenantId: string | null
    propertyId: string | null
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    message?: boolean
    read?: boolean
    priority?: boolean
    createdAt?: boolean
    tenantId?: boolean
    propertyId?: boolean
    tenant?: boolean | Notification$tenantArgs<ExtArgs>
    property?: boolean | Notification$propertyArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    message?: boolean
    read?: boolean
    priority?: boolean
    createdAt?: boolean
    tenantId?: boolean
    propertyId?: boolean
    tenant?: boolean | Notification$tenantArgs<ExtArgs>
    property?: boolean | Notification$propertyArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    message?: boolean
    read?: boolean
    priority?: boolean
    createdAt?: boolean
    tenantId?: boolean
    propertyId?: boolean
    tenant?: boolean | Notification$tenantArgs<ExtArgs>
    property?: boolean | Notification$propertyArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    type?: boolean
    message?: boolean
    read?: boolean
    priority?: boolean
    createdAt?: boolean
    tenantId?: boolean
    propertyId?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "message" | "read" | "priority" | "createdAt" | "tenantId" | "propertyId", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | Notification$tenantArgs<ExtArgs>
    property?: boolean | Notification$propertyArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | Notification$tenantArgs<ExtArgs>
    property?: boolean | Notification$propertyArgs<ExtArgs>
  }
  export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | Notification$tenantArgs<ExtArgs>
    property?: boolean | Notification$propertyArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs> | null
      property: Prisma.$PropertyPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: string
      message: string
      read: boolean
      priority: string
      createdAt: Date
      tenantId: string | null
      propertyId: string | null
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends Notification$tenantArgs<ExtArgs> = {}>(args?: Subset<T, Notification$tenantArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    property<T extends Notification$propertyArgs<ExtArgs> = {}>(args?: Subset<T, Notification$propertyArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly type: FieldRef<"Notification", 'String'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly read: FieldRef<"Notification", 'Boolean'>
    readonly priority: FieldRef<"Notification", 'String'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
    readonly tenantId: FieldRef<"Notification", 'String'>
    readonly propertyId: FieldRef<"Notification", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification.tenant
   */
  export type Notification$tenantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    where?: TenantWhereInput
  }

  /**
   * Notification.property
   */
  export type Notification$propertyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    where?: PropertyWhereInput
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TenantScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    address: 'address',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TenantScalarFieldEnum = (typeof TenantScalarFieldEnum)[keyof typeof TenantScalarFieldEnum]


  export const PropertyScalarFieldEnum: {
    id: 'id',
    address: 'address',
    type: 'type',
    size: 'size',
    bedrooms: 'bedrooms',
    bathrooms: 'bathrooms',
    amenities: 'amenities',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PropertyScalarFieldEnum = (typeof PropertyScalarFieldEnum)[keyof typeof PropertyScalarFieldEnum]


  export const InvoiceScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    propertyId: 'propertyId',
    amount: 'amount',
    paidAmount: 'paidAmount',
    dueDate: 'dueDate',
    status: 'status',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InvoiceScalarFieldEnum = (typeof InvoiceScalarFieldEnum)[keyof typeof InvoiceScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    invoiceId: 'invoiceId',
    tenantId: 'tenantId',
    amount: 'amount',
    status: 'status',
    paymentDate: 'paymentDate',
    method: 'method',
    reference: 'reference',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const LeaseAgreementScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    propertyId: 'propertyId',
    startDate: 'startDate',
    endDate: 'endDate',
    rentAmount: 'rentAmount',
    securityDeposit: 'securityDeposit',
    terms: 'terms',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LeaseAgreementScalarFieldEnum = (typeof LeaseAgreementScalarFieldEnum)[keyof typeof LeaseAgreementScalarFieldEnum]


  export const MaintenanceRequestScalarFieldEnum: {
    id: 'id',
    propertyId: 'propertyId',
    tenantId: 'tenantId',
    type: 'type',
    priority: 'priority',
    status: 'status',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MaintenanceRequestScalarFieldEnum = (typeof MaintenanceRequestScalarFieldEnum)[keyof typeof MaintenanceRequestScalarFieldEnum]


  export const DocumentScalarFieldEnum: {
    id: 'id',
    type: 'type',
    filePath: 'filePath',
    fileName: 'fileName',
    uploadDate: 'uploadDate',
    status: 'status',
    tenantId: 'tenantId',
    propertyId: 'propertyId'
  };

  export type DocumentScalarFieldEnum = (typeof DocumentScalarFieldEnum)[keyof typeof DocumentScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    type: 'type',
    message: 'message',
    read: 'read',
    priority: 'priority',
    createdAt: 'createdAt',
    tenantId: 'tenantId',
    propertyId: 'propertyId'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type TenantWhereInput = {
    AND?: TenantWhereInput | TenantWhereInput[]
    OR?: TenantWhereInput[]
    NOT?: TenantWhereInput | TenantWhereInput[]
    id?: StringFilter<"Tenant"> | string
    name?: StringFilter<"Tenant"> | string
    email?: StringFilter<"Tenant"> | string
    phone?: StringNullableFilter<"Tenant"> | string | null
    address?: StringNullableFilter<"Tenant"> | string | null
    createdAt?: DateTimeFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeFilter<"Tenant"> | Date | string
    invoices?: InvoiceListRelationFilter
    payments?: PaymentListRelationFilter
    properties?: PropertyListRelationFilter
    leaseAgreements?: LeaseAgreementListRelationFilter
    maintenanceRequests?: MaintenanceRequestListRelationFilter
    documents?: DocumentListRelationFilter
    notifications?: NotificationListRelationFilter
  }

  export type TenantOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    invoices?: InvoiceOrderByRelationAggregateInput
    payments?: PaymentOrderByRelationAggregateInput
    properties?: PropertyOrderByRelationAggregateInput
    leaseAgreements?: LeaseAgreementOrderByRelationAggregateInput
    maintenanceRequests?: MaintenanceRequestOrderByRelationAggregateInput
    documents?: DocumentOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
  }

  export type TenantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: TenantWhereInput | TenantWhereInput[]
    OR?: TenantWhereInput[]
    NOT?: TenantWhereInput | TenantWhereInput[]
    name?: StringFilter<"Tenant"> | string
    phone?: StringNullableFilter<"Tenant"> | string | null
    address?: StringNullableFilter<"Tenant"> | string | null
    createdAt?: DateTimeFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeFilter<"Tenant"> | Date | string
    invoices?: InvoiceListRelationFilter
    payments?: PaymentListRelationFilter
    properties?: PropertyListRelationFilter
    leaseAgreements?: LeaseAgreementListRelationFilter
    maintenanceRequests?: MaintenanceRequestListRelationFilter
    documents?: DocumentListRelationFilter
    notifications?: NotificationListRelationFilter
  }, "id" | "email">

  export type TenantOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TenantCountOrderByAggregateInput
    _max?: TenantMaxOrderByAggregateInput
    _min?: TenantMinOrderByAggregateInput
  }

  export type TenantScalarWhereWithAggregatesInput = {
    AND?: TenantScalarWhereWithAggregatesInput | TenantScalarWhereWithAggregatesInput[]
    OR?: TenantScalarWhereWithAggregatesInput[]
    NOT?: TenantScalarWhereWithAggregatesInput | TenantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tenant"> | string
    name?: StringWithAggregatesFilter<"Tenant"> | string
    email?: StringWithAggregatesFilter<"Tenant"> | string
    phone?: StringNullableWithAggregatesFilter<"Tenant"> | string | null
    address?: StringNullableWithAggregatesFilter<"Tenant"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tenant"> | Date | string
  }

  export type PropertyWhereInput = {
    AND?: PropertyWhereInput | PropertyWhereInput[]
    OR?: PropertyWhereInput[]
    NOT?: PropertyWhereInput | PropertyWhereInput[]
    id?: StringFilter<"Property"> | string
    address?: StringFilter<"Property"> | string
    type?: StringFilter<"Property"> | string
    size?: FloatNullableFilter<"Property"> | number | null
    bedrooms?: IntNullableFilter<"Property"> | number | null
    bathrooms?: FloatNullableFilter<"Property"> | number | null
    amenities?: StringNullableListFilter<"Property">
    status?: StringFilter<"Property"> | string
    createdAt?: DateTimeFilter<"Property"> | Date | string
    updatedAt?: DateTimeFilter<"Property"> | Date | string
    tenants?: TenantListRelationFilter
    invoices?: InvoiceListRelationFilter
    maintenanceRequests?: MaintenanceRequestListRelationFilter
    documents?: DocumentListRelationFilter
    leaseAgreements?: LeaseAgreementListRelationFilter
    notifications?: NotificationListRelationFilter
  }

  export type PropertyOrderByWithRelationInput = {
    id?: SortOrder
    address?: SortOrder
    type?: SortOrder
    size?: SortOrderInput | SortOrder
    bedrooms?: SortOrderInput | SortOrder
    bathrooms?: SortOrderInput | SortOrder
    amenities?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenants?: TenantOrderByRelationAggregateInput
    invoices?: InvoiceOrderByRelationAggregateInput
    maintenanceRequests?: MaintenanceRequestOrderByRelationAggregateInput
    documents?: DocumentOrderByRelationAggregateInput
    leaseAgreements?: LeaseAgreementOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
  }

  export type PropertyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PropertyWhereInput | PropertyWhereInput[]
    OR?: PropertyWhereInput[]
    NOT?: PropertyWhereInput | PropertyWhereInput[]
    address?: StringFilter<"Property"> | string
    type?: StringFilter<"Property"> | string
    size?: FloatNullableFilter<"Property"> | number | null
    bedrooms?: IntNullableFilter<"Property"> | number | null
    bathrooms?: FloatNullableFilter<"Property"> | number | null
    amenities?: StringNullableListFilter<"Property">
    status?: StringFilter<"Property"> | string
    createdAt?: DateTimeFilter<"Property"> | Date | string
    updatedAt?: DateTimeFilter<"Property"> | Date | string
    tenants?: TenantListRelationFilter
    invoices?: InvoiceListRelationFilter
    maintenanceRequests?: MaintenanceRequestListRelationFilter
    documents?: DocumentListRelationFilter
    leaseAgreements?: LeaseAgreementListRelationFilter
    notifications?: NotificationListRelationFilter
  }, "id">

  export type PropertyOrderByWithAggregationInput = {
    id?: SortOrder
    address?: SortOrder
    type?: SortOrder
    size?: SortOrderInput | SortOrder
    bedrooms?: SortOrderInput | SortOrder
    bathrooms?: SortOrderInput | SortOrder
    amenities?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PropertyCountOrderByAggregateInput
    _avg?: PropertyAvgOrderByAggregateInput
    _max?: PropertyMaxOrderByAggregateInput
    _min?: PropertyMinOrderByAggregateInput
    _sum?: PropertySumOrderByAggregateInput
  }

  export type PropertyScalarWhereWithAggregatesInput = {
    AND?: PropertyScalarWhereWithAggregatesInput | PropertyScalarWhereWithAggregatesInput[]
    OR?: PropertyScalarWhereWithAggregatesInput[]
    NOT?: PropertyScalarWhereWithAggregatesInput | PropertyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Property"> | string
    address?: StringWithAggregatesFilter<"Property"> | string
    type?: StringWithAggregatesFilter<"Property"> | string
    size?: FloatNullableWithAggregatesFilter<"Property"> | number | null
    bedrooms?: IntNullableWithAggregatesFilter<"Property"> | number | null
    bathrooms?: FloatNullableWithAggregatesFilter<"Property"> | number | null
    amenities?: StringNullableListFilter<"Property">
    status?: StringWithAggregatesFilter<"Property"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Property"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Property"> | Date | string
  }

  export type InvoiceWhereInput = {
    AND?: InvoiceWhereInput | InvoiceWhereInput[]
    OR?: InvoiceWhereInput[]
    NOT?: InvoiceWhereInput | InvoiceWhereInput[]
    id?: StringFilter<"Invoice"> | string
    tenantId?: StringFilter<"Invoice"> | string
    propertyId?: StringFilter<"Invoice"> | string
    amount?: FloatFilter<"Invoice"> | number
    paidAmount?: FloatFilter<"Invoice"> | number
    dueDate?: DateTimeFilter<"Invoice"> | Date | string
    status?: StringFilter<"Invoice"> | string
    description?: StringNullableFilter<"Invoice"> | string | null
    createdAt?: DateTimeFilter<"Invoice"> | Date | string
    updatedAt?: DateTimeFilter<"Invoice"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
    payments?: PaymentListRelationFilter
  }

  export type InvoiceOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    propertyId?: SortOrder
    amount?: SortOrder
    paidAmount?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenant?: TenantOrderByWithRelationInput
    property?: PropertyOrderByWithRelationInput
    payments?: PaymentOrderByRelationAggregateInput
  }

  export type InvoiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InvoiceWhereInput | InvoiceWhereInput[]
    OR?: InvoiceWhereInput[]
    NOT?: InvoiceWhereInput | InvoiceWhereInput[]
    tenantId?: StringFilter<"Invoice"> | string
    propertyId?: StringFilter<"Invoice"> | string
    amount?: FloatFilter<"Invoice"> | number
    paidAmount?: FloatFilter<"Invoice"> | number
    dueDate?: DateTimeFilter<"Invoice"> | Date | string
    status?: StringFilter<"Invoice"> | string
    description?: StringNullableFilter<"Invoice"> | string | null
    createdAt?: DateTimeFilter<"Invoice"> | Date | string
    updatedAt?: DateTimeFilter<"Invoice"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
    payments?: PaymentListRelationFilter
  }, "id">

  export type InvoiceOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    propertyId?: SortOrder
    amount?: SortOrder
    paidAmount?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InvoiceCountOrderByAggregateInput
    _avg?: InvoiceAvgOrderByAggregateInput
    _max?: InvoiceMaxOrderByAggregateInput
    _min?: InvoiceMinOrderByAggregateInput
    _sum?: InvoiceSumOrderByAggregateInput
  }

  export type InvoiceScalarWhereWithAggregatesInput = {
    AND?: InvoiceScalarWhereWithAggregatesInput | InvoiceScalarWhereWithAggregatesInput[]
    OR?: InvoiceScalarWhereWithAggregatesInput[]
    NOT?: InvoiceScalarWhereWithAggregatesInput | InvoiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Invoice"> | string
    tenantId?: StringWithAggregatesFilter<"Invoice"> | string
    propertyId?: StringWithAggregatesFilter<"Invoice"> | string
    amount?: FloatWithAggregatesFilter<"Invoice"> | number
    paidAmount?: FloatWithAggregatesFilter<"Invoice"> | number
    dueDate?: DateTimeWithAggregatesFilter<"Invoice"> | Date | string
    status?: StringWithAggregatesFilter<"Invoice"> | string
    description?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Invoice"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Invoice"> | Date | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: StringFilter<"Payment"> | string
    invoiceId?: StringFilter<"Payment"> | string
    tenantId?: StringFilter<"Payment"> | string
    amount?: FloatFilter<"Payment"> | number
    status?: StringFilter<"Payment"> | string
    paymentDate?: DateTimeFilter<"Payment"> | Date | string
    method?: StringFilter<"Payment"> | string
    reference?: StringNullableFilter<"Payment"> | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    invoice?: XOR<InvoiceScalarRelationFilter, InvoiceWhereInput>
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    tenantId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    paymentDate?: SortOrder
    method?: SortOrder
    reference?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    invoice?: InvoiceOrderByWithRelationInput
    tenant?: TenantOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    invoiceId?: StringFilter<"Payment"> | string
    tenantId?: StringFilter<"Payment"> | string
    amount?: FloatFilter<"Payment"> | number
    status?: StringFilter<"Payment"> | string
    paymentDate?: DateTimeFilter<"Payment"> | Date | string
    method?: StringFilter<"Payment"> | string
    reference?: StringNullableFilter<"Payment"> | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    invoice?: XOR<InvoiceScalarRelationFilter, InvoiceWhereInput>
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
  }, "id">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    tenantId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    paymentDate?: SortOrder
    method?: SortOrder
    reference?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payment"> | string
    invoiceId?: StringWithAggregatesFilter<"Payment"> | string
    tenantId?: StringWithAggregatesFilter<"Payment"> | string
    amount?: FloatWithAggregatesFilter<"Payment"> | number
    status?: StringWithAggregatesFilter<"Payment"> | string
    paymentDate?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    method?: StringWithAggregatesFilter<"Payment"> | string
    reference?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type LeaseAgreementWhereInput = {
    AND?: LeaseAgreementWhereInput | LeaseAgreementWhereInput[]
    OR?: LeaseAgreementWhereInput[]
    NOT?: LeaseAgreementWhereInput | LeaseAgreementWhereInput[]
    id?: StringFilter<"LeaseAgreement"> | string
    tenantId?: StringFilter<"LeaseAgreement"> | string
    propertyId?: StringFilter<"LeaseAgreement"> | string
    startDate?: DateTimeFilter<"LeaseAgreement"> | Date | string
    endDate?: DateTimeFilter<"LeaseAgreement"> | Date | string
    rentAmount?: FloatFilter<"LeaseAgreement"> | number
    securityDeposit?: FloatFilter<"LeaseAgreement"> | number
    terms?: StringNullableFilter<"LeaseAgreement"> | string | null
    status?: StringFilter<"LeaseAgreement"> | string
    createdAt?: DateTimeFilter<"LeaseAgreement"> | Date | string
    updatedAt?: DateTimeFilter<"LeaseAgreement"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
  }

  export type LeaseAgreementOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    propertyId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    rentAmount?: SortOrder
    securityDeposit?: SortOrder
    terms?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenant?: TenantOrderByWithRelationInput
    property?: PropertyOrderByWithRelationInput
  }

  export type LeaseAgreementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LeaseAgreementWhereInput | LeaseAgreementWhereInput[]
    OR?: LeaseAgreementWhereInput[]
    NOT?: LeaseAgreementWhereInput | LeaseAgreementWhereInput[]
    tenantId?: StringFilter<"LeaseAgreement"> | string
    propertyId?: StringFilter<"LeaseAgreement"> | string
    startDate?: DateTimeFilter<"LeaseAgreement"> | Date | string
    endDate?: DateTimeFilter<"LeaseAgreement"> | Date | string
    rentAmount?: FloatFilter<"LeaseAgreement"> | number
    securityDeposit?: FloatFilter<"LeaseAgreement"> | number
    terms?: StringNullableFilter<"LeaseAgreement"> | string | null
    status?: StringFilter<"LeaseAgreement"> | string
    createdAt?: DateTimeFilter<"LeaseAgreement"> | Date | string
    updatedAt?: DateTimeFilter<"LeaseAgreement"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
  }, "id">

  export type LeaseAgreementOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    propertyId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    rentAmount?: SortOrder
    securityDeposit?: SortOrder
    terms?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LeaseAgreementCountOrderByAggregateInput
    _avg?: LeaseAgreementAvgOrderByAggregateInput
    _max?: LeaseAgreementMaxOrderByAggregateInput
    _min?: LeaseAgreementMinOrderByAggregateInput
    _sum?: LeaseAgreementSumOrderByAggregateInput
  }

  export type LeaseAgreementScalarWhereWithAggregatesInput = {
    AND?: LeaseAgreementScalarWhereWithAggregatesInput | LeaseAgreementScalarWhereWithAggregatesInput[]
    OR?: LeaseAgreementScalarWhereWithAggregatesInput[]
    NOT?: LeaseAgreementScalarWhereWithAggregatesInput | LeaseAgreementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LeaseAgreement"> | string
    tenantId?: StringWithAggregatesFilter<"LeaseAgreement"> | string
    propertyId?: StringWithAggregatesFilter<"LeaseAgreement"> | string
    startDate?: DateTimeWithAggregatesFilter<"LeaseAgreement"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"LeaseAgreement"> | Date | string
    rentAmount?: FloatWithAggregatesFilter<"LeaseAgreement"> | number
    securityDeposit?: FloatWithAggregatesFilter<"LeaseAgreement"> | number
    terms?: StringNullableWithAggregatesFilter<"LeaseAgreement"> | string | null
    status?: StringWithAggregatesFilter<"LeaseAgreement"> | string
    createdAt?: DateTimeWithAggregatesFilter<"LeaseAgreement"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LeaseAgreement"> | Date | string
  }

  export type MaintenanceRequestWhereInput = {
    AND?: MaintenanceRequestWhereInput | MaintenanceRequestWhereInput[]
    OR?: MaintenanceRequestWhereInput[]
    NOT?: MaintenanceRequestWhereInput | MaintenanceRequestWhereInput[]
    id?: StringFilter<"MaintenanceRequest"> | string
    propertyId?: StringFilter<"MaintenanceRequest"> | string
    tenantId?: StringFilter<"MaintenanceRequest"> | string
    type?: StringFilter<"MaintenanceRequest"> | string
    priority?: StringFilter<"MaintenanceRequest"> | string
    status?: StringFilter<"MaintenanceRequest"> | string
    description?: StringFilter<"MaintenanceRequest"> | string
    createdAt?: DateTimeFilter<"MaintenanceRequest"> | Date | string
    updatedAt?: DateTimeFilter<"MaintenanceRequest"> | Date | string
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
  }

  export type MaintenanceRequestOrderByWithRelationInput = {
    id?: SortOrder
    propertyId?: SortOrder
    tenantId?: SortOrder
    type?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    property?: PropertyOrderByWithRelationInput
    tenant?: TenantOrderByWithRelationInput
  }

  export type MaintenanceRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MaintenanceRequestWhereInput | MaintenanceRequestWhereInput[]
    OR?: MaintenanceRequestWhereInput[]
    NOT?: MaintenanceRequestWhereInput | MaintenanceRequestWhereInput[]
    propertyId?: StringFilter<"MaintenanceRequest"> | string
    tenantId?: StringFilter<"MaintenanceRequest"> | string
    type?: StringFilter<"MaintenanceRequest"> | string
    priority?: StringFilter<"MaintenanceRequest"> | string
    status?: StringFilter<"MaintenanceRequest"> | string
    description?: StringFilter<"MaintenanceRequest"> | string
    createdAt?: DateTimeFilter<"MaintenanceRequest"> | Date | string
    updatedAt?: DateTimeFilter<"MaintenanceRequest"> | Date | string
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
  }, "id">

  export type MaintenanceRequestOrderByWithAggregationInput = {
    id?: SortOrder
    propertyId?: SortOrder
    tenantId?: SortOrder
    type?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MaintenanceRequestCountOrderByAggregateInput
    _max?: MaintenanceRequestMaxOrderByAggregateInput
    _min?: MaintenanceRequestMinOrderByAggregateInput
  }

  export type MaintenanceRequestScalarWhereWithAggregatesInput = {
    AND?: MaintenanceRequestScalarWhereWithAggregatesInput | MaintenanceRequestScalarWhereWithAggregatesInput[]
    OR?: MaintenanceRequestScalarWhereWithAggregatesInput[]
    NOT?: MaintenanceRequestScalarWhereWithAggregatesInput | MaintenanceRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MaintenanceRequest"> | string
    propertyId?: StringWithAggregatesFilter<"MaintenanceRequest"> | string
    tenantId?: StringWithAggregatesFilter<"MaintenanceRequest"> | string
    type?: StringWithAggregatesFilter<"MaintenanceRequest"> | string
    priority?: StringWithAggregatesFilter<"MaintenanceRequest"> | string
    status?: StringWithAggregatesFilter<"MaintenanceRequest"> | string
    description?: StringWithAggregatesFilter<"MaintenanceRequest"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MaintenanceRequest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MaintenanceRequest"> | Date | string
  }

  export type DocumentWhereInput = {
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    id?: StringFilter<"Document"> | string
    type?: StringFilter<"Document"> | string
    filePath?: StringFilter<"Document"> | string
    fileName?: StringFilter<"Document"> | string
    uploadDate?: DateTimeFilter<"Document"> | Date | string
    status?: StringFilter<"Document"> | string
    tenantId?: StringNullableFilter<"Document"> | string | null
    propertyId?: StringNullableFilter<"Document"> | string | null
    tenant?: XOR<TenantNullableScalarRelationFilter, TenantWhereInput> | null
    property?: XOR<PropertyNullableScalarRelationFilter, PropertyWhereInput> | null
  }

  export type DocumentOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    filePath?: SortOrder
    fileName?: SortOrder
    uploadDate?: SortOrder
    status?: SortOrder
    tenantId?: SortOrderInput | SortOrder
    propertyId?: SortOrderInput | SortOrder
    tenant?: TenantOrderByWithRelationInput
    property?: PropertyOrderByWithRelationInput
  }

  export type DocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    type?: StringFilter<"Document"> | string
    filePath?: StringFilter<"Document"> | string
    fileName?: StringFilter<"Document"> | string
    uploadDate?: DateTimeFilter<"Document"> | Date | string
    status?: StringFilter<"Document"> | string
    tenantId?: StringNullableFilter<"Document"> | string | null
    propertyId?: StringNullableFilter<"Document"> | string | null
    tenant?: XOR<TenantNullableScalarRelationFilter, TenantWhereInput> | null
    property?: XOR<PropertyNullableScalarRelationFilter, PropertyWhereInput> | null
  }, "id">

  export type DocumentOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    filePath?: SortOrder
    fileName?: SortOrder
    uploadDate?: SortOrder
    status?: SortOrder
    tenantId?: SortOrderInput | SortOrder
    propertyId?: SortOrderInput | SortOrder
    _count?: DocumentCountOrderByAggregateInput
    _max?: DocumentMaxOrderByAggregateInput
    _min?: DocumentMinOrderByAggregateInput
  }

  export type DocumentScalarWhereWithAggregatesInput = {
    AND?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    OR?: DocumentScalarWhereWithAggregatesInput[]
    NOT?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Document"> | string
    type?: StringWithAggregatesFilter<"Document"> | string
    filePath?: StringWithAggregatesFilter<"Document"> | string
    fileName?: StringWithAggregatesFilter<"Document"> | string
    uploadDate?: DateTimeWithAggregatesFilter<"Document"> | Date | string
    status?: StringWithAggregatesFilter<"Document"> | string
    tenantId?: StringNullableWithAggregatesFilter<"Document"> | string | null
    propertyId?: StringNullableWithAggregatesFilter<"Document"> | string | null
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: StringFilter<"Notification"> | string
    type?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    read?: BoolFilter<"Notification"> | boolean
    priority?: StringFilter<"Notification"> | string
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    tenantId?: StringNullableFilter<"Notification"> | string | null
    propertyId?: StringNullableFilter<"Notification"> | string | null
    tenant?: XOR<TenantNullableScalarRelationFilter, TenantWhereInput> | null
    property?: XOR<PropertyNullableScalarRelationFilter, PropertyWhereInput> | null
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    message?: SortOrder
    read?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    tenantId?: SortOrderInput | SortOrder
    propertyId?: SortOrderInput | SortOrder
    tenant?: TenantOrderByWithRelationInput
    property?: PropertyOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    type?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    read?: BoolFilter<"Notification"> | boolean
    priority?: StringFilter<"Notification"> | string
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    tenantId?: StringNullableFilter<"Notification"> | string | null
    propertyId?: StringNullableFilter<"Notification"> | string | null
    tenant?: XOR<TenantNullableScalarRelationFilter, TenantWhereInput> | null
    property?: XOR<PropertyNullableScalarRelationFilter, PropertyWhereInput> | null
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    message?: SortOrder
    read?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    tenantId?: SortOrderInput | SortOrder
    propertyId?: SortOrderInput | SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notification"> | string
    type?: StringWithAggregatesFilter<"Notification"> | string
    message?: StringWithAggregatesFilter<"Notification"> | string
    read?: BoolWithAggregatesFilter<"Notification"> | boolean
    priority?: StringWithAggregatesFilter<"Notification"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
    tenantId?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    propertyId?: StringNullableWithAggregatesFilter<"Notification"> | string | null
  }

  export type TenantCreateInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    invoices?: InvoiceCreateNestedManyWithoutTenantInput
    payments?: PaymentCreateNestedManyWithoutTenantInput
    properties?: PropertyCreateNestedManyWithoutTenantsInput
    leaseAgreements?: LeaseAgreementCreateNestedManyWithoutTenantInput
    maintenanceRequests?: MaintenanceRequestCreateNestedManyWithoutTenantInput
    documents?: DocumentCreateNestedManyWithoutTenantInput
    notifications?: NotificationCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    invoices?: InvoiceUncheckedCreateNestedManyWithoutTenantInput
    payments?: PaymentUncheckedCreateNestedManyWithoutTenantInput
    properties?: PropertyUncheckedCreateNestedManyWithoutTenantsInput
    leaseAgreements?: LeaseAgreementUncheckedCreateNestedManyWithoutTenantInput
    maintenanceRequests?: MaintenanceRequestUncheckedCreateNestedManyWithoutTenantInput
    documents?: DocumentUncheckedCreateNestedManyWithoutTenantInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoices?: InvoiceUpdateManyWithoutTenantNestedInput
    payments?: PaymentUpdateManyWithoutTenantNestedInput
    properties?: PropertyUpdateManyWithoutTenantsNestedInput
    leaseAgreements?: LeaseAgreementUpdateManyWithoutTenantNestedInput
    maintenanceRequests?: MaintenanceRequestUpdateManyWithoutTenantNestedInput
    documents?: DocumentUpdateManyWithoutTenantNestedInput
    notifications?: NotificationUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoices?: InvoiceUncheckedUpdateManyWithoutTenantNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutTenantNestedInput
    properties?: PropertyUncheckedUpdateManyWithoutTenantsNestedInput
    leaseAgreements?: LeaseAgreementUncheckedUpdateManyWithoutTenantNestedInput
    maintenanceRequests?: MaintenanceRequestUncheckedUpdateManyWithoutTenantNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutTenantNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type TenantCreateManyInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TenantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyCreateInput = {
    id?: string
    address: string
    type: string
    size?: number | null
    bedrooms?: number | null
    bathrooms?: number | null
    amenities?: PropertyCreateamenitiesInput | string[]
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tenants?: TenantCreateNestedManyWithoutPropertiesInput
    invoices?: InvoiceCreateNestedManyWithoutPropertyInput
    maintenanceRequests?: MaintenanceRequestCreateNestedManyWithoutPropertyInput
    documents?: DocumentCreateNestedManyWithoutPropertyInput
    leaseAgreements?: LeaseAgreementCreateNestedManyWithoutPropertyInput
    notifications?: NotificationCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateInput = {
    id?: string
    address: string
    type: string
    size?: number | null
    bedrooms?: number | null
    bathrooms?: number | null
    amenities?: PropertyCreateamenitiesInput | string[]
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tenants?: TenantUncheckedCreateNestedManyWithoutPropertiesInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutPropertyInput
    maintenanceRequests?: MaintenanceRequestUncheckedCreateNestedManyWithoutPropertyInput
    documents?: DocumentUncheckedCreateNestedManyWithoutPropertyInput
    leaseAgreements?: LeaseAgreementUncheckedCreateNestedManyWithoutPropertyInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    size?: NullableFloatFieldUpdateOperationsInput | number | null
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableFloatFieldUpdateOperationsInput | number | null
    amenities?: PropertyUpdateamenitiesInput | string[]
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenants?: TenantUpdateManyWithoutPropertiesNestedInput
    invoices?: InvoiceUpdateManyWithoutPropertyNestedInput
    maintenanceRequests?: MaintenanceRequestUpdateManyWithoutPropertyNestedInput
    documents?: DocumentUpdateManyWithoutPropertyNestedInput
    leaseAgreements?: LeaseAgreementUpdateManyWithoutPropertyNestedInput
    notifications?: NotificationUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    size?: NullableFloatFieldUpdateOperationsInput | number | null
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableFloatFieldUpdateOperationsInput | number | null
    amenities?: PropertyUpdateamenitiesInput | string[]
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenants?: TenantUncheckedUpdateManyWithoutPropertiesNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutPropertyNestedInput
    maintenanceRequests?: MaintenanceRequestUncheckedUpdateManyWithoutPropertyNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutPropertyNestedInput
    leaseAgreements?: LeaseAgreementUncheckedUpdateManyWithoutPropertyNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyCreateManyInput = {
    id?: string
    address: string
    type: string
    size?: number | null
    bedrooms?: number | null
    bathrooms?: number | null
    amenities?: PropertyCreateamenitiesInput | string[]
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    size?: NullableFloatFieldUpdateOperationsInput | number | null
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableFloatFieldUpdateOperationsInput | number | null
    amenities?: PropertyUpdateamenitiesInput | string[]
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    size?: NullableFloatFieldUpdateOperationsInput | number | null
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableFloatFieldUpdateOperationsInput | number | null
    amenities?: PropertyUpdateamenitiesInput | string[]
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceCreateInput = {
    id?: string
    amount: number
    paidAmount?: number
    dueDate: Date | string
    status?: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutInvoicesInput
    property: PropertyCreateNestedOneWithoutInvoicesInput
    payments?: PaymentCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceUncheckedCreateInput = {
    id?: string
    tenantId: string
    propertyId: string
    amount: number
    paidAmount?: number
    dueDate: Date | string
    status?: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paidAmount?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutInvoicesNestedInput
    property?: PropertyUpdateOneRequiredWithoutInvoicesNestedInput
    payments?: PaymentUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paidAmount?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceCreateManyInput = {
    id?: string
    tenantId: string
    propertyId: string
    amount: number
    paidAmount?: number
    dueDate: Date | string
    status?: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paidAmount?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paidAmount?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateInput = {
    id?: string
    amount: number
    status?: string
    paymentDate?: Date | string
    method: string
    reference?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    invoice: InvoiceCreateNestedOneWithoutPaymentsInput
    tenant: TenantCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    invoiceId: string
    tenantId: string
    amount: number
    status?: string
    paymentDate?: Date | string
    method: string
    reference?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoice?: InvoiceUpdateOneRequiredWithoutPaymentsNestedInput
    tenant?: TenantUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyInput = {
    id?: string
    invoiceId: string
    tenantId: string
    amount: number
    status?: string
    paymentDate?: Date | string
    method: string
    reference?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaseAgreementCreateInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    rentAmount: number
    securityDeposit: number
    terms?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutLeaseAgreementsInput
    property: PropertyCreateNestedOneWithoutLeaseAgreementsInput
  }

  export type LeaseAgreementUncheckedCreateInput = {
    id?: string
    tenantId: string
    propertyId: string
    startDate: Date | string
    endDate: Date | string
    rentAmount: number
    securityDeposit: number
    terms?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeaseAgreementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    rentAmount?: FloatFieldUpdateOperationsInput | number
    securityDeposit?: FloatFieldUpdateOperationsInput | number
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutLeaseAgreementsNestedInput
    property?: PropertyUpdateOneRequiredWithoutLeaseAgreementsNestedInput
  }

  export type LeaseAgreementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    rentAmount?: FloatFieldUpdateOperationsInput | number
    securityDeposit?: FloatFieldUpdateOperationsInput | number
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaseAgreementCreateManyInput = {
    id?: string
    tenantId: string
    propertyId: string
    startDate: Date | string
    endDate: Date | string
    rentAmount: number
    securityDeposit: number
    terms?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeaseAgreementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    rentAmount?: FloatFieldUpdateOperationsInput | number
    securityDeposit?: FloatFieldUpdateOperationsInput | number
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaseAgreementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    rentAmount?: FloatFieldUpdateOperationsInput | number
    securityDeposit?: FloatFieldUpdateOperationsInput | number
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceRequestCreateInput = {
    id?: string
    type: string
    priority: string
    status?: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    property: PropertyCreateNestedOneWithoutMaintenanceRequestsInput
    tenant: TenantCreateNestedOneWithoutMaintenanceRequestsInput
  }

  export type MaintenanceRequestUncheckedCreateInput = {
    id?: string
    propertyId: string
    tenantId: string
    type: string
    priority: string
    status?: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaintenanceRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutMaintenanceRequestsNestedInput
    tenant?: TenantUpdateOneRequiredWithoutMaintenanceRequestsNestedInput
  }

  export type MaintenanceRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceRequestCreateManyInput = {
    id?: string
    propertyId: string
    tenantId: string
    type: string
    priority: string
    status?: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaintenanceRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentCreateInput = {
    id?: string
    type: string
    filePath: string
    fileName: string
    uploadDate?: Date | string
    status?: string
    tenant?: TenantCreateNestedOneWithoutDocumentsInput
    property?: PropertyCreateNestedOneWithoutDocumentsInput
  }

  export type DocumentUncheckedCreateInput = {
    id?: string
    type: string
    filePath: string
    fileName: string
    uploadDate?: Date | string
    status?: string
    tenantId?: string | null
    propertyId?: string | null
  }

  export type DocumentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    uploadDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    tenant?: TenantUpdateOneWithoutDocumentsNestedInput
    property?: PropertyUpdateOneWithoutDocumentsNestedInput
  }

  export type DocumentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    uploadDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    tenantId?: NullableStringFieldUpdateOperationsInput | string | null
    propertyId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DocumentCreateManyInput = {
    id?: string
    type: string
    filePath: string
    fileName: string
    uploadDate?: Date | string
    status?: string
    tenantId?: string | null
    propertyId?: string | null
  }

  export type DocumentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    uploadDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type DocumentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    uploadDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    tenantId?: NullableStringFieldUpdateOperationsInput | string | null
    propertyId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NotificationCreateInput = {
    id?: string
    type: string
    message: string
    read?: boolean
    priority?: string
    createdAt?: Date | string
    tenant?: TenantCreateNestedOneWithoutNotificationsInput
    property?: PropertyCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    type: string
    message: string
    read?: boolean
    priority?: string
    createdAt?: Date | string
    tenantId?: string | null
    propertyId?: string | null
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    priority?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneWithoutNotificationsNestedInput
    property?: PropertyUpdateOneWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    priority?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantId?: NullableStringFieldUpdateOperationsInput | string | null
    propertyId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NotificationCreateManyInput = {
    id?: string
    type: string
    message: string
    read?: boolean
    priority?: string
    createdAt?: Date | string
    tenantId?: string | null
    propertyId?: string | null
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    priority?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    priority?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantId?: NullableStringFieldUpdateOperationsInput | string | null
    propertyId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type InvoiceListRelationFilter = {
    every?: InvoiceWhereInput
    some?: InvoiceWhereInput
    none?: InvoiceWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type PropertyListRelationFilter = {
    every?: PropertyWhereInput
    some?: PropertyWhereInput
    none?: PropertyWhereInput
  }

  export type LeaseAgreementListRelationFilter = {
    every?: LeaseAgreementWhereInput
    some?: LeaseAgreementWhereInput
    none?: LeaseAgreementWhereInput
  }

  export type MaintenanceRequestListRelationFilter = {
    every?: MaintenanceRequestWhereInput
    some?: MaintenanceRequestWhereInput
    none?: MaintenanceRequestWhereInput
  }

  export type DocumentListRelationFilter = {
    every?: DocumentWhereInput
    some?: DocumentWhereInput
    none?: DocumentWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type InvoiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PropertyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LeaseAgreementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MaintenanceRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DocumentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TenantCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TenantMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TenantMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type TenantListRelationFilter = {
    every?: TenantWhereInput
    some?: TenantWhereInput
    none?: TenantWhereInput
  }

  export type TenantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PropertyCountOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    type?: SortOrder
    size?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    amenities?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertyAvgOrderByAggregateInput = {
    size?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
  }

  export type PropertyMaxOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    type?: SortOrder
    size?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertyMinOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    type?: SortOrder
    size?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertySumOrderByAggregateInput = {
    size?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type TenantScalarRelationFilter = {
    is?: TenantWhereInput
    isNot?: TenantWhereInput
  }

  export type PropertyScalarRelationFilter = {
    is?: PropertyWhereInput
    isNot?: PropertyWhereInput
  }

  export type InvoiceCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    propertyId?: SortOrder
    amount?: SortOrder
    paidAmount?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvoiceAvgOrderByAggregateInput = {
    amount?: SortOrder
    paidAmount?: SortOrder
  }

  export type InvoiceMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    propertyId?: SortOrder
    amount?: SortOrder
    paidAmount?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvoiceMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    propertyId?: SortOrder
    amount?: SortOrder
    paidAmount?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvoiceSumOrderByAggregateInput = {
    amount?: SortOrder
    paidAmount?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type InvoiceScalarRelationFilter = {
    is?: InvoiceWhereInput
    isNot?: InvoiceWhereInput
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    tenantId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    paymentDate?: SortOrder
    method?: SortOrder
    reference?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    tenantId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    paymentDate?: SortOrder
    method?: SortOrder
    reference?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    tenantId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    paymentDate?: SortOrder
    method?: SortOrder
    reference?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type LeaseAgreementCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    propertyId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    rentAmount?: SortOrder
    securityDeposit?: SortOrder
    terms?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LeaseAgreementAvgOrderByAggregateInput = {
    rentAmount?: SortOrder
    securityDeposit?: SortOrder
  }

  export type LeaseAgreementMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    propertyId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    rentAmount?: SortOrder
    securityDeposit?: SortOrder
    terms?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LeaseAgreementMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    propertyId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    rentAmount?: SortOrder
    securityDeposit?: SortOrder
    terms?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LeaseAgreementSumOrderByAggregateInput = {
    rentAmount?: SortOrder
    securityDeposit?: SortOrder
  }

  export type MaintenanceRequestCountOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    tenantId?: SortOrder
    type?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MaintenanceRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    tenantId?: SortOrder
    type?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MaintenanceRequestMinOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    tenantId?: SortOrder
    type?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TenantNullableScalarRelationFilter = {
    is?: TenantWhereInput | null
    isNot?: TenantWhereInput | null
  }

  export type PropertyNullableScalarRelationFilter = {
    is?: PropertyWhereInput | null
    isNot?: PropertyWhereInput | null
  }

  export type DocumentCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    filePath?: SortOrder
    fileName?: SortOrder
    uploadDate?: SortOrder
    status?: SortOrder
    tenantId?: SortOrder
    propertyId?: SortOrder
  }

  export type DocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    filePath?: SortOrder
    fileName?: SortOrder
    uploadDate?: SortOrder
    status?: SortOrder
    tenantId?: SortOrder
    propertyId?: SortOrder
  }

  export type DocumentMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    filePath?: SortOrder
    fileName?: SortOrder
    uploadDate?: SortOrder
    status?: SortOrder
    tenantId?: SortOrder
    propertyId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    message?: SortOrder
    read?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    tenantId?: SortOrder
    propertyId?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    message?: SortOrder
    read?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    tenantId?: SortOrder
    propertyId?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    message?: SortOrder
    read?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    tenantId?: SortOrder
    propertyId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type InvoiceCreateNestedManyWithoutTenantInput = {
    create?: XOR<InvoiceCreateWithoutTenantInput, InvoiceUncheckedCreateWithoutTenantInput> | InvoiceCreateWithoutTenantInput[] | InvoiceUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutTenantInput | InvoiceCreateOrConnectWithoutTenantInput[]
    createMany?: InvoiceCreateManyTenantInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutTenantInput = {
    create?: XOR<PaymentCreateWithoutTenantInput, PaymentUncheckedCreateWithoutTenantInput> | PaymentCreateWithoutTenantInput[] | PaymentUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutTenantInput | PaymentCreateOrConnectWithoutTenantInput[]
    createMany?: PaymentCreateManyTenantInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type PropertyCreateNestedManyWithoutTenantsInput = {
    create?: XOR<PropertyCreateWithoutTenantsInput, PropertyUncheckedCreateWithoutTenantsInput> | PropertyCreateWithoutTenantsInput[] | PropertyUncheckedCreateWithoutTenantsInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutTenantsInput | PropertyCreateOrConnectWithoutTenantsInput[]
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
  }

  export type LeaseAgreementCreateNestedManyWithoutTenantInput = {
    create?: XOR<LeaseAgreementCreateWithoutTenantInput, LeaseAgreementUncheckedCreateWithoutTenantInput> | LeaseAgreementCreateWithoutTenantInput[] | LeaseAgreementUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: LeaseAgreementCreateOrConnectWithoutTenantInput | LeaseAgreementCreateOrConnectWithoutTenantInput[]
    createMany?: LeaseAgreementCreateManyTenantInputEnvelope
    connect?: LeaseAgreementWhereUniqueInput | LeaseAgreementWhereUniqueInput[]
  }

  export type MaintenanceRequestCreateNestedManyWithoutTenantInput = {
    create?: XOR<MaintenanceRequestCreateWithoutTenantInput, MaintenanceRequestUncheckedCreateWithoutTenantInput> | MaintenanceRequestCreateWithoutTenantInput[] | MaintenanceRequestUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: MaintenanceRequestCreateOrConnectWithoutTenantInput | MaintenanceRequestCreateOrConnectWithoutTenantInput[]
    createMany?: MaintenanceRequestCreateManyTenantInputEnvelope
    connect?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
  }

  export type DocumentCreateNestedManyWithoutTenantInput = {
    create?: XOR<DocumentCreateWithoutTenantInput, DocumentUncheckedCreateWithoutTenantInput> | DocumentCreateWithoutTenantInput[] | DocumentUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutTenantInput | DocumentCreateOrConnectWithoutTenantInput[]
    createMany?: DocumentCreateManyTenantInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutTenantInput = {
    create?: XOR<NotificationCreateWithoutTenantInput, NotificationUncheckedCreateWithoutTenantInput> | NotificationCreateWithoutTenantInput[] | NotificationUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutTenantInput | NotificationCreateOrConnectWithoutTenantInput[]
    createMany?: NotificationCreateManyTenantInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type InvoiceUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<InvoiceCreateWithoutTenantInput, InvoiceUncheckedCreateWithoutTenantInput> | InvoiceCreateWithoutTenantInput[] | InvoiceUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutTenantInput | InvoiceCreateOrConnectWithoutTenantInput[]
    createMany?: InvoiceCreateManyTenantInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<PaymentCreateWithoutTenantInput, PaymentUncheckedCreateWithoutTenantInput> | PaymentCreateWithoutTenantInput[] | PaymentUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutTenantInput | PaymentCreateOrConnectWithoutTenantInput[]
    createMany?: PaymentCreateManyTenantInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type PropertyUncheckedCreateNestedManyWithoutTenantsInput = {
    create?: XOR<PropertyCreateWithoutTenantsInput, PropertyUncheckedCreateWithoutTenantsInput> | PropertyCreateWithoutTenantsInput[] | PropertyUncheckedCreateWithoutTenantsInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutTenantsInput | PropertyCreateOrConnectWithoutTenantsInput[]
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
  }

  export type LeaseAgreementUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<LeaseAgreementCreateWithoutTenantInput, LeaseAgreementUncheckedCreateWithoutTenantInput> | LeaseAgreementCreateWithoutTenantInput[] | LeaseAgreementUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: LeaseAgreementCreateOrConnectWithoutTenantInput | LeaseAgreementCreateOrConnectWithoutTenantInput[]
    createMany?: LeaseAgreementCreateManyTenantInputEnvelope
    connect?: LeaseAgreementWhereUniqueInput | LeaseAgreementWhereUniqueInput[]
  }

  export type MaintenanceRequestUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<MaintenanceRequestCreateWithoutTenantInput, MaintenanceRequestUncheckedCreateWithoutTenantInput> | MaintenanceRequestCreateWithoutTenantInput[] | MaintenanceRequestUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: MaintenanceRequestCreateOrConnectWithoutTenantInput | MaintenanceRequestCreateOrConnectWithoutTenantInput[]
    createMany?: MaintenanceRequestCreateManyTenantInputEnvelope
    connect?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
  }

  export type DocumentUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<DocumentCreateWithoutTenantInput, DocumentUncheckedCreateWithoutTenantInput> | DocumentCreateWithoutTenantInput[] | DocumentUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutTenantInput | DocumentCreateOrConnectWithoutTenantInput[]
    createMany?: DocumentCreateManyTenantInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<NotificationCreateWithoutTenantInput, NotificationUncheckedCreateWithoutTenantInput> | NotificationCreateWithoutTenantInput[] | NotificationUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutTenantInput | NotificationCreateOrConnectWithoutTenantInput[]
    createMany?: NotificationCreateManyTenantInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type InvoiceUpdateManyWithoutTenantNestedInput = {
    create?: XOR<InvoiceCreateWithoutTenantInput, InvoiceUncheckedCreateWithoutTenantInput> | InvoiceCreateWithoutTenantInput[] | InvoiceUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutTenantInput | InvoiceCreateOrConnectWithoutTenantInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutTenantInput | InvoiceUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: InvoiceCreateManyTenantInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutTenantInput | InvoiceUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutTenantInput | InvoiceUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutTenantNestedInput = {
    create?: XOR<PaymentCreateWithoutTenantInput, PaymentUncheckedCreateWithoutTenantInput> | PaymentCreateWithoutTenantInput[] | PaymentUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutTenantInput | PaymentCreateOrConnectWithoutTenantInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutTenantInput | PaymentUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: PaymentCreateManyTenantInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutTenantInput | PaymentUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutTenantInput | PaymentUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type PropertyUpdateManyWithoutTenantsNestedInput = {
    create?: XOR<PropertyCreateWithoutTenantsInput, PropertyUncheckedCreateWithoutTenantsInput> | PropertyCreateWithoutTenantsInput[] | PropertyUncheckedCreateWithoutTenantsInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutTenantsInput | PropertyCreateOrConnectWithoutTenantsInput[]
    upsert?: PropertyUpsertWithWhereUniqueWithoutTenantsInput | PropertyUpsertWithWhereUniqueWithoutTenantsInput[]
    set?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    disconnect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    delete?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    update?: PropertyUpdateWithWhereUniqueWithoutTenantsInput | PropertyUpdateWithWhereUniqueWithoutTenantsInput[]
    updateMany?: PropertyUpdateManyWithWhereWithoutTenantsInput | PropertyUpdateManyWithWhereWithoutTenantsInput[]
    deleteMany?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
  }

  export type LeaseAgreementUpdateManyWithoutTenantNestedInput = {
    create?: XOR<LeaseAgreementCreateWithoutTenantInput, LeaseAgreementUncheckedCreateWithoutTenantInput> | LeaseAgreementCreateWithoutTenantInput[] | LeaseAgreementUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: LeaseAgreementCreateOrConnectWithoutTenantInput | LeaseAgreementCreateOrConnectWithoutTenantInput[]
    upsert?: LeaseAgreementUpsertWithWhereUniqueWithoutTenantInput | LeaseAgreementUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: LeaseAgreementCreateManyTenantInputEnvelope
    set?: LeaseAgreementWhereUniqueInput | LeaseAgreementWhereUniqueInput[]
    disconnect?: LeaseAgreementWhereUniqueInput | LeaseAgreementWhereUniqueInput[]
    delete?: LeaseAgreementWhereUniqueInput | LeaseAgreementWhereUniqueInput[]
    connect?: LeaseAgreementWhereUniqueInput | LeaseAgreementWhereUniqueInput[]
    update?: LeaseAgreementUpdateWithWhereUniqueWithoutTenantInput | LeaseAgreementUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: LeaseAgreementUpdateManyWithWhereWithoutTenantInput | LeaseAgreementUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: LeaseAgreementScalarWhereInput | LeaseAgreementScalarWhereInput[]
  }

  export type MaintenanceRequestUpdateManyWithoutTenantNestedInput = {
    create?: XOR<MaintenanceRequestCreateWithoutTenantInput, MaintenanceRequestUncheckedCreateWithoutTenantInput> | MaintenanceRequestCreateWithoutTenantInput[] | MaintenanceRequestUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: MaintenanceRequestCreateOrConnectWithoutTenantInput | MaintenanceRequestCreateOrConnectWithoutTenantInput[]
    upsert?: MaintenanceRequestUpsertWithWhereUniqueWithoutTenantInput | MaintenanceRequestUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: MaintenanceRequestCreateManyTenantInputEnvelope
    set?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
    disconnect?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
    delete?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
    connect?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
    update?: MaintenanceRequestUpdateWithWhereUniqueWithoutTenantInput | MaintenanceRequestUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: MaintenanceRequestUpdateManyWithWhereWithoutTenantInput | MaintenanceRequestUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: MaintenanceRequestScalarWhereInput | MaintenanceRequestScalarWhereInput[]
  }

  export type DocumentUpdateManyWithoutTenantNestedInput = {
    create?: XOR<DocumentCreateWithoutTenantInput, DocumentUncheckedCreateWithoutTenantInput> | DocumentCreateWithoutTenantInput[] | DocumentUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutTenantInput | DocumentCreateOrConnectWithoutTenantInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutTenantInput | DocumentUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: DocumentCreateManyTenantInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutTenantInput | DocumentUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutTenantInput | DocumentUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutTenantNestedInput = {
    create?: XOR<NotificationCreateWithoutTenantInput, NotificationUncheckedCreateWithoutTenantInput> | NotificationCreateWithoutTenantInput[] | NotificationUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutTenantInput | NotificationCreateOrConnectWithoutTenantInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutTenantInput | NotificationUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: NotificationCreateManyTenantInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutTenantInput | NotificationUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutTenantInput | NotificationUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type InvoiceUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<InvoiceCreateWithoutTenantInput, InvoiceUncheckedCreateWithoutTenantInput> | InvoiceCreateWithoutTenantInput[] | InvoiceUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutTenantInput | InvoiceCreateOrConnectWithoutTenantInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutTenantInput | InvoiceUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: InvoiceCreateManyTenantInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutTenantInput | InvoiceUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutTenantInput | InvoiceUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<PaymentCreateWithoutTenantInput, PaymentUncheckedCreateWithoutTenantInput> | PaymentCreateWithoutTenantInput[] | PaymentUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutTenantInput | PaymentCreateOrConnectWithoutTenantInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutTenantInput | PaymentUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: PaymentCreateManyTenantInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutTenantInput | PaymentUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutTenantInput | PaymentUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type PropertyUncheckedUpdateManyWithoutTenantsNestedInput = {
    create?: XOR<PropertyCreateWithoutTenantsInput, PropertyUncheckedCreateWithoutTenantsInput> | PropertyCreateWithoutTenantsInput[] | PropertyUncheckedCreateWithoutTenantsInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutTenantsInput | PropertyCreateOrConnectWithoutTenantsInput[]
    upsert?: PropertyUpsertWithWhereUniqueWithoutTenantsInput | PropertyUpsertWithWhereUniqueWithoutTenantsInput[]
    set?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    disconnect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    delete?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    update?: PropertyUpdateWithWhereUniqueWithoutTenantsInput | PropertyUpdateWithWhereUniqueWithoutTenantsInput[]
    updateMany?: PropertyUpdateManyWithWhereWithoutTenantsInput | PropertyUpdateManyWithWhereWithoutTenantsInput[]
    deleteMany?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
  }

  export type LeaseAgreementUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<LeaseAgreementCreateWithoutTenantInput, LeaseAgreementUncheckedCreateWithoutTenantInput> | LeaseAgreementCreateWithoutTenantInput[] | LeaseAgreementUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: LeaseAgreementCreateOrConnectWithoutTenantInput | LeaseAgreementCreateOrConnectWithoutTenantInput[]
    upsert?: LeaseAgreementUpsertWithWhereUniqueWithoutTenantInput | LeaseAgreementUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: LeaseAgreementCreateManyTenantInputEnvelope
    set?: LeaseAgreementWhereUniqueInput | LeaseAgreementWhereUniqueInput[]
    disconnect?: LeaseAgreementWhereUniqueInput | LeaseAgreementWhereUniqueInput[]
    delete?: LeaseAgreementWhereUniqueInput | LeaseAgreementWhereUniqueInput[]
    connect?: LeaseAgreementWhereUniqueInput | LeaseAgreementWhereUniqueInput[]
    update?: LeaseAgreementUpdateWithWhereUniqueWithoutTenantInput | LeaseAgreementUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: LeaseAgreementUpdateManyWithWhereWithoutTenantInput | LeaseAgreementUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: LeaseAgreementScalarWhereInput | LeaseAgreementScalarWhereInput[]
  }

  export type MaintenanceRequestUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<MaintenanceRequestCreateWithoutTenantInput, MaintenanceRequestUncheckedCreateWithoutTenantInput> | MaintenanceRequestCreateWithoutTenantInput[] | MaintenanceRequestUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: MaintenanceRequestCreateOrConnectWithoutTenantInput | MaintenanceRequestCreateOrConnectWithoutTenantInput[]
    upsert?: MaintenanceRequestUpsertWithWhereUniqueWithoutTenantInput | MaintenanceRequestUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: MaintenanceRequestCreateManyTenantInputEnvelope
    set?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
    disconnect?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
    delete?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
    connect?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
    update?: MaintenanceRequestUpdateWithWhereUniqueWithoutTenantInput | MaintenanceRequestUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: MaintenanceRequestUpdateManyWithWhereWithoutTenantInput | MaintenanceRequestUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: MaintenanceRequestScalarWhereInput | MaintenanceRequestScalarWhereInput[]
  }

  export type DocumentUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<DocumentCreateWithoutTenantInput, DocumentUncheckedCreateWithoutTenantInput> | DocumentCreateWithoutTenantInput[] | DocumentUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutTenantInput | DocumentCreateOrConnectWithoutTenantInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutTenantInput | DocumentUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: DocumentCreateManyTenantInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutTenantInput | DocumentUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutTenantInput | DocumentUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<NotificationCreateWithoutTenantInput, NotificationUncheckedCreateWithoutTenantInput> | NotificationCreateWithoutTenantInput[] | NotificationUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutTenantInput | NotificationCreateOrConnectWithoutTenantInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutTenantInput | NotificationUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: NotificationCreateManyTenantInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutTenantInput | NotificationUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutTenantInput | NotificationUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type PropertyCreateamenitiesInput = {
    set: string[]
  }

  export type TenantCreateNestedManyWithoutPropertiesInput = {
    create?: XOR<TenantCreateWithoutPropertiesInput, TenantUncheckedCreateWithoutPropertiesInput> | TenantCreateWithoutPropertiesInput[] | TenantUncheckedCreateWithoutPropertiesInput[]
    connectOrCreate?: TenantCreateOrConnectWithoutPropertiesInput | TenantCreateOrConnectWithoutPropertiesInput[]
    connect?: TenantWhereUniqueInput | TenantWhereUniqueInput[]
  }

  export type InvoiceCreateNestedManyWithoutPropertyInput = {
    create?: XOR<InvoiceCreateWithoutPropertyInput, InvoiceUncheckedCreateWithoutPropertyInput> | InvoiceCreateWithoutPropertyInput[] | InvoiceUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutPropertyInput | InvoiceCreateOrConnectWithoutPropertyInput[]
    createMany?: InvoiceCreateManyPropertyInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type MaintenanceRequestCreateNestedManyWithoutPropertyInput = {
    create?: XOR<MaintenanceRequestCreateWithoutPropertyInput, MaintenanceRequestUncheckedCreateWithoutPropertyInput> | MaintenanceRequestCreateWithoutPropertyInput[] | MaintenanceRequestUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: MaintenanceRequestCreateOrConnectWithoutPropertyInput | MaintenanceRequestCreateOrConnectWithoutPropertyInput[]
    createMany?: MaintenanceRequestCreateManyPropertyInputEnvelope
    connect?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
  }

  export type DocumentCreateNestedManyWithoutPropertyInput = {
    create?: XOR<DocumentCreateWithoutPropertyInput, DocumentUncheckedCreateWithoutPropertyInput> | DocumentCreateWithoutPropertyInput[] | DocumentUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutPropertyInput | DocumentCreateOrConnectWithoutPropertyInput[]
    createMany?: DocumentCreateManyPropertyInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type LeaseAgreementCreateNestedManyWithoutPropertyInput = {
    create?: XOR<LeaseAgreementCreateWithoutPropertyInput, LeaseAgreementUncheckedCreateWithoutPropertyInput> | LeaseAgreementCreateWithoutPropertyInput[] | LeaseAgreementUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: LeaseAgreementCreateOrConnectWithoutPropertyInput | LeaseAgreementCreateOrConnectWithoutPropertyInput[]
    createMany?: LeaseAgreementCreateManyPropertyInputEnvelope
    connect?: LeaseAgreementWhereUniqueInput | LeaseAgreementWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutPropertyInput = {
    create?: XOR<NotificationCreateWithoutPropertyInput, NotificationUncheckedCreateWithoutPropertyInput> | NotificationCreateWithoutPropertyInput[] | NotificationUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutPropertyInput | NotificationCreateOrConnectWithoutPropertyInput[]
    createMany?: NotificationCreateManyPropertyInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type TenantUncheckedCreateNestedManyWithoutPropertiesInput = {
    create?: XOR<TenantCreateWithoutPropertiesInput, TenantUncheckedCreateWithoutPropertiesInput> | TenantCreateWithoutPropertiesInput[] | TenantUncheckedCreateWithoutPropertiesInput[]
    connectOrCreate?: TenantCreateOrConnectWithoutPropertiesInput | TenantCreateOrConnectWithoutPropertiesInput[]
    connect?: TenantWhereUniqueInput | TenantWhereUniqueInput[]
  }

  export type InvoiceUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<InvoiceCreateWithoutPropertyInput, InvoiceUncheckedCreateWithoutPropertyInput> | InvoiceCreateWithoutPropertyInput[] | InvoiceUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutPropertyInput | InvoiceCreateOrConnectWithoutPropertyInput[]
    createMany?: InvoiceCreateManyPropertyInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type MaintenanceRequestUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<MaintenanceRequestCreateWithoutPropertyInput, MaintenanceRequestUncheckedCreateWithoutPropertyInput> | MaintenanceRequestCreateWithoutPropertyInput[] | MaintenanceRequestUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: MaintenanceRequestCreateOrConnectWithoutPropertyInput | MaintenanceRequestCreateOrConnectWithoutPropertyInput[]
    createMany?: MaintenanceRequestCreateManyPropertyInputEnvelope
    connect?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
  }

  export type DocumentUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<DocumentCreateWithoutPropertyInput, DocumentUncheckedCreateWithoutPropertyInput> | DocumentCreateWithoutPropertyInput[] | DocumentUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutPropertyInput | DocumentCreateOrConnectWithoutPropertyInput[]
    createMany?: DocumentCreateManyPropertyInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type LeaseAgreementUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<LeaseAgreementCreateWithoutPropertyInput, LeaseAgreementUncheckedCreateWithoutPropertyInput> | LeaseAgreementCreateWithoutPropertyInput[] | LeaseAgreementUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: LeaseAgreementCreateOrConnectWithoutPropertyInput | LeaseAgreementCreateOrConnectWithoutPropertyInput[]
    createMany?: LeaseAgreementCreateManyPropertyInputEnvelope
    connect?: LeaseAgreementWhereUniqueInput | LeaseAgreementWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<NotificationCreateWithoutPropertyInput, NotificationUncheckedCreateWithoutPropertyInput> | NotificationCreateWithoutPropertyInput[] | NotificationUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutPropertyInput | NotificationCreateOrConnectWithoutPropertyInput[]
    createMany?: NotificationCreateManyPropertyInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PropertyUpdateamenitiesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type TenantUpdateManyWithoutPropertiesNestedInput = {
    create?: XOR<TenantCreateWithoutPropertiesInput, TenantUncheckedCreateWithoutPropertiesInput> | TenantCreateWithoutPropertiesInput[] | TenantUncheckedCreateWithoutPropertiesInput[]
    connectOrCreate?: TenantCreateOrConnectWithoutPropertiesInput | TenantCreateOrConnectWithoutPropertiesInput[]
    upsert?: TenantUpsertWithWhereUniqueWithoutPropertiesInput | TenantUpsertWithWhereUniqueWithoutPropertiesInput[]
    set?: TenantWhereUniqueInput | TenantWhereUniqueInput[]
    disconnect?: TenantWhereUniqueInput | TenantWhereUniqueInput[]
    delete?: TenantWhereUniqueInput | TenantWhereUniqueInput[]
    connect?: TenantWhereUniqueInput | TenantWhereUniqueInput[]
    update?: TenantUpdateWithWhereUniqueWithoutPropertiesInput | TenantUpdateWithWhereUniqueWithoutPropertiesInput[]
    updateMany?: TenantUpdateManyWithWhereWithoutPropertiesInput | TenantUpdateManyWithWhereWithoutPropertiesInput[]
    deleteMany?: TenantScalarWhereInput | TenantScalarWhereInput[]
  }

  export type InvoiceUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<InvoiceCreateWithoutPropertyInput, InvoiceUncheckedCreateWithoutPropertyInput> | InvoiceCreateWithoutPropertyInput[] | InvoiceUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutPropertyInput | InvoiceCreateOrConnectWithoutPropertyInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutPropertyInput | InvoiceUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: InvoiceCreateManyPropertyInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutPropertyInput | InvoiceUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutPropertyInput | InvoiceUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type MaintenanceRequestUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<MaintenanceRequestCreateWithoutPropertyInput, MaintenanceRequestUncheckedCreateWithoutPropertyInput> | MaintenanceRequestCreateWithoutPropertyInput[] | MaintenanceRequestUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: MaintenanceRequestCreateOrConnectWithoutPropertyInput | MaintenanceRequestCreateOrConnectWithoutPropertyInput[]
    upsert?: MaintenanceRequestUpsertWithWhereUniqueWithoutPropertyInput | MaintenanceRequestUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: MaintenanceRequestCreateManyPropertyInputEnvelope
    set?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
    disconnect?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
    delete?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
    connect?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
    update?: MaintenanceRequestUpdateWithWhereUniqueWithoutPropertyInput | MaintenanceRequestUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: MaintenanceRequestUpdateManyWithWhereWithoutPropertyInput | MaintenanceRequestUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: MaintenanceRequestScalarWhereInput | MaintenanceRequestScalarWhereInput[]
  }

  export type DocumentUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<DocumentCreateWithoutPropertyInput, DocumentUncheckedCreateWithoutPropertyInput> | DocumentCreateWithoutPropertyInput[] | DocumentUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutPropertyInput | DocumentCreateOrConnectWithoutPropertyInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutPropertyInput | DocumentUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: DocumentCreateManyPropertyInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutPropertyInput | DocumentUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutPropertyInput | DocumentUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type LeaseAgreementUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<LeaseAgreementCreateWithoutPropertyInput, LeaseAgreementUncheckedCreateWithoutPropertyInput> | LeaseAgreementCreateWithoutPropertyInput[] | LeaseAgreementUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: LeaseAgreementCreateOrConnectWithoutPropertyInput | LeaseAgreementCreateOrConnectWithoutPropertyInput[]
    upsert?: LeaseAgreementUpsertWithWhereUniqueWithoutPropertyInput | LeaseAgreementUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: LeaseAgreementCreateManyPropertyInputEnvelope
    set?: LeaseAgreementWhereUniqueInput | LeaseAgreementWhereUniqueInput[]
    disconnect?: LeaseAgreementWhereUniqueInput | LeaseAgreementWhereUniqueInput[]
    delete?: LeaseAgreementWhereUniqueInput | LeaseAgreementWhereUniqueInput[]
    connect?: LeaseAgreementWhereUniqueInput | LeaseAgreementWhereUniqueInput[]
    update?: LeaseAgreementUpdateWithWhereUniqueWithoutPropertyInput | LeaseAgreementUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: LeaseAgreementUpdateManyWithWhereWithoutPropertyInput | LeaseAgreementUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: LeaseAgreementScalarWhereInput | LeaseAgreementScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<NotificationCreateWithoutPropertyInput, NotificationUncheckedCreateWithoutPropertyInput> | NotificationCreateWithoutPropertyInput[] | NotificationUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutPropertyInput | NotificationCreateOrConnectWithoutPropertyInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutPropertyInput | NotificationUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: NotificationCreateManyPropertyInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutPropertyInput | NotificationUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutPropertyInput | NotificationUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type TenantUncheckedUpdateManyWithoutPropertiesNestedInput = {
    create?: XOR<TenantCreateWithoutPropertiesInput, TenantUncheckedCreateWithoutPropertiesInput> | TenantCreateWithoutPropertiesInput[] | TenantUncheckedCreateWithoutPropertiesInput[]
    connectOrCreate?: TenantCreateOrConnectWithoutPropertiesInput | TenantCreateOrConnectWithoutPropertiesInput[]
    upsert?: TenantUpsertWithWhereUniqueWithoutPropertiesInput | TenantUpsertWithWhereUniqueWithoutPropertiesInput[]
    set?: TenantWhereUniqueInput | TenantWhereUniqueInput[]
    disconnect?: TenantWhereUniqueInput | TenantWhereUniqueInput[]
    delete?: TenantWhereUniqueInput | TenantWhereUniqueInput[]
    connect?: TenantWhereUniqueInput | TenantWhereUniqueInput[]
    update?: TenantUpdateWithWhereUniqueWithoutPropertiesInput | TenantUpdateWithWhereUniqueWithoutPropertiesInput[]
    updateMany?: TenantUpdateManyWithWhereWithoutPropertiesInput | TenantUpdateManyWithWhereWithoutPropertiesInput[]
    deleteMany?: TenantScalarWhereInput | TenantScalarWhereInput[]
  }

  export type InvoiceUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<InvoiceCreateWithoutPropertyInput, InvoiceUncheckedCreateWithoutPropertyInput> | InvoiceCreateWithoutPropertyInput[] | InvoiceUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutPropertyInput | InvoiceCreateOrConnectWithoutPropertyInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutPropertyInput | InvoiceUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: InvoiceCreateManyPropertyInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutPropertyInput | InvoiceUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutPropertyInput | InvoiceUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type MaintenanceRequestUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<MaintenanceRequestCreateWithoutPropertyInput, MaintenanceRequestUncheckedCreateWithoutPropertyInput> | MaintenanceRequestCreateWithoutPropertyInput[] | MaintenanceRequestUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: MaintenanceRequestCreateOrConnectWithoutPropertyInput | MaintenanceRequestCreateOrConnectWithoutPropertyInput[]
    upsert?: MaintenanceRequestUpsertWithWhereUniqueWithoutPropertyInput | MaintenanceRequestUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: MaintenanceRequestCreateManyPropertyInputEnvelope
    set?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
    disconnect?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
    delete?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
    connect?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
    update?: MaintenanceRequestUpdateWithWhereUniqueWithoutPropertyInput | MaintenanceRequestUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: MaintenanceRequestUpdateManyWithWhereWithoutPropertyInput | MaintenanceRequestUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: MaintenanceRequestScalarWhereInput | MaintenanceRequestScalarWhereInput[]
  }

  export type DocumentUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<DocumentCreateWithoutPropertyInput, DocumentUncheckedCreateWithoutPropertyInput> | DocumentCreateWithoutPropertyInput[] | DocumentUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutPropertyInput | DocumentCreateOrConnectWithoutPropertyInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutPropertyInput | DocumentUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: DocumentCreateManyPropertyInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutPropertyInput | DocumentUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutPropertyInput | DocumentUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type LeaseAgreementUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<LeaseAgreementCreateWithoutPropertyInput, LeaseAgreementUncheckedCreateWithoutPropertyInput> | LeaseAgreementCreateWithoutPropertyInput[] | LeaseAgreementUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: LeaseAgreementCreateOrConnectWithoutPropertyInput | LeaseAgreementCreateOrConnectWithoutPropertyInput[]
    upsert?: LeaseAgreementUpsertWithWhereUniqueWithoutPropertyInput | LeaseAgreementUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: LeaseAgreementCreateManyPropertyInputEnvelope
    set?: LeaseAgreementWhereUniqueInput | LeaseAgreementWhereUniqueInput[]
    disconnect?: LeaseAgreementWhereUniqueInput | LeaseAgreementWhereUniqueInput[]
    delete?: LeaseAgreementWhereUniqueInput | LeaseAgreementWhereUniqueInput[]
    connect?: LeaseAgreementWhereUniqueInput | LeaseAgreementWhereUniqueInput[]
    update?: LeaseAgreementUpdateWithWhereUniqueWithoutPropertyInput | LeaseAgreementUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: LeaseAgreementUpdateManyWithWhereWithoutPropertyInput | LeaseAgreementUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: LeaseAgreementScalarWhereInput | LeaseAgreementScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<NotificationCreateWithoutPropertyInput, NotificationUncheckedCreateWithoutPropertyInput> | NotificationCreateWithoutPropertyInput[] | NotificationUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutPropertyInput | NotificationCreateOrConnectWithoutPropertyInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutPropertyInput | NotificationUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: NotificationCreateManyPropertyInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutPropertyInput | NotificationUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutPropertyInput | NotificationUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type TenantCreateNestedOneWithoutInvoicesInput = {
    create?: XOR<TenantCreateWithoutInvoicesInput, TenantUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: TenantCreateOrConnectWithoutInvoicesInput
    connect?: TenantWhereUniqueInput
  }

  export type PropertyCreateNestedOneWithoutInvoicesInput = {
    create?: XOR<PropertyCreateWithoutInvoicesInput, PropertyUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutInvoicesInput
    connect?: PropertyWhereUniqueInput
  }

  export type PaymentCreateNestedManyWithoutInvoiceInput = {
    create?: XOR<PaymentCreateWithoutInvoiceInput, PaymentUncheckedCreateWithoutInvoiceInput> | PaymentCreateWithoutInvoiceInput[] | PaymentUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutInvoiceInput | PaymentCreateOrConnectWithoutInvoiceInput[]
    createMany?: PaymentCreateManyInvoiceInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutInvoiceInput = {
    create?: XOR<PaymentCreateWithoutInvoiceInput, PaymentUncheckedCreateWithoutInvoiceInput> | PaymentCreateWithoutInvoiceInput[] | PaymentUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutInvoiceInput | PaymentCreateOrConnectWithoutInvoiceInput[]
    createMany?: PaymentCreateManyInvoiceInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TenantUpdateOneRequiredWithoutInvoicesNestedInput = {
    create?: XOR<TenantCreateWithoutInvoicesInput, TenantUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: TenantCreateOrConnectWithoutInvoicesInput
    upsert?: TenantUpsertWithoutInvoicesInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutInvoicesInput, TenantUpdateWithoutInvoicesInput>, TenantUncheckedUpdateWithoutInvoicesInput>
  }

  export type PropertyUpdateOneRequiredWithoutInvoicesNestedInput = {
    create?: XOR<PropertyCreateWithoutInvoicesInput, PropertyUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutInvoicesInput
    upsert?: PropertyUpsertWithoutInvoicesInput
    connect?: PropertyWhereUniqueInput
    update?: XOR<XOR<PropertyUpdateToOneWithWhereWithoutInvoicesInput, PropertyUpdateWithoutInvoicesInput>, PropertyUncheckedUpdateWithoutInvoicesInput>
  }

  export type PaymentUpdateManyWithoutInvoiceNestedInput = {
    create?: XOR<PaymentCreateWithoutInvoiceInput, PaymentUncheckedCreateWithoutInvoiceInput> | PaymentCreateWithoutInvoiceInput[] | PaymentUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutInvoiceInput | PaymentCreateOrConnectWithoutInvoiceInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutInvoiceInput | PaymentUpsertWithWhereUniqueWithoutInvoiceInput[]
    createMany?: PaymentCreateManyInvoiceInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutInvoiceInput | PaymentUpdateWithWhereUniqueWithoutInvoiceInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutInvoiceInput | PaymentUpdateManyWithWhereWithoutInvoiceInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutInvoiceNestedInput = {
    create?: XOR<PaymentCreateWithoutInvoiceInput, PaymentUncheckedCreateWithoutInvoiceInput> | PaymentCreateWithoutInvoiceInput[] | PaymentUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutInvoiceInput | PaymentCreateOrConnectWithoutInvoiceInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutInvoiceInput | PaymentUpsertWithWhereUniqueWithoutInvoiceInput[]
    createMany?: PaymentCreateManyInvoiceInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutInvoiceInput | PaymentUpdateWithWhereUniqueWithoutInvoiceInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutInvoiceInput | PaymentUpdateManyWithWhereWithoutInvoiceInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type InvoiceCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<InvoiceCreateWithoutPaymentsInput, InvoiceUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: InvoiceCreateOrConnectWithoutPaymentsInput
    connect?: InvoiceWhereUniqueInput
  }

  export type TenantCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<TenantCreateWithoutPaymentsInput, TenantUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutPaymentsInput
    connect?: TenantWhereUniqueInput
  }

  export type InvoiceUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<InvoiceCreateWithoutPaymentsInput, InvoiceUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: InvoiceCreateOrConnectWithoutPaymentsInput
    upsert?: InvoiceUpsertWithoutPaymentsInput
    connect?: InvoiceWhereUniqueInput
    update?: XOR<XOR<InvoiceUpdateToOneWithWhereWithoutPaymentsInput, InvoiceUpdateWithoutPaymentsInput>, InvoiceUncheckedUpdateWithoutPaymentsInput>
  }

  export type TenantUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<TenantCreateWithoutPaymentsInput, TenantUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutPaymentsInput
    upsert?: TenantUpsertWithoutPaymentsInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutPaymentsInput, TenantUpdateWithoutPaymentsInput>, TenantUncheckedUpdateWithoutPaymentsInput>
  }

  export type TenantCreateNestedOneWithoutLeaseAgreementsInput = {
    create?: XOR<TenantCreateWithoutLeaseAgreementsInput, TenantUncheckedCreateWithoutLeaseAgreementsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutLeaseAgreementsInput
    connect?: TenantWhereUniqueInput
  }

  export type PropertyCreateNestedOneWithoutLeaseAgreementsInput = {
    create?: XOR<PropertyCreateWithoutLeaseAgreementsInput, PropertyUncheckedCreateWithoutLeaseAgreementsInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutLeaseAgreementsInput
    connect?: PropertyWhereUniqueInput
  }

  export type TenantUpdateOneRequiredWithoutLeaseAgreementsNestedInput = {
    create?: XOR<TenantCreateWithoutLeaseAgreementsInput, TenantUncheckedCreateWithoutLeaseAgreementsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutLeaseAgreementsInput
    upsert?: TenantUpsertWithoutLeaseAgreementsInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutLeaseAgreementsInput, TenantUpdateWithoutLeaseAgreementsInput>, TenantUncheckedUpdateWithoutLeaseAgreementsInput>
  }

  export type PropertyUpdateOneRequiredWithoutLeaseAgreementsNestedInput = {
    create?: XOR<PropertyCreateWithoutLeaseAgreementsInput, PropertyUncheckedCreateWithoutLeaseAgreementsInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutLeaseAgreementsInput
    upsert?: PropertyUpsertWithoutLeaseAgreementsInput
    connect?: PropertyWhereUniqueInput
    update?: XOR<XOR<PropertyUpdateToOneWithWhereWithoutLeaseAgreementsInput, PropertyUpdateWithoutLeaseAgreementsInput>, PropertyUncheckedUpdateWithoutLeaseAgreementsInput>
  }

  export type PropertyCreateNestedOneWithoutMaintenanceRequestsInput = {
    create?: XOR<PropertyCreateWithoutMaintenanceRequestsInput, PropertyUncheckedCreateWithoutMaintenanceRequestsInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutMaintenanceRequestsInput
    connect?: PropertyWhereUniqueInput
  }

  export type TenantCreateNestedOneWithoutMaintenanceRequestsInput = {
    create?: XOR<TenantCreateWithoutMaintenanceRequestsInput, TenantUncheckedCreateWithoutMaintenanceRequestsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutMaintenanceRequestsInput
    connect?: TenantWhereUniqueInput
  }

  export type PropertyUpdateOneRequiredWithoutMaintenanceRequestsNestedInput = {
    create?: XOR<PropertyCreateWithoutMaintenanceRequestsInput, PropertyUncheckedCreateWithoutMaintenanceRequestsInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutMaintenanceRequestsInput
    upsert?: PropertyUpsertWithoutMaintenanceRequestsInput
    connect?: PropertyWhereUniqueInput
    update?: XOR<XOR<PropertyUpdateToOneWithWhereWithoutMaintenanceRequestsInput, PropertyUpdateWithoutMaintenanceRequestsInput>, PropertyUncheckedUpdateWithoutMaintenanceRequestsInput>
  }

  export type TenantUpdateOneRequiredWithoutMaintenanceRequestsNestedInput = {
    create?: XOR<TenantCreateWithoutMaintenanceRequestsInput, TenantUncheckedCreateWithoutMaintenanceRequestsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutMaintenanceRequestsInput
    upsert?: TenantUpsertWithoutMaintenanceRequestsInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutMaintenanceRequestsInput, TenantUpdateWithoutMaintenanceRequestsInput>, TenantUncheckedUpdateWithoutMaintenanceRequestsInput>
  }

  export type TenantCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<TenantCreateWithoutDocumentsInput, TenantUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutDocumentsInput
    connect?: TenantWhereUniqueInput
  }

  export type PropertyCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<PropertyCreateWithoutDocumentsInput, PropertyUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutDocumentsInput
    connect?: PropertyWhereUniqueInput
  }

  export type TenantUpdateOneWithoutDocumentsNestedInput = {
    create?: XOR<TenantCreateWithoutDocumentsInput, TenantUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutDocumentsInput
    upsert?: TenantUpsertWithoutDocumentsInput
    disconnect?: TenantWhereInput | boolean
    delete?: TenantWhereInput | boolean
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutDocumentsInput, TenantUpdateWithoutDocumentsInput>, TenantUncheckedUpdateWithoutDocumentsInput>
  }

  export type PropertyUpdateOneWithoutDocumentsNestedInput = {
    create?: XOR<PropertyCreateWithoutDocumentsInput, PropertyUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutDocumentsInput
    upsert?: PropertyUpsertWithoutDocumentsInput
    disconnect?: PropertyWhereInput | boolean
    delete?: PropertyWhereInput | boolean
    connect?: PropertyWhereUniqueInput
    update?: XOR<XOR<PropertyUpdateToOneWithWhereWithoutDocumentsInput, PropertyUpdateWithoutDocumentsInput>, PropertyUncheckedUpdateWithoutDocumentsInput>
  }

  export type TenantCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<TenantCreateWithoutNotificationsInput, TenantUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutNotificationsInput
    connect?: TenantWhereUniqueInput
  }

  export type PropertyCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<PropertyCreateWithoutNotificationsInput, PropertyUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutNotificationsInput
    connect?: PropertyWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type TenantUpdateOneWithoutNotificationsNestedInput = {
    create?: XOR<TenantCreateWithoutNotificationsInput, TenantUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutNotificationsInput
    upsert?: TenantUpsertWithoutNotificationsInput
    disconnect?: TenantWhereInput | boolean
    delete?: TenantWhereInput | boolean
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutNotificationsInput, TenantUpdateWithoutNotificationsInput>, TenantUncheckedUpdateWithoutNotificationsInput>
  }

  export type PropertyUpdateOneWithoutNotificationsNestedInput = {
    create?: XOR<PropertyCreateWithoutNotificationsInput, PropertyUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutNotificationsInput
    upsert?: PropertyUpsertWithoutNotificationsInput
    disconnect?: PropertyWhereInput | boolean
    delete?: PropertyWhereInput | boolean
    connect?: PropertyWhereUniqueInput
    update?: XOR<XOR<PropertyUpdateToOneWithWhereWithoutNotificationsInput, PropertyUpdateWithoutNotificationsInput>, PropertyUncheckedUpdateWithoutNotificationsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type InvoiceCreateWithoutTenantInput = {
    id?: string
    amount: number
    paidAmount?: number
    dueDate: Date | string
    status?: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    property: PropertyCreateNestedOneWithoutInvoicesInput
    payments?: PaymentCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceUncheckedCreateWithoutTenantInput = {
    id?: string
    propertyId: string
    amount: number
    paidAmount?: number
    dueDate: Date | string
    status?: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceCreateOrConnectWithoutTenantInput = {
    where: InvoiceWhereUniqueInput
    create: XOR<InvoiceCreateWithoutTenantInput, InvoiceUncheckedCreateWithoutTenantInput>
  }

  export type InvoiceCreateManyTenantInputEnvelope = {
    data: InvoiceCreateManyTenantInput | InvoiceCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutTenantInput = {
    id?: string
    amount: number
    status?: string
    paymentDate?: Date | string
    method: string
    reference?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    invoice: InvoiceCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateWithoutTenantInput = {
    id?: string
    invoiceId: string
    amount: number
    status?: string
    paymentDate?: Date | string
    method: string
    reference?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutTenantInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutTenantInput, PaymentUncheckedCreateWithoutTenantInput>
  }

  export type PaymentCreateManyTenantInputEnvelope = {
    data: PaymentCreateManyTenantInput | PaymentCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type PropertyCreateWithoutTenantsInput = {
    id?: string
    address: string
    type: string
    size?: number | null
    bedrooms?: number | null
    bathrooms?: number | null
    amenities?: PropertyCreateamenitiesInput | string[]
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    invoices?: InvoiceCreateNestedManyWithoutPropertyInput
    maintenanceRequests?: MaintenanceRequestCreateNestedManyWithoutPropertyInput
    documents?: DocumentCreateNestedManyWithoutPropertyInput
    leaseAgreements?: LeaseAgreementCreateNestedManyWithoutPropertyInput
    notifications?: NotificationCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutTenantsInput = {
    id?: string
    address: string
    type: string
    size?: number | null
    bedrooms?: number | null
    bathrooms?: number | null
    amenities?: PropertyCreateamenitiesInput | string[]
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    invoices?: InvoiceUncheckedCreateNestedManyWithoutPropertyInput
    maintenanceRequests?: MaintenanceRequestUncheckedCreateNestedManyWithoutPropertyInput
    documents?: DocumentUncheckedCreateNestedManyWithoutPropertyInput
    leaseAgreements?: LeaseAgreementUncheckedCreateNestedManyWithoutPropertyInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutTenantsInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutTenantsInput, PropertyUncheckedCreateWithoutTenantsInput>
  }

  export type LeaseAgreementCreateWithoutTenantInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    rentAmount: number
    securityDeposit: number
    terms?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    property: PropertyCreateNestedOneWithoutLeaseAgreementsInput
  }

  export type LeaseAgreementUncheckedCreateWithoutTenantInput = {
    id?: string
    propertyId: string
    startDate: Date | string
    endDate: Date | string
    rentAmount: number
    securityDeposit: number
    terms?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeaseAgreementCreateOrConnectWithoutTenantInput = {
    where: LeaseAgreementWhereUniqueInput
    create: XOR<LeaseAgreementCreateWithoutTenantInput, LeaseAgreementUncheckedCreateWithoutTenantInput>
  }

  export type LeaseAgreementCreateManyTenantInputEnvelope = {
    data: LeaseAgreementCreateManyTenantInput | LeaseAgreementCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type MaintenanceRequestCreateWithoutTenantInput = {
    id?: string
    type: string
    priority: string
    status?: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    property: PropertyCreateNestedOneWithoutMaintenanceRequestsInput
  }

  export type MaintenanceRequestUncheckedCreateWithoutTenantInput = {
    id?: string
    propertyId: string
    type: string
    priority: string
    status?: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaintenanceRequestCreateOrConnectWithoutTenantInput = {
    where: MaintenanceRequestWhereUniqueInput
    create: XOR<MaintenanceRequestCreateWithoutTenantInput, MaintenanceRequestUncheckedCreateWithoutTenantInput>
  }

  export type MaintenanceRequestCreateManyTenantInputEnvelope = {
    data: MaintenanceRequestCreateManyTenantInput | MaintenanceRequestCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type DocumentCreateWithoutTenantInput = {
    id?: string
    type: string
    filePath: string
    fileName: string
    uploadDate?: Date | string
    status?: string
    property?: PropertyCreateNestedOneWithoutDocumentsInput
  }

  export type DocumentUncheckedCreateWithoutTenantInput = {
    id?: string
    type: string
    filePath: string
    fileName: string
    uploadDate?: Date | string
    status?: string
    propertyId?: string | null
  }

  export type DocumentCreateOrConnectWithoutTenantInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutTenantInput, DocumentUncheckedCreateWithoutTenantInput>
  }

  export type DocumentCreateManyTenantInputEnvelope = {
    data: DocumentCreateManyTenantInput | DocumentCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutTenantInput = {
    id?: string
    type: string
    message: string
    read?: boolean
    priority?: string
    createdAt?: Date | string
    property?: PropertyCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateWithoutTenantInput = {
    id?: string
    type: string
    message: string
    read?: boolean
    priority?: string
    createdAt?: Date | string
    propertyId?: string | null
  }

  export type NotificationCreateOrConnectWithoutTenantInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutTenantInput, NotificationUncheckedCreateWithoutTenantInput>
  }

  export type NotificationCreateManyTenantInputEnvelope = {
    data: NotificationCreateManyTenantInput | NotificationCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type InvoiceUpsertWithWhereUniqueWithoutTenantInput = {
    where: InvoiceWhereUniqueInput
    update: XOR<InvoiceUpdateWithoutTenantInput, InvoiceUncheckedUpdateWithoutTenantInput>
    create: XOR<InvoiceCreateWithoutTenantInput, InvoiceUncheckedCreateWithoutTenantInput>
  }

  export type InvoiceUpdateWithWhereUniqueWithoutTenantInput = {
    where: InvoiceWhereUniqueInput
    data: XOR<InvoiceUpdateWithoutTenantInput, InvoiceUncheckedUpdateWithoutTenantInput>
  }

  export type InvoiceUpdateManyWithWhereWithoutTenantInput = {
    where: InvoiceScalarWhereInput
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyWithoutTenantInput>
  }

  export type InvoiceScalarWhereInput = {
    AND?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
    OR?: InvoiceScalarWhereInput[]
    NOT?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
    id?: StringFilter<"Invoice"> | string
    tenantId?: StringFilter<"Invoice"> | string
    propertyId?: StringFilter<"Invoice"> | string
    amount?: FloatFilter<"Invoice"> | number
    paidAmount?: FloatFilter<"Invoice"> | number
    dueDate?: DateTimeFilter<"Invoice"> | Date | string
    status?: StringFilter<"Invoice"> | string
    description?: StringNullableFilter<"Invoice"> | string | null
    createdAt?: DateTimeFilter<"Invoice"> | Date | string
    updatedAt?: DateTimeFilter<"Invoice"> | Date | string
  }

  export type PaymentUpsertWithWhereUniqueWithoutTenantInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutTenantInput, PaymentUncheckedUpdateWithoutTenantInput>
    create: XOR<PaymentCreateWithoutTenantInput, PaymentUncheckedCreateWithoutTenantInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutTenantInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutTenantInput, PaymentUncheckedUpdateWithoutTenantInput>
  }

  export type PaymentUpdateManyWithWhereWithoutTenantInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutTenantInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: StringFilter<"Payment"> | string
    invoiceId?: StringFilter<"Payment"> | string
    tenantId?: StringFilter<"Payment"> | string
    amount?: FloatFilter<"Payment"> | number
    status?: StringFilter<"Payment"> | string
    paymentDate?: DateTimeFilter<"Payment"> | Date | string
    method?: StringFilter<"Payment"> | string
    reference?: StringNullableFilter<"Payment"> | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
  }

  export type PropertyUpsertWithWhereUniqueWithoutTenantsInput = {
    where: PropertyWhereUniqueInput
    update: XOR<PropertyUpdateWithoutTenantsInput, PropertyUncheckedUpdateWithoutTenantsInput>
    create: XOR<PropertyCreateWithoutTenantsInput, PropertyUncheckedCreateWithoutTenantsInput>
  }

  export type PropertyUpdateWithWhereUniqueWithoutTenantsInput = {
    where: PropertyWhereUniqueInput
    data: XOR<PropertyUpdateWithoutTenantsInput, PropertyUncheckedUpdateWithoutTenantsInput>
  }

  export type PropertyUpdateManyWithWhereWithoutTenantsInput = {
    where: PropertyScalarWhereInput
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyWithoutTenantsInput>
  }

  export type PropertyScalarWhereInput = {
    AND?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
    OR?: PropertyScalarWhereInput[]
    NOT?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
    id?: StringFilter<"Property"> | string
    address?: StringFilter<"Property"> | string
    type?: StringFilter<"Property"> | string
    size?: FloatNullableFilter<"Property"> | number | null
    bedrooms?: IntNullableFilter<"Property"> | number | null
    bathrooms?: FloatNullableFilter<"Property"> | number | null
    amenities?: StringNullableListFilter<"Property">
    status?: StringFilter<"Property"> | string
    createdAt?: DateTimeFilter<"Property"> | Date | string
    updatedAt?: DateTimeFilter<"Property"> | Date | string
  }

  export type LeaseAgreementUpsertWithWhereUniqueWithoutTenantInput = {
    where: LeaseAgreementWhereUniqueInput
    update: XOR<LeaseAgreementUpdateWithoutTenantInput, LeaseAgreementUncheckedUpdateWithoutTenantInput>
    create: XOR<LeaseAgreementCreateWithoutTenantInput, LeaseAgreementUncheckedCreateWithoutTenantInput>
  }

  export type LeaseAgreementUpdateWithWhereUniqueWithoutTenantInput = {
    where: LeaseAgreementWhereUniqueInput
    data: XOR<LeaseAgreementUpdateWithoutTenantInput, LeaseAgreementUncheckedUpdateWithoutTenantInput>
  }

  export type LeaseAgreementUpdateManyWithWhereWithoutTenantInput = {
    where: LeaseAgreementScalarWhereInput
    data: XOR<LeaseAgreementUpdateManyMutationInput, LeaseAgreementUncheckedUpdateManyWithoutTenantInput>
  }

  export type LeaseAgreementScalarWhereInput = {
    AND?: LeaseAgreementScalarWhereInput | LeaseAgreementScalarWhereInput[]
    OR?: LeaseAgreementScalarWhereInput[]
    NOT?: LeaseAgreementScalarWhereInput | LeaseAgreementScalarWhereInput[]
    id?: StringFilter<"LeaseAgreement"> | string
    tenantId?: StringFilter<"LeaseAgreement"> | string
    propertyId?: StringFilter<"LeaseAgreement"> | string
    startDate?: DateTimeFilter<"LeaseAgreement"> | Date | string
    endDate?: DateTimeFilter<"LeaseAgreement"> | Date | string
    rentAmount?: FloatFilter<"LeaseAgreement"> | number
    securityDeposit?: FloatFilter<"LeaseAgreement"> | number
    terms?: StringNullableFilter<"LeaseAgreement"> | string | null
    status?: StringFilter<"LeaseAgreement"> | string
    createdAt?: DateTimeFilter<"LeaseAgreement"> | Date | string
    updatedAt?: DateTimeFilter<"LeaseAgreement"> | Date | string
  }

  export type MaintenanceRequestUpsertWithWhereUniqueWithoutTenantInput = {
    where: MaintenanceRequestWhereUniqueInput
    update: XOR<MaintenanceRequestUpdateWithoutTenantInput, MaintenanceRequestUncheckedUpdateWithoutTenantInput>
    create: XOR<MaintenanceRequestCreateWithoutTenantInput, MaintenanceRequestUncheckedCreateWithoutTenantInput>
  }

  export type MaintenanceRequestUpdateWithWhereUniqueWithoutTenantInput = {
    where: MaintenanceRequestWhereUniqueInput
    data: XOR<MaintenanceRequestUpdateWithoutTenantInput, MaintenanceRequestUncheckedUpdateWithoutTenantInput>
  }

  export type MaintenanceRequestUpdateManyWithWhereWithoutTenantInput = {
    where: MaintenanceRequestScalarWhereInput
    data: XOR<MaintenanceRequestUpdateManyMutationInput, MaintenanceRequestUncheckedUpdateManyWithoutTenantInput>
  }

  export type MaintenanceRequestScalarWhereInput = {
    AND?: MaintenanceRequestScalarWhereInput | MaintenanceRequestScalarWhereInput[]
    OR?: MaintenanceRequestScalarWhereInput[]
    NOT?: MaintenanceRequestScalarWhereInput | MaintenanceRequestScalarWhereInput[]
    id?: StringFilter<"MaintenanceRequest"> | string
    propertyId?: StringFilter<"MaintenanceRequest"> | string
    tenantId?: StringFilter<"MaintenanceRequest"> | string
    type?: StringFilter<"MaintenanceRequest"> | string
    priority?: StringFilter<"MaintenanceRequest"> | string
    status?: StringFilter<"MaintenanceRequest"> | string
    description?: StringFilter<"MaintenanceRequest"> | string
    createdAt?: DateTimeFilter<"MaintenanceRequest"> | Date | string
    updatedAt?: DateTimeFilter<"MaintenanceRequest"> | Date | string
  }

  export type DocumentUpsertWithWhereUniqueWithoutTenantInput = {
    where: DocumentWhereUniqueInput
    update: XOR<DocumentUpdateWithoutTenantInput, DocumentUncheckedUpdateWithoutTenantInput>
    create: XOR<DocumentCreateWithoutTenantInput, DocumentUncheckedCreateWithoutTenantInput>
  }

  export type DocumentUpdateWithWhereUniqueWithoutTenantInput = {
    where: DocumentWhereUniqueInput
    data: XOR<DocumentUpdateWithoutTenantInput, DocumentUncheckedUpdateWithoutTenantInput>
  }

  export type DocumentUpdateManyWithWhereWithoutTenantInput = {
    where: DocumentScalarWhereInput
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyWithoutTenantInput>
  }

  export type DocumentScalarWhereInput = {
    AND?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
    OR?: DocumentScalarWhereInput[]
    NOT?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
    id?: StringFilter<"Document"> | string
    type?: StringFilter<"Document"> | string
    filePath?: StringFilter<"Document"> | string
    fileName?: StringFilter<"Document"> | string
    uploadDate?: DateTimeFilter<"Document"> | Date | string
    status?: StringFilter<"Document"> | string
    tenantId?: StringNullableFilter<"Document"> | string | null
    propertyId?: StringNullableFilter<"Document"> | string | null
  }

  export type NotificationUpsertWithWhereUniqueWithoutTenantInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutTenantInput, NotificationUncheckedUpdateWithoutTenantInput>
    create: XOR<NotificationCreateWithoutTenantInput, NotificationUncheckedCreateWithoutTenantInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutTenantInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutTenantInput, NotificationUncheckedUpdateWithoutTenantInput>
  }

  export type NotificationUpdateManyWithWhereWithoutTenantInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutTenantInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: StringFilter<"Notification"> | string
    type?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    read?: BoolFilter<"Notification"> | boolean
    priority?: StringFilter<"Notification"> | string
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    tenantId?: StringNullableFilter<"Notification"> | string | null
    propertyId?: StringNullableFilter<"Notification"> | string | null
  }

  export type TenantCreateWithoutPropertiesInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    invoices?: InvoiceCreateNestedManyWithoutTenantInput
    payments?: PaymentCreateNestedManyWithoutTenantInput
    leaseAgreements?: LeaseAgreementCreateNestedManyWithoutTenantInput
    maintenanceRequests?: MaintenanceRequestCreateNestedManyWithoutTenantInput
    documents?: DocumentCreateNestedManyWithoutTenantInput
    notifications?: NotificationCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutPropertiesInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    invoices?: InvoiceUncheckedCreateNestedManyWithoutTenantInput
    payments?: PaymentUncheckedCreateNestedManyWithoutTenantInput
    leaseAgreements?: LeaseAgreementUncheckedCreateNestedManyWithoutTenantInput
    maintenanceRequests?: MaintenanceRequestUncheckedCreateNestedManyWithoutTenantInput
    documents?: DocumentUncheckedCreateNestedManyWithoutTenantInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutPropertiesInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutPropertiesInput, TenantUncheckedCreateWithoutPropertiesInput>
  }

  export type InvoiceCreateWithoutPropertyInput = {
    id?: string
    amount: number
    paidAmount?: number
    dueDate: Date | string
    status?: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutInvoicesInput
    payments?: PaymentCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceUncheckedCreateWithoutPropertyInput = {
    id?: string
    tenantId: string
    amount: number
    paidAmount?: number
    dueDate: Date | string
    status?: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceCreateOrConnectWithoutPropertyInput = {
    where: InvoiceWhereUniqueInput
    create: XOR<InvoiceCreateWithoutPropertyInput, InvoiceUncheckedCreateWithoutPropertyInput>
  }

  export type InvoiceCreateManyPropertyInputEnvelope = {
    data: InvoiceCreateManyPropertyInput | InvoiceCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

  export type MaintenanceRequestCreateWithoutPropertyInput = {
    id?: string
    type: string
    priority: string
    status?: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutMaintenanceRequestsInput
  }

  export type MaintenanceRequestUncheckedCreateWithoutPropertyInput = {
    id?: string
    tenantId: string
    type: string
    priority: string
    status?: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaintenanceRequestCreateOrConnectWithoutPropertyInput = {
    where: MaintenanceRequestWhereUniqueInput
    create: XOR<MaintenanceRequestCreateWithoutPropertyInput, MaintenanceRequestUncheckedCreateWithoutPropertyInput>
  }

  export type MaintenanceRequestCreateManyPropertyInputEnvelope = {
    data: MaintenanceRequestCreateManyPropertyInput | MaintenanceRequestCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

  export type DocumentCreateWithoutPropertyInput = {
    id?: string
    type: string
    filePath: string
    fileName: string
    uploadDate?: Date | string
    status?: string
    tenant?: TenantCreateNestedOneWithoutDocumentsInput
  }

  export type DocumentUncheckedCreateWithoutPropertyInput = {
    id?: string
    type: string
    filePath: string
    fileName: string
    uploadDate?: Date | string
    status?: string
    tenantId?: string | null
  }

  export type DocumentCreateOrConnectWithoutPropertyInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutPropertyInput, DocumentUncheckedCreateWithoutPropertyInput>
  }

  export type DocumentCreateManyPropertyInputEnvelope = {
    data: DocumentCreateManyPropertyInput | DocumentCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

  export type LeaseAgreementCreateWithoutPropertyInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    rentAmount: number
    securityDeposit: number
    terms?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutLeaseAgreementsInput
  }

  export type LeaseAgreementUncheckedCreateWithoutPropertyInput = {
    id?: string
    tenantId: string
    startDate: Date | string
    endDate: Date | string
    rentAmount: number
    securityDeposit: number
    terms?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeaseAgreementCreateOrConnectWithoutPropertyInput = {
    where: LeaseAgreementWhereUniqueInput
    create: XOR<LeaseAgreementCreateWithoutPropertyInput, LeaseAgreementUncheckedCreateWithoutPropertyInput>
  }

  export type LeaseAgreementCreateManyPropertyInputEnvelope = {
    data: LeaseAgreementCreateManyPropertyInput | LeaseAgreementCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutPropertyInput = {
    id?: string
    type: string
    message: string
    read?: boolean
    priority?: string
    createdAt?: Date | string
    tenant?: TenantCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateWithoutPropertyInput = {
    id?: string
    type: string
    message: string
    read?: boolean
    priority?: string
    createdAt?: Date | string
    tenantId?: string | null
  }

  export type NotificationCreateOrConnectWithoutPropertyInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutPropertyInput, NotificationUncheckedCreateWithoutPropertyInput>
  }

  export type NotificationCreateManyPropertyInputEnvelope = {
    data: NotificationCreateManyPropertyInput | NotificationCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

  export type TenantUpsertWithWhereUniqueWithoutPropertiesInput = {
    where: TenantWhereUniqueInput
    update: XOR<TenantUpdateWithoutPropertiesInput, TenantUncheckedUpdateWithoutPropertiesInput>
    create: XOR<TenantCreateWithoutPropertiesInput, TenantUncheckedCreateWithoutPropertiesInput>
  }

  export type TenantUpdateWithWhereUniqueWithoutPropertiesInput = {
    where: TenantWhereUniqueInput
    data: XOR<TenantUpdateWithoutPropertiesInput, TenantUncheckedUpdateWithoutPropertiesInput>
  }

  export type TenantUpdateManyWithWhereWithoutPropertiesInput = {
    where: TenantScalarWhereInput
    data: XOR<TenantUpdateManyMutationInput, TenantUncheckedUpdateManyWithoutPropertiesInput>
  }

  export type TenantScalarWhereInput = {
    AND?: TenantScalarWhereInput | TenantScalarWhereInput[]
    OR?: TenantScalarWhereInput[]
    NOT?: TenantScalarWhereInput | TenantScalarWhereInput[]
    id?: StringFilter<"Tenant"> | string
    name?: StringFilter<"Tenant"> | string
    email?: StringFilter<"Tenant"> | string
    phone?: StringNullableFilter<"Tenant"> | string | null
    address?: StringNullableFilter<"Tenant"> | string | null
    createdAt?: DateTimeFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeFilter<"Tenant"> | Date | string
  }

  export type InvoiceUpsertWithWhereUniqueWithoutPropertyInput = {
    where: InvoiceWhereUniqueInput
    update: XOR<InvoiceUpdateWithoutPropertyInput, InvoiceUncheckedUpdateWithoutPropertyInput>
    create: XOR<InvoiceCreateWithoutPropertyInput, InvoiceUncheckedCreateWithoutPropertyInput>
  }

  export type InvoiceUpdateWithWhereUniqueWithoutPropertyInput = {
    where: InvoiceWhereUniqueInput
    data: XOR<InvoiceUpdateWithoutPropertyInput, InvoiceUncheckedUpdateWithoutPropertyInput>
  }

  export type InvoiceUpdateManyWithWhereWithoutPropertyInput = {
    where: InvoiceScalarWhereInput
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyWithoutPropertyInput>
  }

  export type MaintenanceRequestUpsertWithWhereUniqueWithoutPropertyInput = {
    where: MaintenanceRequestWhereUniqueInput
    update: XOR<MaintenanceRequestUpdateWithoutPropertyInput, MaintenanceRequestUncheckedUpdateWithoutPropertyInput>
    create: XOR<MaintenanceRequestCreateWithoutPropertyInput, MaintenanceRequestUncheckedCreateWithoutPropertyInput>
  }

  export type MaintenanceRequestUpdateWithWhereUniqueWithoutPropertyInput = {
    where: MaintenanceRequestWhereUniqueInput
    data: XOR<MaintenanceRequestUpdateWithoutPropertyInput, MaintenanceRequestUncheckedUpdateWithoutPropertyInput>
  }

  export type MaintenanceRequestUpdateManyWithWhereWithoutPropertyInput = {
    where: MaintenanceRequestScalarWhereInput
    data: XOR<MaintenanceRequestUpdateManyMutationInput, MaintenanceRequestUncheckedUpdateManyWithoutPropertyInput>
  }

  export type DocumentUpsertWithWhereUniqueWithoutPropertyInput = {
    where: DocumentWhereUniqueInput
    update: XOR<DocumentUpdateWithoutPropertyInput, DocumentUncheckedUpdateWithoutPropertyInput>
    create: XOR<DocumentCreateWithoutPropertyInput, DocumentUncheckedCreateWithoutPropertyInput>
  }

  export type DocumentUpdateWithWhereUniqueWithoutPropertyInput = {
    where: DocumentWhereUniqueInput
    data: XOR<DocumentUpdateWithoutPropertyInput, DocumentUncheckedUpdateWithoutPropertyInput>
  }

  export type DocumentUpdateManyWithWhereWithoutPropertyInput = {
    where: DocumentScalarWhereInput
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyWithoutPropertyInput>
  }

  export type LeaseAgreementUpsertWithWhereUniqueWithoutPropertyInput = {
    where: LeaseAgreementWhereUniqueInput
    update: XOR<LeaseAgreementUpdateWithoutPropertyInput, LeaseAgreementUncheckedUpdateWithoutPropertyInput>
    create: XOR<LeaseAgreementCreateWithoutPropertyInput, LeaseAgreementUncheckedCreateWithoutPropertyInput>
  }

  export type LeaseAgreementUpdateWithWhereUniqueWithoutPropertyInput = {
    where: LeaseAgreementWhereUniqueInput
    data: XOR<LeaseAgreementUpdateWithoutPropertyInput, LeaseAgreementUncheckedUpdateWithoutPropertyInput>
  }

  export type LeaseAgreementUpdateManyWithWhereWithoutPropertyInput = {
    where: LeaseAgreementScalarWhereInput
    data: XOR<LeaseAgreementUpdateManyMutationInput, LeaseAgreementUncheckedUpdateManyWithoutPropertyInput>
  }

  export type NotificationUpsertWithWhereUniqueWithoutPropertyInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutPropertyInput, NotificationUncheckedUpdateWithoutPropertyInput>
    create: XOR<NotificationCreateWithoutPropertyInput, NotificationUncheckedCreateWithoutPropertyInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutPropertyInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutPropertyInput, NotificationUncheckedUpdateWithoutPropertyInput>
  }

  export type NotificationUpdateManyWithWhereWithoutPropertyInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutPropertyInput>
  }

  export type TenantCreateWithoutInvoicesInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentCreateNestedManyWithoutTenantInput
    properties?: PropertyCreateNestedManyWithoutTenantsInput
    leaseAgreements?: LeaseAgreementCreateNestedManyWithoutTenantInput
    maintenanceRequests?: MaintenanceRequestCreateNestedManyWithoutTenantInput
    documents?: DocumentCreateNestedManyWithoutTenantInput
    notifications?: NotificationCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutInvoicesInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutTenantInput
    properties?: PropertyUncheckedCreateNestedManyWithoutTenantsInput
    leaseAgreements?: LeaseAgreementUncheckedCreateNestedManyWithoutTenantInput
    maintenanceRequests?: MaintenanceRequestUncheckedCreateNestedManyWithoutTenantInput
    documents?: DocumentUncheckedCreateNestedManyWithoutTenantInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutInvoicesInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutInvoicesInput, TenantUncheckedCreateWithoutInvoicesInput>
  }

  export type PropertyCreateWithoutInvoicesInput = {
    id?: string
    address: string
    type: string
    size?: number | null
    bedrooms?: number | null
    bathrooms?: number | null
    amenities?: PropertyCreateamenitiesInput | string[]
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tenants?: TenantCreateNestedManyWithoutPropertiesInput
    maintenanceRequests?: MaintenanceRequestCreateNestedManyWithoutPropertyInput
    documents?: DocumentCreateNestedManyWithoutPropertyInput
    leaseAgreements?: LeaseAgreementCreateNestedManyWithoutPropertyInput
    notifications?: NotificationCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutInvoicesInput = {
    id?: string
    address: string
    type: string
    size?: number | null
    bedrooms?: number | null
    bathrooms?: number | null
    amenities?: PropertyCreateamenitiesInput | string[]
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tenants?: TenantUncheckedCreateNestedManyWithoutPropertiesInput
    maintenanceRequests?: MaintenanceRequestUncheckedCreateNestedManyWithoutPropertyInput
    documents?: DocumentUncheckedCreateNestedManyWithoutPropertyInput
    leaseAgreements?: LeaseAgreementUncheckedCreateNestedManyWithoutPropertyInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutInvoicesInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutInvoicesInput, PropertyUncheckedCreateWithoutInvoicesInput>
  }

  export type PaymentCreateWithoutInvoiceInput = {
    id?: string
    amount: number
    status?: string
    paymentDate?: Date | string
    method: string
    reference?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateWithoutInvoiceInput = {
    id?: string
    tenantId: string
    amount: number
    status?: string
    paymentDate?: Date | string
    method: string
    reference?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutInvoiceInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutInvoiceInput, PaymentUncheckedCreateWithoutInvoiceInput>
  }

  export type PaymentCreateManyInvoiceInputEnvelope = {
    data: PaymentCreateManyInvoiceInput | PaymentCreateManyInvoiceInput[]
    skipDuplicates?: boolean
  }

  export type TenantUpsertWithoutInvoicesInput = {
    update: XOR<TenantUpdateWithoutInvoicesInput, TenantUncheckedUpdateWithoutInvoicesInput>
    create: XOR<TenantCreateWithoutInvoicesInput, TenantUncheckedCreateWithoutInvoicesInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutInvoicesInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutInvoicesInput, TenantUncheckedUpdateWithoutInvoicesInput>
  }

  export type TenantUpdateWithoutInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUpdateManyWithoutTenantNestedInput
    properties?: PropertyUpdateManyWithoutTenantsNestedInput
    leaseAgreements?: LeaseAgreementUpdateManyWithoutTenantNestedInput
    maintenanceRequests?: MaintenanceRequestUpdateManyWithoutTenantNestedInput
    documents?: DocumentUpdateManyWithoutTenantNestedInput
    notifications?: NotificationUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutTenantNestedInput
    properties?: PropertyUncheckedUpdateManyWithoutTenantsNestedInput
    leaseAgreements?: LeaseAgreementUncheckedUpdateManyWithoutTenantNestedInput
    maintenanceRequests?: MaintenanceRequestUncheckedUpdateManyWithoutTenantNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutTenantNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type PropertyUpsertWithoutInvoicesInput = {
    update: XOR<PropertyUpdateWithoutInvoicesInput, PropertyUncheckedUpdateWithoutInvoicesInput>
    create: XOR<PropertyCreateWithoutInvoicesInput, PropertyUncheckedCreateWithoutInvoicesInput>
    where?: PropertyWhereInput
  }

  export type PropertyUpdateToOneWithWhereWithoutInvoicesInput = {
    where?: PropertyWhereInput
    data: XOR<PropertyUpdateWithoutInvoicesInput, PropertyUncheckedUpdateWithoutInvoicesInput>
  }

  export type PropertyUpdateWithoutInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    size?: NullableFloatFieldUpdateOperationsInput | number | null
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableFloatFieldUpdateOperationsInput | number | null
    amenities?: PropertyUpdateamenitiesInput | string[]
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenants?: TenantUpdateManyWithoutPropertiesNestedInput
    maintenanceRequests?: MaintenanceRequestUpdateManyWithoutPropertyNestedInput
    documents?: DocumentUpdateManyWithoutPropertyNestedInput
    leaseAgreements?: LeaseAgreementUpdateManyWithoutPropertyNestedInput
    notifications?: NotificationUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    size?: NullableFloatFieldUpdateOperationsInput | number | null
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableFloatFieldUpdateOperationsInput | number | null
    amenities?: PropertyUpdateamenitiesInput | string[]
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenants?: TenantUncheckedUpdateManyWithoutPropertiesNestedInput
    maintenanceRequests?: MaintenanceRequestUncheckedUpdateManyWithoutPropertyNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutPropertyNestedInput
    leaseAgreements?: LeaseAgreementUncheckedUpdateManyWithoutPropertyNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PaymentUpsertWithWhereUniqueWithoutInvoiceInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutInvoiceInput, PaymentUncheckedUpdateWithoutInvoiceInput>
    create: XOR<PaymentCreateWithoutInvoiceInput, PaymentUncheckedCreateWithoutInvoiceInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutInvoiceInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutInvoiceInput, PaymentUncheckedUpdateWithoutInvoiceInput>
  }

  export type PaymentUpdateManyWithWhereWithoutInvoiceInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutInvoiceInput>
  }

  export type InvoiceCreateWithoutPaymentsInput = {
    id?: string
    amount: number
    paidAmount?: number
    dueDate: Date | string
    status?: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutInvoicesInput
    property: PropertyCreateNestedOneWithoutInvoicesInput
  }

  export type InvoiceUncheckedCreateWithoutPaymentsInput = {
    id?: string
    tenantId: string
    propertyId: string
    amount: number
    paidAmount?: number
    dueDate: Date | string
    status?: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceCreateOrConnectWithoutPaymentsInput = {
    where: InvoiceWhereUniqueInput
    create: XOR<InvoiceCreateWithoutPaymentsInput, InvoiceUncheckedCreateWithoutPaymentsInput>
  }

  export type TenantCreateWithoutPaymentsInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    invoices?: InvoiceCreateNestedManyWithoutTenantInput
    properties?: PropertyCreateNestedManyWithoutTenantsInput
    leaseAgreements?: LeaseAgreementCreateNestedManyWithoutTenantInput
    maintenanceRequests?: MaintenanceRequestCreateNestedManyWithoutTenantInput
    documents?: DocumentCreateNestedManyWithoutTenantInput
    notifications?: NotificationCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutPaymentsInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    invoices?: InvoiceUncheckedCreateNestedManyWithoutTenantInput
    properties?: PropertyUncheckedCreateNestedManyWithoutTenantsInput
    leaseAgreements?: LeaseAgreementUncheckedCreateNestedManyWithoutTenantInput
    maintenanceRequests?: MaintenanceRequestUncheckedCreateNestedManyWithoutTenantInput
    documents?: DocumentUncheckedCreateNestedManyWithoutTenantInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutPaymentsInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutPaymentsInput, TenantUncheckedCreateWithoutPaymentsInput>
  }

  export type InvoiceUpsertWithoutPaymentsInput = {
    update: XOR<InvoiceUpdateWithoutPaymentsInput, InvoiceUncheckedUpdateWithoutPaymentsInput>
    create: XOR<InvoiceCreateWithoutPaymentsInput, InvoiceUncheckedCreateWithoutPaymentsInput>
    where?: InvoiceWhereInput
  }

  export type InvoiceUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: InvoiceWhereInput
    data: XOR<InvoiceUpdateWithoutPaymentsInput, InvoiceUncheckedUpdateWithoutPaymentsInput>
  }

  export type InvoiceUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paidAmount?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutInvoicesNestedInput
    property?: PropertyUpdateOneRequiredWithoutInvoicesNestedInput
  }

  export type InvoiceUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paidAmount?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantUpsertWithoutPaymentsInput = {
    update: XOR<TenantUpdateWithoutPaymentsInput, TenantUncheckedUpdateWithoutPaymentsInput>
    create: XOR<TenantCreateWithoutPaymentsInput, TenantUncheckedCreateWithoutPaymentsInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutPaymentsInput, TenantUncheckedUpdateWithoutPaymentsInput>
  }

  export type TenantUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoices?: InvoiceUpdateManyWithoutTenantNestedInput
    properties?: PropertyUpdateManyWithoutTenantsNestedInput
    leaseAgreements?: LeaseAgreementUpdateManyWithoutTenantNestedInput
    maintenanceRequests?: MaintenanceRequestUpdateManyWithoutTenantNestedInput
    documents?: DocumentUpdateManyWithoutTenantNestedInput
    notifications?: NotificationUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoices?: InvoiceUncheckedUpdateManyWithoutTenantNestedInput
    properties?: PropertyUncheckedUpdateManyWithoutTenantsNestedInput
    leaseAgreements?: LeaseAgreementUncheckedUpdateManyWithoutTenantNestedInput
    maintenanceRequests?: MaintenanceRequestUncheckedUpdateManyWithoutTenantNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutTenantNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type TenantCreateWithoutLeaseAgreementsInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    invoices?: InvoiceCreateNestedManyWithoutTenantInput
    payments?: PaymentCreateNestedManyWithoutTenantInput
    properties?: PropertyCreateNestedManyWithoutTenantsInput
    maintenanceRequests?: MaintenanceRequestCreateNestedManyWithoutTenantInput
    documents?: DocumentCreateNestedManyWithoutTenantInput
    notifications?: NotificationCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutLeaseAgreementsInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    invoices?: InvoiceUncheckedCreateNestedManyWithoutTenantInput
    payments?: PaymentUncheckedCreateNestedManyWithoutTenantInput
    properties?: PropertyUncheckedCreateNestedManyWithoutTenantsInput
    maintenanceRequests?: MaintenanceRequestUncheckedCreateNestedManyWithoutTenantInput
    documents?: DocumentUncheckedCreateNestedManyWithoutTenantInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutLeaseAgreementsInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutLeaseAgreementsInput, TenantUncheckedCreateWithoutLeaseAgreementsInput>
  }

  export type PropertyCreateWithoutLeaseAgreementsInput = {
    id?: string
    address: string
    type: string
    size?: number | null
    bedrooms?: number | null
    bathrooms?: number | null
    amenities?: PropertyCreateamenitiesInput | string[]
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tenants?: TenantCreateNestedManyWithoutPropertiesInput
    invoices?: InvoiceCreateNestedManyWithoutPropertyInput
    maintenanceRequests?: MaintenanceRequestCreateNestedManyWithoutPropertyInput
    documents?: DocumentCreateNestedManyWithoutPropertyInput
    notifications?: NotificationCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutLeaseAgreementsInput = {
    id?: string
    address: string
    type: string
    size?: number | null
    bedrooms?: number | null
    bathrooms?: number | null
    amenities?: PropertyCreateamenitiesInput | string[]
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tenants?: TenantUncheckedCreateNestedManyWithoutPropertiesInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutPropertyInput
    maintenanceRequests?: MaintenanceRequestUncheckedCreateNestedManyWithoutPropertyInput
    documents?: DocumentUncheckedCreateNestedManyWithoutPropertyInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutLeaseAgreementsInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutLeaseAgreementsInput, PropertyUncheckedCreateWithoutLeaseAgreementsInput>
  }

  export type TenantUpsertWithoutLeaseAgreementsInput = {
    update: XOR<TenantUpdateWithoutLeaseAgreementsInput, TenantUncheckedUpdateWithoutLeaseAgreementsInput>
    create: XOR<TenantCreateWithoutLeaseAgreementsInput, TenantUncheckedCreateWithoutLeaseAgreementsInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutLeaseAgreementsInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutLeaseAgreementsInput, TenantUncheckedUpdateWithoutLeaseAgreementsInput>
  }

  export type TenantUpdateWithoutLeaseAgreementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoices?: InvoiceUpdateManyWithoutTenantNestedInput
    payments?: PaymentUpdateManyWithoutTenantNestedInput
    properties?: PropertyUpdateManyWithoutTenantsNestedInput
    maintenanceRequests?: MaintenanceRequestUpdateManyWithoutTenantNestedInput
    documents?: DocumentUpdateManyWithoutTenantNestedInput
    notifications?: NotificationUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutLeaseAgreementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoices?: InvoiceUncheckedUpdateManyWithoutTenantNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutTenantNestedInput
    properties?: PropertyUncheckedUpdateManyWithoutTenantsNestedInput
    maintenanceRequests?: MaintenanceRequestUncheckedUpdateManyWithoutTenantNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutTenantNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type PropertyUpsertWithoutLeaseAgreementsInput = {
    update: XOR<PropertyUpdateWithoutLeaseAgreementsInput, PropertyUncheckedUpdateWithoutLeaseAgreementsInput>
    create: XOR<PropertyCreateWithoutLeaseAgreementsInput, PropertyUncheckedCreateWithoutLeaseAgreementsInput>
    where?: PropertyWhereInput
  }

  export type PropertyUpdateToOneWithWhereWithoutLeaseAgreementsInput = {
    where?: PropertyWhereInput
    data: XOR<PropertyUpdateWithoutLeaseAgreementsInput, PropertyUncheckedUpdateWithoutLeaseAgreementsInput>
  }

  export type PropertyUpdateWithoutLeaseAgreementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    size?: NullableFloatFieldUpdateOperationsInput | number | null
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableFloatFieldUpdateOperationsInput | number | null
    amenities?: PropertyUpdateamenitiesInput | string[]
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenants?: TenantUpdateManyWithoutPropertiesNestedInput
    invoices?: InvoiceUpdateManyWithoutPropertyNestedInput
    maintenanceRequests?: MaintenanceRequestUpdateManyWithoutPropertyNestedInput
    documents?: DocumentUpdateManyWithoutPropertyNestedInput
    notifications?: NotificationUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutLeaseAgreementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    size?: NullableFloatFieldUpdateOperationsInput | number | null
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableFloatFieldUpdateOperationsInput | number | null
    amenities?: PropertyUpdateamenitiesInput | string[]
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenants?: TenantUncheckedUpdateManyWithoutPropertiesNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutPropertyNestedInput
    maintenanceRequests?: MaintenanceRequestUncheckedUpdateManyWithoutPropertyNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutPropertyNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyCreateWithoutMaintenanceRequestsInput = {
    id?: string
    address: string
    type: string
    size?: number | null
    bedrooms?: number | null
    bathrooms?: number | null
    amenities?: PropertyCreateamenitiesInput | string[]
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tenants?: TenantCreateNestedManyWithoutPropertiesInput
    invoices?: InvoiceCreateNestedManyWithoutPropertyInput
    documents?: DocumentCreateNestedManyWithoutPropertyInput
    leaseAgreements?: LeaseAgreementCreateNestedManyWithoutPropertyInput
    notifications?: NotificationCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutMaintenanceRequestsInput = {
    id?: string
    address: string
    type: string
    size?: number | null
    bedrooms?: number | null
    bathrooms?: number | null
    amenities?: PropertyCreateamenitiesInput | string[]
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tenants?: TenantUncheckedCreateNestedManyWithoutPropertiesInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutPropertyInput
    documents?: DocumentUncheckedCreateNestedManyWithoutPropertyInput
    leaseAgreements?: LeaseAgreementUncheckedCreateNestedManyWithoutPropertyInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutMaintenanceRequestsInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutMaintenanceRequestsInput, PropertyUncheckedCreateWithoutMaintenanceRequestsInput>
  }

  export type TenantCreateWithoutMaintenanceRequestsInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    invoices?: InvoiceCreateNestedManyWithoutTenantInput
    payments?: PaymentCreateNestedManyWithoutTenantInput
    properties?: PropertyCreateNestedManyWithoutTenantsInput
    leaseAgreements?: LeaseAgreementCreateNestedManyWithoutTenantInput
    documents?: DocumentCreateNestedManyWithoutTenantInput
    notifications?: NotificationCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutMaintenanceRequestsInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    invoices?: InvoiceUncheckedCreateNestedManyWithoutTenantInput
    payments?: PaymentUncheckedCreateNestedManyWithoutTenantInput
    properties?: PropertyUncheckedCreateNestedManyWithoutTenantsInput
    leaseAgreements?: LeaseAgreementUncheckedCreateNestedManyWithoutTenantInput
    documents?: DocumentUncheckedCreateNestedManyWithoutTenantInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutMaintenanceRequestsInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutMaintenanceRequestsInput, TenantUncheckedCreateWithoutMaintenanceRequestsInput>
  }

  export type PropertyUpsertWithoutMaintenanceRequestsInput = {
    update: XOR<PropertyUpdateWithoutMaintenanceRequestsInput, PropertyUncheckedUpdateWithoutMaintenanceRequestsInput>
    create: XOR<PropertyCreateWithoutMaintenanceRequestsInput, PropertyUncheckedCreateWithoutMaintenanceRequestsInput>
    where?: PropertyWhereInput
  }

  export type PropertyUpdateToOneWithWhereWithoutMaintenanceRequestsInput = {
    where?: PropertyWhereInput
    data: XOR<PropertyUpdateWithoutMaintenanceRequestsInput, PropertyUncheckedUpdateWithoutMaintenanceRequestsInput>
  }

  export type PropertyUpdateWithoutMaintenanceRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    size?: NullableFloatFieldUpdateOperationsInput | number | null
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableFloatFieldUpdateOperationsInput | number | null
    amenities?: PropertyUpdateamenitiesInput | string[]
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenants?: TenantUpdateManyWithoutPropertiesNestedInput
    invoices?: InvoiceUpdateManyWithoutPropertyNestedInput
    documents?: DocumentUpdateManyWithoutPropertyNestedInput
    leaseAgreements?: LeaseAgreementUpdateManyWithoutPropertyNestedInput
    notifications?: NotificationUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutMaintenanceRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    size?: NullableFloatFieldUpdateOperationsInput | number | null
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableFloatFieldUpdateOperationsInput | number | null
    amenities?: PropertyUpdateamenitiesInput | string[]
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenants?: TenantUncheckedUpdateManyWithoutPropertiesNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutPropertyNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutPropertyNestedInput
    leaseAgreements?: LeaseAgreementUncheckedUpdateManyWithoutPropertyNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type TenantUpsertWithoutMaintenanceRequestsInput = {
    update: XOR<TenantUpdateWithoutMaintenanceRequestsInput, TenantUncheckedUpdateWithoutMaintenanceRequestsInput>
    create: XOR<TenantCreateWithoutMaintenanceRequestsInput, TenantUncheckedCreateWithoutMaintenanceRequestsInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutMaintenanceRequestsInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutMaintenanceRequestsInput, TenantUncheckedUpdateWithoutMaintenanceRequestsInput>
  }

  export type TenantUpdateWithoutMaintenanceRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoices?: InvoiceUpdateManyWithoutTenantNestedInput
    payments?: PaymentUpdateManyWithoutTenantNestedInput
    properties?: PropertyUpdateManyWithoutTenantsNestedInput
    leaseAgreements?: LeaseAgreementUpdateManyWithoutTenantNestedInput
    documents?: DocumentUpdateManyWithoutTenantNestedInput
    notifications?: NotificationUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutMaintenanceRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoices?: InvoiceUncheckedUpdateManyWithoutTenantNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutTenantNestedInput
    properties?: PropertyUncheckedUpdateManyWithoutTenantsNestedInput
    leaseAgreements?: LeaseAgreementUncheckedUpdateManyWithoutTenantNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutTenantNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type TenantCreateWithoutDocumentsInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    invoices?: InvoiceCreateNestedManyWithoutTenantInput
    payments?: PaymentCreateNestedManyWithoutTenantInput
    properties?: PropertyCreateNestedManyWithoutTenantsInput
    leaseAgreements?: LeaseAgreementCreateNestedManyWithoutTenantInput
    maintenanceRequests?: MaintenanceRequestCreateNestedManyWithoutTenantInput
    notifications?: NotificationCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutDocumentsInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    invoices?: InvoiceUncheckedCreateNestedManyWithoutTenantInput
    payments?: PaymentUncheckedCreateNestedManyWithoutTenantInput
    properties?: PropertyUncheckedCreateNestedManyWithoutTenantsInput
    leaseAgreements?: LeaseAgreementUncheckedCreateNestedManyWithoutTenantInput
    maintenanceRequests?: MaintenanceRequestUncheckedCreateNestedManyWithoutTenantInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutDocumentsInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutDocumentsInput, TenantUncheckedCreateWithoutDocumentsInput>
  }

  export type PropertyCreateWithoutDocumentsInput = {
    id?: string
    address: string
    type: string
    size?: number | null
    bedrooms?: number | null
    bathrooms?: number | null
    amenities?: PropertyCreateamenitiesInput | string[]
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tenants?: TenantCreateNestedManyWithoutPropertiesInput
    invoices?: InvoiceCreateNestedManyWithoutPropertyInput
    maintenanceRequests?: MaintenanceRequestCreateNestedManyWithoutPropertyInput
    leaseAgreements?: LeaseAgreementCreateNestedManyWithoutPropertyInput
    notifications?: NotificationCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutDocumentsInput = {
    id?: string
    address: string
    type: string
    size?: number | null
    bedrooms?: number | null
    bathrooms?: number | null
    amenities?: PropertyCreateamenitiesInput | string[]
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tenants?: TenantUncheckedCreateNestedManyWithoutPropertiesInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutPropertyInput
    maintenanceRequests?: MaintenanceRequestUncheckedCreateNestedManyWithoutPropertyInput
    leaseAgreements?: LeaseAgreementUncheckedCreateNestedManyWithoutPropertyInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutDocumentsInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutDocumentsInput, PropertyUncheckedCreateWithoutDocumentsInput>
  }

  export type TenantUpsertWithoutDocumentsInput = {
    update: XOR<TenantUpdateWithoutDocumentsInput, TenantUncheckedUpdateWithoutDocumentsInput>
    create: XOR<TenantCreateWithoutDocumentsInput, TenantUncheckedCreateWithoutDocumentsInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutDocumentsInput, TenantUncheckedUpdateWithoutDocumentsInput>
  }

  export type TenantUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoices?: InvoiceUpdateManyWithoutTenantNestedInput
    payments?: PaymentUpdateManyWithoutTenantNestedInput
    properties?: PropertyUpdateManyWithoutTenantsNestedInput
    leaseAgreements?: LeaseAgreementUpdateManyWithoutTenantNestedInput
    maintenanceRequests?: MaintenanceRequestUpdateManyWithoutTenantNestedInput
    notifications?: NotificationUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoices?: InvoiceUncheckedUpdateManyWithoutTenantNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutTenantNestedInput
    properties?: PropertyUncheckedUpdateManyWithoutTenantsNestedInput
    leaseAgreements?: LeaseAgreementUncheckedUpdateManyWithoutTenantNestedInput
    maintenanceRequests?: MaintenanceRequestUncheckedUpdateManyWithoutTenantNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type PropertyUpsertWithoutDocumentsInput = {
    update: XOR<PropertyUpdateWithoutDocumentsInput, PropertyUncheckedUpdateWithoutDocumentsInput>
    create: XOR<PropertyCreateWithoutDocumentsInput, PropertyUncheckedCreateWithoutDocumentsInput>
    where?: PropertyWhereInput
  }

  export type PropertyUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: PropertyWhereInput
    data: XOR<PropertyUpdateWithoutDocumentsInput, PropertyUncheckedUpdateWithoutDocumentsInput>
  }

  export type PropertyUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    size?: NullableFloatFieldUpdateOperationsInput | number | null
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableFloatFieldUpdateOperationsInput | number | null
    amenities?: PropertyUpdateamenitiesInput | string[]
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenants?: TenantUpdateManyWithoutPropertiesNestedInput
    invoices?: InvoiceUpdateManyWithoutPropertyNestedInput
    maintenanceRequests?: MaintenanceRequestUpdateManyWithoutPropertyNestedInput
    leaseAgreements?: LeaseAgreementUpdateManyWithoutPropertyNestedInput
    notifications?: NotificationUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    size?: NullableFloatFieldUpdateOperationsInput | number | null
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableFloatFieldUpdateOperationsInput | number | null
    amenities?: PropertyUpdateamenitiesInput | string[]
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenants?: TenantUncheckedUpdateManyWithoutPropertiesNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutPropertyNestedInput
    maintenanceRequests?: MaintenanceRequestUncheckedUpdateManyWithoutPropertyNestedInput
    leaseAgreements?: LeaseAgreementUncheckedUpdateManyWithoutPropertyNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type TenantCreateWithoutNotificationsInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    invoices?: InvoiceCreateNestedManyWithoutTenantInput
    payments?: PaymentCreateNestedManyWithoutTenantInput
    properties?: PropertyCreateNestedManyWithoutTenantsInput
    leaseAgreements?: LeaseAgreementCreateNestedManyWithoutTenantInput
    maintenanceRequests?: MaintenanceRequestCreateNestedManyWithoutTenantInput
    documents?: DocumentCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutNotificationsInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    invoices?: InvoiceUncheckedCreateNestedManyWithoutTenantInput
    payments?: PaymentUncheckedCreateNestedManyWithoutTenantInput
    properties?: PropertyUncheckedCreateNestedManyWithoutTenantsInput
    leaseAgreements?: LeaseAgreementUncheckedCreateNestedManyWithoutTenantInput
    maintenanceRequests?: MaintenanceRequestUncheckedCreateNestedManyWithoutTenantInput
    documents?: DocumentUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutNotificationsInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutNotificationsInput, TenantUncheckedCreateWithoutNotificationsInput>
  }

  export type PropertyCreateWithoutNotificationsInput = {
    id?: string
    address: string
    type: string
    size?: number | null
    bedrooms?: number | null
    bathrooms?: number | null
    amenities?: PropertyCreateamenitiesInput | string[]
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tenants?: TenantCreateNestedManyWithoutPropertiesInput
    invoices?: InvoiceCreateNestedManyWithoutPropertyInput
    maintenanceRequests?: MaintenanceRequestCreateNestedManyWithoutPropertyInput
    documents?: DocumentCreateNestedManyWithoutPropertyInput
    leaseAgreements?: LeaseAgreementCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutNotificationsInput = {
    id?: string
    address: string
    type: string
    size?: number | null
    bedrooms?: number | null
    bathrooms?: number | null
    amenities?: PropertyCreateamenitiesInput | string[]
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tenants?: TenantUncheckedCreateNestedManyWithoutPropertiesInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutPropertyInput
    maintenanceRequests?: MaintenanceRequestUncheckedCreateNestedManyWithoutPropertyInput
    documents?: DocumentUncheckedCreateNestedManyWithoutPropertyInput
    leaseAgreements?: LeaseAgreementUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutNotificationsInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutNotificationsInput, PropertyUncheckedCreateWithoutNotificationsInput>
  }

  export type TenantUpsertWithoutNotificationsInput = {
    update: XOR<TenantUpdateWithoutNotificationsInput, TenantUncheckedUpdateWithoutNotificationsInput>
    create: XOR<TenantCreateWithoutNotificationsInput, TenantUncheckedCreateWithoutNotificationsInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutNotificationsInput, TenantUncheckedUpdateWithoutNotificationsInput>
  }

  export type TenantUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoices?: InvoiceUpdateManyWithoutTenantNestedInput
    payments?: PaymentUpdateManyWithoutTenantNestedInput
    properties?: PropertyUpdateManyWithoutTenantsNestedInput
    leaseAgreements?: LeaseAgreementUpdateManyWithoutTenantNestedInput
    maintenanceRequests?: MaintenanceRequestUpdateManyWithoutTenantNestedInput
    documents?: DocumentUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoices?: InvoiceUncheckedUpdateManyWithoutTenantNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutTenantNestedInput
    properties?: PropertyUncheckedUpdateManyWithoutTenantsNestedInput
    leaseAgreements?: LeaseAgreementUncheckedUpdateManyWithoutTenantNestedInput
    maintenanceRequests?: MaintenanceRequestUncheckedUpdateManyWithoutTenantNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type PropertyUpsertWithoutNotificationsInput = {
    update: XOR<PropertyUpdateWithoutNotificationsInput, PropertyUncheckedUpdateWithoutNotificationsInput>
    create: XOR<PropertyCreateWithoutNotificationsInput, PropertyUncheckedCreateWithoutNotificationsInput>
    where?: PropertyWhereInput
  }

  export type PropertyUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: PropertyWhereInput
    data: XOR<PropertyUpdateWithoutNotificationsInput, PropertyUncheckedUpdateWithoutNotificationsInput>
  }

  export type PropertyUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    size?: NullableFloatFieldUpdateOperationsInput | number | null
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableFloatFieldUpdateOperationsInput | number | null
    amenities?: PropertyUpdateamenitiesInput | string[]
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenants?: TenantUpdateManyWithoutPropertiesNestedInput
    invoices?: InvoiceUpdateManyWithoutPropertyNestedInput
    maintenanceRequests?: MaintenanceRequestUpdateManyWithoutPropertyNestedInput
    documents?: DocumentUpdateManyWithoutPropertyNestedInput
    leaseAgreements?: LeaseAgreementUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    size?: NullableFloatFieldUpdateOperationsInput | number | null
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableFloatFieldUpdateOperationsInput | number | null
    amenities?: PropertyUpdateamenitiesInput | string[]
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenants?: TenantUncheckedUpdateManyWithoutPropertiesNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutPropertyNestedInput
    maintenanceRequests?: MaintenanceRequestUncheckedUpdateManyWithoutPropertyNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutPropertyNestedInput
    leaseAgreements?: LeaseAgreementUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type InvoiceCreateManyTenantInput = {
    id?: string
    propertyId: string
    amount: number
    paidAmount?: number
    dueDate: Date | string
    status?: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateManyTenantInput = {
    id?: string
    invoiceId: string
    amount: number
    status?: string
    paymentDate?: Date | string
    method: string
    reference?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeaseAgreementCreateManyTenantInput = {
    id?: string
    propertyId: string
    startDate: Date | string
    endDate: Date | string
    rentAmount: number
    securityDeposit: number
    terms?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaintenanceRequestCreateManyTenantInput = {
    id?: string
    propertyId: string
    type: string
    priority: string
    status?: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentCreateManyTenantInput = {
    id?: string
    type: string
    filePath: string
    fileName: string
    uploadDate?: Date | string
    status?: string
    propertyId?: string | null
  }

  export type NotificationCreateManyTenantInput = {
    id?: string
    type: string
    message: string
    read?: boolean
    priority?: string
    createdAt?: Date | string
    propertyId?: string | null
  }

  export type InvoiceUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paidAmount?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutInvoicesNestedInput
    payments?: PaymentUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paidAmount?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paidAmount?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoice?: InvoiceUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyUpdateWithoutTenantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    size?: NullableFloatFieldUpdateOperationsInput | number | null
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableFloatFieldUpdateOperationsInput | number | null
    amenities?: PropertyUpdateamenitiesInput | string[]
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoices?: InvoiceUpdateManyWithoutPropertyNestedInput
    maintenanceRequests?: MaintenanceRequestUpdateManyWithoutPropertyNestedInput
    documents?: DocumentUpdateManyWithoutPropertyNestedInput
    leaseAgreements?: LeaseAgreementUpdateManyWithoutPropertyNestedInput
    notifications?: NotificationUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutTenantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    size?: NullableFloatFieldUpdateOperationsInput | number | null
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableFloatFieldUpdateOperationsInput | number | null
    amenities?: PropertyUpdateamenitiesInput | string[]
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoices?: InvoiceUncheckedUpdateManyWithoutPropertyNestedInput
    maintenanceRequests?: MaintenanceRequestUncheckedUpdateManyWithoutPropertyNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutPropertyNestedInput
    leaseAgreements?: LeaseAgreementUncheckedUpdateManyWithoutPropertyNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateManyWithoutTenantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    size?: NullableFloatFieldUpdateOperationsInput | number | null
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableFloatFieldUpdateOperationsInput | number | null
    amenities?: PropertyUpdateamenitiesInput | string[]
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaseAgreementUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    rentAmount?: FloatFieldUpdateOperationsInput | number
    securityDeposit?: FloatFieldUpdateOperationsInput | number
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutLeaseAgreementsNestedInput
  }

  export type LeaseAgreementUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    rentAmount?: FloatFieldUpdateOperationsInput | number
    securityDeposit?: FloatFieldUpdateOperationsInput | number
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaseAgreementUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    rentAmount?: FloatFieldUpdateOperationsInput | number
    securityDeposit?: FloatFieldUpdateOperationsInput | number
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceRequestUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutMaintenanceRequestsNestedInput
  }

  export type MaintenanceRequestUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceRequestUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    uploadDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    property?: PropertyUpdateOneWithoutDocumentsNestedInput
  }

  export type DocumentUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    uploadDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    propertyId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DocumentUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    uploadDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    propertyId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NotificationUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    priority?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    priority?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    propertyId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NotificationUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    priority?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    propertyId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InvoiceCreateManyPropertyInput = {
    id?: string
    tenantId: string
    amount: number
    paidAmount?: number
    dueDate: Date | string
    status?: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaintenanceRequestCreateManyPropertyInput = {
    id?: string
    tenantId: string
    type: string
    priority: string
    status?: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentCreateManyPropertyInput = {
    id?: string
    type: string
    filePath: string
    fileName: string
    uploadDate?: Date | string
    status?: string
    tenantId?: string | null
  }

  export type LeaseAgreementCreateManyPropertyInput = {
    id?: string
    tenantId: string
    startDate: Date | string
    endDate: Date | string
    rentAmount: number
    securityDeposit: number
    terms?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationCreateManyPropertyInput = {
    id?: string
    type: string
    message: string
    read?: boolean
    priority?: string
    createdAt?: Date | string
    tenantId?: string | null
  }

  export type TenantUpdateWithoutPropertiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoices?: InvoiceUpdateManyWithoutTenantNestedInput
    payments?: PaymentUpdateManyWithoutTenantNestedInput
    leaseAgreements?: LeaseAgreementUpdateManyWithoutTenantNestedInput
    maintenanceRequests?: MaintenanceRequestUpdateManyWithoutTenantNestedInput
    documents?: DocumentUpdateManyWithoutTenantNestedInput
    notifications?: NotificationUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutPropertiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoices?: InvoiceUncheckedUpdateManyWithoutTenantNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutTenantNestedInput
    leaseAgreements?: LeaseAgreementUncheckedUpdateManyWithoutTenantNestedInput
    maintenanceRequests?: MaintenanceRequestUncheckedUpdateManyWithoutTenantNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutTenantNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateManyWithoutPropertiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paidAmount?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutInvoicesNestedInput
    payments?: PaymentUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paidAmount?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateManyWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paidAmount?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceRequestUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutMaintenanceRequestsNestedInput
  }

  export type MaintenanceRequestUncheckedUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceRequestUncheckedUpdateManyWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    uploadDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    tenant?: TenantUpdateOneWithoutDocumentsNestedInput
  }

  export type DocumentUncheckedUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    uploadDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    tenantId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DocumentUncheckedUpdateManyWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    uploadDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    tenantId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LeaseAgreementUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    rentAmount?: FloatFieldUpdateOperationsInput | number
    securityDeposit?: FloatFieldUpdateOperationsInput | number
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutLeaseAgreementsNestedInput
  }

  export type LeaseAgreementUncheckedUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    rentAmount?: FloatFieldUpdateOperationsInput | number
    securityDeposit?: FloatFieldUpdateOperationsInput | number
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaseAgreementUncheckedUpdateManyWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    rentAmount?: FloatFieldUpdateOperationsInput | number
    securityDeposit?: FloatFieldUpdateOperationsInput | number
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    priority?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    priority?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NotificationUncheckedUpdateManyWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    priority?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PaymentCreateManyInvoiceInput = {
    id?: string
    tenantId: string
    amount: number
    status?: string
    paymentDate?: Date | string
    method: string
    reference?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
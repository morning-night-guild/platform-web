/**
 * Generated by orval v6.12.1 🍺
 * Do not edit manually.
 * Morning Night Guild - App API
 * This is the AppAPI API documentation.
 * OpenAPI spec version: 0.0.1
 */
import useSwr from 'swr'
import type {
  SWRConfiguration,
  Key
} from 'swr'
import type {
  V1AuthSignUpRequestSchema,
  V1AuthSignInRequestSchema,
  V1AuthVerifyUnauthorizedResponseSchema,
  V1AuthRefreshParams
} from '.././model'
import { customInstance } from '.././client';


  
  // eslint-disable-next-line
  type SecondParameter<T extends (...args: any) => any> = T extends (
  config: any,
  args: infer P,
) => any
  ? P
  : never;

/**
 * ユーザーを登録する
 * @summary サインアップ
 */
export const v1AuthSignUp = (
    v1AuthSignUpRequestSchema: V1AuthSignUpRequestSchema,
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<void>(
      {url: `/v1/auth/signup`, method: 'post',
      headers: {'Content-Type': 'application/json', },
      data: v1AuthSignUpRequestSchema
    },
      options);
    }
  

/**
 * ユーザーを認証する
 * @summary サインイン
 */
export const v1AuthSignIn = (
    v1AuthSignInRequestSchema: V1AuthSignInRequestSchema,
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<void>(
      {url: `/v1/auth/signin`, method: 'post',
      headers: {'Content-Type': 'application/json', },
      data: v1AuthSignInRequestSchema
    },
      options);
    }
  

/**
 * 検証を行う
 * @summary 検証
 */
export const v1AuthVerify = (
    
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<void>(
      {url: `/v1/auth/verify`, method: 'get'
    },
      options);
    }
  

export const getV1AuthVerifyKey = () => [`/v1/auth/verify`];

    
export type V1AuthVerifyQueryResult = NonNullable<Awaited<ReturnType<typeof v1AuthVerify>>>
export type V1AuthVerifyQueryError = V1AuthVerifyUnauthorizedResponseSchema

export const useV1AuthVerify = <TError = V1AuthVerifyUnauthorizedResponseSchema>(
  options?: { swr?:SWRConfiguration<Awaited<ReturnType<typeof v1AuthVerify>>, TError> & { swrKey?: Key, enabled?: boolean }, request?: SecondParameter<typeof customInstance> }

  ) => {

  const {swr: swrOptions, request: requestOptions} = options ?? {}

  const isEnabled = swrOptions?.enabled !== false
    const swrKey = swrOptions?.swrKey ?? (() => isEnabled ? getV1AuthVerifyKey() : null);
  const swrFn = () => v1AuthVerify(requestOptions);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}

/**
 * セッショントークンとクライアント署名によりIDトークンを再発行する
 * @summary リフレッシュ
 */
export const v1AuthRefresh = (
    params: V1AuthRefreshParams,
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<void>(
      {url: `/v1/auth/refresh`, method: 'get',
        params
    },
      options);
    }
  

export const getV1AuthRefreshKey = (params: V1AuthRefreshParams,) => [`/v1/auth/refresh`, ...(params ? [params]: [])];

    
export type V1AuthRefreshQueryResult = NonNullable<Awaited<ReturnType<typeof v1AuthRefresh>>>
export type V1AuthRefreshQueryError = unknown

export const useV1AuthRefresh = <TError = unknown>(
 params: V1AuthRefreshParams, options?: { swr?:SWRConfiguration<Awaited<ReturnType<typeof v1AuthRefresh>>, TError> & { swrKey?: Key, enabled?: boolean }, request?: SecondParameter<typeof customInstance> }

  ) => {

  const {swr: swrOptions, request: requestOptions} = options ?? {}

  const isEnabled = swrOptions?.enabled !== false
    const swrKey = swrOptions?.swrKey ?? (() => isEnabled ? getV1AuthRefreshKey(params) : null);
  const swrFn = () => v1AuthRefresh(params, requestOptions);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}

/**
 * サインアウトする
 * @summary サインアウト
 */
export const v1AuthSignOut = (
    
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<void>(
      {url: `/v1/auth/signout`, method: 'get'
    },
      options);
    }
  

export const getV1AuthSignOutKey = () => [`/v1/auth/signout`];

    
export type V1AuthSignOutQueryResult = NonNullable<Awaited<ReturnType<typeof v1AuthSignOut>>>
export type V1AuthSignOutQueryError = unknown

export const useV1AuthSignOut = <TError = unknown>(
  options?: { swr?:SWRConfiguration<Awaited<ReturnType<typeof v1AuthSignOut>>, TError> & { swrKey?: Key, enabled?: boolean }, request?: SecondParameter<typeof customInstance> }

  ) => {

  const {swr: swrOptions, request: requestOptions} = options ?? {}

  const isEnabled = swrOptions?.enabled !== false
    const swrKey = swrOptions?.swrKey ?? (() => isEnabled ? getV1AuthSignOutKey() : null);
  const swrFn = () => v1AuthSignOut(requestOptions);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}


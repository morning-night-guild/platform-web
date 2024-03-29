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
import { customInstance } from '.././client';


  
  // eslint-disable-next-line
  type SecondParameter<T extends (...args: any) => any> = T extends (
  config: any,
  args: infer P,
) => any
  ? P
  : never;

/**
 * ヘルスチェック
 * @summary apiヘルスチェック
 */
export const v1HealthAPI = (
    
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<void>(
      {url: `/v1/health/api`, method: 'get'
    },
      options);
    }
  

export const getV1HealthAPIKey = () => [`/v1/health/api`];

    
export type V1HealthAPIQueryResult = NonNullable<Awaited<ReturnType<typeof v1HealthAPI>>>
export type V1HealthAPIQueryError = unknown

export const useV1HealthAPI = <TError = unknown>(
  options?: { swr?:SWRConfiguration<Awaited<ReturnType<typeof v1HealthAPI>>, TError> & { swrKey?: Key, enabled?: boolean }, request?: SecondParameter<typeof customInstance> }

  ) => {

  const {swr: swrOptions, request: requestOptions} = options ?? {}

  const isEnabled = swrOptions?.enabled !== false
    const swrKey = swrOptions?.swrKey ?? (() => isEnabled ? getV1HealthAPIKey() : null);
  const swrFn = () => v1HealthAPI(requestOptions);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}

/**
 * ヘルスチェック
 * @summary coreヘルスチェック
 */
export const v1HealthCore = (
    
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<void>(
      {url: `/v1/health/core`, method: 'get'
    },
      options);
    }
  

export const getV1HealthCoreKey = () => [`/v1/health/core`];

    
export type V1HealthCoreQueryResult = NonNullable<Awaited<ReturnType<typeof v1HealthCore>>>
export type V1HealthCoreQueryError = unknown

export const useV1HealthCore = <TError = unknown>(
  options?: { swr?:SWRConfiguration<Awaited<ReturnType<typeof v1HealthCore>>, TError> & { swrKey?: Key, enabled?: boolean }, request?: SecondParameter<typeof customInstance> }

  ) => {

  const {swr: swrOptions, request: requestOptions} = options ?? {}

  const isEnabled = swrOptions?.enabled !== false
    const swrKey = swrOptions?.swrKey ?? (() => isEnabled ? getV1HealthCoreKey() : null);
  const swrFn = () => v1HealthCore(requestOptions);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}


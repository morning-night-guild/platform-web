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
  V1ArticleListResponseSchema,
  V1ArticleListParams,
  V1ArticleShareRequestSchema
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
 * 記事一覧を取得する
 * @summary 記事一覧
 */
export const v1ArticleList = (
    params: V1ArticleListParams,
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<V1ArticleListResponseSchema>(
      {url: `/v1/articles`, method: 'get',
        params
    },
      options);
    }
  

export const getV1ArticleListKey = (params: V1ArticleListParams,) => [`/v1/articles`, ...(params ? [params]: [])];

    
export type V1ArticleListQueryResult = NonNullable<Awaited<ReturnType<typeof v1ArticleList>>>
export type V1ArticleListQueryError = void

export const useV1ArticleList = <TError = void>(
 params: V1ArticleListParams, options?: { swr?:SWRConfiguration<Awaited<ReturnType<typeof v1ArticleList>>, TError> & { swrKey?: Key, enabled?: boolean }, request?: SecondParameter<typeof customInstance> }

  ) => {

  const {swr: swrOptions, request: requestOptions} = options ?? {}

  const isEnabled = swrOptions?.enabled !== false
    const swrKey = swrOptions?.swrKey ?? (() => isEnabled ? getV1ArticleListKey(params) : null);
  const swrFn = () => v1ArticleList(params, requestOptions);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}

/**
 * 記事を共有する
 * @summary 記事共有
 */
export const v1ArticleShare = (
    v1ArticleShareRequestSchema: V1ArticleShareRequestSchema,
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<void>(
      {url: `/v1/articles`, method: 'post',
      headers: {'Content-Type': 'application/json', },
      data: v1ArticleShareRequestSchema
    },
      options);
    }
  


/**
 * Generated by orval v6.12.1 🍺
 * Do not edit manually.
 * Morning Night Dream - AppGateway
 * This is the AppGateway API documentation.
 * OpenAPI spec version: 0.0.1
 */

export type V1AuthSignInBody = {
  /** メールアドレス */
  email: string;
  /** パスワード */
  password: string;
  /** 公開鍵 */
  publicKey: string;
  /** トークン有効期限(秒) */
  expiresIn?: number;
};
/**
 * Class decorator factory for describing a server.
 *
 * ```ts
 * @oa3server({ url: "https://{username}.gigantic-server.com:{port}/{basePath}" })
 * productionServer(){}
 * ```
 *
 * @param config configuration
 */
export function oa3server(config: Oa3serverConfig): any {
  return (target: any) => {};
}

export interface Oa3serverConfig {
  /**
   * LWAN-Mod
   *
   * Server name. This is not going to present in the OAS and is only used for Server lookup.
   */
  name?: string;
  /** Server Url */
  url: string;
}

import { HttpMethod } from "../definitions";

/**
 * Endpoint decorator factory for describing an API.
 *
 * @param config configuration
 * @example
```
@endpoint({
  method: "POST",
  path: "/users",
  tags: ["User"]
})
class CreateUserEndpoint {
  // ...
}
```
 */
export function endpoint(config: EndpointConfig) {
  return (target: any) => {};
}

export interface EndpointConfig {
  /** HTTP method */
  method: HttpMethod;
  /** URL path */
  path: string;
  /**
   * LWAN-Mod
   *
   * Server name, must points to one of the Server object defined using the @oa3server decorator.
   * Used for specifying the Oa3Server in the Endpoint (a Spot internal model) in the src/definition.ts and ServerObject
   * lookup during document generation, not an information that's going to present in the generated document.
   */
  server?: string;
  /** Endpoint grouping tags */
  tags?: string[];
  /**
   * LWAN-Mod
   *
   * Specification Extension, because the practice of how the Spot syntax are mapped to the OAS that its author decided,
   * it's hard to come up with a universal and reusable practice for mapping extensions.
   */
  [ key: string ]: any;
}

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
  /** Server name, must points to one of a Server defined using @oa3server. This is not going to present in the OAS and is only used for Server lookup. */
  server?: string;
  /** Endpoint grouping tags */
  tags?: string[];
}

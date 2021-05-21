/// <reference types="chai" />
declare global {
    namespace Chai {
        interface Assertion {
            /**
             * Check the HTTP response object satisfies a response defined in your OpenAPI spec.
             * [See usage example](https://github.com/openapi-library/OpenAPIValidators/tree/master/packages/chai-openapi-response-validator#in-api-tests-validate-the-status-and-body-of-http-responses-against-your-openapi-spec)
             */
            satisfyApiSpec: Assertion;
            /**
             * Check the object satisfies a schema defined in your OpenAPI spec.
             * [See usage example](https://github.com/openapi-library/OpenAPIValidators/tree/master/packages/chai-openapi-response-validator#in-unit-tests-validate-objects-against-schemas-defined-in-your-openapi-spec)
             */
            satisfySchemaInApiSpec(schemaName: string): Assertion;
        }
    }
}
export default function (filepathOrObject: string | object): Chai.ChaiPlugin;
//# sourceMappingURL=index.d.ts.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
function default_1(chai, openApiSpec) {
    const { Assertion, AssertionError } = chai;
    Assertion.addMethod('satisfySchemaInApiSpec', function (schemaName) {
        const actualObject = this._obj; // eslint-disable-line no-underscore-dangle
        const schema = openApiSpec.getSchemaObject(schemaName);
        if (!schema) {
            // alert users they are misusing this assertion
            throw new AssertionError('The argument to satisfySchemaInApiSpec must match a schema in your API spec');
        }
        const validationError = openApiSpec.validateObject(actualObject, schema);
        const predicate = !validationError;
        this.assert(predicate, getExpectReceivedToSatisfySchemaInApiSpecMsg(actualObject, schemaName, schema, validationError), getExpectReceivedNotToSatisfySchemaInApiSpecMsg(actualObject, schemaName, schema));
    });
}
exports.default = default_1;
function getExpectReceivedToSatisfySchemaInApiSpecMsg(actualObject, schemaName, schema, validationError) {
    return utils_1.joinWithNewLines(`expected object to satisfy the '${schemaName}' schema defined in your API spec`, `object did not satisfy it because: ${validationError}`, `object was: ${utils_1.stringify(actualObject)}`, `The '${schemaName}' schema in API spec: ${utils_1.stringify(schema)}`);
}
function getExpectReceivedNotToSatisfySchemaInApiSpecMsg(actualObject, schemaName, schema) {
    return utils_1.joinWithNewLines(`expected object not to satisfy the '${schemaName}' schema defined in your API spec`, `object was: ${utils_1.stringify(actualObject)}`, `The '${schemaName}' schema in API spec: ${utils_1.stringify(schema)}`);
}
//# sourceMappingURL=satisfySchemaInApiSpec.js.map
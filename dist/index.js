"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const openapi_validator_1 = require("@bfreuden/openapi-validator");
const satisfyApiSpec_1 = __importDefault(require("./assertions/satisfyApiSpec"));
const satisfySchemaInApiSpec_1 = __importDefault(require("./assertions/satisfySchemaInApiSpec"));
function default_1(filepathOrObject) {
    const openApiSpec = openapi_validator_1.makeApiSpec(filepathOrObject);
    return function (chai) {
        satisfyApiSpec_1.default(chai, openApiSpec);
        satisfySchemaInApiSpec_1.default(chai, openApiSpec);
    };
}
exports.default = default_1;
//# sourceMappingURL=index.js.map
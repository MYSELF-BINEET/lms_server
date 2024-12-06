"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.redis = void 0;
const ioredis_1 = __importDefault(require("ioredis"));
exports.redis = new ioredis_1.default("rediss://default:AXV8AAIjcDE4YzdkMzczMzM0N2I0YTE1YjA0MTM3NzEwYWIyNGYzM3AxMA@refined-louse-30076.upstash.io:6379");

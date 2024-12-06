"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatchAsyncError = void 0;
const CatchAsyncError = (theFunc) => (req, res, next) => {
    Promise.resolve(theFunc(req, res, next)).catch((err) => {
        if (!res.headersSent) {
            return next(err);
        }
    });
};
exports.CatchAsyncError = CatchAsyncError;

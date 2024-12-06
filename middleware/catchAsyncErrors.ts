import { NextFunction, Request, Response } from "express";

export const CatchAsyncError =
  (theFunc: any) => (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(theFunc(req, res, next)).catch((err)=>{
      if(!res.headersSent){
        return next(err);
      }
    });
  };


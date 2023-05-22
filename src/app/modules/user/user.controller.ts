import { createUserToDB } from './user.service';
import { Request, Response, NextFunction } from 'express';


export const createUser= async (req: Request, res: Response, next: NextFunction) => {

    const user= await createUserToDB()

    res.status(200).json({
        status: 'Success',
        data: user
    })
};
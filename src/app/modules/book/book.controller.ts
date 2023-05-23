import { getUsersFromDB, getSciFiBooksFromDB, updateFeaturedBooksInDB, UpdatePriceFromDB } from './book.service';
import { Request, Response, NextFunction } from 'express';


export const getUsers = async (req: Request, res: Response, next: NextFunction) => {

    const user = await getUsersFromDB()

    res.status(200).json({
        status: 'Success',
        data: user,
    })
};

export const getSciFiBooks = async (req: Request, res: Response, next: NextFunction) => {

    const user = await getSciFiBooksFromDB()

    res.status(200).json({
        status: 'Success',
        data: user,
    })
};

export const getFeaturedBooks = async (req: Request, res: Response, next: NextFunction) => {

    const user = await updateFeaturedBooksInDB()

    res.status(200).json({
        status: 'Success',
        data: user,
    })
};

export const updatePrice = async (req: Request, res: Response, next: NextFunction) => {

    const user = await UpdatePriceFromDB()

    res.status(200).json({
        status: 'Success',
        data: user,
    })
};







import { Request, Response, NextFunction } from 'express';
import * as userService from '../services/user.service';

export const getAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await userService.findUsers();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};

export const getOneByEmail = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const email = req.params.email as string;
    const user = await userService.findUserByEmail(email);
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

export const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json({ status: true, data: user });
  } catch (err) {
    next(err);
  }
};

export const update = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const username = req.params.username as string;
    const user = await userService.updateUser(username, req.body);
    if (!user) {
      res.status(404).json({ status: false, message: 'User not found' });
      return;
    }
    res.status(200).json({ status: true, data: user });
  } catch (err) {
    next(err);
  }
};
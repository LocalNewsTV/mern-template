/**
 * @summary Health Endpoint Controller for Applications API
 * @author  LocalNewsTV
 */
import { Request, Response } from 'express';

export const getHealth = async (req: Request, res: Response) => (
  res.status(200).send('API is healthy and ready')
);

export default getHealth;

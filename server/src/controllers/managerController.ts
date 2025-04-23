import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getManager = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { cognitoId } = req.params;
    const manager = await prisma.manager.findUnique({
      where: { cognitoId },
      //   include: {
      //     favorites: true,
      //   },
    });

    if (manager) {
      res.json(manager);
    } else {
      res.status(404).json({ message: "Manager not found" });
    }
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error retrieving Manager:${error.message}` });
  }
};

export const createManager = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { cognitoId, name, email, phoneNumber } = req.body;
    const tenant = await prisma.manager.create({
      data: { cognitoId, name, email, phoneNumber },
    });
    res
      .status(201)
      .json({ message: `Manager successfully created: ${tenant}` });
  } catch (error: any) {
    res.status(500).json({ message: `Error creating tenant:${error.message}` });
  }
};

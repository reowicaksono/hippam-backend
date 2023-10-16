import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getUser = async () => {
    try {
        const tests = await prisma.user.findMany();
        return tests;
    } catch (error) {
        throw new Error("Failed to fetch test data: " + error.message);
    } finally {
        await prisma.$disconnect(); 
    }
};
const postUser = async (postData) => {
    try {
      const result = await prisma.user.create({
        data: postData,
      });
      return result;
    } catch (error) {
      throw new Error("Failed to create test data: " + error.message);
    }
  };
  
  const putUser = async (id, updatedData) => {
    try {
      const result = await prisma.user.update({
        where: {
          id: id,
        },
        data: updatedData,
      });
      return result;
    } catch (error) {
      throw new Error("Failed to update test data: " + error.message);
    }
  };
  
  export default {
    getUser,
    postUser,
    putUser
  };
  
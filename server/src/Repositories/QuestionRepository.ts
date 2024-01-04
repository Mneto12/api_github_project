// import { Question } from "../Interfaces/Question";

// const getQuestions = async (skip: number, take: number): Promise<Questions[]> => {
//     const prisma = new PrismaClient();
//     try {
//         const questions = await prisma.questions.findMany({
//             skip: skip,
//             take: take,
//         })
//         return questions
//     } catch (e) {
//         console.error(e);
//         prisma.$disconnect();
//         throw e;
//     }
// }

// const getQuestionById = async (id: string): Promise<Questions | null> => {
//     const prisma = new PrismaClient();
//     try {
//         const question = await prisma.questions.findUnique({
//             where: {
//                 id: id
//             }
//         })
//         return question
//     } catch (e) {
//         console.error(e);
//         prisma.$disconnect();
//         throw e;
//     }
// }

// const createQuestion = async (question: Question): Promise<Question> => {
//     const prisma = new PrismaClient();
//     try {
//         const data = await prisma.questions.create({
//             data: question
//         })
//         return data
//     } catch (e) {
//         console.error(e);
//         prisma.$disconnect();
//         throw e;
//     }
// }

// const updateQuestion = async (id: string, question: Partial<Questions>): Promise<Questions> => {
//     const prisma = new PrismaClient();
//     try {
//         const questionCheck = await prisma.questions.findUnique({where: {id: id}});
//         if (!questionCheck) throw new Error('Question not found')

//         const updatedQuestion = await prisma.questions.update({
//             where: {
//                 id: id
//             },
//             data: question
//         })
//         return updatedQuestion
//     } catch (e) {
//         console.error(e);
//         prisma.$disconnect();
//         throw e;
//     }
// }

// const deleteQuestion = async (id: string): Promise<void> => {
//     const prisma = new PrismaClient();
//     try {
//         const question = await prisma.questions.findUnique({where: {id: id}});
//         if (!question) throw new Error('Question not found')

//         await prisma.questions.delete({where: {id: id}});
//     } catch (e) {
//         console.error(e);
//         prisma.$disconnect();
//         throw e;    
//     }
// }

// export default module.exports = {
//     createQuestion,
//     getQuestionById,
//     deleteQuestion,
//     updateQuestion,
//     getQuestions,
// }
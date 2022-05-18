import express from 'express';
import { NodemailerAdapter } from './adapters/nodemailer/nodemailer-mail-adapter';
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repository';
import { SubmiteFeedbacksUseCase } from './use-cases/submite-feedback-use-case';

export const routes = express.Router()



routes.post('/feedbacks', async (req, res) => {
    const {type, comment, screenshot } = req.body;

    const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
    const nodemailerAdapter = new NodemailerAdapter()

    const submitFeedbackUseCase = new SubmiteFeedbacksUseCase(
        prismaFeedbacksRepository,
        nodemailerAdapter
    )

    await submitFeedbackUseCase.execute({
        type,
        comment,
        screenshot,
    } )

    return res.status(201).send()
});

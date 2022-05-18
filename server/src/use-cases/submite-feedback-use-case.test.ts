import { SubmiteFeedbacksUseCase } from "./submite-feedback-use-case";

const createFeedbacjSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmiteFeedbacksUseCase(
    { create: async() => {} },
    { sendMail: async() => {} },
)

describe('Submit feedback', () => {
    it('should be able to submit a feedback', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'Exemple comment',
            screenshot: 'data:image/png;base64',
        })).resolves.not.toThrow();

        expect(createFeedbacjSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();
    });
    

    it('should not be able to submit feedback without type', async () => {
        await expect(submitFeedback.execute({
            type: '',
            comment: 'Exemple comment',
            screenshot: 'data:image/png;base64',
        })).rejects.toThrow();
    });
    it('should not be able to submit feedback without comment', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: '',
            screenshot: 'data:image/png;base64',
        })).rejects.toThrow();
    });
    it('should not be able to submit feedback with an invalid screenshot', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'Ta tudo bugado',
            screenshot: '123',
        })).rejects.toThrow();
    });
});

//Para testar se está tudo ok basta rodar 'npm run test'
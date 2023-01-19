/* eslint-disable prettier/prettier */
export class ErrorHandler{
    public readonly error: string;
    public readonly statusCode: number;

    constructor(error: string, status: number) {
        this.error = error;
        this.statusCode = status;
    }

}

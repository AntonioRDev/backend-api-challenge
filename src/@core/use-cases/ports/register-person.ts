export interface IRegisterPersonUseCase {
    execute(name: string): Promise<void>;
}
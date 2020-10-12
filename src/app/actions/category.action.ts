import { Category } from '../model';

export class AddCategory {
    static readonly type = '[Budgets] AddCategory';

    constructor(public payload: Category) { }
}

export class DeleteCategory {
    static readonly type = '[Budgets] DeleteCategory';

    constructor(public id: string) { }
}
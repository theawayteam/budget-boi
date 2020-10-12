import { State, Action, Selector, StateContext } from '@ngxs/store';
import { Category } from '../model';
import { AddCategory, DeleteCategory } from '../actions';


export class CategoryStateModel {
    categories: Category[];
}

@State<CategoryStateModel>({
    name: 'category',
    defaults: {
        categories: [
          new Category({
            isMaster: true,
            name: 'House',
            id: 'house-master',
            childrenCategories: [
              'house-child-mortgage',
              'house-child-needs',
              'house-child-6-month',
              'house-child-emergency',
              'house-child-hoa',
              'house-child-services'
            ]
          }),
          new Category({
            id: 'house-child-mortgage',
            name: 'Mortgage',
            masterCategoryId: 'house-master'
          }),
          new Category({
            id: 'house-child-needs',
            masterCategoryId: 'house-mortgage',
            name: 'Needs'
          }),
          new Category({
            id: 'house-child-6-month',
            masterCategoryId: 'house-master',
            name: '6 month payments'
          }),
          new Category({
            id: 'house-child-emergency',
            masterCategoryId: 'house-master',
            name: 'Emergency Fund'
          }),
          new Category({
            id: 'house-child-services',
            masterCategoryId: 'house-master',
            name: 'Services'
          }),
          new Category({
            id: 'house-child-hoa',
            masterCategoryId: 'house-master',
            name: 'HOA'
          })
        ]
    }
})

export class CategoryState {

    // Get all categories
    @Selector() static getCategories(state: CategoryStateModel) {
        return state.categories;
    }

    // Add a category
    @Action(AddCategory)
    add(context: StateContext<CategoryStateModel>, action: AddCategory) {
        const state = context.getState();
        context.patchState({
            categories: [...state.categories, action.payload]
        });
    }

    // Delete a category
    @Action(DeleteCategory)
    delete(context: StateContext<CategoryStateModel>, action: DeleteCategory) {
        const state = context.getState();
        context.patchState({
            categories: state.categories.filter(({ id }) => id !== action.id)
        });
    }
}
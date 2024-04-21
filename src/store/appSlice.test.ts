import categoryReducer, {getTitle, selectedCategory} from './appSlice';

const initialState = {id: '', title: 'Next to Go'};
describe('categorySlice', () => {
  describe('actions', () => {
    it('should return the current title from the state', () => {
      const newState = categoryReducer(initialState, getTitle());
      expect(newState.title).toBe('Next to Go');
    });

    it('should update the categoryId in the state', () => {
      const newCategoryId = '12345';
      const newState = categoryReducer(
        initialState,
        selectedCategory(newCategoryId),
      );
      expect(newState.id).toBe(newCategoryId);
    });
  });
});

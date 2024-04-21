import {CategoryProps} from '../interfaces/categories';

export const categories: CategoryProps[] = [
  {id: '', label: 'All'},
  {id: '4a2788f8-e825-4d36-9894-efd4baf1cfae', label: 'Horse'},
  {id: '161d9be2-e909-4326-8c2c-35ed71fb460b', label: 'Harness'},
  {id: '9daef0d7-bf3c-4f50-921d-8e818c60fe61', label: 'Greyhound'},
];

export function findLabelById(id: string): string | undefined {
  const category = categories.find(c => c.id === id);
  return category?.label;
}

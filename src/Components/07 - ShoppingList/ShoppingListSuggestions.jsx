import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addItem } from './ShoppingLIstReducer';

const sampleSuggestions = [
  { id: 1, name: 'Fresh vegetables' },
  { id: 2, name: 'Lean protein sources' },
  { id: 3, name: 'Whole grains' },
  { id: 4, name: 'Healthy fats' },
  { id: 5, name: 'Fruits and berries' },
];

export default function ShoppingListSuggestions() {
  const shoppingList = useSelector(state => state.shoppingList);
  const dispatch = useDispatch();

  useEffect(() => {
    sampleSuggestions.forEach(suggestion => {
      dispatch(addItem(suggestion));
    });
  }, [dispatch]);

  return (
    <div>
      <h2>Shopping List Suggestions</h2>
      <ul>
        {shoppingList.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

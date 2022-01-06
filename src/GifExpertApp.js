import React, {useState} from 'react';
import { Addcategory } from './components/Addcategory';
import { GifGrid } from './components/GifGrid';

export default function GifExpertApp() {
  const [categories, setCategories] = useState(['One Punch'])
/*   const handleAdd = () => {
    setCategories([...categories, 'safira'])
    console.log(categories)
  } */
  return (
    <>
      <h2>Title</h2>
      <Addcategory setCategories ={setCategories}/>
      <ol>
        {
          categories.map(cat => 
            <GifGrid 
            key={cat}
            category={cat}
            />
            )
        }
      </ol>
    </>
  )
}

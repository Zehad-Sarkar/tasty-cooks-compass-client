import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CategoriesList = () => {
  const [list, setList] = useState([]);
 
   useEffect(() => {
     const loadAllData = async () => {
       try {
         const jsonData =
           `https://tasty-cookes-compass-server-zehad-sarkar.vercel.app/list`;
         const res = await fetch(jsonData);
         const data = await res.json();
         setList(data);
       } catch (error) {
         console.log(error);
       }
     };
     loadAllData();
   }, []);
  return (
    <div>
      <h1 className='text-2xl font-bold'>Categories</h1>
      {
        list.map((l) => <Link key={l.id} to={`/list/${l.id}`} className='grid'>{l.name}</Link>)
      }
    </div>
  );
};

export default CategoriesList;
import React from 'react'
import Like from './Like';

export const PortFolio = () => {
    const [items, setItems] = useState([]);
    const userId = userId; // এখানে ইউজারের ID সংগ্রহ করার উপায়
  
    useEffect(() => {
      const fetchItems = async () => {
        try {
          const response = await axios.get('http://localhost:5000/api/items');
          setItems(response.data);
        } catch (error) {
          console.error('Error fetching items', error);
        }
      };
      fetchItems();
    }, []);
  return (
    <div> <div>
    <h1>My Portfolio</h1>
    {items.map(item => (
      <Like key={item._id} item={item} userId={userId} />
    ))}
  </div></div>
  )
}

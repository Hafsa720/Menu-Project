import { useState } from 'react'
import Title from './Title'
import Menu from './Menu'
import menu from './data'
import Categories from './Categories'
const App = () => {
  //const tempCatogeries = menu.map((item) => item.category)
  //const setCatogories = new Set(tempCatogeries)
  //const tempItems = ['all', ...setCatogories]
  ////console.log(tempItems)

  const allCtogeries = ['all', ...new Set(menu.map((item) => item.category))]
  //console.log(allCtogeries)

  const [menuItems, setMenuItems] = useState(menu)
  const [categories, setCatogories] = useState(allCtogeries)
  const filterItems = (category) => {
    console.log(category)
    if (category === 'all') {
      setMenuItems(menu)
      return
    }
    const newItems = menu.filter((item) => item.category === category)
    setMenuItems(newItems)
  }
  return (
    <main>
      <section className='menu'>
        <Title text='our Menu' />
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  )
}
export default App

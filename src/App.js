import './scss/main.scss' // base styles

import Header from './components/header/Header'
import ItemListContainer from './components/product/ItemListContainer'

const App = () => {
    return (
        <>
            <Header />
            <main className='l-main'>
                <ItemListContainer greeting="greeting message" />
            </main>
        </>
    );
}

export default App
import React from 'react';
import './App.css';
import {Card} from "./components/card/card";

export interface Data {
    id: number,
    image: string,
    title: string,
    descr: string,
    price: number
}

const data:Data[] = [
    {
        id: 1,
        image: '/images/toy-1.PNG',
        title: 'Игрушка-дразнилка "Мышь"',
        descr: 'Пушистая серая мышка на удочке не оставит равнодушным вашего любимца',
        price: 200
    },
    {
        id: 2,
        image: '/images/toy-2.PNG',
        title: 'Игрушка-дразнилка "Перышко"',
        descr: 'Перышко на удочке - точно заинтересует кошку',
        price: 200
    },
    {
        id: 3,
        image: '/images/toy-3.PNG',
        title: 'Лазерная указка',
        descr: 'Указка с пятью видами рисунка, зарядка от USB',
        price: 200
    },
    {
        id: 4,
        image: '/images/toy-4.PNG',
        title: 'Дразнилка "Ленточки"',
        descr: 'Цветные ленточки на удочке',
        price: 200
    },
    {
        id: 5,
        image: '/images/toy-5.PNG',
        title: 'Игрушка "Пружинки"',
        descr: 'Должно быть что-то интересное',
        price: 200
    },
    {
        id: 6,
        image: '/images/toy-6.PNG',
        title: 'Игрушка "Горки"',
        descr: 'Ваш питомец точно заинтересуется',
        price: 200
    }
]

function App() {
  return (
    <div className={'product-list'} >
        {
            data.map((item)=>{
                return <Card item = {item} key = {item.id}/>
            })
        }
    </div>
  );
}

export default App;

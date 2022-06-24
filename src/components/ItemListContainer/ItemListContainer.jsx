import React, {useEffect, useState} from 'react';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css'
import Item from '../item/Item';

export default function ItemListContainer({ greeting }) {
  const [productlist, setProductlist] = useState([])

useEffect(() => {
  let products = [
    {id: "GTX 1650", title: "NOTEBOOK GAMER GM-15Z11", price: 279000, pictureURL: "https://bangho.vtexassets.com/arquivos/ids/160991-300-300?v=637844465547500000&width=300&height=300&aspect=true"},
    {id: "X4 I7", title: "NOTEBOOK BES", price: 259000, pictureURL: "https://bangho.vtexassets.com/arquivos/ids/160312-300-300?v=637722719177170000&width=300&height=300&aspect=true"},
    {id: "T5 I5", title: "NOTEBOOK BES PRO", price: 219000, pictureURL: "https://bangho.vtexassets.com/arquivos/ids/160179-300-300?v=637698345071870000&width=300&height=300&aspect=true"}
  ];
  new Promise((resolve, reject) => {
    setTimeout(() =>{
      resolve(products)
    }, 2000)
  }).then((res) => {
    setProductlist(res)
  })
}, [])

  return (
    <>
    <span className="item-container">{greeting}</span>
    <ItemList productlist={productlist}/>
    </>
  )
}

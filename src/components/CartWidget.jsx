import { Icon } from '@chakra-ui/react'
import React from 'react'

export default function CartWidget({cant}) {
  return (
    <div>
        {cant}<ion-icon name="cart-outline"></ion-icon>
    </div>
  )
}

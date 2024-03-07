import { Schema, model } from 'mongoose'
//solo guarda el ID producto con referencia ref del producto
const cartSchema = new Schema({
    products: {
        type: [
           {
            id_prod: {
                type: Schema.Types.ObjectId,
                required: true,
                ref: 'products'        
            },
            quantity: {
                type: Number,
                required: true
            }
        }
    ],
    default: [] //array arranca vacio
   }
})

const cartModel = model("carts", cartSchema) 

export default cartModel
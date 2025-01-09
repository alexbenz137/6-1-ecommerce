//    ! const express = require('express')
const server = require('./app')
const mongoose = require('mongoose')

async function main() {
    try {
        //nos conectamos a la base de datos
        await mongoose.connect("mongodb+srv://alexisbenitez173:alfabetagama@cluster0.sl6oq.mongodb.net/ecommerce")
        console.log(`CONEXION A LA DB CORRECTA`)

        //Ponemos nuestro servidor express a escuchar
        server.listen(3000, () => {
            console.log('Server is running at port 3000')
        })
    } catch (error) {
        console.log(error)
    }
}

main()



const http=require(`http`);
http.createServer((req,res)=>{
    /*json
    res.writeHead(200,{`Content-Type`:`application/json`});
    let salida={
        nombre: `anderson`,
        edad: 25,
        url: req.url
    }
    res.write(JSON.stringify(salida));
    */
    //pagina web
    res.write(`hola mundo`);
    res.end();
}).listen(8080);


console.log(`escuchando puerto 8080`);
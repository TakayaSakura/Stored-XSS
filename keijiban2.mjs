import http from 'http';
import fetch from "node-fetch";

http.createServer(async(req,res) =>{
    
    // const kekka = await fetch('http://10.1.188.1:5000');
    // const result = await kekka.json();
    // console.log(result);

    let data = {
        comment : " "
    };

    res.end(`<!DOCTYPE html>
        <html lang = "ja">
        <head>
        <meta charset = "UTF-8">
        <title>掲示板</title>
        </head>
        <body>
        <h1>掲示板</h1>
        <section>
            <h2>新規投稿</h2>
            <form action = "http://10.1.188.1:5000" method = "post">
                <label for = "name">コメントを残す（１００文字以内）：</label>
                <input type = "text" name = "comment" value = "">
                <input type = "submit" value = "投稿">
            </form>
        </section>
        </body>
        </html>`)
    
    fetch('http://10.1.188.1:5000',{
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}).listen(8000);
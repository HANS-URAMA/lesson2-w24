let http = require('http');
let fs = require('fs');
let axios = require('axios');


http.createServer(async(req, res) => {
    switch(req.url){
        case '/css/bootstrap.min.css':
            fs.readFile('css/bootstrap.min.css', 'utf8', async(err, styles) => {
                res.write(styles);
                res.end();
            });
            break;
        default:
            fs.readFile('index.html', 'utf8', async (err, htmlContents) => {
                if(err){
                    console.log(err);
                }
                else{
                    res.write(htmlContents);

                    
                    // Making an API call with axios and writing the result to the response
                    try {
                        let apiResponse = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
                        let apiData = apiResponse.data;

                        // Writing an <h2> tag to the response
                        res.write('<h2>Sample API Data</h2>');

                        // Writing apiData to the response using JSON.stringify()
                        res.write(JSON.stringify(apiData));

                        res.end();
                    } catch (apiError) {
                        console.error(apiError);
                        res.statusCode = 500;
                        res.end('Internal Server Error');
                    }
                }
            });
    }
}).listen(3000);
    
import dotenv from 'dotenv';

dotenv.config();

export default ( name, address, email, message, date) =>{

    const template = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://fonts.googleapis.com/css?family=Karla|Lato|Nunito|Raleway|Rubik&display=swap" rel="stylesheet">
        <script src="https://kit.fontawesome.com/da7b84dcbd.js" crossorigin="anonymous"></script>
        <title>Document</title>
        <style>
            *{
                margin: 0;
                padding: 0;
            }
            .temp{
                font-family: lato,'Segoe UI', Tahoma, Geneva, Verdana, sans-serif ;
                font-size: 18px;
            }
            .background{
                height: 35vh;
                background-color: #0A71C6;
                text-align: center;
                padding-top: 4vh;
                }
            .all{
                position: relative;
                padding: 10px;
                text-align: center;
            }    
            #logo{
                    border-radius: 50%;
                    border: 2px solid white;
                }
            .logo p{
                    margin-top: 10vh;
                }
            h2{
                    color: white;
                    margin-top: 4vh;
                    
                }
            table{
                    line-height: 2;
                }
            .content{
                font-size: 16px;
                padding: 10px;
                line-height: 1.7;
            }
            .details{
                line-height: 1.5;
                margin-top: 3vh;
            }
            .det{
                text-align: center;
            }
            .td{
                padding-right: 20px;
                width: 100%;
            }
    
        </style>
    </head>
    <body >
        <div class="temp">
            <div class="background">
                <div class="logo">
                    <img id="logo" src="https://lh3.googleusercontent.com/-yrWBbaCqp38/XxQBKDmkmJI/AAAAAAAAABI/8lHvUGRM_XsgF0ovLKFtvQ1ZjDAIH8uXwCEwYBhgLKtMDAL1OcqzyeLNjkITgF01_w1Mmx1sCMh8iOewDynr-u2sCmXK9yCn3EmrnIWUcLhoZ00hefsj-hIqRe37if6KtgyLcvNFldr2lJNsD6APIp_p68bq2p-vtg9vYGiijUY1X1QIjzaD38ju1KUgsEEuMNhdw-cOOIFxcrDFjWPfq9dGrJGPiEj6l-WErJOPSf8wgv80t8P949C_ugdsiar2wDfgSadiSfZes8NtgMuGBhUcmDna3m-NSpvoo7pww292QMhm3p08zWIOeTK53EdWeg0RmafIfj9-3To2XHi_D6qLmBZnEQy2lEM1g_0XZq8owBHb9UHiC9ex5LsitPiBZZ7yzhVh3Zxmm1xJiQWPizCzNkSy-wh91Cmx79Z6igpQfksOjqVS4o0CWX-2ofKOMhKiQyiisz9Qvgi_Gem8Kzqdu-L6ojBblWkGr7bXdq6_uTXkrfZz6orlBhX1G7yUIkwnRBmZ9D6rSygZz194xIbwl-p4Q1omjm1AJ3h5ociYooLVVRWDKHj0RCYs3tr-J_eL6XW4e-24MxhQH_Q5wl_Vl8E4_Ih4iZn3ghPrWHludOnQzZoC4_TW3-_qWBFh2WNBEIJO1Bz9gt51PGao89UdXiRQwnYfQ-AU/w140-h140-p/favicon2.png" alt="logo">
                    <h2>📬 New Email From ${name}</h2> 
                    
                </div>
            </div>
            <div class="all">
                   <p >✌✌✌Hello @irfiacre you received an message from ${name} from ${address} on your portfolio</p>
                    <div class="details">
                        <h3>Message Details:</h3>
                        <div class="det">
                            <p><b>👨‍⚖️ Name: </b> <span> ${name}</span></p> 
                            <p><b>🏙  Address: </b> <span> ${address}</span></p> 
                            <p><b>📧 Email: </b> <span> ${email}</span></p> 
                            <p><b>💬 Message: </b> <span> "${message}"</span></p> 
                        </div>
                    </div>
                    
                    <div class="content">    
                        <p> 
                        </p><br>
                        <hr>
                        <p> That is all about the message Have a nice day.</p>
                        <p id="date" style="font-size: 14px;">
                            🕒${date}
                        </p>
                    </div>
            </div>
            
    
        </div> 
    </body>
    </html>`;

    return template;
}

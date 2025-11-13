import express from 'express';
import cors from 'cors';
import Parser from 'rss-parser';


const app = express();
const parser = new Parser();


app.use(cors({
    origin: 'http://localhost:5173',
    credentials:true,
}));

app.get('/',(_req,res)=>{
    res.send("hello world");
})
let data:Object[];

async function fetchFeed() {
    try {
        const feed = await parser.parseURL('https://www.youtube.com/feeds/videos.xml?channel_id=UCvQECJukTDE2i6aCoMnS-Vg');
        console.log(typeof(feed));
        data=feed.items;
        console.log(data);
    } catch (error) {
        console.error('Error fetching feed:', error);
    }
}

fetchFeed();
app.get('/feed',(_req,res)=>{
   res.send(data);
})
app.listen(3000);


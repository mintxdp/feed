import List from "./List";

const data = await fetch('http://localhost:3000/feed')

const data2 = await data.json();
console.log(data2);


export default function ContentBox() {
    return (
    <main className="content-box flex-col h-auto">
            <div className="topBar bg-black-500 h-[3rem]">
                <h1>Top Bar</h1>
            </div>
            <div className="feedContainer">
                <List items={data2} />
            </div>
        </main>
    )
}
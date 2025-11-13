type ListProps = {
    items: [
        {
            title:string,
            link:string,
            author:string,
            id?:string,
            isoDate?:string,
            pubDate?:string,

        }
    ]
}

export default function List({ items }: ListProps) {
    return (
        <div className="list flex flex-col align-center">
                {items.map((item) => (
                    <div className="w-full flex flex-row border-b-[1px]">
                        <p className="font-thin font-sm">{item.pubDate?.split("-",2).join("-").concat("-").concat(item.pubDate?.split("-")[2].substring(0,2))}</p>
                        <p className="font-thin font-sm">{item.title}</p>
                        <a href={item.link} className="text-blue-600 hover:text-blue-800 hover:underline transition duration-200>Explore">{item.author}</a>
                        {/* <p>{item.author}</p> */}
                    </div>
                ))}
        </div>
    )
}
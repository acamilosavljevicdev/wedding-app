import { useEffect, useState } from "react"

export function Gallery() {
    const [items, setItems] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3001/images")
            .then(res => res.json())
            .then(data => {
                console.log('data',data);
                
                setItems(data)});
    }, [])

    return (<div className="gallery">
        {items?.map((item, index) => (item.type === 'image' ? 
            <img key={index} src={item.url} alt="" /> : <video
          src={item.url}
          controls
          style={{ width: "100%", borderRadius: "10px" }}
        />))}
    </div>)
}
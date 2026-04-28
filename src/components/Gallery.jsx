import { useEffect, useState } from "react"
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

export default function Gallery() {
    const [items, setItems] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3001/images")
            .then(res => res.json())
            .then(data => {
                const items = data
                    .filter(item => item.type === "image")
                    .map(item => ({
                        src: item.url,
                    }));

                setItems(items)
            });
    }, [])

    return (items &&
        <div className="flex flex-col w-full justify-center items-center relative"><RowsPhotoAlbum
            onClick={(image) => {
                setSelectedImage(image.photo.src);
            }}
            photos={items}
            spacing={20}
            componentsProps={{ container: { style: { height: '100%', margin: 20, padding: 20, backgroundColor: '#121212', border: '2px', borderRadius: '8px' } }, image: { style: { padding: 10, background: '#FFFFFF', borderRadius: '8px' } } }}

        />
            {selectedImage && <div className="flex flex-col w-fit h-fit absolute bg-blue-500 p-3">
                <div className="flex flex-col w-full h-full relative">
                    <p className="right-4 top-2 cursor-pointer text-white absolute hover:font-bold" onClick={() => setSelectedImage(null)}>X</p>
                    <img className="max-h-[400px] max-w-[300px]" src={selectedImage} alt="" />
                </div>
            </div>}
        </div>

    )
}
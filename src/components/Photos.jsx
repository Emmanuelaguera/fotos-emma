import { useEffect, useState } from "react"

export const Photos = () => {
    const [photos, setPhotos] = useState([])

    const fechPhotos = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/photos')
            const data = await response.json()
            setPhotos(data)

        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        fechPhotos()
    }, [])

    return (
        <>
            <div>photos</div>
            <ul>
                {photos.map(photos => <li key={Photos.id}>{photos.title}</li>)}
            </ul>
        </>
    )
}






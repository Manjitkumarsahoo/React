import React, { useEffect, useState } from "react";

export default function Task9() {
    const [photos, setPhotos] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    // Function to fetch photos
    const fetchPhotos = async () => {
        if (loading) return;
        setLoading(true);
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=20&_page=${page}`);
            const data = await response.json();
            setPhotos((prev) => [...prev, ...data]); // Append new photos
            setLoading(false);
        } catch (error) {
            console.error("Error fetching photos:", error);
            setLoading(false);
        }
    };

    // Fetch photos when the page number changes
    useEffect(() => {
        fetchPhotos();
    }, [page]);

    // Infinite scroll function
    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
                setPage((prev) => prev + 1); // Load next set of photos
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h1>📷 Infinite Scroll Photo Gallery</h1>
            <div style={{ 
                display: "grid", 
                gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", 
                gap: "10px" 
            }}>
                {photos.map((photo) => (
                    <div key={photo.id} style={{ border: "1px solid #ddd", padding: "10px" }}>
                        <img src={photo.thumbnailUrl} alt={photo.title} style={{ width: "100%", height: "150px", objectFit: "cover" }} />
                        <p>{photo.title}</p>
                    </div>
                ))}
            </div>
            {loading && <h3>Loading more photos...</h3>}
        </div>
    );
}
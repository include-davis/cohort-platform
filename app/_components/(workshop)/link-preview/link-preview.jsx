import { getLinkPreviewObj } from './getLinkPreviewObj'
import { useState, useEffect } from "react"
import styles from './link-preview.module.scss'
import Image from "next/image"

export default function LinkPreview({ title, description, link, theme }){
    const [previewImglink, setPreviewImglink] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchPreview() {
            setLoading(true)
            if (link == "") {
                return
            }
            try {
                const previewData = await getLinkPreviewObj(link);
                if (!previewData.hasOwnProperty("error") && previewData.images.length > 0) {
                    setPreviewImglink(previewData.images[0])
                }
                else {
                    throw new TypeError(previewData.error);
                }
                
                setLoading(false)
            } catch (error) {
                console.error("Error fetching link preview:", error)
                
                setPreviewImglink("/images/filler.png")
                setLoading(false)
            }
        }

        fetchPreview()
    }, [link])

    return(
        <a href={link} target="_blank">
            <div className={`${theme=="light" ? styles.container_light : styles.container_dark}`}>
                <p className={`${theme=="light" ? styles.title_light : styles.title_dark}`}>{title}</p>
                {theme=="dark" &&
                    <p className={styles.description}>{description}</p>
                }
                {loading ? 
                    <div className={styles.loader} />
                    :
                    <div className={styles.img_wrapper}>
                        <Image src={previewImglink} alt="slides-preview" fill={true}/>
                    </div>
                }
            </div>
        </a>
    )

}
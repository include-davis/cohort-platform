export function QuickLinkCard({ image, title }){
    return(
        <div>
            <img src={image} alt={image}/>
            <p>{title}</p>
            <button>View More →</button>
        </div>
    );
}
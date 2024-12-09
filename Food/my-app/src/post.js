export default function Post({postImage,postTitle,postParagraph, postPrice}) {
    return (
        <div style={{
            width: "60%",
            // border: "5px solid teal",
            margin: "10px auto",
            textAlign: "center",
        }}>
            <img src={postImage} alt=""/>
            <h2>{postTitle}</h2>
            <p>{postParagraph}</p>
            <h3>{postPrice}</h3>
        </div>
    )
}
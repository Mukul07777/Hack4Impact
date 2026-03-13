const Avatar = ({text}) => {

    return(
        <div style={{
            background:"#222",
            color:"white",
            padding:"15px",
            borderRadius:"10px",
            marginBottom:"20px"
        }}>
            🤖 {text}
        </div>
    )

}

export default Avatar
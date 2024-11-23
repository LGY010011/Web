const Button = ({ onClick, content}) => {
    return (
      <button  style={{
        backgroundColor: 'white',
        color:"#006400",
        borderRadius:'4px',
        border:"0.5px solid #006400",
        width:'50px',
        height:'30px',
        }}
        onClick={onClick}
      >
        {content}
      </button>
    );
  };
  
  export default Button;
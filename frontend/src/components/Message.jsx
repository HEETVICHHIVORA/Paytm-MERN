export const Message = ({value,confirmation}) => { 
    const messageStyle = {
        color: value === "1" ? "green" : "red",
      };
      return (
        <div className="flex justify-center" style={messageStyle}>
          <p>{confirmation}</p>
        </div>
      );
}
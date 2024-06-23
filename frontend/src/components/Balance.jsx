
export const Balance = ({ value }) => {
   
    return <div className=" my-6 mx-2 flex">
        <div className="font-bold ml-6 text-lg">
            Your balance is
        </div>
        <div className="font-semibold ml-4 text-lg">
            Rs {value}
        </div>
    </div>
}
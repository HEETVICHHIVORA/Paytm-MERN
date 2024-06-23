import { useSearchParams } from "react-router-dom";
export const Appbar = () => { 
   const[searchParams]=useSearchParams();

   const name = searchParams.get("name");
    return <div className="shadow h-14 flex justify-between">
    <div className="font-bold flex flex-col justify-center h-full ml-4">PayTm</div>
    <div className="flex">
        <div className="flex flex-col justify-center h-full mr-4">
             {name.toLocaleUpperCase()}
        </div>
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                   {name[0].toLocaleUpperCase()}
                </div>
            </div>
    </div>

  </div>
}
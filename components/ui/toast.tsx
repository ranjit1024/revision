import {ShieldAlert} from "lucide-react"
interface ErrorToastProps {
  message?: string;
  visible: boolean;
  onClose?: () => void;
  duration?: number;
}
const ErrorToast = () => {
  

  return (
    <div className="fixed  top-13 z-100 min-w-md flex gap-2 bg-linear-180 from-white to-white rounded-lg flex-col  shadow shadow-neutral-300  border-b-2 border-b-rose-300 py-2 right-2 ">
        <div className="flex gap-2 px-2  items-center-safe">

            <div className=" px-[5px] py-[4px] rounded-full bg-red-100/80">
                <ShieldAlert className="text-red-500" size={20}/>
                </div>
            <p className="text-shadow-red-500 text-zinc-800 font-medium text-[16px] ">Invalid input</p>

        </div>
        <p className="pl-11 text-sm font-medium text-red-500">kindly enter correct input</p>
   </div>
  );
};

export default ErrorToast;

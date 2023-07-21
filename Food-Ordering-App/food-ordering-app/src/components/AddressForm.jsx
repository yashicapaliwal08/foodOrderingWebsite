import {useForm} from "react-hook-form";
import Button from "./elements/Button";
import { ReactComponent as ArrowRightSvg } from "../assets/icons/arrow-right-long-svgrepo-com.svg";
import { useDispatch } from "react-redux";
import { setAddress } from "../stores/userinfo/addressSlice";

export const AddressForm=({onTabSwitch})=>{
    const {register,handleSubmit ,formState:{errors}}=useForm();// register would save values that are used inside the form 
    //register would save the information like address
    const dispatch=useDispatch();
    //it will get all the data
    const onSubmit=(data)=>{//dispatch the data the you have
        dispatch(setAddress(data));
        onTabSwitch('Payment');
    }
    // handleSubmit(onSubmit) pass all the data collected and stored in the form and access the data inside function
    return (
        <form className="md:2/3 md:mx-auto px-3 pt-1" onSubmit={handleSubmit(onSubmit)}>
            <h3 className="pt-4 text-2xl md:text-center">Address for the delivery</h3>
            <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700" for="streetAddress">
                    Street Address
                </label>
                <input {...register('address',{required:true})} className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="street address" type="text" placeholder="Street Address"/>
                {errors.address  && <span className="text-red-500">   This field is required</span>}
            </div>
            <div className="mb-4 md:flex md:justify-between">
                <div className="mb-4 md:mr-2 md:mb-0 flex-1">
                    <label className="block mb-2 text-sm font-bold text-sm font-bold text-gray-700" for="city">City</label>
                    <input {...register('city')} className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="city" type="text" placeholder="City"/>
                </div>
                <div className="mb-4 md:mr-2 md:mb-0 flex-1">
                    <label className="block mb-2 text-sm font-bold text-sm font-bold text-gray-700" city="state">State</label>
                    <input {...register('state')} className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="state" type="text" placeholder="State"/>
                </div>
            </div>
            <div className="mb-4 md:flex md:justify-between">
                <div className="mb-4 md:mr-2 md:mb-0 flex-1">
                    <label className="block mb-2 text-sm font-bold text-sm font-bold text-gray-700" state="country">Country</label>
                    <input {...register('country')} className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="country" type="text" placeholder="Country"/>
                </div>
                <div className="mb-4 md:mr-2 md:mb-0 flex-1">
                    <label className="block mb-2 text-sm font-bold text-sm font-bold text-gray-700" for="postalCode">Postal Code</label>
                    <input {...register('postalCode')} className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="postalCode" type="text" placeholder="Postal Code"/>
                </div>
            </div>
            <div className="flex justify-end p-2">
                <Button variant="dark" className="flex items-center" type="submit"><span className="mr-1">Next</span><ArrowRightSvg/></Button>
            </div>
        </form>
    )
}
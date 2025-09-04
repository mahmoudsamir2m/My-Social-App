import { Input } from "@heroui/react";


export default function AppInput({ label, icon, type, placeholder, isInvalid, errorMessage ,register }) {
    return (
        <div className="group">
            <label className="block text-sm font-semibold text-gray-800 mb-1">
                {label}
            </label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 row pointer-events-none">
                    {icon}
                </div>
                <Input
                    isInvalid={isInvalid}
                    errorMessage={errorMessage}
                    className="input"
                    type={type}
                    placeholder={placeholder}
                    variant="bordered"
                    {...register}
                />
            </div>
        </div>
    )
}

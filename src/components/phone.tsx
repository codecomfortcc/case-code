import { darkPhoneTemplate, lightPhoneTemplate } from "@/app/utils/images";
import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import { HTMLAttributes } from "react";
interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
  imageSrc: StaticImageData | string;
  dark?: boolean;
  className?: string;
}
const Phone = ({ className, imageSrc, dark = false, ...props }: PhoneProps) => {
  return (
    <div
      className={cn(
        "relative pointer-events-none z-50 overflow-hidden",
        className
      )}
      {...props}
    >
      <Image
        className="pointer-events-none z-10 select-none"
        src={dark ? darkPhoneTemplate : lightPhoneTemplate}
        alt="phone-template"
      />
      <div className="absolute -z-10 inset-0">
        {typeof imageSrc === "string" ? (
          <>
          
            <img
              className="object-cover"
              src={imageSrc}
              alt="overlaying-phone"
            />{console.log(typeof imageSrc )}
          </>
        ) : (
          <Image
            className="object-cover"
            src={imageSrc}
            alt="overlaying-phone"
          />
        )}
      </div>
    </div>
  );
};
export default Phone;

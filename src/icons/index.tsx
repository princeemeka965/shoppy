import Image from "next/image";

export const LogoIcon = () => (
  <div className="flex flex-col justify-center">
    <Image
      src="/logo-symbol.png"
      width={24}
      height={24}
      style={{
        height: "24px",
        objectFit: "contain",
      }}
      alt="_logo"
    />
  </div>
);

export const ProfileIcon = () => (
  <div className="flex flex-col justify-center">
    <Image
      src="/profile.png"
      width={15}
      height={15}
      style={{
        height: "15px",
        objectFit: "contain",
      }}
      alt="_logo"
    />
  </div>
);

export const MessageIcon = () => (
  <div className="flex flex-col justify-center">
    <Image
      src="/messages.png"
      width={15}
      height={15}
      style={{
        height: "15px",
        objectFit: "contain",
      }}
      alt="_logo"
    />
  </div>
);

export const OrderIcon = () => (
  <div className="flex flex-col justify-center">
    <Image
      src="/orders.png"
      width={15}
      height={15}
      style={{
        height: "15px",
        objectFit: "contain",
      }}
      alt="_logo"
    />
  </div>
);

export const CartIcon = () => (
  <div className="flex flex-col justify-center">
    <Image
      src="/cart.png"
      width={15}
      height={15}
      style={{
        height: "15px",
        objectFit: "contain",
      }}
      alt="_logo"
    />
  </div>
);

export const AvatarIcon = () => (
  <div className="flex flex-col justify-center">
    <Image
      src="/Avatar.png"
      width={40}
      height={40}
      style={{
        height: "40px",
        objectFit: "contain",
      }}
      alt="_logo"
    />
  </div>
);

export const FilterIcon = () => (
  <div className="flex flex-col justify-center">
    <Image
      src="/filter_alt.png"
      width={15}
      height={15}
      style={{
        height: "15px",
        objectFit: "contain",
      }}
      alt="_logo"
    />
  </div>
);

export const WatchIcon = (props: any) => (
  <div className="flex flex-col justify-center">
    <Image
      src="/watch.png"
      width={props.size ? props.size : 140}
      height={props.size ? props.size : 140}
      style={{
        height: `${props.size ? props.size : 140}px`,
        objectFit: "contain",
      }}
      alt="_watch"
    />
  </div>
);

export const LaptopIcon = (props: any) => (
  <div className="flex flex-col justify-center">
    <Image
      src="/laptop.png"
      width={props.size ? props.size : 140}
      height={props.size ? props.size : 140}
      style={{
        height: `${props.size ? props.size : 140}px`,
        objectFit: "contain",
      }}
      alt="_laptop"
    />
  </div>
);

export const CameraIcon = (props: any) => (
  <div className="flex flex-col justify-center">
    <Image
      src="/camera.png"
      width={props.size ? props.size : 140}
      height={props.size ? props.size : 140}
      style={{
        height: `${props.size ? props.size : 140}px`,
        objectFit: "contain",
      }}
      alt="_watch"
    />
  </div>
);

export const HeadPhoneIcon = (props: any) => (
  <div className="flex flex-col justify-center">
    <Image
      src="/headPhone.png"
      width={props.size ? props.size : 140}
      height={props.size ? props.size : 140}
      style={{
        height: `${props.size ? props.size : 140}px`,
        objectFit: "contain",
      }}
      alt="_watch"
    />
  </div>
);

export const PhoneIcon = (props: any) => (
  <div className="flex flex-col justify-center">
    <Image
      src="/phone.png"
      width={props.size ? props.size : 140}
      height={props.size ? props.size : 140}
      style={{
        height: `${props.size ? props.size : 140}px`,
        objectFit: "contain",
      }}
      alt="_watch"
    />
  </div>
);

export const IndustryIcon = () => (
  <>
    <Image
      alt="IndustryIcon"
      src={"/industry_hubs.png"}
      priority
      quality={100}
      fill
      sizes="100%"
      style={{
        objectFit: "cover",
      }}
    />
  </>
);

export const CustomizeProductsIcon = () => (
  <>
    <Image
      alt="ProductsIcon"
      src={"/customize_products.png"}
      priority
      quality={100}
      fill
      sizes="100%"
      style={{
        objectFit: "cover",
      }}
    />
  </>
);

export const ShippingIcon = () => (
  <>
    <Image
      alt="shippingIcon"
      src={"/shipping.png"}
      priority
      quality={100}
      fill
      sizes="100%"
      style={{
        objectFit: "cover",
      }}
    />
  </>
);

export const InspectionIcon = () => (
  <>
    <Image
      alt="inspectionIcon"
      src={"/inspection_hub.png"}
      priority
      quality={100}
      fill
      sizes="100%"
      style={{
        objectFit: "cover",
      }}
    />
  </>
);

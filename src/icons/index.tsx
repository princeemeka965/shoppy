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

import Image from "next/image";

export default function BuyMeCoffeeButton() {
  return (
    <a href="https://www.buymeacoffee.com/fkoschi" target="_blank">
      <Image
        src="https://cdn.buymeacoffee.com/buttons/v2/default-red.png"
        alt="Buy Me A Coffee"
        height={60}
        width={217}
      />
    </a>
  );
}

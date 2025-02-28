import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";


type Props = {
  href: string;
  label: string;
  isActive?: boolean;
};

export const NavButton = ({
  href,
  label,
  isActive,
}: Props) => {
  return (
    <Button
      asChild
      size="sm"
      variant="outline"
      className={cn(
        "w-full lg:w-auto justify-between font-normal hover:bg-blue-950/60 hover:text-black border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-blue-900 focus:bg-white/30 transition",
        isActive ? "bg-blue-950/60 text-black" : "bg-transparent",
      )}
    >
      <Link href={href}>
        {label}
      </Link>
    </Button>
  );
};

import { AuthHeader, PreviewHeader, UserHeader } from "@/lib/enums";
import { TAuthHeader, TPreviewHeader, TUserHeader } from "@/lib/types";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";

type Props = {
  type: "Auth" | "preview" | "user";
};

export const Header = ({ type }: Props) => {
  const [headerData, setHeaderData] = useState<
    TPreviewHeader | TAuthHeader | TUserHeader | null
  >(null);

  useEffect(() => {
    if (type === "Auth") setHeaderData(AuthHeader);
    else if (type === "preview") setHeaderData(PreviewHeader);
    else if (type === "user") setHeaderData(UserHeader);
  }, [type]);

  const renderHeader = () => {
    if (headerData) {
      return Object.values(headerData).map((headerItem, index, array) => {
        let variant:
          | "link"
          | "default"
          | "destructive"
          | "outline"
          | "secondary"
          | "ghost"
          | null = "link";

        if (type === "Auth") {
          variant = "default";
        } else if (type === "preview" && index === array.length - 1) {
          variant = "default";
        } else if (type === "user" && index === 1) {
          variant = "default";
        }

        return (
          <Button variant={variant} className="mr-5" key={headerItem}>
            <span
              style={{
                fontWeight: 400,
                fontSize: 16,
              }}
            ></span>
            {headerItem}
          </Button>
        );
      });
    }
    return null;
  };

  return (
    <div className="flex py-3 items-center px-24 bg-white shadow-xl">
      <span
        style={{
          fontFamily: "Montserrat Alternates",
          fontSize: 32,
          fontWeight: 400,
        }}
      >
        ArtLife
      </span>
      <div className="ml-auto">{renderHeader()}</div>
    </div>
  );
};

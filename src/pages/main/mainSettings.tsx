import { Input } from "@/components/ui/input";

import i1 from "../../assets/Group 32.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import useMainSettingsStore from "@/store/mainSettings.store";

const MainSettings = () => {
  const [name, setName] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [icon, setIcon] = useState<string>("");
  const [isIcon, setIsIcon] = useState<boolean>(false);

  const { setSettingsData } = useMainSettingsStore();

  const AppName = (e: any) => setName(e.target.value);
  const AppTitle = (e: any) => setTitle(e.target.value);

  const saveSettings = () => {
    setSettingsData(name, title, icon, isIcon);
  };

  return (
    <div className="flex flex-col gap-5">
      <span
        style={{
          fontWeight: 600,
          fontSize: 30,
        }}
      >
        Основные настройки
      </span>
      <span
        style={{
          fontWeight: 400,
          fontSize: 16,
        }}
      >
        Название приложения
      </span>
      <Input value={name} onChange={e => AppName(e)} />
      <span
        style={{
          fontWeight: 400,
          fontSize: 16,
        }}
      >
        Заголовок приложения
      </span>
      <Input value={title} onChange={e => AppTitle(e)} />
      <span
        style={{
          fontWeight: 400,
          fontSize: 16,
        }}
      >
        Заголовок приложения
      </span>
      <Input
        type="file"
        className="flex justify-center items-center w-[150px] h-[150px] border-none outline-none"
        alt=""
        src=""
      >
        <img src={i1} />
      </Input>
      <div className="flex gap-3 justify-center items-center">
        <Input
          type="checkbox"
          defaultChecked={isIcon}
          onClick={() => setIsIcon(prev => !prev)}
          style={{
            width: 19,
            height: 19,
          }}
        />
        <span
          style={{
            fontWeight: 400,
            fontSize: 16,
          }}
        >
          Возможность показывать иконку в шапке (галочка)
        </span>
      </div>
      <Button className="bg-[#10C3EB] w-32" onClick={saveSettings}>
        <Link to={"/main/3"}>
          <span
            style={{
              fontWeight: 400,
              fontSize: 16,
            }}
          >
            Далее
          </span>
        </Link>
      </Button>
    </div>
  );
};

export default MainSettings;

import { Input } from "@/components/ui/input";

import i1 from "../../assets/Group 32.png";
import { Button } from "@/components/ui/button";

const AppTheme = () => {
  return (
    <div className="flex flex-col justify-center gap-5">
      <span
        style={{
          fontWeight: 600,
          fontSize: 30,
        }}
      >
        Настройки внешнего вида
      </span>
      <span
        style={{
          fontWeight: 400,
          fontSize: 16,
        }}
      >
        Цвет шапки
      </span>
      <Input />
      <span
        style={{
          fontWeight: 400,
          fontSize: 16,
        }}
      >
        Цвет текста в шапке
      </span>
      <Input />
      <div className="flex gap-3 items-center">
        <Input
          type="checkbox"
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
          Убрать шапку
        </span>
      </div>
      <span
        style={{
          fontWeight: 400,
          fontSize: 16,
        }}
      >
        Цвет фона приложения
      </span>
      <Input />

      <span
        style={{
          fontWeight: 400,
          fontSize: 16,
        }}
      >
        Картинка фона
      </span>
      <input
        type="image"
        className="flex justify-center items-center w-[150px] h-[150px] border-none"
        style={{
          backgroundImage: `url(${i1})`,
          outline: "none",
        }}
      />

      <div className="flex gap-3 justify-center items-center">
        <Input
          type="checkbox"
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
          Добавить поиск (по наполнению приложения)
        </span>
      </div>
      <Button className="bg-[#10C3EB] w-32">
        <span
          style={{
            fontWeight: 400,
            fontSize: 16,
          }}
        >
          Далее
        </span>
      </Button>
    </div>
  );
};

export default AppTheme;

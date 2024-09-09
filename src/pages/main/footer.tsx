import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const FooterStttings = () => {
  return (
    <div className="flex flex-col gap-5">
      <span
        style={{
          fontWeight: 600,
          fontSize: 30,
        }}
      >
        Настройки нижней панели
      </span>

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
          Убрать нижнюю панель
        </span>
      </div>

      <span
        style={{
          fontWeight: 400,
          fontSize: 16,
        }}
      >
        Цвет панели
      </span>
      <Input />

      <span
        style={{
          fontWeight: 400,
          fontSize: 16,
        }}
      >
        Цвет иконок и текста
      </span>
      <Input />
      <span
        style={{
          fontWeight: 600,
          fontSize: 20,
        }}
      >
        Кнопки
      </span>

      <div className="flex flex-col gap-3 bg-white p-5 rounded-3xl">

        <div className="flex border border-b-2 border-x-0 border-t-0 pb-3 items-center">
          <span style={{
            fontWeight: 400,
            fontSize: 16,
          }}>Кнопка телефон</span>

          <Button variant={"ghost"} className="h-[24px] w-[24px] flex justify-center items-center">
            <span style={{
              fontWeight: 600,
              fontSize: 30,
            }}>+</span>
          </Button>
        </div>

        <div className="flex flex-col gap-3">

          <span style={{
            fontWeight: 400,
            fontSize: 16,
          }}>
            Тип кнопки
          </span>
          <Input />

          <span style={{
            fontWeight: 400,
            fontSize: 16,
          }}>
            Телефон
          </span>
          <Input />
          <span style={{
            fontWeight: 400,
            fontSize: 11,
          }}>
          По этому телефону с Вами смогут связаться, нажав данную кнопку и перейдя в приложение
          </span>

          <span style={{
            fontWeight: 400,
            fontSize: 16,
          }}>
            Подпись
          </span>
          <Input />

        </div>
      </div>

      <Button className="bg-[#10C3EB] w-32">
        <Link to={'/main/6'}>
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

export default FooterStttings;

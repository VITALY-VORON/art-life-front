import { Button } from "../ui/button";

const Go = () => {
  return (
    <div className="flex flex-col bg-black text-white items-center gap-10 p-24">
      <span
        style={{
          fontWeight: 800,
          fontSize: 30,
        }}
      >
        Давайте начнём
      </span>
      <span
        style={{
          fontWeight: 700,
          fontSize: 64,
        }}
      >
        Трансформируйте свой бизнес
        <p>с помощью настраиваемого</p>
        <p>мобильного приложения</p>
      </span>
      <span
        style={{
          fontWeight: 400,
          fontSize: 32,
        }}
      >
        Благодаря нашим инновационным шаблонам приложений
        <p>и исключительному обслуживанию клиентов мы можем</p>
        <p>помочь вам преобразовать ваш бизнес с помощью </p>
        <p>настраиваемого мобильного приложения.</p>
      </span>
      <Button className="bg-[#10C3EB] p-8 rounded-3xl">
        <span
          style={{
            fontWeight: 400,
            fontSize: 30,
          }}
        >
          Создать приложение
        </span>
      </Button>
    </div>
  );
};

export default Go;

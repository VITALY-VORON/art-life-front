import { Button } from "../ui/button";
import image from "../../assets/Group 3.png";

const Create = () => {
  return (
    <div className="flex flex-col p-12 pt-0">
      <div
        className="flex flex-col gap-3 p-6 h-[644px] rounded-3xl w-full"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div>
          <span style={{
            fontWeight: 600,
            fontSize: 80
          }}>Создай своё</span>
          <div>
            <p style={{
            fontWeight: 600,
            fontSize: 80
          }}>приложение</p>
            <p style={{
            fontWeight: 600,
            fontSize: 80
          }}>с ArtLife</p>
          </div>
        </div>
        <div>
          <span style={{
            fontWeight: 400,
            fontSize: 26
          }}>Лучшее решение без кода для создания</span>
          <p style={{
            fontWeight: 400,
            fontSize: 26
          }}>мобильного приложения</p>
        </div>
        <Button className="max-w-xs py-10 px-52 rounded-3xl"><span style={{
            fontWeight: 400,
            fontSize: 30
          }}>Создать приложение</span></Button>
      </div>
      <div className="flex justify-center w-full mt-24">
        <div><span style={{
            fontWeight: 600,
            fontSize: 26
          }}>Создано при поддержке Фонда содействия инновациям</span></div>
      </div>
    </div>
  );
};

export default Create;
